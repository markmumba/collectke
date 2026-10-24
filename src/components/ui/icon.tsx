import type { SVGProps } from "react";

type IconName =
  "arrow" | "check" | "chevron" | "invoice" | "bank" | "clock" | "close" | "plus" | "spark";

const paths: Record<IconName, React.ReactNode> = {
  arrow: <path d="M4 10h12m-5-5 5 5-5 5" />,
  check: <path d="m5 10 3.2 3.2L15 6.5" />,
  chevron: <path d="m7 5 5 5-5 5" />,
  invoice: (
    <>
      <path d="M5 3h10v14l-2.5-1.5L10 17l-2.5-1.5L5 17V3Z" />
      <path d="M8 7h4M8 10h4" />
    </>
  ),
  bank: (
    <>
      <path d="m3 7 7-4 7 4H3Zm1 9h12M6 9v4m4-4v4m4-4v4" />
    </>
  ),
  clock: (
    <>
      <circle cx="10" cy="10" r="7" />
      <path d="M10 6v4l2.5 1.5" />
    </>
  ),
  close: <path d="m5 5 10 10M15 5 5 15" />,
  plus: <path d="M10 4v12M4 10h12" />,
  spark: <path d="m11 2-7 9h5l-1 7 8-10h-6l1-6Z" />,
};

export function Icon({ name, ...props }: SVGProps<SVGSVGElement> & { name: IconName }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {paths[name]}
    </svg>
  );
}
