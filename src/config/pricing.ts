export const pricingPlans = [
  {
    id: "starter",
    name: "Starter",
    monthly: 1500,
    description: "A clear starting point for owner-led businesses.",
    users: 2,
    invoices: 100,
    emails: 100,
    featured: false,
    features: [
      "2 users in one business workspace",
      "100 new invoices each month",
      "Quotations, LPOs & delivery notes",
      "Bank CSV imports & manual allocation",
      "Partial payments & ageing overview",
      "100 manually sent email reminders/month",
      "Customer statements & data exports",
      "Email support",
    ],
  },
  {
    id: "growth",
    name: "Growth",
    monthly: 3500,
    description: "Less manual follow-up for a growing finance team.",
    users: 5,
    invoices: 500,
    emails: 1000,
    featured: true,
    features: [
      "Everything in Starter, plus",
      "5 users · 500 new invoices/month",
      "Suggested payment matches for review",
      "Scheduled email reminder sequences",
      "Pause follow-up & stop on full payment",
      "1,000 email reminders/month",
      "M-Pesa records, subject to provider setup",
      "One guided onboarding session",
    ],
  },
  {
    id: "business",
    name: "Business",
    monthly: 7500,
    description: "More room for busy teams and larger receivables books.",
    users: 10,
    invoices: 2000,
    emails: 5000,
    featured: false,
    features: [
      "Everything in Growth, plus",
      "10 users · 2,000 new invoices/month",
      "5,000 email reminders/month",
      "Two guided onboarding sessions",
      "Help mapping your first import",
      "Priority email support",
      "A first-month workflow review",
      "One connected business workspace",
    ],
  },
] as const;

export const annualPrice = (monthly: number) => monthly * 10;
export const formatKes = (amount: number) =>
  amount.toLocaleString("en-KE", { maximumFractionDigits: 2 });

export const pricingComparison = [
  {
    group: "Room to work",
    rows: [
      { label: "Business workspaces", values: ["1", "1", "1"] },
      { label: "Included users", values: pricingPlans.map((p) => String(p.users)) },
      { label: "New invoices / month", values: pricingPlans.map((p) => formatKes(p.invoices)) },
      { label: "Email reminders / month", values: pricingPlans.map((p) => formatKes(p.emails)) },
    ],
  },
  {
    group: "From invoice to cash",
    rows: [
      {
        label: "Quotes, LPOs, delivery notes & invoices",
        values: ["Included", "Included", "Included"],
      },
      {
        label: "Bank CSV imports & manual payment allocation",
        values: ["Included", "Included", "Included"],
      },
      {
        label: "Partial payments, ageing & statements",
        values: ["Included", "Included", "Included"],
      },
      { label: "Data exports", values: ["Included", "Included", "Included"] },
      { label: "Suggested payment matches for review", values: ["—", "Planned", "Planned"] },
      { label: "Scheduled email reminder sequences", values: ["—", "Planned", "Planned"] },
      { label: "M-Pesa payment records¹", values: ["—", "Subject to setup", "Subject to setup"] },
    ],
  },
  {
    group: "A supported start",
    rows: [
      { label: "Support", values: ["Email", "Email", "Priority email"] },
      { label: "Guided onboarding sessions", values: ["Self-guided", "1 session", "2 sessions"] },
      { label: "First-import mapping & workflow review", values: ["—", "—", "Included"] },
    ],
  },
] as const;
