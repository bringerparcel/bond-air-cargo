import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import CTABanner from "@/components/CTABanner";
import { PlaneIcon } from "@/components/icons";
import { fleetData, getFleetBySlug, getAllFleetSlugs } from "@/data/fleet";

interface FleetPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllFleetSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: FleetPageProps): Promise<Metadata> {
  const { slug } = await params;
  const aircraft = getFleetBySlug(slug);
  if (!aircraft) return {};
  return {
    title: aircraft.metaTitle,
    description: aircraft.metaDescription,
  };
}

export default async function FleetDetailPage({ params }: FleetPageProps) {
  const { slug } = await params;
  const aircraft = getFleetBySlug(slug);

  if (!aircraft) {
    notFound();
  }

  return (
    <>
      <Header />

      {/* HERO */}
      <section className="fleet-detail-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link> <span>/</span>{" "}
            <Link href="/#fleet">Fleet</Link> <span>/</span>{" "}
            {aircraft.name.replace(/\u00a0/g, " ")}
          </div>
          <h1>{aircraft.title}</h1>
          <p className="aircraft-role">{aircraft.role}</p>
        </div>
      </section>

      {/* IMAGE */}
      <div className="container">
        <div className="fleet-detail-image">
          <PlaneIcon
            size={120}
            strokeWidth={0.5}
            stroke="rgba(52,204,255,0.2)"
          />
        </div>
      </div>

      {/* SPECS */}
      <section className="specs-section">
        <div className="container">
          {/* Key specs cards */}
          <div className="specs-grid">
            {aircraft.specCards.map((card) => (
              <div className="spec-card" key={card.label}>
                <div className="spec-label">{card.label}</div>
                <div className="spec-value">{card.value}</div>
                <div className="spec-unit">{card.unit}</div>
              </div>
            ))}
          </div>

          {/* Full spec table */}
          <div className="spec-table-section">
            <h2>Complete Specifications</h2>
            <table className="spec-table">
              <tbody>
                {aircraft.specTable.map((row) => (
                  <tr key={row.label}>
                    <th>{row.label}</th>
                    <td>{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Use cases */}
          <div className="use-cases">
            <h3>Ideal Missions</h3>
            <div className="use-cases-list">
              {aircraft.useCases.map((uc) => (
                <span className="use-case-tag" key={uc}>
                  {uc}
                </span>
              ))}
            </div>
          </div>

          {/* Fleet navigation */}
          <div className="fleet-nav">
            {aircraft.prevSlug ? (
              <Link href={`/fleet/${aircraft.prevSlug}`}>
                &larr; Prev: {aircraft.prevName}
              </Link>
            ) : (
              <span></span>
            )}
            {aircraft.nextSlug ? (
              <Link href={`/fleet/${aircraft.nextSlug}`}>
                Next: {aircraft.nextName} &rarr;
              </Link>
            ) : (
              <span></span>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner heading={aircraft.ctaHeading} text={aircraft.ctaText} />

      {/* FOOTER (simplified like original detail pages) */}
      <footer className="site-footer">
        <div className="container">
          <div className="footer-bottom">
            <span>&copy; 2026 Bond Air Cargo. All rights reserved.</span>
            <span>FAA Certificated Air Carrier</span>
          </div>
        </div>
      </footer>
    </>
  );
}
