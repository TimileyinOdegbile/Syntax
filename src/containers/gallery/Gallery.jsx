import React from "react";
import "./gallery.css";
import Heading from "../../components/heading/Heading";
import {
  galleryPhoto1,
  galleryPhoto2,
  galleryPhoto3,
  galleryPhoto4,
  galleryPhoto5,
} from "../../assets/asset";

const Gallery = () => {
  return (
    <div className="syntax__gallery">
      <Heading
        head="Gallery"
        body="Our department is here to ensure personalized guidance. Our smart team takes care of
everything. The entire team has been great to work with from start to finish."
      />
      <div className="syntax__blob">
        <ul className="syntax__blob--head">
          <li>
            <a href="/#">Show All</a>
          </li>
          <li>
            <a href="/#">Events</a>
          </li>
          <li>
            <a href="/#">Travels</a>
          </li>
        </ul>
      </div>

      <div className="syntax__gallery--module1">
        <img src={galleryPhoto1} alt="Man open door" />
        <img src={galleryPhoto2} alt="Car door" />
        <img src={galleryPhoto3} alt="man and woman" />
      </div>
      <div className="syntax__gallery--module2">
        <img src={galleryPhoto4} alt="man and door" />
        <img src={galleryPhoto5} alt="fine car" />
      </div>
    </div>
  );
};

export default Gallery;
