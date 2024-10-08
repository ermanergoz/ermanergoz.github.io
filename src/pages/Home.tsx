import CodeFlow from "../components/CodeFlow";
import "../styles/main.scss";
import HeroBanner from "../components/HeroBanner";
import Layout from "../layouts/Layout";
import About from "../components/About";
import WhatIDo from "../components/WhatIDo";
import Contact from "../components/Contact";

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
      <section id="whatIDo">
        <WhatIDo />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </Layout>
  );
}

export default Home;
