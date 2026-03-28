import Image from "../ui/Image";
import aboutImage from "../../assets/images/about.webp";
import { useTranslation } from "react-i18next";
import { useFadeIn } from "../../hooks/useFadeIn";

function About() {
  const { t } = useTranslation();
  const { ref, isVisible } = useFadeIn();

  return (
    <div
      ref={ref}
      className={`about fade-in-section${isVisible ? " fade-in-section--visible" : ""}`}
    >
      <div className="about__wrapper">
        <Image
          src={aboutImage}
          alt="Mobile phones showcasing app development"
          className="about__image"
          width={767}
          height={687}
        />
        <div className="about__content">
          <h2>{t("about.title")}</h2>
          <div className="about__content-text">
            <p>{t("about.paragraph1")}</p>
            <p>{t("about.paragraph2")}</p>
            <p>{t("about.paragraph3")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
