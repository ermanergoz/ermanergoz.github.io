import Image from "../ui/Image";
import aboutImage from "../../assets/images/about.webp";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();

  return (
    <div className="about">
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
