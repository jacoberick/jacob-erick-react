import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faApple,
  faSpotify,
  faYoutube,
  faAmazon,
  faSoundcloud
} from "@fortawesome/free-brands-svg-icons";

const Music = () => {
  return (
    <div className="music">
      <div className="music--icons ">
        <a
          className="grow"
          target="blank_"
          href="https://itunes.apple.com/us/artist/jacob-erick/1435744565"
        >
          <FontAwesomeIcon icon={faApple} />
        </a>
        <a
          className="grow"
          target="blank_"
          href="https://open.spotify.com/artist/2ykzVg42YZ5JHBi3Bhf5GA?si=uAPELdlFTgWuuvqwjHNyGA"
        >
          <FontAwesomeIcon icon={faSpotify} />
        </a>
        <a
          className="grow"
          target="blank_"
          href="https://www.youtube.com/channel/UCFbv2XhL6KFlwPS63GhZnMA"
        >
          <FontAwesomeIcon icon={faYoutube} />
        </a>
        <a
          className="grow"
          target="blank_"
          href="https://www.amazon.com/Beach-House-Jacob-Erick/dp/B07MTPDPG3/ref=sr_1_2?dchild=1&keywords=Jacob+Erick&qid=1591674789&s=dmusic&search-type=ss&sr=1-2"
        >
          <FontAwesomeIcon icon={faAmazon} />
        </a>
        <a
          className="grow"
          target="blank_"
          href="https://soundcloud.com/user-693428248"
        >
          <FontAwesomeIcon icon={faSoundcloud} />
        </a>
      </div>
    </div>
  );
};

export default Music;
