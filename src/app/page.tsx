import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FleetCard from "@/components/FleetCard";
import ServiceCard from "@/components/ServiceCard";
import CTABanner from "@/components/CTABanner";
import {
  ClockIcon,
  LayersIcon,
  HeartbeatIcon,
  LockIcon,
  GlobeIcon,
  BoltIcon,
  CheckIcon,
  PlaneIcon,
} from "@/components/icons";
import { fleetData } from "@/data/fleet";

export default function HomePage() {
  return (
    <>
      <Header />

      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="container hero-content">
          <h1>
            Cargo moves.
            <br />
            <span>We make it fly.</span>
          </h1>
          <p>
            Same-day charter, pharma cold-chain, medical and organ transport,
            high-value freight, and gateway-to-gateway shipments — from a
            600&nbsp;lb rush package to 62,000&nbsp;lb full freighter loads.
          </p>
          <div className="hero-actions">
            <Link href="#contact" className="btn-primary">
              Get a Quote Now &rarr;
            </Link>
            <Link href="#fleet" className="btn-outline">
              View Our Fleet
            </Link>
          </div>
        </div>
      </section>

      {/* ===== FLEET ===== */}
      <section className="fleet" id="fleet">
        <div className="container">
          <div className="fleet-header">
            <p className="section-label">Our Fleet</p>
            <h2 className="section-title">
              Right-Sized Aircraft for Every Mission
            </h2>
            <p className="section-subtitle">
              From a light twin for urgent small packages to narrowbody
              freighters for full pallet loads — click any aircraft for complete
              specifications.
            </p>
          </div>
          <div className="fleet-grid">
            {fleetData.map((aircraft) => (
              <FleetCard key={aircraft.slug} aircraft={aircraft} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="services" id="services">
        <div className="container">
          <div className="services-header">
            <p className="section-label">What We Do</p>
            <h2 className="section-title">
              Charter Solutions for Critical Cargo
            </h2>
            <p className="section-subtitle">
              Purpose-built air cargo services for shipments where timing,
              security, and handling matter most.
            </p>
          </div>
          <div className="services-grid">
            <ServiceCard
              icon={<ClockIcon />}
              title="Same-Day Charter"
              description="Emergency and time-critical freight — wheels up within hours of your call. We operate around the clock to meet your deadlines."
            />
            <ServiceCard
              icon={<LayersIcon />}
              title="Pharmaceutical & Cold Chain"
              description="Temperature-controlled transport for vaccines, biologics, and clinical trial materials with full chain-of-custody documentation."
            />
            <ServiceCard
              icon={<HeartbeatIcon />}
              title="Medical & Organ Transport"
              description="Life-saving shipments handled with the urgency they demand — organs, blood products, medical devices, and surgical equipment."
            />
            <ServiceCard
              icon={<LockIcon />}
              title="High-Value & Secure Freight"
              description="Cash, jewelry, precious metals, and luxury goods moved under strict security protocols with armed escort available upon request."
            />
            <ServiceCard
              icon={<GlobeIcon />}
              title="Gateway to Gateway"
              description="Scheduled and on-demand linehaul between major cargo hubs. Reliable capacity for freight forwarders and logistics providers."
            />
            <ServiceCard
              icon={<BoltIcon />}
              title="Emergency & AOG"
              description="Aircraft-on-ground parts, disaster relief supplies, and mission-critical equipment delivered to wherever it's needed — fast."
            />
          </div>
        </div>
      </section>

      {/* ===== WHY BOND ===== */}
      <section className="why-bond" id="why-bond">
        <div className="container">
          <div className="why-bond-grid">
            <div>
              <p className="section-label">Why Bond Air Cargo</p>
              <h2 className="section-title">
                Built for Freight That Can&apos;t Wait
              </h2>
              <p className="section-subtitle">
                We&apos;re not a broker. We operate our own aircraft, our own
                crews, and our own standards — so your cargo is never at the
                mercy of a middleman.
              </p>
              <div className="why-bond-features">
                <div className="why-feature">
                  <div className="why-feature-icon">
                    <CheckIcon />
                  </div>
                  <div>
                    <h4>Operator, Not a Broker</h4>
                    <p>
                      Direct operational control means faster response times,
                      transparent pricing, and accountability from wheels-up to
                      delivery.
                    </p>
                  </div>
                </div>
                <div className="why-feature">
                  <div className="why-feature-icon">
                    <CheckIcon />
                  </div>
                  <div>
                    <h4>Scalable Fleet</h4>
                    <p>
                      From a 600 lb same-day rush on a Seneca to a 62,000 lb
                      full freighter on an A321F — one call, one operator, any
                      size.
                    </p>
                  </div>
                </div>
                <div className="why-feature">
                  <div className="why-feature-icon">
                    <CheckIcon />
                  </div>
                  <div>
                    <h4>Specialized Handling</h4>
                    <p>
                      Pharma cold-chain, hazmat, live organs, high-value secure
                      — we have the certifications, training, and equipment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="why-bond-image">
              <PlaneIcon size={120} strokeWidth={0.5} stroke="rgba(0,0,128,0.12)" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <CTABanner
        label="Ready to Ship?"
        heading="Get a Quote in Minutes"
        text="Tell us what you're shipping, where it's going, and when it needs to arrive. We'll match the right aircraft and get you a price — fast."
      />

      <Footer />
    </>
  );
}
