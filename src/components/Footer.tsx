"use client";

import Link from "next/link";
import "../styles/components/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__links">
          <small className="footer__item">
            © 2025 <Link href="/" title="Vällingby Körakademin AB">Vällingby Körakademin AB</Link>
          </small>
          <small className="footer__item">
            <Link href="/">Villkor</Link>
          </small>
          <small className="footer__item">
            <Link href="/">Integritetspolicy</Link>
          </small>
          <small className="footer__item">
            <Link href="/kontakta-oss">Kontakta oss</Link>
          </small>
          <small className="footer__item">
            <button 
              className="footer__link-button"
              onClick={() => window?.Cookiebot?.show()}
            >
              Cookieinställningar
            </button>
          </small>
        </div>
        <div className="footer__contact-details">
          <small className="footer__contact">
            Härjedalsgatan 14, 162 66 Vällingby
          </small>
          <small className="footer__contact">
            Mån-Fre 08:00-18:00 | Lör 10:00-15:00
          </small>
          <small className="footer__contact">
            <a href="mailto:vallingby.korakademin@outlook.com">vallingby.korakademin@outlook.com</a>
          </small>
          <small className="footer__contact">
            <a href="tel:+46700342324">070-034 23 24</a>
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
