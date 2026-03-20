import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo">
              <span className="mark">BA</span> BOND AIR CARGO
            </div>
            <p>
              Charter freight and cargo solutions. Operated aircraft,
              professional crews, specialized handling — from light urgent
              shipments to full freighter capacity.
            </p>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <Link href="/#services">Same-Day Charter</Link>
            <Link href="/#services">Pharma &amp; Cold Chain</Link>
            <Link href="/#services">Medical Transport</Link>
            <Link href="/#services">High-Value Freight</Link>
            <Link href="/#services">Gateway to Gateway</Link>
          </div>
          <div className="footer-col">
            <h4>Fleet</h4>
            <Link href="/fleet/seneca-ii">Piper Seneca II</Link>
            <Link href="/fleet/737-400f">Boeing 737-400F</Link>
            <Link href="/fleet/737-800f">Boeing 737-800F</Link>
            <Link href="/fleet/a321f">Airbus A321F</Link>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <a href="tel:+18005550199">1-800-555-0199</a>
            <a href="mailto:charter@bondaircargo.com">charter@bondaircargo.com</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>&copy; 2026 Bond Air Cargo. All rights reserved.</span>
          <span>FAA Certificated Air Carrier</span>
        </div>
      </div>
    </footer>
  );
}
