import React from "react";
import logo from "../assets/image/logo.svg";
import {
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaPhone,
  FaEnvelope,
  FaWhatsapp,
  FaTelegram,
} from "react-icons/fa";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialIcons}>
        <a
          href="https://x.com/BraliasT"
          aria-label="Twitter"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.iconLink}
        >
          <FaTwitter />
          <div className={styles.tooltip}>Twitter: https://x.com/BraliasT</div>
        </a>
        <a
          href="https://www.linkedin.com/in/elias-sara/"
          aria-label="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.iconLink}
        >
          <FaLinkedin />
          <div className={styles.tooltip}>
            LinkedIn: https://www.linkedin.com/in/elias-sara/
          </div>
        </a>
        <a
          href="https://github.com/Elias-sara"
          aria-label="GitHub"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.iconLink}
        >
          <FaGithub />
          <div className={styles.tooltip}>
            GitHub: https://github.com/Elias-sara
          </div>
        </a>
        <a
          href="mailto:eliasgisara@gmail.com"
          aria-label="Email"
          className={styles.iconLink}
        >
          <FaEnvelope />
          <div className={styles.tooltip}>Email: eliasgisara@gmail.com</div>
        </a>
        <a
          href="https://t.me/+251912843023"
          aria-label="Telegram"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.iconLink}
        >
          <FaTelegram />
          <div className={styles.tooltip}>
            Telegram: https://t.me/+251912843023
          </div>
        </a>
        <a
          href="https://wa.me/+251912843023"
          aria-label="WhatsApp"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.iconLink}
        >
          <FaWhatsapp />
          <div className={styles.tooltip}>
            WhatsApp: https://wa.me/+251912843023
          </div>
        </a>
        <a
          href="tel:+251912843023"
          aria-label="Phone"
          className={styles.iconLink}
        >
          <FaPhone />
          <div className={styles.tooltip}>Phone: +251912843023</div>
        </a>
      </div>

      <a className={styles.backToTop} href="#top" aria-label="Back to Top">
        <i className="fa fa-angle-up" />
      </a>
      <div className={styles.container}>
        <img src={logo} alt="Elias's Logo" className={styles.logo} />
        <p className={styles.footerText}>2024 Elias. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
