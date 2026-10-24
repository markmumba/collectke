import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Icon } from "@/components/ui/icon";
import { privacy } from "@/config/privacy";
import styles from "@/components/legal/legal.module.css";

export const metadata: Metadata = {
  title: "Privacy policy — How the website handles your information | CollectKE",
  description:
    "A draft notice describing information handled by the CollectKE marketing website, early-access requests, contact enquiries, privacy choices, and details to confirm before launch.",
  robots: { index: false, follow: true },
};
const contents = [
  ["scope", "Who this notice covers"],
  ["information", "Information you share"],
  ["purposes", "Why information is processed"],
  ["delivery", "Form delivery & storage"],
  ["technical-data", "Technical data & cookies"],
  ["providers", "Providers & international transfers"],
  ["retention", "How long information is kept"],
  ["safeguards", "Safeguards"],
  ["rights", "Your privacy rights"],
  ["contact", "Privacy contact"],
  ["changes", "Updates to this notice"],
];
const actUrl =
  "https://www.odpc.go.ke/wp-content/uploads/2024/02/TheDataProtectionAct__No24of2019.pdf";

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <header className={`page-container ${styles.heading}`}>
          <p className="eyebrow">YOUR INFORMATION, EXPLAINED</p>
          <h1>Privacy policy.</h1>
          <p>How the CollectKE marketing website handles the information you choose to share.</p>
          <div className={styles.metadata}>
            <span>
              <i />
              {privacy.status}
            </span>
            <span>
              Reviewed <time dateTime={privacy.reviewedDate}>{privacy.reviewedOn}</time>
            </span>
            <span>Scope: marketing website</span>
          </div>
        </header>
        <nav className={`page-container ${styles.policyNav}`} aria-label="Legal documents">
          <Link href="/privacy" aria-current="page">
            Privacy policy
          </Link>
          <Link href="/terms">Terms of use</Link>
        </nav>
        <div className={`page-container ${styles.draftNotice}`} role="note">
          <Icon name="invoice" />
          <div>
            <strong>A draft to review before public launch.</strong>
            <p>
              The legal operating entity, processing bases, hosting and delivery providers, and
              retention schedule still need to be confirmed. This page describes the website as
              currently implemented. It will be updated when those details are settled.
            </p>
          </div>
        </div>
        <section className={`page-container ${styles.summary}`} aria-label="Privacy at a glance">
          <div>
            <Icon name="invoice" />
            <h2>What you share.</h2>
            <p>
              Your name, email, business details, and the message or early-access request you send.
            </p>
          </div>
          <div>
            <Icon name="clock" />
            <h2>Why you share it.</h2>
            <p>
              To ask about CollectKE, discuss your workflow, or request an early-access
              conversation.
            </p>
          </div>
          <div>
            <Icon name="check" />
            <h2>Where to ask.</h2>
            <p>
              For privacy questions or requests, email{" "}
              <a href={`mailto:${privacy.contactEmail}`}>{privacy.contactEmail}</a>.
            </p>
          </div>
        </section>
        <div className={`page-container ${styles.layout}`}>
          <aside className={styles.sidebar}>
            <p>ON THIS PAGE</p>
            <nav aria-label="Privacy policy sections">
              {contents.map(([id, label], i) => (
                <a key={id} href={`#${id}`}>
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  {label}
                </a>
              ))}
            </nav>
            <a className={styles.sidebarEmail} href={`mailto:${privacy.contactEmail}`}>
              Privacy enquiries
              <Icon name="arrow" width="14" height="14" />
            </a>
          </aside>
          <div className={styles.body}>
            <section id="scope" aria-labelledby="scope-title">
              <span className={styles.number}>01 / SCOPE</span>
              <h2 id="scope-title">Who this notice covers.</h2>
              <p>
                CollectKE is the working product name for an invoice-to-cash workspace being
                developed for Kenyan businesses. This notice covers the marketing website, its
                early-access form, and its contact-enquiry forms.
              </p>
              <p>
                The legal name and postal contact of the person or entity responsible for this
                website are awaiting confirmation. Privacy enquiries can be sent to{" "}
                <a href={`mailto:${privacy.contactEmail}`}>{privacy.contactEmail}</a>.
              </p>
              <p>
                The product previews and business stories use illustrative data. The marketing
                website currently has no customer login, invoice upload, bank connection, or
                payment-processing feature. A future product or pilot will need its own confirmed
                privacy information before handling business records.
              </p>
            </section>
            <section id="information" aria-labelledby="information-title">
              <span className={styles.number}>02 / WHAT YOU PROVIDE</span>
              <h2 id="information-title">Information you share.</h2>
              <p>
                You can browse without completing a form. If you choose to make a request, the form
                asks for the details below.
              </p>
              <div className={styles.tableWrap}>
                <table>
                  <caption>Information requested by each website form</caption>
                  <thead>
                    <tr>
                      <th scope="col">Form</th>
                      <th scope="col">Information</th>
                      <th scope="col">Required?</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">Early access</th>
                      <td>Name, email address, business name</td>
                      <td>All three fields</td>
                    </tr>
                    <tr>
                      <th scope="row">Contact enquiry</th>
                      <td>Name, email address, message, enquiry topic</td>
                      <td>Name, email, and message; topic comes from the card you select</td>
                    </tr>
                    <tr>
                      <th scope="row">Contact enquiry</th>
                      <td>Business name</td>
                      <td>Optional</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                The forms also include an empty anti-spam field. A submission that fills it is
                rejected. Please keep payment credentials, identification documents, and private
                customer records out of free-text messages.
              </p>
            </section>
            <section id="purposes" aria-labelledby="purposes-title">
              <span className={styles.number}>03 / PURPOSES</span>
              <h2 id="purposes-title">Why information is processed.</h2>
              <ul>
                <li>To validate and deliver the request you choose to send.</li>
                <li>To respond to your enquiry or discuss early access.</li>
                <li>To understand the workflow your business wants to discuss.</li>
                <li>To reject invalid or automated submissions and troubleshoot delivery.</li>
              </ul>
              <p>
                The site has no newsletter signup, advertising integration, or automated marketing
                campaign. Asking a question or reading this notice does not enrol you in a separate
                mailing list.
              </p>
              <div className={styles.reviewNote}>
                <strong>To confirm before launch</strong>
                <p>
                  The responsible operator must document the applicable lawful basis for each
                  purpose, including responding to requests, early-access follow-up, and security
                  processing. This draft does not assign a basis without that review.
                </p>
              </div>
            </section>
            <section id="delivery" aria-labelledby="delivery-title">
              <span className={styles.number}>04 / WHAT HAPPENS WHEN YOU SUBMIT</span>
              <h2 id="delivery-title">Form delivery and storage.</h2>
              <p>
                Submitting a form sends its fields to the website server for validation. When
                delivery is configured, the validated details are forwarded to the chosen
                message-delivery service. A success message appears only after that service accepts
                the request.
              </p>
              <p>
                If delivery is unavailable or fails, the form shows an error and keeps your entries
                available in the current page so you can review or retry them. An unavailable
                response does not mean the server never received the fields for validation.
              </p>
              <p>
                The application currently has no database for storing website enquiries. The form
                code does not save entries to browser local storage or session storage. Your
                browser’s own autofill or page-restoration settings may behave separately. Any
                storage in hosting logs, email, or a delivery service must be confirmed with the
                chosen providers.
              </p>
            </section>
            <section id="technical-data" aria-labelledby="technical-title">
              <span className={styles.number}>05 / BROWSING THE WEBSITE</span>
              <h2 id="technical-title">Technical data and cookies.</h2>
              <p>
                A web server receives connection and request information when you visit, such as an
                IP address, requested page, and browser headers. The hosting provider’s access logs,
                security services, and retention settings have not yet been selected or verified.
              </p>
              <p>
                The current application code does not set cookies, use analytics or advertising
                scripts, or persist browsing preferences in browser storage. The Inter font is
                bundled with the website rather than loaded from a third-party font service.
              </p>
              <p>
                If hosting services, analytics, optional cookies, or other tools are added, this
                notice and any required privacy choices will need to be updated before those tools
                are enabled.
              </p>
            </section>
            <section id="providers" aria-labelledby="providers-title">
              <span className={styles.number}>06 / WHO MAY RECEIVE INFORMATION</span>
              <h2 id="providers-title">Providers and international transfers.</h2>
              <p>
                Website hosting and configured enquiry-delivery providers may receive information
                needed to serve pages or accept your request. Their identities, processing
                locations, sub-processors, and contractual arrangements remain to be confirmed.
              </p>
              <p>
                Processing outside Kenya may be subject to the transfer requirements in Kenyan
                data-protection law. Provider locations and any necessary safeguards must be
                reviewed before launch. See{" "}
                <a href={`${actUrl}#page=32`}>
                  the Data Protection Act’s international-transfer provisions
                </a>
                .
              </p>
              <p>
                External links, including links to official guidance, open websites with their own
                privacy practices. A link to an external website does not send your form submission
                to that site.
              </p>
            </section>
            <section id="retention" aria-labelledby="retention-title">
              <span className={styles.number}>07 / RETENTION</span>
              <h2 id="retention-title">How long information is kept.</h2>
              <p>
                The retention schedule for accepted enquiries, early-access requests, service logs,
                and backups has not yet been agreed. This draft makes no promise that information
                will be deleted after a particular number of days.
              </p>
              <p>
                Kenyan law generally limits retention to what is reasonably necessary for the
                processing purpose, subject to applicable exceptions. The final schedule should
                reflect the actual purposes and provider arrangements. See{" "}
                <a href={`${actUrl}#page=26`}>section 39 of the Data Protection Act</a>.
              </p>
              <p>
                You can ask about information associated with your email address by contacting the
                privacy address below.
              </p>
            </section>
            <section id="safeguards" aria-labelledby="safeguards-title">
              <span className={styles.number}>08 / SAFEGUARDS</span>
              <h2 id="safeguards-title">Measures in the current website.</h2>
              <p>
                The form handlers validate input, check that submissions come from the website’s
                origin, include an anti-spam field, and restrict configured delivery destinations to
                HTTPS. The application handlers do not deliberately print form contents to their
                logs.
              </p>
              <p>
                Public HTTPS hosting, provider access controls, logging practices, backup handling,
                and host-level rate limiting still need to be configured or verified. These code
                measures alone are not a claim that the deployed service is certified or that every
                security risk is eliminated.
              </p>
            </section>
            <section id="rights" aria-labelledby="rights-title">
              <span className={styles.number}>09 / YOUR CHOICES</span>
              <h2 id="rights-title">Your privacy rights.</h2>
              <p>
                Kenyan law includes rights to information about processing, access to personal data,
                objection to processing, and correction or deletion of false or misleading data.
                Other rights may apply depending on the circumstances. See{" "}
                <a href={`${actUrl}#page=19`}>the Data Protection Act</a> and the{" "}
                <a href="https://www.odpc.go.ke/rights-of-a-data-subject/">
                  ODPC’s guidance on data-subject rights
                </a>
                .
              </p>
              <p>
                For a request, email{" "}
                <a href={`mailto:${privacy.contactEmail}`}>{privacy.contactEmail}</a> with a brief
                explanation and the email address used to contact CollectKE. Appropriate identity
                checks may be needed before information is disclosed or changed; do not send
                identity documents with your initial enquiry.
              </p>
              <p>
                You may also raise a complaint with Kenya’s{" "}
                <a href="https://www.odpc.go.ke/">Office of the Data Protection Commissioner</a>.
                Applicable legal limits or obligations may affect how a particular request is
                handled.
              </p>
            </section>
            <section id="contact" aria-labelledby="contact-title">
              <span className={styles.number}>10 / CONTACT</span>
              <h2 id="contact-title">Privacy questions and requests.</h2>
              <p>The privacy email supplied for CollectKE is:</p>
              <a className={styles.emailCard} href={`mailto:${privacy.contactEmail}`}>
                <span>
                  <Icon name="invoice" />
                  <span>
                    PRIVACY CONTACT<strong>{privacy.contactEmail}</strong>
                  </span>
                </span>
                <Icon name="arrow" />
              </a>
              <p>
                The legal operator identity and postal address will be added once confirmed. For
                general product questions, you can also visit the{" "}
                <Link href="/contact">Contact page</Link>. Its enquiry forms report an unavailable
                state until message delivery is configured.
              </p>
            </section>
            <section id="changes" aria-labelledby="changes-title">
              <span className={styles.number}>11 / UPDATES</span>
              <h2 id="changes-title">Updates to this notice.</h2>
              <p>
                This draft was reviewed on{" "}
                <time dateTime={privacy.reviewedDate}>{privacy.reviewedOn}</time>. It is not yet an
                effective final policy. The notice should be updated when the operator details,
                delivery and hosting services, or information-handling practices are confirmed or
                changed.
              </p>
              <div className={styles.pending}>
                <h3>Details still to confirm</h3>
                <ul>
                  <li>Legal operator name and postal contact.</li>
                  <li>Hosting, enquiry-delivery providers, and processing locations.</li>
                  <li>Lawful bases for the stated purposes.</li>
                  <li>Retention periods, deletion process, and backup handling.</li>
                  <li>Operational privacy-request and security procedures.</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
        <section className={`page-container ${styles.help}`} aria-labelledby="privacy-help-title">
          <div>
            <p className="eyebrow">A QUESTION ABOUT YOUR INFORMATION?</p>
            <h2 id="privacy-help-title">Start with a conversation.</h2>
            <p>
              Use the privacy address for questions about this notice or your personal information.
            </p>
          </div>
          <a className="button button-primary" href={`mailto:${privacy.contactEmail}`}>
            Email privacy enquiries
            <Icon name="arrow" />
          </a>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
