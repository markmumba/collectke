import { Brand } from "@/components/brand";
import { EarlyAccess } from "@/components/early-access";
import { site } from "@/config/site";
import { MobileNavigation } from "@/components/mobile-navigation";
import { NavMore } from "@/components/nav-more";
import Link from "next/link";

export function SiteHeader({ activeHref }: { activeHref?: string }) {
  return (
    <header className="site-header page-container" id="top">
      <Link href="/" aria-label="CollectKE home">
        <Brand />
      </Link>
      <nav aria-label="Main navigation" className="hidden items-center gap-5 lg:flex">
        {site.navigation.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            aria-current={activeHref === item.href ? "page" : undefined}
          >
            {item.label}
          </Link>
        ))}
        <NavMore activeHref={activeHref} />
      </nav>
      <div className="flex items-center gap-2 lg:gap-7">
        <span className="kenya-label hidden 2xl:flex">
          <span className="kenya-mark" aria-hidden="true" />
          Built for Kenya
        </span>
        <EarlyAccess className="button button-outline header-cta" compactLabel />
        <MobileNavigation activeHref={activeHref} />
      </div>
    </header>
  );
}
