import CodeFlow from "./components/CodeFlow";
import Layout from "./layouts/Layout";
import HeroBanner from "./components/HeroBanner";

function App() {
  return (
    <>
    <CodeFlow />
    <Layout children={[<HeroBanner />]} />
    </>
  );
}

export default App;
