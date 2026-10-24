import { Brand } from "@/components/brand";
import { EarlyAccess } from "@/components/early-access";
import { Icon } from "@/components/ui/icon";
import styles from "./page-ending.module.css";
import Link from "next/link";

const groups = [
  {
    title: "Explore",
    links: [
      { label: "Features", href: "/features" },
      { label: "How it works", href: "/how-it-works" },
      { label: "Case studies", href: "/case-studies" },
      { label: "The workspace", href: "/#walkthrough" },
    ],
  },
  {
    title: "Your team",
    links: [
      { label: "About CollectKE", href: "/about" },
      { label: "Who it’s for", href: "/who-its-for" },
      { label: "Control & clarity", href: "/#control" },
    ],
  },
] as const;

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className="page-container">
        <div className={styles.footerTop}>
          <div className={styles.footerIdentity}>
            <Link href="/" aria-label="CollectKE home">
              <Brand />
            </Link>
            <p>
              A clearer way from invoice to cash.
              <br />
              Built for Kenyan businesses.
            </p>
            <span className={styles.footerLocation}>
              <span className="kenya-mark" aria-hidden="true" />
              Kenya-first. Business-focused.
            </span>
          </div>
          <div className={styles.footerGroups}>
            {groups.map((group) => (
              <nav key={group.title} aria-label={group.title}>
                <h2>{group.title}</h2>
                {group.links.map((link) => (
                  <Link key={link.href} href={link.href}>
                    {link.label}
                  </Link>
                ))}
              </nav>
            ))}
            <nav aria-label="Get started">
              <h2>Get started</h2>
              <Link href="/pricing">Pricing</Link>
              <Link href="/contact">Contact us</Link>
              <Link href="/faq">Common questions</Link>
              <Link href="/privacy">Privacy policy</Link>
              <Link href="/terms">Terms of use</Link>
              <EarlyAccess className={styles.footerAction} arrow={false} />
            </nav>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>© 2026 CollectKE</p>
          <span>From first quote to final receipt.</span>
          <a href="#top">
            Back to top
            <Icon name="arrow" width="15" height="15" />
          </a>
        </div>
      </div>
    </footer>
  );
}
