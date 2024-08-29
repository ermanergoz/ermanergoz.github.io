import CodeFlow from "./components/CodeFlow";
import Header from "./components/Header";
import HeroBanner from "./components/HeroBanner";


function App() {

  const handleButtonClick = (buttonLabel: string = "") => () => {
    console.log(`${buttonLabel} is clicked`);
  };

  return (
    <>
      <Header onClick={handleButtonClick}/>
      <CodeFlow />
      <HeroBanner
        title="HELLO WORLD"
        introduction="~ Coming Soon ~"
        onClick={handleButtonClick("More")}
      />
    </>
  );
}

export default App;
