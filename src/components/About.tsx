import Image from "./Image";
import AboutMeImage from "../assets/about.png";

const About = () => {
  return (
    <div className="about__wrapper">
      <Image src={AboutMeImage} alt="About me image" className="about__image"/>
      <div className="about__content">
        <h1>About Me</h1>
        <div className="about__content__text">
          <p>
            I’m a developer with expertise in creating mobile apps for Android,
            iOS, and web platforms, focusing on solutions that work seamlessly
            across different devices. From building user-friendly mobile apps to
            crafting visually appealing websites, I take pride in delivering
            high-quality results that meet both functional and design
            expectations.
          </p>
          <p>
            With a solid understanding of mobile and web development, I’m able
            to bring creative ideas to life in a way that’s practical and
            efficient. My goal is to ensure that every project I work on
            provides a smooth, engaging experience for users.
          </p>
          <p>
            I approach each project with a focus on collaboration and delivering
            tailored solutions that align with the needs and goals of the people
            and businesses I work with.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
