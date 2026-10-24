import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { studies } from "@/content/case-studies";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ClosingCta } from "@/components/closing-cta";
import { Icon } from "@/components/ui/icon";
import { StoryVisual } from "@/components/case-studies/story-visual";
import styles from "@/components/case-studies/case-studies.module.css";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() {
  return studies.map((study) => ({ slug: study.slug }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = studies.find((s) => s.slug === slug);
  return {
    title: study ? `${study.title} | CollectKE` : "Story not found | CollectKE",
    description: study?.description,
  };
}
export default async function StudyPage({ params }: Props) {
  const { slug } = await params;
  const study = studies.find((s) => s.slug === slug);
  if (!study) notFound();
  const related = studies.filter((s) => s.slug !== slug).slice(0, 2);
  return (
    <>
      <SiteHeader activeHref="/case-studies" />
      <main id="main-content">
        <header className={`page-container ${styles.articleHeader}`}>
          <Link className={styles.backLink} href="/case-studies">
            <Icon name="arrow" width="15" height="15" />
            All stories & guides
          </Link>
          <div className={styles.cardLabels}>
            <span className={`${styles.tag} ${styles[study.category.toLowerCase()]}`}>
              {study.category}
            </span>
            <span>
              {study.example ? "Illustrative story" : "Practical guide"} · {study.readTime}
            </span>
          </div>
          <h1>{study.title}</h1>
          <p>{study.description}</p>
          <span className={styles.meta}>{study.audience} / CollectKE onboarding notes</span>
        </header>
        <div className={`page-container ${styles.articleVisual}`}>
          <StoryVisual variant={study.visual} />
        </div>
        <div className={`page-container ${styles.articleLayout}`}>
          <aside>
            <span>IN THIS {study.example ? "STORY" : "GUIDE"}</span>
            <nav aria-label="On this page">
              {study.sections.map((section, i) => (
                <a key={section.title} href={`#section-${i + 1}`}>
                  {section.title}
                </a>
              ))}
              {study.measures ? <a href="#measurement">What we would measure</a> : null}
            </nav>
            <Link className={styles.readLink} href="/how-it-works">
              See the workflow
              <Icon name="arrow" width="14" height="14" />
            </Link>
          </aside>
          <article className={styles.articleBody}>
            <p className={styles.articleIntro}>{study.introduction}</p>
            {study.sections.map((section, i) => (
              <section key={section.title} id={`section-${i + 1}`}>
                <span className={styles.sectionNumber}>0{i + 1} /</span>
                <h2>{section.title}</h2>
                <p>{section.body}</p>
                {section.points ? (
                  <ul>
                    {section.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
            {study.measures ? (
              <section id="measurement">
                <span className={styles.sectionNumber}>PILOT REVIEW</span>
                <h2>What we would measure.</h2>
                <p>
                  These are proposed checks, not achieved results. Agree the sample, definitions,
                  and review period with the business before starting.
                </p>
                <div className={styles.measurements}>
                  {study.measures.map((measure) => (
                    <div key={measure.label}>
                      <h3>{measure.label}</h3>
                      <div>
                        <span>BEFORE THE PILOT</span>
                        <p>{measure.baseline}</p>
                      </div>
                      <div>
                        <span>AT THE REVIEW</span>
                        <p>{measure.review}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className={styles.resultNote}>
                  <Icon name="clock" />
                  <p>
                    Customer outcomes have not been measured for this example. Verified results can
                    be added after an agreed pilot review and customer approval.
                  </p>
                </div>
              </section>
            ) : null}
            <div className={styles.articleEnd}>
              <p>Start with one useful workflow.</p>
              <Link href="/who-its-for">
                See where your team fits
                <Icon name="arrow" width="16" height="16" />
              </Link>
            </div>
          </article>
        </div>
        <section
          className={`page-container ${styles.relatedStories}`}
          aria-labelledby="related-stories-title"
        >
          <p className="eyebrow">KEEP EXPLORING</p>
          <h2 id="related-stories-title">Another part of the picture.</h2>
          <div>
            {related.map((item) => (
              <Link key={item.slug} href={`/case-studies/${item.slug}`}>
                <span className={styles.tag}>{item.category}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <span className={styles.relatedAction}>
                  Read {item.example ? "the story" : "the guide"}
                  <Icon name="arrow" width="15" height="15" />
                </span>
              </Link>
            ))}
          </div>
        </section>
        <ClosingCta />
      </main>
      <SiteFooter />
    </>
  );
}
