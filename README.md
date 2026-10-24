# CollectKE

The CollectKE marketing site for an invoice-to-cash workspace for Kenyan businesses. The homepage, Features, How it works, Who it’s for, Case studies, Contact, About, and draft Privacy policy, and draft Terms of use pages are implemented locally; live early-access delivery remains to be configured before launch.

## Development

Use Node.js 22 or newer and npm.

```sh
npm install
npm run dev
```

Open http://localhost:3000.

```sh
npm run typecheck
npm run lint
npm run format:check
npm run build
npm start
```

## Shared configuration

- `src/app/globals.css`: brand colors, typography, radii, layout, interaction styles, responsive behavior, and reduced-motion support. Tailwind v4 reads the shared `@theme` tokens; no separate Tailwind configuration file is needed.
- `src/config/site.ts`: site identity, navigation, and primary CTA copy.
- `src/app/layout.tsx`: metadata, global styles, and locally bundled Inter variable font.
- `src/components/`: reusable branding, buttons via shared CSS classes, header, hero, preview, icons, and early-access interaction.
- `next.config.ts`, `tsconfig.json`, `postcss.config.mjs`, and `eslint.config.mjs`: framework, strict TypeScript, Tailwind/PostCSS, and Next.js lint rules.
- `.prettierrc.json` and `.editorconfig`: consistent source formatting. Run `npm run format` to apply it.

Development uses Turbopack. Production builds explicitly use Next.js’s supported Webpack path because Turbopack’s CSS worker could not bind its local port in the development sandbox.

The page is server-rendered. Only the early-access dialogs, mobile navigation, walkthrough controls, Features comparison, How it works step explorer, Who it’s for role explorer, Case studies filters/search, dedicated FAQ search/topic filters, pricing billing-period controls, and contact enquiry dialogs use client components. The walkthrough panels are server-rendered and passed into the tab controls as content. FAQ answers use native HTML details elements and can be expanded without JavaScript. The dedicated FAQ page adds client-side search and topic filters. Product visuals use HTML/CSS and SVG; sample names, balances, and statuses are illustrative.

## Early access

The header, hero, closing CTA, and footer early-access buttons open accessible native dialogs with name, email, and business fields. Submitting sends to the same-origin `/api/early-access` endpoint. No requests are stored by this project itself.

Copy `.env.example` to `.env.local` and set `EARLY_ACCESS_WEBHOOK_URL` to a trusted HTTPS endpoint that accepts JSON `{ name, email, businessName }`. It must return a 2xx response only after accepting the request. Keep its URL server-side; treat any embedded credential as a secret. Restart the dev server after changing environment variables.

Without that configuration, submission deliberately returns an unavailable message and never shows a false success. Entries are preserved after a failure. The endpoint validates fields and checks request origin, includes a honeypot, times out upstream requests, and does not log personal details. Before public launch, connect the real lead destination, finalize privacy information, and add host-level rate limiting.

## Pages

- `/`: the landing page, with product previews, workflow, audience, controls, FAQ, and early access.
- `/pricing`: proposed Starter / Growth / Business launch plans, monthly and annual views, usage limits, feature comparison, pricing FAQ, and early-access enquiries. Market references and validation assumptions are in `docs/pricing-rationale.md`.
- `/faq`: 17 searchable answers across getting started, documents and invoices, payments, and customer follow-up. The homepage shares seven answers from the same content source. Linked from desktop/mobile navigation, the homepage, contact page, and footer.
- `/features`: a detailed product overview inspired by the supplied platform reference, with a connected-account hero, workflow overview, keyboard-accessible six-question comparison, layered capability diagram, planned feature details, and early-access setup.

- `/how-it-works`: a product detail layout adapted from the supplied accelerated-bank-transfer reference: layered document/receipt hero, four benefits, pale document section, dark review panel, four-stage interactive explorer, payment timeline, capability summary, settlement example, early-access setup, and related pages.

- `/who-its-for`: an audience page adapted from the supplied account-funding reference, with a floating customer card, document handover illustration, keyboard-accessible role previews for owners/finance/operations, individual/team comparison, illustrative business use cases, and early-access setup.

- `/case-studies`: searchable, topic-filtered onboarding stories and guides, using the supplied blog reference for the featured story, smaller cards, and pale resource grid.
- `/case-studies/[slug]`: six statically generated articles with section navigation, related reading, and proposed pilot measurement checks where applicable.

- `/contact`: the reference-inspired four-card contact hub, with early access, workflow enquiries, guides, and general enquiries.

