export type Study = {
  slug: string;
  category: "Onboarding" | "Workflow" | "Guide";
  title: string;
  description: string;
  audience: string;
  readTime: string;
  visual: "account" | "documents" | "payments" | "baseline" | "handover" | "review";
  example: boolean;
  introduction: string;
  sections: { title: string; body: string; points?: string[] }[];
  measures?: { label: string; baseline: string; review: string }[];
};

export const studies: Study[] = [
  {
    slug: "a-suppliers-first-connected-customer-account",
    category: "Onboarding",
    title: "A supplier’s first connected customer account.",
    description:
      "An example of starting small: one customer, its supporting documents, and a balance the team can explain.",
    audience: "Suppliers & distributors",
    readTime: "4 min read",
    visual: "account",
    example: true,
    introduction:
      "This illustrative onboarding story follows a supplier that sells on invoice. It describes a proposed pilot, rather than a completed customer rollout. The starting point is one customer account and a team that wants less time spent reconstructing what happened.",
    sections: [
      {
        title: "The starting point: records in different places.",
        body: "The customer’s LPO arrives in a message, delivery evidence lives in a folder, and finance keeps the invoice balance in a spreadsheet. Before following up, someone has to bring the records together again.",
      },
      {
        title: "Start with one account the team knows.",
        body: "Choose a customer with a small set of open invoices. Agree who checks the supporting documents, who reviews payment records, and who speaks to the customer. Reconcile the opening balance before testing a new workflow.",
        points: [
          "Confirm the customer details and invoice references.",
          "List the quotations, LPOs, and delivery notes that belong to each sale.",
          "Check the opening balance against the team’s existing records.",
        ],
      },
      {
        title: "Connect the documents before reviewing the payment.",
        body: "In the sample account, INV-0022 totals KES 65,000. A KES 25,000 payment leaves KES 40,000 outstanding after review and allocation. The document trail and allocation should explain that balance to the next person without another round of messages.",
      },
      {
        title: "Review the improvement together.",
        body: "At the agreed review point, repeat the same account checks. Compare the time needed to find a supporting record, explain a balance, and prepare a follow-up. Record problems as well as improvements. A clearer workflow is useful only if the team can trust and maintain it.",
      },
    ],
    measures: [
      {
        label: "Find supporting documents",
        baseline: "Time the existing lookup process",
        review: "Repeat with the connected account",
      },
      {
        label: "Explain the balance",
        baseline: "Count records and people consulted",
        review: "Check whether the account provides the context",
      },
      {
        label: "Prepare a follow-up",
        baseline: "Record time and missing details",
        review: "Compare like-for-like follow-up tasks",
      },
    ],
  },
  {
    slug: "a-clearer-handover-from-work-to-invoice",
    category: "Workflow",
    title: "A clearer handover from completed work to invoice.",
    description:
      "A contractor example: keeping the agreed work and supporting records close when finance picks up the sale.",
    audience: "Contractors",
    readTime: "3 min read",
    visual: "documents",
    example: true,
    introduction:
      "This illustrative contractor scenario looks at the gap between completing work and preparing its invoice. It is a workflow example for discussion during early access, not a report of a customer’s results.",
    sections: [
      {
        title: "Find the point where context gets lost.",
        body: "Operations knows the agreed work and which evidence supports it. Finance needs those details before preparing an invoice. Start by identifying the questions that most often send the work back to the previous person.",
      },
      {
        title: "Agree what a ready handover includes.",
        body: "Choose a small, practical set of records for the selected workflow. Keep the quotation, customer order where relevant, and agreed supporting evidence associated with the same sale.",
        points: [
          "A clear customer and job reference.",
          "The agreed scope and amount to invoice.",
          "The supporting documents your team needs to check.",
          "A named person to resolve missing information.",
        ],
      },
      {
        title: "Follow one sale through the handover.",
        body: "Have the receiving person review the records without a separate explanation first. Note which details are clear and which still require a conversation. The aim is a handover that preserves useful context, while leaving business judgement with the team.",
      },
      {
        title: "Measure the gaps that remain.",
        body: "Compare the time from a ready handover to invoice preparation, and count requests for missing records. Use comparable jobs and record unusual cases separately. Confirm the baseline and review period before drawing conclusions.",
      },
    ],
    measures: [
      {
        label: "Missing information",
        baseline: "Count clarification requests per handover",
        review: "Compare equivalent jobs in the pilot",
      },
      {
        label: "Invoice preparation",
        baseline: "Time from ready records to prepared invoice",
        review: "Repeat using the agreed document checklist",
      },
    ],
  },
  {
    slug: "following-up-after-a-part-payment",
    category: "Workflow",
    title: "A customer follow-up that starts with the right balance.",
    description:
      "A service business example: review what has already been paid before preparing the next reminder.",
    audience: "Service businesses",
    readTime: "3 min read",
    visual: "payments",
    example: true,
    introduction:
      "This illustrative service-business scenario follows a part-paid invoice. It shows the intended review process around payment records and customer follow-up; no live messages or money movements are involved.",
    sections: [
      {
        title: "Start with the account, not the reminder.",
        body: "Before asking a customer to pay, check the invoice, payment records, and remaining balance. A reminder based on the original amount can miss a payment the customer has already made.",
      },
      {
        title: "Review the allocation.",
        body: "For sample invoice INV-0022, the total is KES 65,000. Review a KES 25,000 payment against its payer and reference before allocating it. The remaining balance is then KES 40,000. An unclear payment stays in review until the team can resolve it.",
      },
      {
        title: "Prepare a considered follow-up.",
        body: "Use the confirmed remaining amount and invoice reference in the draft. Thank the customer for the part payment where appropriate. A person should review the wording and timing, and pause the reminder if the account needs a conversation.",
        points: [
          "Confirm that recent payments have been reviewed.",
          "Check the invoice reference and remaining balance.",
          "Read the draft in the context of the customer relationship.",
        ],
      },
      {
        title: "Check whether follow-up became easier.",
        body: "Compare preparation time and the number of reminders needing a balance correction. Record the same tasks before and during the pilot. These checks assess the workflow; they do not by themselves prove that a customer paid faster.",
      },
    ],
    measures: [
      {
        label: "Balance corrections",
        baseline: "Count drafts corrected before sending",
        review: "Track the same check during the pilot",
      },
      {
        label: "Preparation time",
        baseline: "Time the account check and draft preparation",
        review: "Compare similar follow-up tasks",
      },
    ],
  },
  {
    slug: "prepare-for-your-first-onboarding-conversation",
    category: "Guide",
    title: "What to bring to your first onboarding conversation.",
    description:
      "A practical checklist for discussing your invoice-to-cash workflow without moving your whole business at once.",
    audience: "Owners & finance teams",
    readTime: "3 min read",
    visual: "handover",
    example: false,
    introduction:
      "A useful first conversation starts with how your team works today. You do not need a perfect process or a full migration plan. Begin with a small workflow that is familiar enough to discuss clearly.",
    sections: [
      {
        title: "Describe one everyday sale.",
        body: "Walk through how the sale is agreed, documented, invoiced, paid, and followed up. Name the people involved and the records they use. A simple example often reveals more than an ideal process diagram.",
      },
      {
        title: "Make a list of the records involved.",
        body: "Identify the kinds of documents and payment records your team uses. For the first discussion, describe them or use anonymised examples. Agree any later data sharing and access arrangements before supplying real customer records.",
        points: [
          "Quotation and customer order, where used.",
          "Delivery or other supporting evidence.",
          "Invoice references and how balances are maintained.",
          "Bank CSV formats or other payment-record sources.",
          "How reminders are prepared and reviewed.",
        ],
      },
      {
        title: "Choose one problem to start with.",
        body: "Be specific: finding delivery evidence, identifying a payment, or preparing a follow-up with the correct balance. Agree what a useful first workflow would look like, who would own it, and what product availability needs to be confirmed.",
      },
    ],
  },
  {
    slug: "set-a-baseline-before-changing-the-workflow",
    category: "Guide",
    title: "Set a baseline before changing the workflow.",
    description:
      "Choose a few repeatable checks so improvements are measured against the way your team actually works.",
    audience: "Pilot teams",
    readTime: "3 min read",
    visual: "baseline",
    example: false,
    introduction:
      "A pilot needs a starting point. Choose a narrow set of tasks, record how they work today, and agree how the team will repeat those checks after trying the new workflow.",
    sections: [
      {
        title: "Choose a comparable set of tasks.",
        body: "Start with document lookup, payment allocation review, or follow-up preparation. Use a consistent definition of where each task starts and ends. Avoid comparing an unusually simple invoice with a complex disputed account.",
      },
      {
        title: "Record effort and accuracy.",
        body: "Time alone does not tell the whole story. Record missing records, clarification requests, and corrections alongside the task duration.",
        points: [
          "Record the task and its start and end points.",
          "Note time spent and interruptions.",
          "Count missing details and corrections.",
          "Keep the sample size and review period visible.",
        ],
      },
      {
        title: "Leave room for an honest result.",
        body: "A check may improve, stay the same, or get worse while a team learns a new workflow. Record the result as observed. Treat a target as a target until you have evidence, and avoid attributing every change in payment timing to the software.",
      },
    ],
  },
  {
    slug: "review-the-first-pilot-with-your-team",
    category: "Onboarding",
    title: "Review the first pilot with the people doing the work.",
    description:
      "A structured check-in on connected records, remaining friction, and the next useful step.",
    audience: "Owners, finance & operations",
    readTime: "3 min read",
    visual: "review",
    example: false,
    introduction:
      "An onboarding review should cover the whole team’s experience. Look at the records and the work together, compare against the agreed baseline, and decide what needs attention before expanding the scope.",
    sections: [
      {
        title: "Check the account before the numbers.",
        body: "Confirm that the chosen customer records, supporting documents, and balances are correct. Resolve unexplained differences before treating a faster workflow as an improvement.",
      },
      {
        title: "Hear from each person.",
        body: "Ask operations about document handovers, finance about payment review and follow-up, and the owner about the account picture. In a small business these may be the same person wearing different hats.",
        points: [
          "What became easier to find or explain?",
          "Which steps still needed a separate message?",
          "Were any balances or suggestions unclear?",
          "What needed to be corrected before the next action?",
        ],
      },
      {
        title: "Compare, document, and choose the next step.",
        body: "Repeat the baseline checks with comparable tasks. Note the review period, sample size, and limitations. Agree whether to refine the current workflow, test a different one, or wait. Publish customer stories and outcomes only with permission and verified supporting evidence.",
      },
    ],
  },
];
