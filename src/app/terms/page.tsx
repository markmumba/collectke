import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Icon } from "@/components/ui/icon";
import { terms } from "@/config/terms";
import styles from "@/components/legal/legal.module.css";

export const metadata: Metadata = {
  title: "Terms of use — Using the CollectKE website",
  description:
    "Draft terms for the CollectKE marketing website, covering responsible use, enquiries, early-access requests, illustrative content, and terms still to confirm before launch.",
  robots: { index: false, follow: true },
};
const contents = [
  ["scope", "Website scope & operator"],
  ["status", "Status of this draft"],
  ["use", "Responsible website use"],
  ["content", "Website content & permissions"],
  ["enquiries", "Messages & enquiries"],
  ["early-access", "Early access & future services"],
  ["examples", "Previews, examples & guides"],
  ["privacy", "Your information"],
  ["availability", "Availability & external links"],
  ["rights", "Rights & legal terms to confirm"],
  ["updates", "Updates & contact"],
];

export default function TermsPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <header className={`page-container ${styles.heading}`}>
          <p className="eyebrow">USING THE WEBSITE, EXPLAINED</p>
          <h1>Terms of use.</h1>
          <p>
            A clear starting point for exploring CollectKE, getting in touch, and requesting early
            access.
          </p>
          <div className={styles.metadata}>
            <span>
              <i />
              {terms.status}
            </span>
            <span>
              Reviewed <time dateTime={terms.reviewedDate}>{terms.reviewedOn}</time>
            </span>
            <span>Scope: marketing website</span>
          </div>
        </header>
        <nav className={`page-container ${styles.policyNav}`} aria-label="Legal documents">
          <Link href="/privacy">Privacy policy</Link>
          <Link href="/terms" aria-current="page">
            Terms of use
          </Link>
        </nav>
        <div className={`page-container ${styles.draftNotice}`} role="note">
          <Icon name="invoice" />
          <div>
            <strong>A website-terms draft for review.</strong>
            <p>
              The legal operator and final contractual wording still need confirmation. This draft
              is not yet an effective agreement. It does not establish paid product terms, a
              liability cap, or a dispute-resolution arrangement.
            </p>
          </div>
        </div>
        <section
          className={`page-container ${styles.summary}`}
          aria-label="Website terms at a glance"
        >
          <div>
            <Icon name="invoice" />
            <h2>Explore the product.</h2>
            <p>
              Read about the workspace being built, its intended workflows, and the people it is
              designed for.
            </p>
          </div>
          <div>
            <Icon name="clock" />
            <h2>Start a conversation.</h2>
            <p>
              Send an enquiry or request early access. A request alone does not create a product
              account or subscription.
            </p>
          </div>
          <div>
            <Icon name="check" />
            <h2>Know the scope.</h2>
            <p>
              Product previews are illustrative. Availability and any future service agreement will
              need separate confirmation.
            </p>
          </div>
        </section>
        <div className={`page-container ${styles.layout}`}>
          <aside className={styles.sidebar}>
            <p>ON THIS PAGE</p>
            <nav aria-label="Terms of use sections">
              {contents.map(([id, label], i) => (
                <a key={id} href={`#${id}`}>
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  {label}
                </a>
              ))}
            </nav>
            <Link className={styles.sidebarEmail} href="/contact">
              Questions about the website
              <Icon name="arrow" width="14" height="14" />
            </Link>
          </aside>
          <div className={styles.body}>
            <section id="scope" aria-labelledby="scope-title">
              <span className={styles.number}>01 / SCOPE</span>
              <h2 id="scope-title">Website scope and operator.</h2>
              <p>
                CollectKE is the working product name for an invoice-to-cash workspace being
                developed for Kenyan businesses. This page concerns the marketing website, its
                published information, contact forms, and early-access request form.
              </p>
              <p>
                The legal name and postal contact of the responsible operator are awaiting
                confirmation. General enquiries can be started from the{" "}
                <Link href="/contact">Contact page</Link>.
              </p>
              <p>
                The marketing website currently has no customer login, subscription checkout,
                invoice upload, bank connection, or payment-processing feature. Any future product,
                pilot, integration, or paid service will need its own confirmed scope and
                appropriate agreement.
              </p>
            </section>
            <section id="status" aria-labelledby="status-title">
              <span className={styles.number}>02 / DOCUMENT STATUS</span>
              <h2 id="status-title">Status of this draft.</h2>
              <p>
                This document is provided for review while the website and operating arrangements
                are being prepared. No effective date or binding acceptance process has been set for
                these terms.
              </p>
              <p>
                Browsing this draft or submitting the current enquiry form is not presented as
                acceptance of a paid subscription, a pilot commitment, or the unresolved legal
                provisions listed below. Any final terms should clearly identify the contracting
                party, their scope, and how they take effect.
              </p>
            </section>
            <section id="use" aria-labelledby="use-title">
              <span className={styles.number}>03 / RESPONSIBLE USE</span>
              <h2 id="use-title">Use the website responsibly.</h2>
              <p>
                The proposed website-use rules are straightforward: use the pages and forms for
                genuine enquiries and lawful purposes. In particular:
              </p>
              <ul>
                <li>
                  Do not impersonate someone or misrepresent your relationship with a business.
                </li>
                <li>Do not submit spam, malicious code, threats, or unlawful material.</li>
                <li>
                  Do not attempt unauthorised access to systems or records, bypass form protections,
                  or disrupt the website.
                </li>
                <li>
                  Do not submit another person’s confidential records or personal information
                  without appropriate authority.
                </li>
              </ul>
              <p>
                Use the <Link href="/contact">Contact page</Link> to report a website issue.
                Describe what you observed without attempting further access to private information.
              </p>
            </section>
            <section id="content" aria-labelledby="content-title">
              <span className={styles.number}>04 / CONTENT</span>
              <h2 id="content-title">Website content and permissions.</h2>
              <p>
                You may browse the public pages and share links to them. Text, illustrations,
                branding, and other material may be subject to intellectual-property rights held by
                the operator or other rights holders.
              </p>
              <p>
                Ask before republishing substantial website content, using CollectKE branding for a
                commercial purpose, or presenting yourself as an approved partner. Keep attribution
                and rights notices with material you are permitted to share. Any rights or
                exceptions provided by applicable law remain relevant.
              </p>
              <p>
                Sending an enquiry does not transfer ownership of your business records or give
                permission to publish your name, logo, message, or customer story as a testimonial.
                Publication of a real business story or results should be agreed separately.
              </p>
            </section>
            <section id="enquiries" aria-labelledby="enquiries-title">
              <span className={styles.number}>05 / GETTING IN TOUCH</span>
              <h2 id="enquiries-title">Messages and enquiries.</h2>
              <p>
                Provide contact information you are entitled to use and enough context for the
                enquiry to make sense. You are responsible for the accuracy and appropriateness of
                the details you choose to send.
              </p>
              <p>
                Please leave out payment credentials, identity documents, and private customer
                records. The contact forms are intended for a brief conversation about the product,
                your workflow, or a general question.
              </p>
              <p>
                Form submissions are validated by the website server. Where delivery is configured,
                a success message means the chosen delivery service accepted the request. It is not
                an onboarding approval or a promise of a response within a particular time. When
                delivery is unavailable or fails, the form reports that state and preserves the
                entries in the current page.
              </p>
            </section>
            <section id="early-access" aria-labelledby="access-title">
              <span className={styles.number}>06 / EARLY ACCESS</span>
              <h2 id="access-title">Early access and future services.</h2>
              <p>
                An early-access request expresses interest in CollectKE. It does not guarantee an
                invitation, a launch date, a particular feature, a price, or free access to a future
                service.
              </p>
              <p>
                Before a pilot or product service begins, the team and business should confirm fit,
                availability, responsibilities, any charges, and the handling of business data. Any
                paid service should have its own clear commercial and cancellation arrangements.
              </p>
              <p>
                This website does not collect a subscription payment or authorise CollectKE to move
                money on your behalf. Provider-dependent capabilities, including payment
                connectivity and additional messaging channels, remain subject to the relevant
                onboarding and availability requirements.
              </p>
            </section>
            <section id="examples" aria-labelledby="examples-title">
              <span className={styles.number}>07 / ILLUSTRATIVE MATERIAL</span>
              <h2 id="examples-title">Previews, examples, and guides.</h2>
              <p>
                Product illustrations, sample balances, and example document references show
                intended workflows. The business stories currently published on the Case studies
                page are labelled as illustrative; their figures and scenarios are not verified
                customer results.
              </p>
              <p>
                Proposed pilot checks describe what could be measured. They do not establish that a
                business collected cash faster, reduced costs, or achieved a particular outcome.
              </p>
              <p>
                Guides provide general workflow ideas for discussion. Check the details against your
                business’s circumstances, records, and professional advice where appropriate before
                using them for financial, tax, or legal decisions.
              </p>
            </section>
            <section id="privacy" aria-labelledby="privacy-title">
              <span className={styles.number}>08 / PERSONAL INFORMATION</span>
              <h2 id="privacy-title">Your information.</h2>
              <p>
                The <Link href="/privacy">Privacy policy</Link> explains the information requested
                by the forms, the current delivery and storage behaviour, privacy contacts, and
                operating details still to be confirmed.
              </p>
              <p>
                These website terms do not replace that notice or give permission for unrelated
                marketing or publication of your personal information. A future product handling
                invoices, customer records, or payment information will need its own confirmed
                data-handling arrangements.
              </p>
              <Link className={styles.readMore} href="/privacy">
                Read the privacy policy
                <Icon name="arrow" width="15" height="15" />
              </Link>
            </section>
            <section id="availability" aria-labelledby="availability-title">
              <span className={styles.number}>09 / ACCESS & LINKS</span>
              <h2 id="availability-title">Availability and external links.</h2>
              <p>
                Website content and planned features may change as CollectKE develops. Pages or
                forms may be temporarily unavailable during maintenance or because a delivery
                service is not configured. Product descriptions should be confirmed during an
                onboarding conversation before they become part of a service agreement.
              </p>
              <p>
                Links to external guidance or other websites lead to services with their own
                information, terms, and privacy practices. Review those materials before relying on
                an external service or sharing information with it.
              </p>
              <p>
                If you find incorrect information or a broken link, let us know through the{" "}
                <Link href="/contact">Contact page</Link>.
              </p>
            </section>
            <section id="rights" aria-labelledby="rights-title">
              <span className={styles.number}>10 / LEGAL REVIEW</span>
              <h2 id="rights-title">Rights and legal terms to confirm.</h2>
              <p>
                This draft is not intended to exclude rights or remedies that cannot lawfully be
                excluded. Kenya’s consumer-protection framework includes the{" "}
                <a href="https://www.parliament.go.ke/sites/default/files/2017-05/ConsumerProtectionActNo46of2012.pdf">
                  Consumer Protection Act, 2012
                </a>
                . The final terms need to be reviewed for the actual operator, website activities,
                and any services offered.
              </p>
              <div className={styles.pending}>
                <h3>Still to be settled before final publication</h3>
                <ul>
                  <li>Legal operator name, postal contact, and effective date.</li>
                  <li>Final content-use permissions and any service warranties.</li>
                  <li>Any lawful allocation or limitation of liability.</li>
                  <li>Governing-law wording and a suitable dispute-resolution process.</li>
                  <li>How the final terms are presented, accepted where necessary, and updated.</li>
                </ul>
              </div>
              <p>
                Liability limits, dispute procedures, and any waiver language remain subject to
                review. Commercial product terms should be prepared separately when the service and
                operating arrangements are confirmed.
              </p>
            </section>
            <section id="updates" aria-labelledby="updates-title">
              <span className={styles.number}>11 / UPDATES & CONTACT</span>
              <h2 id="updates-title">Updates and questions.</h2>
              <p>
                This draft was reviewed on{" "}
                <time dateTime={terms.reviewedDate}>{terms.reviewedOn}</time>. The review date
                records when this version was prepared; it is not an effective date for a final
                agreement.
              </p>
              <p>
                The page should be updated when the operator, website scope, or proposed legal terms
                are confirmed. Questions about the website can be raised from the{" "}
                <Link href="/contact">Contact page</Link>. Its enquiry forms explain when message
                delivery is unavailable.
              </p>
            </section>
          </div>
        </div>
        <section className={`page-container ${styles.help}`} aria-labelledby="terms-help-title">
          <div>
            <p className="eyebrow">A QUESTION ABOUT USING THE WEBSITE?</p>
            <h2 id="terms-help-title">Let’s make it clearer.</h2>
            <p>
              Visit Contact for product and website enquiries, or read the privacy notice for
              information-handling questions.
            </p>
          </div>
          <Link className="button button-primary" href="/contact">
            Contact CollectKE
            <Icon name="arrow" />
          </Link>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
