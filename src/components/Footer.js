import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faApple,
  faSpotify,
  faYoutube,
  faInstagram,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer--icons">
        <a
          target="blank_"
          href="https://itunes.apple.com/us/artist/jacob-erick/1435744565"
        >
          <FontAwesomeIcon icon={faApple} />
        </a>
        <a
          target="blank_"
          href="https://open.spotify.com/artist/2ykzVg42YZ5JHBi3Bhf5GA?si=uAPELdlFTgWuuvqwjHNyGA"
        >
          <FontAwesomeIcon icon={faSpotify} />
        </a>
        <a
          target="blank_"
          href="https://www.youtube.com/channel/UCFbv2XhL6KFlwPS63GhZnMA"
        >
          <FontAwesomeIcon icon={faYoutube} />
        </a>
        <a target="blank_" href="https://www.instagram.com/jacoberickk">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a target="blank_" href="https://twitter.com/jacoberickk">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
