import React from "react";
import ProfileImage from "../../assets/images/profile.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "./Banner.css";

interface BannerProps {}

const Banner: React.FunctionComponent<BannerProps> = () => {
  return (
    <section className="banner">
      <img src={ProfileImage} alt="ProfileImage" />
      <div className="introduce">
        <h1>
          Wellcome, I'm <br />
          Gabriel Cardona
        </h1>
        <p>System engineer and petroleum engineer</p>
      </div>
      <div className="social-media">
        <FontAwesomeIcon icon={faLinkedin} />
        <FontAwesomeIcon icon={faGithub} />
        <FontAwesomeIcon icon={faFacebook} />
        <FontAwesomeIcon icon={faInstagram} />
      </div>
    </section>
  );
};

export default Banner;
