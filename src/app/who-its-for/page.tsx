import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ClosingCta } from "@/components/closing-cta";
import { EarlyAccess } from "@/components/early-access";
import { Icon } from "@/components/ui/icon";
import { RoleExplorer } from "@/components/audience/role-explorer";
import styles from "./audience.module.css";

export const metadata: Metadata = {
  title: "Who it’s for — One shared picture for your team | CollectKE",
  description:
    "Explore how CollectKE is being built for owners, finance, and operations at Kenyan businesses that sell on invoice. Connected documents, payments, and customer follow-up.",
};

const benefits = [
  {
    icon: "bank",
    title: "A clearer view for owners.",
    text: "Know what’s outstanding and where your team needs to focus.",
  },
  {
    icon: "check",
    title: "More context for finance.",
    text: "Review payments and balances with the supporting records in reach.",
  },
  {
    icon: "invoice",
    title: "Better handovers from operations.",
    text: "Keep the agreed work, LPO, and delivery evidence connected.",
  },
  {
    icon: "clock",
    title: "One customer story.",
    text: "Pick up the work with the context the last person left behind.",
  },
] as const;

function SampleLabel() {
  return <span className={styles.sample}>PRODUCT CONCEPT · SAMPLE DATA</span>;
}

function CustomerCard({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`${styles.customerCard} ${compact ? styles.compact : ""}`}>
      <div className={styles.cardTop}>
        <span>
          <Icon name="invoice" /> CUSTOMER RECORD
        </span>
        <span className={styles.connected}>
          <Icon name="check" /> Linked
        </span>
      </div>
      <div className={styles.identity}>
        <span>MT</span>
        <div>
          Maua Traders<small>One sale. The full picture.</small>
        </div>
      </div>
      <div className={styles.balance}>
        <span>Outstanding balance</span>
        <strong>
          KES 40,000<small>INV-0022 / part paid</small>
        </strong>
      </div>
      <div className={styles.recordRows}>
        {[
          ["Documents", "QT · LPO · Delivery note"],
          ["Payment received", "KES 25,000"],
          ["Next step", "Review follow-up"],
        ].map(([label, value]) => (
          <div key={label}>
            <span>{label}</span>
            <span>{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function AudiencePage() {
  return (
    <>
      <SiteHeader activeHref="/who-its-for" />
      <main id="main-content">
        <section className={`page-container ${styles.hero}`} aria-labelledby="audience-page-title">
          <div className={styles.heroCopy}>
            <p className="eyebrow">FOR THE PEOPLE BEHIND GETTING PAID</p>
            <h1 id="audience-page-title">
              Different roles.
              <br />
              The same business.
              <br />
              <span className="gradient-text">One clear picture.</span>
            </h1>
            <p>
              For the owner checking balances, the finance team reviewing payments, and the people
              keeping the paperwork moving. Bring everyone closer to the same customer story.
            </p>
            <div className={styles.actions}>
              <EarlyAccess />
              <a className="button button-text" href="#your-role">
                Find your role <Icon name="arrow" />
              </a>
            </div>
            <span className={styles.availability}>
              Built for Kenyan businesses · Product in development
            </span>
          </div>
          <figure
            className={styles.heroVisual}
            aria-label="Owners, finance, and operations connected to a sample Maua Traders account with KES 40,000 outstanding"
          >
            <div className={styles.backPlate} aria-hidden="true" />
            <CustomerCard compact />
            <div className={styles.people}>
              {["Owner", "Finance", "Operations"].map((label, i) => (
                <span key={label}>
                  <i>{["OW", "FN", "OP"][i]}</i>
                  {label}
                </span>
              ))}
            </div>
            <figcaption>
              <SampleLabel />
            </figcaption>
          </figure>
        </section>
        <section
          className={`page-container ${styles.benefitsSection}`}
          aria-label="The people and businesses CollectKE is being built for"
        >
          <p className={styles.stripLabel}>FOR TEAMS THAT SELL ON INVOICE</p>
          <div className={styles.businessStrip}>
            <span>Suppliers & distributors</span>
            <span>Contractors</span>
            <span>Service businesses</span>
          </div>
          <div className={styles.benefits}>
            {benefits.map((b) => (
              <div key={b.title}>
                <span className={styles.benefitIcon}>
                  <Icon name={b.icon} />
                </span>
                <h2>{b.title}</h2>
                <p>{b.text}</p>
              </div>
            ))}
          </div>
        </section>
        <section className={styles.contextBand} aria-labelledby="context-title">
          <div className={`page-container ${styles.split}`}>
            <div className={styles.sectionCopy}>
              <p className="eyebrow">YOU ALREADY SHARE THE WORK</p>
              <h2 id="context-title">
                Now share
                <br />
                <span className="gradient-text">the context, too.</span>
              </h2>
              <p>
                Operations knows what was delivered. Finance knows what came in. The owner needs to
                know what is still owed.
              </p>
              <p>
                CollectKE is being built to connect those details around the customer, so a handover
                carries the story forward.
              </p>
            </div>
            <figure
              className={styles.phoneScene}
              aria-label="A sample customer record with a connected document handover from operations to finance"
            >
              <div className={styles.phone}>
                <div className={styles.phoneSpeaker} />
                <span className={styles.phoneBrand}>collectke.</span>
                <div className={styles.phoneCustomer}>
                  <span>MT</span>
                  <p>
                    Maua Traders<small>INV-0022</small>
                  </p>
                </div>
                <div className={styles.phoneBalance}>
                  <span>Still to collect</span>
                  <strong>KES 40,000</strong>
                  <span>After a KES 25,000 payment</span>
                </div>
                <div className={styles.phoneRow}>
                  <Icon name="invoice" />
                  <span>
                    LPO & delivery note<small>Connected to the sale</small>
                  </span>
                  <Icon name="check" />
                </div>
                <div className={styles.phoneRow}>
                  <Icon name="bank" />
                  <span>
                    Payment record<small>Ready for review</small>
                  </span>
                  <Icon name="check" />
                </div>
              </div>
              <div className={styles.handover}>
                <span>
                  <Icon name="check" /> DOCUMENTS CONNECTED
                </span>
                <strong>Ready for the next person.</strong>
                <p>Operations → Finance</p>
              </div>
              <figcaption>
                <SampleLabel />
              </figcaption>
            </figure>
          </div>
        </section>
        <section
          className={`page-container ${styles.controlSection}`}
          aria-labelledby="control-title"
        >
          <div className={styles.controlPanel}>
            <div>
              <p className={styles.lightEyebrow}>SAME RECORD. CLEAR RESPONSIBILITIES.</p>
              <h2 id="control-title">
                The context is shared.
                <br />
                <span>The judgement stays human.</span>
              </h2>
              <p>
                Give each person the information they need to move the work forward. A suggested
                payment match or a reminder draft should help your team make the next call.
              </p>
              <div className={styles.controlNote}>
                <Icon name="check" />
                <span>Designed around review, clear records, and considered follow-up.</span>
              </div>
            </div>
            <div className={styles.controlCards}>
              <div>
                <span>FOR THE PERSON REVIEWING</span>
                <h3>See why it belongs.</h3>
                <p>
                  Keep the payment amount, reference, and invoice together before confirming an
                  allocation.
                </p>
              </div>
              <div>
                <span>FOR THE PERSON FOLLOWING UP</span>
                <h3>Start with what’s already happened.</h3>
                <p>Check payments and the remaining balance before reviewing the reminder.</p>
              </div>
            </div>
          </div>
        </section>
        <RoleExplorer />
        <section className={`page-container ${styles.twoWays}`} aria-labelledby="team-title">
          <div className={styles.sectionCopy}>
            <p className="eyebrow">A SMALL TEAM CAN WEAR MANY HATS</p>
            <h2 id="team-title">
              One person or a team.
              <br />
              <span className="gradient-text">The work still needs context.</span>
            </h2>
            <p>
              Whether you handle the whole journey or pass it between people, the customer record
              should be easy to follow.
            </p>
          </div>
          <div className={styles.twoCards}>
            <article>
              <span>WHEN YOU HANDLE IT YOURSELF</span>
              <h3>Less switching between records.</h3>
              <p>
                Move from checking what’s owed to reviewing a payment or preparing a follow-up, with
                the invoice and documents nearby.
              </p>
              <div>
                <Icon name="invoice" />
                <span>One person. The whole customer story.</span>
              </div>
            </article>
            <article>
              <span>WHEN YOU SHARE THE WORK</span>
              <h3>A clearer next handover.</h3>
              <p>
                Keep the documents, payments, and account context connected so the next person can
                see where things stand.
              </p>
              <div>
                <Icon name="check" />
                <span>Different responsibilities. Connected records.</span>
              </div>
            </article>
          </div>
        </section>
        <section className={styles.foundation} aria-labelledby="foundation-title">
          <div className="page-container">
            <div className={styles.sectionCopy}>
              <p className="eyebrow">THE COMMON GROUND</p>
              <h2 id="foundation-title">
                Every role touches it.
                <br />
                <span className="gradient-text">Keep the record connected.</span>
              </h2>
              <p>
                The planned workspace brings the everyday details around getting paid into view.
              </p>
            </div>
            <div className={styles.foundationGrid}>
              {[
                {
                  icon: "invoice",
                  title: "The work behind the invoice",
                  text: "Keep quotations, LPOs, and delivery evidence alongside the agreed sale.",
                },
                {
                  icon: "bank",
                  title: "The balance behind the conversation",
                  text: "See payment allocations and the remaining amount before asking a customer to pay.",
                },
                {
                  icon: "clock",
                  title: "The next step, with context",
                  text: "Review follow-up using the right invoice and the information already on the account.",
                },
                {
                  icon: "check",
                  title: "The history behind the handover",
                  text: "Keep the documents and activity connected when another teammate picks up the work.",
                },
              ].map((item) => (
                <div key={item.title}>
                  <Icon name={item.icon as "invoice" | "bank" | "clock" | "check"} />
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className={`page-container ${styles.scenarios}`} aria-labelledby="scenarios-title">
          <div className={styles.sectionHeading}>
            <div>
              <p className="eyebrow">FAMILIAR WORK. DIFFERENT BUSINESSES.</p>
              <h2 id="scenarios-title">
                Built around
                <br />
                <span className="gradient-text">real business days.</span>
              </h2>
            </div>
            <p>
              Illustrative use cases for the businesses we want to learn from during early access.
            </p>
          </div>
          <div className={styles.scenarioGrid}>
            {[
              [
                "SUPPLIERS & DISTRIBUTORS",
                "From delivery to the balance due.",
                "Keep the LPO, delivery note, and invoice connected when the customer asks for supporting records.",
                "LPO → Delivery → Invoice",
              ],
              [
                "CONTRACTORS",
                "A record for the agreed work.",
                "Keep the quotation and supporting documents with the invoice, then track payments against the remaining balance.",
                "Agreed work → Invoice → Payment",
              ],
              [
                "SERVICE BUSINESSES",
                "A clearer customer follow-up.",
                "See the invoice and payment history before the next conversation about what is still outstanding.",
                "Invoice → Follow-up → Receipt",
              ],
            ].map(([label, title, text, path]) => (
              <article key={label}>
                <span>{label}</span>
                <h3>{title}</h3>
                <p>{text}</p>
                <div>{path}</div>
              </article>
            ))}
          </div>
          <p className={styles.scopeNote}>
            Examples describe intended workflows, rather than existing customers or verified
            results.
          </p>
        </section>
        <section className={styles.handoverBand} aria-labelledby="handover-title">
          <div className={`page-container ${styles.handoverExample}`}>
            <div>
              <p className="eyebrow">A HANDOVER SHOULD CARRY THE STORY</p>
              <h2 id="handover-title">
                “Which invoice is this for?”
                <br />
                <span className="gradient-text">Start one step further along.</span>
              </h2>
              <p>
                Keep the reference, supporting documents, and payment history with the customer
                record, so the next person has somewhere useful to begin.
              </p>
              <span className={styles.exampleLabel}>ILLUSTRATIVE TEAM SCENARIO</span>
            </div>
            <div className={styles.handoverTrail}>
              {[
                ["OP", "Operations", "Delivery note linked to INV-0022"],
                ["FN", "Finance", "Payment reviewed against the same invoice"],
                ["OW", "Owner", "Remaining balance visible on the account"],
              ].map(([initials, role, action]) => (
                <div key={role}>
                  <span>{initials}</span>
                  <p>
                    {role}
                    <small>{action}</small>
                  </p>
                  <Icon name="check" />
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className={styles.setupBand} aria-labelledby="setup-title">
          <div className={`page-container ${styles.setup}`}>
            <div>
              <p className={styles.lightEyebrow}>START WITH THE PEOPLE DOING THE WORK</p>
              <h2 id="setup-title">
                Tell us where
                <br />
                <span>the handover gets stuck.</span>
              </h2>
              <p>
                Share how your business handles invoices, incoming payments, and customer follow-up.
                Help shape a starting point that fits your team.
              </p>
              <EarlyAccess className="button button-outline" />
            </div>
            <div className={styles.setupCard}>
              <span>AN EARLY-ACCESS CONVERSATION</span>
              {[
                "Who handles the documents?",
                "Who reviews incoming payments?",
                "Who follows up with the customer?",
              ].map((q, i) => (
                <div key={q}>
                  <span>0{i + 1}</span>
                  <p>{q}</p>
                </div>
              ))}
              <p>We’ll discuss fit and availability before onboarding.</p>
            </div>
          </div>
        </section>
        <section className={`page-container ${styles.related}`} aria-labelledby="related-title">
          <p className="eyebrow">SEE THE WORKSPACE IN CONTEXT</p>
          <h2 id="related-title">
            Your team, connected.
            <br />
            <span className="gradient-text">See the work behind it.</span>
          </h2>
          <div>
            <Link href="/features">
              <span>
                <Icon name="invoice" width="32" height="32" />
                DOCUMENTS / PAYMENTS / FOLLOW-UP
              </span>
              <h3>Explore the planned features.</h3>
              <p>See the capabilities being built around your customer records.</p>
              <strong>
                View features <Icon name="arrow" />
              </strong>
            </Link>
            <Link href="/how-it-works">
              <span>
                <Icon name="bank" width="32" height="32" />
                FIRST QUOTE → FINAL RECEIPT
              </span>
              <h3>Follow one invoice through.</h3>
              <p>See how the documents, payments, and next steps connect.</p>
              <strong>
                See how it works <Icon name="arrow" />
              </strong>
            </Link>
          </div>
        </section>
        <ClosingCta />
      </main>
      <SiteFooter />
    </>
  );
}
