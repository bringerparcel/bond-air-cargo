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
          </div>
        </div>
      </div>
    </section>
  );
}
