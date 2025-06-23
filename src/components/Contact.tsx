import { UiButton } from "../components/UiButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Link from "../components/Link";
import Image from "../components/Image";
import FacebookLogo from "../assets/logo_facebook.png";
import InstagramLogo from "../assets/logo_instagram.png";
import LinkedInLogo from "../assets/logo_linkedin.png";
import GithubLogo from "../assets/logo_github.png";

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact</h1>
      <p>
        If you have a project in mind that you would like to discuss, let's get
        in touch! Shoot me an e-mail:
      </p>
      <div className="contact__email-wrapper">
        <Link
          children={
            <UiButton
              theme="light"
              label="erman.ergoz@gmail.com"
              isFocusable={false}
              icon={<FontAwesomeIcon icon={faEnvelope} />}
            />
          }
          destination="mailto:erman.ergoz@gmail.com"
        />
      </div>
      <p>Or find me at:</p>
      <div className="contact__card-container">
        <Link
          destination="https://www.linkedin.com/in/ermanergoz/"
          external={true}
          children={
            <UiButton
              theme="light"
              label="LinkedIn"
              isFocusable={false}
              icon={
                <Image
                  src={LinkedInLogo}
                  alt="My LinkedIn profile"
                  className="h-6"
                />
              }
            />
          }
        />
        <Link
          destination="https://github.com/ermanergoz"
          external={true}
          children={
            <UiButton
              theme="light"
              label="GitHub"
              isFocusable={false}
              icon={
                <Image
                  src={GithubLogo}
                  alt="My GitHub profile"
                  className="h-6"
                />
              }
            />
          }
        />
        <Link
          destination="https://www.facebook.com/erman.ergoz"
          external={true}
          children={
            <UiButton
              theme="light"
              label="Facebook"
              isFocusable={false}
              icon={
                <Image
                  src={FacebookLogo}
                  alt="My Facebook profile"
                  className="h-6"
                />
              }
            />
          }
        />
        <Link
          destination="https://www.instagram.com/ermanergz/"
          external={true}
          children={
            <UiButton
              theme="light"
              label="Instagram"
              isFocusable={false}
              icon={
                <Image
                  src={InstagramLogo}
                  alt="My Instagram profile"
                  className="h-6"
                />
              }
            />
          }
        />
      </div>
    </div>
  );
};

export default Contact;
