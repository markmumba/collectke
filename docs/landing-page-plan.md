# CollectKE landing page plan

Status: homepage, Features, How it works, Who it’s for, Case studies, Contact, About, draft Privacy policy, and draft Terms of use pages implemented locally, with shared navigation, early-access dialogs, and responsive layouts. Live lead delivery is pending configuration. The original design proposals below remain as planning context.
Updated: 24 October 2026.

## Product and conversion strategy

CollectKE is an invoice-to-cash workspace for Kenyan B2B SMEs. Lead with visibility into outstanding money, consistent customer follow-up, and payment reconciliation. The first audience is owners and finance administrators at suppliers, contractors, and service businesses; the initial industry remains open for validation.

Confirmed primary conversion: Request early access. Secondary action: See how it works, scrolling to the product walkthrough. The founder confirmed the primary CTA on 23 October 2026. Avoid promising immediate product access before onboarding exists.

Suggested hero:

- Eyebrow: INVOICE-TO-CASH FOR KENYAN BUSINESSES
- Heading: Know what you’re owed. / Keep cash moving.
- Supporting copy: Bring invoices, M-Pesa and bank payments, and customer follow-up into one workspace—so your team knows what’s outstanding and what to do next.
- Buttons: Request early access; See how it works.
- Supporting label: Built around the way Kenyan businesses work.

The PRD is product context, not an instruction to implement its entire roadmap. Its approval requests and technical architecture do not change the scope of this landing-page planning task.

## Reference interpretation

Use the supplied Astra screenshots as visual references. The duplicated homepage screenshot is the same reference, not an additional page to build.

Carry forward:

- Narrow, quiet navigation and generous desktop margins.
- Large, regular-weight typography with tight heading tracking.
- Faint vertical grid guides and fine borders.
- White and pale mint sections alternating with deep teal sections.
- Product-led visuals, connected nodes, restrained glow, and green/cyan accents.
- Three-column feature summaries and alternating text/product compositions.
- A dramatic dark closing call to action.

Adapt to CollectKE:

- Replace payment rails, API code, and infrastructure layers with an invoice ledger, payment match, reminder preview, and document journey.
- Replace developer language with amounts, balances, payment status, and next actions.
- Use KES, Kenyan document terminology, and clearly fictional business data in previews.
- Keep one coherent landing page initially. Product subpages can follow when their content warrants them.
- Use an original wordmark and visual assets; do not reuse Astra branding, copy, partner logos, or customer proof.

## Page structure

| Section                | Purpose                         | Content and visual                                                                                                                                                                     |
| ---------------------- | ------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Navigation             | Orient and convert              | CollectKE wordmark; Product, How it works, Who it’s for, FAQ; early-access button. Collapse to an accessible menu on mobile.                                                           |
| Hero                   | Explain the promise immediately | Split layout; proposed headline and CTAs on left; illustrated receivables dashboard with a payment-match notification on right. Label as product preview.                              |
| Local workflow strip   | Establish relevance             | Text labels for quotations, LPOs, delivery notes, M-Pesa, bank statements, and customer follow-up. This is capability context, not a partner endorsement strip.                        |
| Three product pillars  | Make the value concrete         | Track every invoice; Follow up consistently; Match incoming payments. Each gets a distinct product vignette.                                                                           |
| Connected workflow     | Explain the complete journey    | Quote → LPO → Delivery → Invoice → Collect → Reconcile. A dark section connects each stage to the same customer record.                                                                |
| Product walkthrough    | Demonstrate useful behavior     | Three selectable steps: See what’s overdue; Review a payment match; Send a respectful reminder. Updating preview with accessible tabs and static mobile fallback.                      |
| Who it’s for           | Speak to daily responsibilities | Owners: see outstanding cash. Finance: review matches and statements. Operations: preserve the document chain. Use familiar business examples without claiming validated industry fit. |
| Control and clarity    | Address practical concerns      | Explain suggested matches, approval/pause controls, and linked records as intended product behavior. Publish security claims only after implementation is verified.                    |
| FAQ                    | Resolve conversion friction     | What CollectKE does, relationship to accounting tools, payment import approach, planned channels, availability, and how early access works.                                            |
| Closing CTA and footer | Capture interest                | Repeat primary CTA; compact early-access form; contact and real policy links once available.                                                                                           |

