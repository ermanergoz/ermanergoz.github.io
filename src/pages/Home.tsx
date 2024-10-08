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
      <CodeFlow />
      <HeroBanner />
      <About />
      <WhatIDo />
      <Contact />
    </Layout>
  );
}

export default Home;
