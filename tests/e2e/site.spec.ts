import { expect, test } from "@playwright/test";

declare global {
  interface Window {
    __coreWebVitals?: { lcp: number; cls: number };
  }
}

const publicRoutes = [
  "/",
  "/about",
  "/csr",
  "/explore-timber",
  "/get-a-quote",
  "/asthetic-timber",
  "/asthetic-timber/doors",
  "/structural-timber",
  "/structural-timber/size-conversions",
];

const reservedRoutes = ["/login", "/register", "/cart", "/checkout"];

test("all public routes render successfully", async ({ page }) => {
  for (const route of publicRoutes) {
    const response = await page.goto(route);

    expect(response?.status(), `${route} should return HTTP 200`).toBe(200);
    await expect(
      page.locator("main"),
      `${route} should render a main region`,
    ).toBeVisible();
    await expect(page).not.toHaveTitle("");
  }
});

test("reserved future portal and checkout routes remain unavailable", async ({
  page,
}) => {
  for (const route of reservedRoutes) {
    const response = await page.goto(route);

    expect(response?.status(), `${route} should remain unavailable`).toBe(404);
  }
});

test("robots and sitemap are served with the canonical enquiry route", async ({
  request,
}) => {
  const [robots, sitemap] = await Promise.all([
    request.get("/robots.txt"),
    request.get("/sitemap.xml"),
  ]);
  const sitemapBody = await sitemap.text();

  expect(robots.status()).toBe(200);
  expect(sitemap.status()).toBe(200);
  expect(sitemapBody).toContain("https://reeldon.co.zw/get-a-quote");
  expect(sitemapBody).not.toContain("https://reeldon.co.zw/contact");
});

test("contact redirects to the single quote page and preserves product selection", async ({
  page,
}) => {
  const redirectResponse = await page.request.get("/contact", {
    maxRedirects: 0,
  });

  expect(redirectResponse.status()).toBe(308);
  expect(redirectResponse.headers().location).toBe("/get-a-quote");

  await page.goto("/contact");

  await expect(page).toHaveURL(/\/get-a-quote$/);
  await expect(
    page.getByRole("heading", { name: "Have a project in mind?" }),
  ).toBeVisible();
  await expect(page.locator("form")).toHaveCount(1);

  await page.goto("/get-a-quote?product=Decking");

  await expect(page.getByLabel("Product")).toHaveValue("Decking");
  await expect(page.getByRole("heading", { name: "Decking" })).toBeVisible();
});

test("quote form validates required fields and clearly reports demo-only submission", async ({
  page,
}) => {
  await page.goto("/get-a-quote");

  const form = page.locator("form");
  await expect(form).toHaveCount(1);
  await form.getByRole("button", { name: "Request a Quote" }).click();
  await expect(form).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Demo submission complete." }),
  ).toHaveCount(0);

  await page.getByLabel("Name", { exact: true }).fill("Test Customer");
  await page.getByLabel("Phone", { exact: true }).fill("+263 771 234 567");
  await page.getByLabel("Project details").fill("Automated test enquiry");
  await form.getByRole("button", { name: "Request a Quote" }).click();

  await expect(
    page.getByRole("heading", { name: "Demo submission complete." }),
  ).toBeVisible();
  await expect(page.getByText("No request was sent.")).toBeVisible();
});

test("quote page fits mobile viewport without horizontal overflow", async ({
  page,
}) => {
  await page.goto("/get-a-quote");

  for (const width of [375, 768, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    const dimensions = await page.evaluate(() => ({
      viewport: document.documentElement.clientWidth,
      document: document.documentElement.scrollWidth,
    }));

    expect(dimensions.document).toBeLessThanOrEqual(dimensions.viewport);
  }
});

test("quote page meets lab LCP and CLS budgets", async ({ page }) => {
  await page.addInitScript(() => {
    const values = { lcp: 0, cls: 0 };
    Object.defineProperty(window, "__coreWebVitals", { value: values });

    new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        values.lcp = entry.startTime;
      }
    }).observe({ type: "largest-contentful-paint", buffered: true });

    new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        const layoutShift = entry as PerformanceEntry & {
          hadRecentInput: boolean;
          value: number;
        };
        if (!layoutShift.hadRecentInput) {
          values.cls += layoutShift.value;
        }
      }
    }).observe({ type: "layout-shift", buffered: true });
  });

  await page.goto("/get-a-quote");
  await page.waitForLoadState("networkidle");
  await page.waitForTimeout(250);

  const metrics = await page.evaluate(() => {
    return window.__coreWebVitals;
  });

  expect(metrics).toBeDefined();
  expect(metrics?.lcp).toBeGreaterThan(0);
  expect(metrics?.lcp).toBeLessThanOrEqual(2500);
  expect(metrics?.cls).toBeLessThanOrEqual(0.1);
});

test("production quote page stays within basic navigation performance budgets", async ({
  page,
}) => {
  const navigationStart = Date.now();
  await page.goto("/get-a-quote", { waitUntil: "domcontentloaded" });
  const elapsed = Date.now() - navigationStart;
  const timing = await page.evaluate(() => {
    const navigation = performance.getEntriesByType(
      "navigation",
    )[0] as PerformanceNavigationTiming;

    return {
      ttfb: navigation.responseStart - navigation.requestStart,
      domContentLoaded: navigation.domContentLoadedEventEnd,
    };
  });

  expect(timing.ttfb).toBeLessThan(1500);
  expect(timing.domContentLoaded).toBeLessThan(4000);
  expect(elapsed).toBeLessThan(5000);
});
