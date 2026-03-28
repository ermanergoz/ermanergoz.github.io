import Image from "../ui/Image";
import greetingIcon from "../../assets/icons/greeting.svg";
import { useTranslation } from "react-i18next";

function Greeting() {
  const { t } = useTranslation();

  return (
    <div className="greeting">
      <div className="greeting__title">
        <Image
          className="greeting__title-wave"
          src={greetingIcon}
          alt="Waving hand"
          width={40}
          height={40}
          loading="eager"
        />
        <h1>{t("greeting.title")}</h1>
      </div>
      <p className="greeting__subtitle">{t("greeting.subtitle")}</p>
    </div>
  );
}

export default Greeting;
