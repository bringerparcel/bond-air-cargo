interface CTABannerProps {
  label?: string;
  heading: string;
  text: string;
}

export default function CTABanner({ label, heading, text }: CTABannerProps) {
  return (
    <section className="cta-banner" id="contact">
      <div className="container">
        <div className="cta-inner">
          {label && <p className="section-label">{label}</p>}
          <h2>{heading}</h2>
          <p>{text}</p>
          <div className="cta-actions">
            <a href="mailto:charter@bondaircargo.com" className="btn-primary">
              Email Us &rarr;
            </a>
            <a href="tel:+18005550199" className="btn-secondary">
              Call Now
            </a>
          </div>
          <div className="cta-phone">
            <a href="tel:+18005550199">1-800-555-0199</a>
          </div>
        </div>
      </div>
    </section>
  );
}
