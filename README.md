# Reeldon Timbers — Next.js 16 Starter

Modern App Router implementation for Reeldon Timbers using Next.js 16, React 19, TypeScript, Tailwind CSS v4, Lenis and lucide-react.

## Run

Requires Node 20.9+; Node 22 LTS recommended.

```bash
npm install
npm run dev
```

Open http://localhost:3000

Production checks:

```bash
npm run typecheck
npm run build
npm run start
```

## Architecture

- `app/layout.tsx` owns global metadata, JSON-LD, Navbar, Footer and smooth-scroll provider.
- `components/` is feature-driven: `home`, `layout`, `products`, `quote`, `shared`, `ui`.
- `lib/metadata.ts` centralizes SEO and structured data.
- `lib/constants.ts` holds navigation, product and conversion data.
- Product actions route to `/get-a-quote?product=...`.
- `/login`, `/register`, `/cart`, `/checkout` are frontend-ready placeholders for future auth/e-commerce integration.

## Images

The included SVGs are placeholders so the app runs immediately. Replace them with licensed Reeldon photography:

```text
public/images/hero-timber.svg
public/images/structural-timber.svg
public/images/mouldings.svg
public/images/doors.svg
public/images/decking.svg
public/images/timber-process.svg
```

For production, use real WebP/AVIF/JPEG assets and update the filenames in the components/data.

## Contact and quote enquiries

`/contact` redirects to `/get-a-quote`, where the site has one enquiry form alongside Reeldon's direct phone, email, WhatsApp and address details. Product links can pre-select a product with `/get-a-quote?product=Decking`.

The form is currently a UI demo and does not send enquiries. Before launch:

1. Choose where enquiries should go: a CRM, a server endpoint you control, or an email delivery provider. The displayed sales address is `sales@reeldon.co.zw`; confirm it is the intended recipient.
2. Set up the provider, verify the sender domain/address, and obtain its API credentials.
3. Store credentials in server-only environment variables (for local development, `.env.local`; add the same variables in the hosting provider). Never put secrets in `NEXT_PUBLIC_*` variables or Client Components.
4. Replace the simulated submit in `components/quote/QuoteForm.tsx` with a request to a Next.js Route Handler (`app/api/.../route.ts`) or Server Action. Validate and normalize all fields on the server, then send/store the enquiry and return success only after delivery/storage succeeds.
5. Add rate limiting and spam protection, handle provider failures visibly, and test delivery in staging. Collect only the personal information you need and publish the relevant privacy notice.

Recommended flow:

`QuoteForm -> Server Action/Route Handler -> server-side validation -> CRM/database and/or email provider -> honest success/error response`

## Browser checks and performance

Run the production-browser checks with:

```bash
npx playwright install chromium
npm run test:e2e
```

Playwright builds and starts the production app. The checks cover route rendering, `/contact` redirection, product preselection, native required-field validation, the demo submission notice, mobile/tablet/desktop horizontal overflow, basic navigation timing budgets, and lab LCP/CLS budgets on the enquiry page. These are regression checks, not a substitute for real-user performance monitoring.

To collect Core Web Vitals with the App Router, create a small Client Component under `components/shared/` using Next.js's `useReportWebVitals` from `next/web-vitals`, and mount it once from `app/layout.tsx`. Send only the metric fields you need (metric name, value, ID and rating) to an `app/api/vitals/route.ts` handler or a configured analytics provider; do not log personal form data with metrics. The receiving endpoint/provider, consent/privacy behavior, and server-side credentials must be configured before this reports anywhere.

Review field data at the 75th percentile against the "good" thresholds: LCP ≤ 2.5 seconds, INP ≤ 200 milliseconds, and CLS ≤ 0.1. Playwright's local timing checks cannot measure real-user INP or represent users' devices/networks. Use field monitoring (for example, the Search Console Core Web Vitals report or your analytics provider) and run Lighthouse/PageSpeed Insights against the deployed production URL for lab diagnostics. Fix the underlying cause, then recheck both field and lab data.

## SEO

Each implemented route exports metadata through `buildMetadata()`. The root layout emits Organization/LocalBusiness JSON-LD and the project includes `robots.ts` and `sitemap.ts`.

Verify current company information, awards, certifications, social links and legal details before launch.

## Verified content basis

The initial factual copy follows information published on Reeldon's official website: founded in 1999; Mutare address; structural timber, mouldings, doors, decking/flooring; stated values; CSR material; SAZ finger-joinery statement; and stated regional export reach. Formal award/certification claims should be updated from current official documentation.

## Performance

The starter uses Server Components by default, `next/image`, responsive `sizes`, hero priority loading, stable image containers, minimal Client Components, Lenis enhancement, reduced-motion support and optimized lucide imports.
