import CodeFlow from "./components/CodeFlow";
import Layout from "./layouts/Layout";
import HeroBanner from "./components/HeroBanner";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <CodeFlow />
    <Layout children={[<HeroBanner />]} />
    <Footer />
    </>
  );
}

export default App;