- `/about`: the purpose behind CollectKE, a connected-record concept illustration, four guiding principles, Kenyan workflow context, intended early-access learning process, and shared early-access/contact actions. No founder biography, team profile, milestones, or customer results are invented.

About is linked from the header and footer. Common questions remain linked from the footer and Contact page.

- `/privacy`: a draft website privacy notice with section navigation, form-data table, technical-data disclosures, official Kenyan rights references, and the confirmed privacy email. It is linked from the footer and both forms.

- `/terms`: draft website terms covering responsible use, content permissions, enquiries, early access, illustrative material, privacy, availability, and legal provisions still to confirm.

The legal pages share `src/components/legal/legal.module.css`, including the responsive section navigation, review notices, and legal-document links.

Case study content is maintained in `src/content/case-studies.ts`. The three business stories are illustrative scenarios, not customer results. Three practical guides cover onboarding preparation, baselines, and pilot review. Replace example outcomes only with verified data and customer approval.

The header and footer use Next.js links so navigation works across all nine main pages and article routes. Homepage section links retain their home route. Each subpage has an active navigation state. All product previews remain illustrative, and provider-dependent capabilities are described as planned.

## Scope

Implemented: shared foundation, desktop/mobile navigation, hero, receivables preview, workflow strip, product benefit cards, connected quote-to-receipt workflow, interactive product walkthrough, audience section, control and clarity section, FAQ, closing CTA, footer, early-access dialogs, and configurable submission endpoint. No placeholder login, policy, contact, or social links are included. This is a local project; no deployment was created.

Before public launch: configure the lead destination, confirm privacy/contact details, add host-level rate limiting, and review final product availability and integration wording. Product integrations shown in previews are not live in this marketing project.

## Verification

Production build, ESLint, strict TypeScript, and Prettier checks pass. Manual browser review covered 360, 390, 768, 1024, and 1440 px layouts, with no horizontal overflow, missing section targets, or duplicate IDs. The FAQ was checked by mouse and keyboard; mobile navigation was checked for link dismissal and Escape focus return. All four early-access buttons open the same form layout. Unconfigured submission returns an unavailable message and preserves entries.

Full-page desktop/mobile screenshots and section previews are saved in `output/preview/`. The early-access destination was not configured or contacted during this review. Features comparison testing covered all six questions at the five responsive widths, keyboard wrapping/Home/End, stable answer-layout heights, desktop/mobile navigation between routes, and the new hero/setup dialogs.

How it works verification covered all four explorer stages at the five responsive widths, one visible panel per stage, arrow-key wrapping/Home/End, valid anchors, one page heading, no horizontal overflow, active navigation, mobile menu dismissal, and early-access dialogs. Desktop and mobile previews are saved alongside the existing page screenshots.

Who it’s for verification covered all three roles at 360, 390, 768, 1024, and 1440 px, one visible panel per selection, keyboard wrapping/Home/End, no horizontal overflow, valid anchors, active desktop navigation, mobile route changes with menu dismissal, and the setup early-access dialog. Full-page desktop/mobile and hero previews are in `output/preview/`.

Case studies verification covered all topic filters, case-insensitive/trimmed search, combined filtering, empty-state recovery, the listing at the five responsive widths, all six articles at 360 and 1440 px, valid article section anchors, and navigation between the library and articles. No customer records or external submissions were used.

## Contact enquiries

The workflow and general-enquiry cards open native dialogs. They submit name, email, optional business name, an enquiry topic (`workflow` or `general`), and a message to `/api/contact`. The endpoint validates fields, checks origin, includes a honeypot, and forwards to the server-only HTTPS `CONTACT_WEBHOOK_URL` configured in `.env.local`. The destination must accept JSON `{ name, email, businessName, topic, message }` and return 2xx only after acceptance. The site does not store these messages itself.

Without this setting, the form explains that the message was not sent and preserves entries. Failed delivery also preserves entries. Confirmed delivery shows a success state. Before launch, configure the destination, finalize privacy/contact information, and apply host-level rate limiting.

Contact verification: production build, lint, TypeScript, formatting, 360/390/768/1024/1280/1440 px layouts, both enquiry dialogs, Escape and close focus return, mobile navigation dismissal, early-access and guide card actions, and an unconfigured submission with retained fields. Fifteen mocked endpoint checks covered invalid origins/fields/payloads, missing configuration, HTTPS enforcement, upstream failures, and confirmed delivery with trimmed fields and an optional business name. No external destination was contacted. Desktop/mobile previews are in `output/preview/`.

