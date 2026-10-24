import type { Metadata } from "next";
import "@fontsource-variable/inter";
import "./globals.css";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "CollectKE — Know what you’re owed. Keep cash moving.",
  description: site.description,
  applicationName: site.name,
  openGraph: {
    title: "CollectKE — Keep cash moving.",
    description: site.description,
    type: "website",
    locale: "en_KE",
    siteName: site.name,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-KE">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
