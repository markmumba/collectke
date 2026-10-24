// Shared timings in seconds. Matches the existing --ease-brand CSS token.
export const motionTokens = {
  ease: [0.22, 1, 0.36, 1] as const,
  duration: { fast: 0.16, standard: 0.24, reveal: 0.5 },
  stagger: 0.06,
};

export const heroDemoSteps = [
  { label: "An invoice is on its way", duration: 800 },
  { label: "Preparing your invoice", duration: 1200 },
  { label: "Opening your workspace", duration: 900 },
  { label: "Karibu Supplies invoice added", duration: 950 },
  { label: "Nia Studio invoice added", duration: 950 },
  { label: "Maua Traders invoice added", duration: 1000 },
  { label: "Reviewing Karibu Supplies payment", duration: 1100 },
  { label: "Karibu Supplies paid", duration: 600 },
  { label: "Reviewing Nia Studio payment", duration: 1100 },
  { label: "Nia Studio paid", duration: 600 },
  { label: "Reviewing Maua Traders payment", duration: 1100 },
  { label: "Maua Traders paid", duration: 800 },
  { label: "Reconciling the payment records", duration: 1200 },
  { label: "Every payment reconciled", duration: 0 },
] as const;