About verification covered 360, 390, 768, 1024, 1280, and 1440 px layouts, no horizontal or illustration overflow, one page heading, valid anchors, active navigation, mobile menu dismissal, early-access dialog layout/focus return, and links to Contact and How it works. Desktop/mobile and hero previews are in `output/preview/`.

## Privacy notice status

The `/privacy` page is explicitly **Draft for review**, with `noindex, follow` metadata. `src/config/privacy.ts` holds the confirmed privacy address `info@collectke.co.ke` and review date. No effective date is claimed. The page reflects the current marketing-site code, including locally bundled fonts, no application analytics/cookie/browser-storage features, validated form forwarding, and the absence of an enquiry database. Provider-side handling remains unverified.

Before treating the notice as final, confirm the legal operator and postal contact, each processing purpose’s lawful basis, hosting/delivery providers and locations, retention/deletion/backup arrangements, and operational privacy-request/security procedures. The current notice is not a claim of legal approval or regulatory registration.

Official references reviewed on 24 October 2026: the [Data Protection Act, 2019 hosted by ODPC](https://www.odpc.go.ke/wp-content/uploads/2024/02/TheDataProtectionAct__No24of2019.pdf), particularly sections 26, 29, 39, 48–49, and 56, and the [ODPC rights overview](https://www.odpc.go.ke/rights-of-a-data-subject/). These inform the rights, retention, and transfer summaries; they do not establish CollectKE’s unconfirmed operating practices.

Privacy verification covered 360/390/768/1024/1440 px layouts, one page heading, valid section anchors, no duplicate IDs or table/page overflow, the confirmed mailto address, draft `noindex, follow` metadata, footer navigation, and privacy-document navigation from contact and early-access dialogs (including a dialog opened on the privacy page). Preview images are in `output/preview/`. No privacy email was sent.

## Website terms status

The `/terms` page is **Draft for review** with `noindex, follow` metadata and a review date in `src/config/terms.ts`. It is linked from the footer and Privacy page. It does not claim an effective date, a binding acceptance process, paid-service terms, a liability cap, mandatory arbitration, or an exclusive forum. No acceptance checkbox was added to enquiry forms.

Before finalising, confirm the legal operator/postal contact, scope, content-use permissions, warranties/liability provisions, governing law/dispute arrangements, and any necessary acceptance/update process. Any product, pilot, or subscription agreement requires separate scope and review. The current website has no purchase checkout or live product account.

Source context reviewed on 24 October 2026: the [Consumer Protection Act, 2012 hosted by Kenya’s Parliament](https://www.parliament.go.ke/sites/default/files/2017-05/ConsumerProtectionActNo46of2012.pdf), the [constitutional consumer-rights overview from KLRC](https://www.klrc.go.ke/index.php/constitution-of-kenya/110-chapter-four-the-bill-of-rights/112-part-2-rights-and-fundamental-freedoms/212-46-consumer-rights), and section 83J of the [Kenya Information and Communications Act](https://new.kenyalaw.org/akn/ke/act/1998/2/eng%402018-05-30/source). These support retaining a clear website/product scope and leaving contractual effect and non-excludable rights for the final review; they do not establish approval or enforceability of this draft.

Terms verification covered both legal pages at 360/390/768/1024/1440 px, one page heading, no horizontal overflow or duplicate IDs, valid section anchors, keyboard anchor activation, active legal-document links, footer access, the contact action, and draft `noindex, follow` metadata. Desktop/mobile screenshots are saved in `output/preview/`; Privacy screenshots were refreshed after the shared layout change.

FAQ verification: production build, ESLint, TypeScript, and formatting checks passed. Browser review covered 360, 390, 768, 1024, and 1440 px with no horizontal overflow or duplicate IDs. All topic filters, combined search/filter results, empty-state reset, keyboard expansion, single-open answers, and mobile menu dismissal were checked. Screenshots: `output/preview/faq-desktop.png`, `faq-mobile.png`, and `faq-overview.png`.

Pricing verification: production build, lint, TypeScript, and formatting passed. Browser checks covered 360, 390, 768, 1024, 1280, and 1440 px with no page overflow or duplicate IDs. Verified monthly/yearly amounts, keyboard billing controls, early-access dialog opening, mobile Pricing navigation, and native pricing FAQ expansion. The mobile comparison scrolls within its own region. Screenshots are in `output/preview/pricing-desktop.png`, `pricing-mobile.png`, and `pricing-overview.png`.
