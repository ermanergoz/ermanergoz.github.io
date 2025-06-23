import "../styles/main.scss";
import Image from "../components/Image";
import Hand from "../assets/ic_greeting.svg";

const Greeting = () => {
  return (
    <div className="greeting">
      <div className="greeting__title">
        <Image className="greeting__title__wave" src={Hand} alt="Vawing hand" />
        <h1>{"Hello! My name is Erman"}</h1>
      </div>
      <h2 className="greeting__subtitle">
        {
          "I am an application developer and an enthusiastic contributor to open-source projects, driven by a passion for creating exceptional applications."
        }
      </h2>
    </div>
  );
};

export default Greeting;
