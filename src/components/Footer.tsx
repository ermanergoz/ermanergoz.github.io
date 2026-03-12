import { Link } from "react-router-dom";
import logo from "../assets/images/logo.webp";
import Image from "./ui/Image";
import { useTranslation } from "react-i18next";

const CURRENT_YEAR = new Date().getFullYear();

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__content">
        <Image
          src={logo}
          alt="Erman Ergoz logo"
          className="footer__content-logo"
          width={240}
          height={78}
        />
        <Link
          to="/privacy-policies"
          className="button button--dark button--inline self-center"
        >
          {t("footer.privacyPolicies")}
        </Link>
        <p className="footer__content-copyright">
          &copy; 2021 - {CURRENT_YEAR} Yusuf Erman ERG&Ouml;Z
        </p>
      </div>
    </footer>
  );
}

export default Footer;
