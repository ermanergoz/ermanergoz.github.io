import CodeFlow from "../components/CodeFlow";
import "../styles/main.scss";
import HeroBanner from "../components/HeroBanner";
import Layout from "../layouts/Layout";
import About from "../components/About";

function Home() {
  return (
    <Layout>
      <CodeFlow />
      <HeroBanner />
      <About />
    </Layout>
  );
}

export default Home;
