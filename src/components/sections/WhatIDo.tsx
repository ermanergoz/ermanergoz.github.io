import Card from "../ui/Card";
import androidIcon from "../../assets/icons/android.svg";
import multiplatformIcon from "../../assets/icons/multiplatform.svg";
import frontendIcon from "../../assets/icons/frontend.svg";
import { useTranslation } from "react-i18next";

function WhatIDo() {
  const { t } = useTranslation();

  return (
    <div className="what-i-do">
      <h2>{t("whatIDo.title")}</h2>
      <div className="what-i-do__card-container">
        <Card
          icon={androidIcon}
          iconAlt="Android platform icon"
          title={t("whatIDo.android.title")}
          text={t("whatIDo.android.text")}
        />
        <Card
          icon={multiplatformIcon}
          iconAlt="Multiplatform development icon"
          title={t("whatIDo.multiplatform.title")}
          text={t("whatIDo.multiplatform.text")}
        />
        <Card
          icon={frontendIcon}
          iconAlt="Front-end development icon"
          title={t("whatIDo.frontEnd.title")}
          text={t("whatIDo.frontEnd.text")}
        />
      </div>
      <p>{t("whatIDo.footer")}</p>
    </div>
  );
}

export default WhatIDo;
