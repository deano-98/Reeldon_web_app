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

## Quote form

The form is intentionally a UI demo. Replace the simulated submit in `components/quote/QuoteForm.tsx` with a Next.js Server Action or Route Handler that validates input and writes to PostgreSQL/CRM and sends email notifications.

Recommended flow:

`QuoteForm -> Server Action/API -> validation -> PostgreSQL/CRM -> email -> optional WhatsApp follow-up`

Never expose private API keys in Client Components.

## SEO

Each implemented route exports metadata through `buildMetadata()`. The root layout emits Organization/LocalBusiness JSON-LD and the project includes `robots.ts` and `sitemap.ts`.

Verify current company information, awards, certifications, social links and legal details before launch.

## Verified content basis

The initial factual copy follows information published on Reeldon's official website: founded in 1999; Mutare address; structural timber, mouldings, doors, decking/flooring; stated values; CSR material; SAZ finger-joinery statement; and stated regional export reach. Formal award/certification claims should be updated from current official documentation.

## Performance

The starter uses Server Components by default, `next/image`, responsive `sizes`, hero priority loading, stable image containers, minimal Client Components, Lenis enhancement, reduced-motion support and optimized lucide imports.
