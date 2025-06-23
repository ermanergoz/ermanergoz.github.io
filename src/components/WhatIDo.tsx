import Card from "../components/Card";
import AndroidIcon from "../assets/ic_android.svg";
import AppleIcon from "../assets/ic_apple.svg";
import MultiplatformIcon from "../assets/ic_multiplatform.svg";
import FrontEndIcon from "../assets/ic_frontend.svg";

const WhatIDo = () => {
  return (
    <div className="what-i-do">
      <h1>What I do?</h1>
      <div className="what-i-do__card-container">
        <Card
          icon={AndroidIcon}
          imgAlt="Android icon"
          title="Android"
          text="I build native Android apps, using the latest technologies and best practices."
        />
        <Card
          icon={AppleIcon}
          imgAlt="Apple icon"
          title="iOS"
          text="I build high-quality iOS apps that are fast, reliable, and easy to use."
        />
        <Card
          icon={MultiplatformIcon}
          imgAlt="Multiplatform icon"
          title="Multiplatform"
          text="I develop multi-platform apps using frameworks like Kotlin Multiplatform, Flutter and React Native, allowing you to reach users on both Android and iOS with a single codebase."
        />
        <Card
          icon={FrontEndIcon}
          imgAlt="Front end Android icon"
          title="Front End"
          text="I design and develop responsive, user-friendly websites using modern web technologies."
        />
      </div>
      <p>
        I am highly adaptable and able to collaborate effectively on projects
        outside of my spectrum, depending on your expectations.
      </p>
    </div>
  );
};

export default WhatIDo;
