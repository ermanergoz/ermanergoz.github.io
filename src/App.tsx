import CodeFlow from "./components/CodeFlow";
import HeroBanner from "./components/HeroBanner";

function App() {
  return (
    <>
      <CodeFlow />
      <HeroBanner
        title="HELLO WORLD"
        introduction="~ Coming Soon ~"
        onClick={() => console.log("More button clicked")}
      />
    </>
  );
}

export default App;