Pricing update (24 October 2026): the user requested a pricing page and Kenya-market recommendation. `/pricing` now presents the PRD’s KES 1,500 / 3,500 / 7,500 hypotheses as proposed launch plans, with explicit planned capabilities, limits and annual pricing. See `pricing-rationale.md` for benchmarks and remaining validation.

Do not publish the PRD’s improvement targets as achieved results. Customer logos, testimonials, certifications, live integrations, and regulatory approval claims require evidence. M-Pesa onboarding, eTIMS route, and WhatsApp approval are unresolved in the PRD. Do not describe bank API sync as MVP functionality; bank CSV import is the MVP approach.

## Proposed design tokens

These are starting values inspired by the references, not exact measurements of Astra’s design system.

### Color

| Token                   | Value     | Role                                   |
| ----------------------- | --------- | -------------------------------------- |
| `--color-bg`            | `#FFFFFF` | Main page background                   |
| `--color-surface`       | `#F3F8F7` | Feature cards and alternate sections   |
| `--color-surface-muted` | `#E7F0EE` | Quiet inset areas                      |
| `--color-ink`           | `#082729` | Headings and primary body text         |
| `--color-muted`         | `#526568` | Supporting text on light backgrounds   |
| `--color-border`        | `#DCE7E4` | Dividers and card borders              |
| `--color-dark`          | `#041C1F` | Dark sections and primary buttons      |
| `--color-dark-panel`    | `#173C40` | Product panels inside dark sections    |
| `--color-on-dark`       | `#F2FAF7` | Text on dark sections                  |
| `--color-muted-on-dark` | `#B8CDCB` | Supporting text on dark sections       |
| `--color-green`         | `#53D643` | Decorative accent and gradient start   |
| `--color-cyan`          | `#24D6CE` | Decorative accent and gradient end     |
| `--color-positive`      | `#167347` | Paid/matched labels on pale surfaces   |
| `--color-warning`       | `#9B6110` | Overdue/review labels on pale surfaces |

Use a green-to-cyan gradient for selected headline phrases and connecting lines. Bright accents are decorative; choose tested darker text equivalents on light surfaces. Status always includes text or an icon, not color alone. Confirm contrast in actual component contexts.

### Typography and layout

- Proposed typeface: locally hosted Inter; system sans-serif fallback. Regular or medium headings; medium button labels. Use tabular numerals for balances. This font choice approximates the reference character without asserting an exact font match.
- Hero: 64–76 px desktop, 40–44 px mobile; line-height 1.02–1.08; tracking approximately -0.045em.
- Section headings: 40–48 px desktop, 30–34 px mobile; line-height 1.1.
- Card headings: 22–26 px. Body: 16–18 px, line-height 1.55–1.65. Metadata: 12–14 px.
- Content width: 1,200 px maximum; side gutters 24 px mobile, 40 px tablet, 64 px desktop where space permits.
- Spacing scale: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128 px.
- Section padding: 96–128 px desktop and 56–72 px mobile. Card padding: 24–32 px. Column gap: 24 px.
- Grid: 12 columns desktop, 6 tablet, 1 primary column mobile. Faint background guides align to the content grid.
- Radius: 6 px buttons, 10–12 px cards, 16 px product frames. Fine borders; minimal shadow outside layered product previews.
- Controls: minimum 44 px touch target, obvious focus outline, visible hover/pressed/disabled states. Dark filled primary button and bordered secondary button.

### Visual and motion language

