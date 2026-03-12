import { Button } from "../ui/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faCopy, faCheck } from "@fortawesome/free-solid-svg-icons";
import Image from "../ui/Image";
import { useCallback, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { EMAIL, SOCIAL_LINKS } from "../../constants/social";

import facebookLogo from "../../assets/images/logo-facebook.webp";
import githubLogo from "../../assets/images/logo-github.webp";
import instagramLogo from "../../assets/images/logo-instagram.webp";
import linkedinLogo from "../../assets/images/logo-linkedin.webp";

const SOCIAL_ICONS: Record<(typeof SOCIAL_LINKS)[number]["key"], string> = {
  linkedin: linkedinLogo,
  github: githubLogo,
  facebook: facebookLogo,
  instagram: instagramLogo,
};

function Contact() {
  const { t } = useTranslation();
  const [showToast, setShowToast] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  const copyEmail = useCallback(() => {
    navigator.clipboard.writeText(EMAIL).catch(() => {});
    setShowToast(true);
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setShowToast(false), 2000);
  }, []);

  return (
    <div className="contact">
      <h2>{t("contact.title")}</h2>
      <p>{t("contact.description")}</p>
      <div className="contact__email-wrapper">
        {showToast ? (
          <span className="button button--light button--primary" role="status">
            <span className="button__icon">
              <FontAwesomeIcon icon={faCheck} aria-hidden="true" />
            </span>
            {t("contact.copied")}
          </span>
        ) : (
          <Button
            href={`mailto:${EMAIL}`}
            theme="light"
            label={EMAIL}
            icon={<FontAwesomeIcon icon={faEnvelope} aria-hidden="true" />}
          />
        )}
        <Button
          theme="light"
          label=""
          onClick={copyEmail}
          icon={<FontAwesomeIcon icon={faCopy} aria-hidden="true" />}
          ariaLabel="Copy email to clipboard"
        />
      </div>
      <p>{t("contact.orFindMe")}</p>
      <div className="contact__card-container">
        {SOCIAL_LINKS.map(({ key, label, href }) => (
          <Button
            key={key}
            href={href}
            external
            theme="light"
            label={label}
            icon={
              <Image
                src={SOCIAL_ICONS[key]}
                alt=""
                className="h-6"
                width={24}
                height={24}
              />
            }
          />
        ))}
      </div>
    </div>
  );
}

export default Contact;
