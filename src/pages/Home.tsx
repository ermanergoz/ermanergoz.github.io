import CodeFlow from "../components/CodeFlow";
import "../styles/main.scss";
import HeroBanner from "../components/HeroBanner";
import Layout from "../layouts/Layout";

function Home() {
  return <Layout children={[<CodeFlow />, <HeroBanner />]} />;
}

export default Home;
