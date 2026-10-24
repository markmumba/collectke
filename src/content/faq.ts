export const featuredQuestions = [
  {
    question: "What is CollectKE?",
    answer:
      "CollectKE is an invoice-to-cash workspace being built for Kenyan B2B businesses. It brings quotations, LPOs, delivery notes, invoices, payment reconciliation, and customer follow-up into one connected workflow.",
  },
  {
    question: "Will it replace our accounting software?",
    answer:
      "CollectKE focuses on getting invoices paid and keeping receivables clear. It is designed to work alongside your accounting process, rather than replace a full general ledger, payroll, or inventory system. Direct accounting integrations are planned for later releases.",
  },
  {
    question: "How will M-Pesa and bank payments work?",
    answer:
      "The initial scope includes M-Pesa payment ingestion, subject to provider onboarding, and bank statement imports through CSV. CollectKE will suggest invoice matches for review, including partial payments. Direct bank syncing is a later-stage feature; the previews on this page use sample data.",
  },
  {
    question: "Can we control customer reminders?",
    answer:
      "Yes—that control is part of the product design. Your team will be able to review reminders, configure timing, and pause follow-up. Matched payments will stop future reminders for paid invoices. Email is planned, with WhatsApp and SMS availability subject to provider setup and approvals.",
  },
  {
    question: "What about eTIMS and tax invoices?",
    answer:
      "Tax-ready invoice records are part of the planned scope. The eTIMS integration route is still being evaluated, and automated tax submission is not yet available. We’ll confirm supported capabilities before onboarding businesses that need them.",
  },
  {
    question: "Who is it being built for?",
    answer:
      "We’re starting with Kenyan suppliers, contractors, and service businesses that sell on credit. The workspace is designed around owners, finance administrators, and operations teams who need a clearer view of outstanding invoices and incoming payments.",
  },
  {
    question: "When can we start, and what will it cost?",
    answer:
      "CollectKE is in development. Early access will be introduced in stages, and the Pricing page sets out proposed launch packages that we’re validating with businesses. Requesting early access expresses interest; it does not create an account, start a subscription, or commit your business to a payment.",
  },
] as const;

export const faqTopics = [
  "Getting started",
  "Documents & invoices",
  "Payments",
  "Customer follow-up",
] as const;
export type FaqTopic = (typeof faqTopics)[number];
export type FaqItem = { question: string; answer: string; topic: FaqTopic };

export const faqItems: FaqItem[] = [
  ...featuredQuestions.map((item, index) => ({
    ...item,
    topic: (
      [
        "Getting started",
        "Documents & invoices",
        "Payments",
        "Customer follow-up",
        "Documents & invoices",
        "Getting started",
        "Getting started",
      ] as const
    )[index],
  })),
  {
    topic: "Getting started",
    question: "What happens after I request early access?",
    answer:
      "Your request tells us you’re interested in CollectKE. We’ll use the details you share to discuss your business workflow and potential early access. Availability will depend on the stage of development and the capabilities your business needs; submitting a request does not guarantee a place or a launch date.",
  },
  {
    topic: "Getting started",
    question: "Do the previews show real customer results?",
    answer:
      "The workspace previews use sample names, balances, and payment records. Our onboarding stories are illustrative examples of how a business might approach a first workflow, rather than verified customer outcomes.",
  },
  {
    topic: "Getting started",
    question: "How would we prepare for onboarding?",
    answer:
      "Start by identifying who creates invoices, who reviews incoming payments, and who follows up with customers. A focused first workflow can then be agreed before deciding which records to bring in. Use the contact form to describe your process; please don’t submit customer records or financial documents through the website.",
  },
  {
    topic: "Documents & invoices",
    question: "Which documents will the workspace connect?",
    answer:
      "The planned workflow connects quotations, customer LPOs, delivery notes, and invoices with the payment records and follow-up around them. The aim is to preserve the context of a sale as it moves from the first agreement to the final receipt.",
  },
  {
    topic: "Documents & invoices",
    question: "Can we bring in our existing invoices?",
    answer:
      "We’ll discuss your existing records when scoping an early-access workflow. Import formats, migration support, and limits have not yet been confirmed. Please wait for agreed onboarding instructions before sharing business or customer data.",
  },
  {
    topic: "Payments",
    question: "Will CollectKE hold or move our money?",
    answer:
      "CollectKE is being designed around invoice records, payment reconciliation, and follow-up. The current scope does not offer a bank account, wallet, lending, or a service for holding or transferring your funds. Payment ingestion refers to bringing payment records into the workspace.",
  },
  {
    topic: "Payments",
    question: "What happens when a customer makes a partial payment?",
    answer:
      "Partial payments are part of the planned reconciliation workflow. A payment can be reviewed against an invoice while keeping the outstanding balance visible, so the team can distinguish an amount received from an invoice that is fully paid.",
  },
  {
    topic: "Payments",
    question: "Will payment matches need a person to review them?",
    answer:
      "The workspace is designed to suggest matches and show the supporting payment details for your team to review. The aim is to help the person responsible decide where a payment belongs, particularly when references are unclear or amounts do not match exactly.",
  },
  {
    topic: "Customer follow-up",
    question: "What if a customer disputes an invoice?",
    answer:
      "The planned reminder controls include pausing follow-up while your team checks the records or discusses an invoice with the customer. CollectKE is intended to support that conversation; it does not decide whether a disputed amount is owed or guarantee collection.",
  },
  {
    topic: "Customer follow-up",
    question: "Where can I ask about privacy or website terms?",
    answer:
      "Our Privacy policy and Terms of use are linked in the footer. Both are currently published as review drafts while operating details are confirmed. For privacy enquiries, email info@collectke.co.ke. Please avoid sending sensitive customer or payment information in a website enquiry.",
  },
];
