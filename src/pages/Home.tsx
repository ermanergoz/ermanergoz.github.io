import CodeFlow from "../components/CodeFlow";
import "../styles/main.scss";
import HeroBanner from "../components/HeroBanner";
import Layout from "../layouts/Layout";
import About from "../components/About";
import WhatIDo from "../components/WhatIDo";
import Contact from "../components/Contact";
import AnimatedSection from "../components/AnimatedSection";

function Home() {
  return (
    <Layout>
      <section id="home">
        <CodeFlow />
        <HeroBanner />
      </section>
      <section id="about">
        <About />
      </section>
      <AnimatedSection id="whatIDo">
        <WhatIDo />
      </AnimatedSection>
      <AnimatedSection id="contact">
        <Contact />
      </AnimatedSection>
    </Layout>
  );
}

export default Home;
