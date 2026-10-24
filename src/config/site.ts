export const site = {
  name: "CollectKE",
  description:
    "Know what you’re owed. Keep cash moving. An invoice-to-cash workspace for Kenyan businesses, connecting invoices, payments, and customer follow-up.",
  // Shown in the header bar.
  navigation: [
    { label: "Features", href: "/features" },
    { label: "How it works", href: "/how-it-works" },
    { label: "Who it’s for", href: "/who-its-for" },
    { label: "Pricing", href: "/pricing" },
  ],
  // Tucked behind "More" in the header; listed in full in the mobile menu.
  moreNavigation: [
    {
      title: "Resources",
      items: [
        {
          label: "Case studies",
          href: "/case-studies",
          description: "How teams connect invoices, payments, and follow-up.",
        },
        {
          label: "FAQ",
          href: "/faq",
          description: "Pricing, early access, data, and how CollectKE fits in.",
        },
      ],
    },
    {
      title: "Company",
      items: [
        {
          label: "About",
          href: "/about",
          description: "Why we’re building an invoice-to-cash workspace for Kenya.",
        },
        {
          label: "Contact",
          href: "/contact",
          description: "Questions, partnerships, or a walkthrough for your team.",
        },
      ],
    },
  ],
  primaryCta: "Request early access",
} as const;
