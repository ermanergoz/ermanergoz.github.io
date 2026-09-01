import CodeFlow from "../components/sections/CodeFlow";
import HeroBanner from "../components/sections/HeroBanner";
import Layout from "../components/ui/Layout";
import About from "../components/sections/About";
import WhatIDo from "../components/sections/WhatIDo";
import Contact from "../components/sections/Contact";
import { useTranslation } from "react-i18next";
import { SECTION_MAP } from "../constants/navigation";

function HomePage() {
  const { t } = useTranslation();

  return (
    <Layout>
      <section id={SECTION_MAP.home} aria-label={t("sections.welcome")}>
        <CodeFlow />
        <HeroBanner />
      </section>
      <section id={SECTION_MAP.aboutMe} aria-label={t("sections.about")}>
        <About />
      </section>
      <section id={SECTION_MAP.whatIDo} aria-label={t("sections.whatIDo")}>
        <WhatIDo />
      </section>
      <section id={SECTION_MAP.contactMe} aria-label={t("sections.contact")}>
        <Contact />
      </section>
    </Layout>
  );
}

export default HomePage;
