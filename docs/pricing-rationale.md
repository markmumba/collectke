# Proposed CollectKE launch pricing

Prepared 24 October 2026. Product and pricing remain proposals, with no checkout or subscription activation. User requested a locally implemented pricing page and a reasoned Kenya-market recommendation.

## Benchmarks

Primary vendor pages checked on 24 October 2026:

- [Zoho Books Kenya](https://www.zoho.com/ke/books/pricing/): Standard KSh 999, Professional KSh 1,999, Premium KSh 2,999 monthly, excluding local taxes. These are broader accounting offerings, so they create a demanding affordability benchmark for CollectKE rather than a direct feature comparison.
- [Uhasibu](https://www.uhasibu.co.ke/Website/Uhasibu): lists its accounting product at KES 1,000/month before VAT. The page is undated; treat it as a published directional reference, not proof of a current quote.
- [Chaser](https://www.chaserhq.com/chaser-pricing): specialist receivables automation starts at USD 259/month on its Rest of World monthly Compact plan. This illustrates specialist positioning, not Kenyan willingness to pay. No FX conversion used.

## Recommendation

Test the PRD's original KES 1,500 / 3,500 / 7,500 hypotheses as Starter, Growth, and Business. These amounts are our recommendation, not a price implied by competitors. Starter is already above low-cost accounting software, so customer interviews must establish whether a connected document-to-collection workflow justifies that premium. Growth needs demonstrable reconciliation and follow-up value; Business is for higher volumes and onboarding needs, not a default SME upsell.

| Proposed plan | Monthly KSh | Annual KSh | Users | New invoices/month | Reminder emails/month |
| ------------- | ----------: | ---------: | ----: | -----------------: | --------------------: |
| Starter       |       1,500 |     15,000 |     2 |                100 |                   100 |
| Growth        |       3,500 |     35,000 |     5 |                500 |                 1,000 |
| Business      |       7,500 |     75,000 |    10 |              2,000 |                 5,000 |

One business workspace per plan. Annual pricing is 10 monthly payments for 12 months: a 16.67% saving. The page shows the full annual charge and monthly equivalent, with the same monthly allowances. All prices exclude applicable taxes; no tax registration status assumed.

All plans propose the core quotation/LPO/delivery/invoice chain, bank CSV imports, manual allocations, partial payments, ageing, statements and exports. Starter provides manual email reminders. Growth adds suggested matches, scheduled reminders, conditional M-Pesa record ingestion, and one onboarding session. Business expands volumes and includes two onboarding sessions, first-import mapping, a workflow review and priority email support, without a contractual response-time promise.

Do not bundle uncosted SMS/WhatsApp traffic or offer unlimited usage. No percentage-of-collections fee is proposed. Provider fees are separate and must be disclosed before activation. No automatic overages are proposed; agree an upgrade before raising capacity. eTIMS, direct bank syncing and accounting integrations remain outside these packages. Native payment and reminder capabilities are planned, not live.

## Validate before selling

Interview target businesses about invoice volume, users, existing spend and recurring reconciliation/follow-up work. Test whether they choose a plan at the displayed price, rather than only agreeing that it sounds affordable. Validate hosting, email delivery, provider, support and onboarding costs against each tier's full allowance; gross margin has not been modelled because those costs are not confirmed. Revisit the annual discount if retention and support economics do not support it. Confirm tax treatment, onboarding scope, limit handling and subscription/cancellation terms before billing.

Implementation source of truth: `src/config/pricing.ts`. Homepage and FAQ answers refer to proposed pricing rather than implying live subscriptions. Plan buttons open the existing early-access enquiry; they do not purchase or select a subscription.