- Build product previews as HTML/CSS and lightweight SVG so labels remain sharp and responsive.
- Hero preview: outstanding balance, overdue balance, three fictional invoices, and a single payment-match overlay. Keep the information readable instead of adding numerous floating cards.
- Feature visuals: document chain; reminder with approve/pause state; payment with a suggested invoice and match reasons.
- Dark workflow illustration: connected document cards with restrained mint lines; visual complexity should support the six-step explanation.
- Hover transitions: around 160 ms. Preview/tab transitions: 200–300 ms. One subtle entrance treatment if it improves hierarchy.
- No scroll locking or forced horizontal scrolling. Avoid recreating the reference’s lengthy repeated scroll states. Respect reduced-motion settings and keep all content available without animation.
- Do not require WebGL, video, or a heavy animation library for the first pass.

## Conversion interaction

Implemented interaction: primary buttons in the header, hero, closing CTA, and footer open native early-access dialogs. The closing section repeats the same primary action. The form retains entries after failures and does not report success without confirmed delivery.

Proposed fields: name, work email, business name; optional business type. Do not require phone numbers or financial information. Explain the purpose of the request beside submission. Confirm privacy wording before collecting real leads.

States: empty, invalid, submitting, success, failure, and retry. Preserve entries after a failed submission. Connect to the selected lead destination before publication; a prototype must not claim a lead has been saved when it has not. Server validation and basic abuse protection belong to the real submission path.

## Implementation proposal

The workspace is empty. Proposed foundation: Next.js with TypeScript, CSS custom properties as the token source, and Tailwind for layout and component styling. Use server-rendered content with small client components for tabs, mobile navigation, FAQ, and the form. This is a proposal, not an existing repo constraint.

Keep marketing content separate from presentational components so copy can evolve through customer discovery. Use a single public route initially. No authentication or full product backend is required for the marketing page. Do not add placeholder login, docs, or policy links that lead nowhere.

Suggested component set: Container, SectionHeading, Button, ProductFrame, StatusBadge, FeatureCard, Workflow, ProductTabs, FAQ, EarlyAccessForm, SiteHeader, and SiteFooter. Only extract components that are actually reused or have independent behavior.

## Build sequence and review points

1. Agree on positioning and conversion: confirm primary CTA, name, product availability wording, and whether any pricing belongs on the page.
2. Establish the visual foundation: tokens, typography, header, hero, and one product preview at desktop and mobile sizes. Review this first to settle the visual direction.
3. Build the complete page: product pillars, workflow, walkthrough, audience section, FAQ, closing CTA, and footer. Review the narrative and the light/dark rhythm together.
4. Connect real behavior: navigation, tabs, accordion, form validation and lead destination; add restrained motion after static layouts work.
5. Validate before publishing: responsive layouts, accessible interaction and contrast, production build, metadata, social image, real links, submission success/failure paths, asset weight, and loading behavior.

Responsive checks: 360, 390, 768, 1,024, and 1,440 px. Cover keyboard navigation, focus order, reduced motion, long text, no horizontal overflow, mobile preview legibility, and form feedback. Give product previews useful text alternatives. Target WCAG AA and strong mobile performance; measure the built page before making performance claims.

## Remaining decisions

- Primary CTA: Request early access confirmed; secondary action: See how it works.
- Brand: CollectKE working name; original wordmark needed; proposed teal/green direction pending feedback.
- Pricing: recommend leaving public prices out of the first version.
- Lead storage and notification destination: choose before connecting the form.
- Real contact details, domain, and policy content: needed before public launch.
- Launch date: the PRD gives Jan 2027 private-beta targets in its brief and Feb 2027 in its detailed execution schedule. Resolve before publishing a dated promise.

## Sources reviewed

- Local CollectKE Product Requirements Document, version 1.0, 7 October 2026 (16 pages).
- Supplied Astra homepage, platform overview, instant disbursements, instant account funding, and accelerated bank transfer screenshots. Homepage and platform crops were inspected at a readable scale; all page compositions were reviewed from the supplied images.
