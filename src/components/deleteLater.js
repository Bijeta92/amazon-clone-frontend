import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const slideImages = [
  "https://images-na.ssl-images-amazon.com/images/G/15/digital/video/merch/Movie/C2A2_2021_GWBleedingHero_1500x600_POST_Final_en-CA_PVD6750_C2A2_Optimization._CB657655976_.jpg",
  "https://images-na.ssl-images-amazon.com/images/G/15/kindle/journeys/MzgyMjg2ZDEt/MzgyMjg2ZDEt-ZjMxZWU0N2Et-w1500._CB657511862_.jpg",
  "https://images-na.ssl-images-amazon.com/images/G/15/digital/video/merch/2021/TV/BRND/BRND_MTH21_00000_GWBleedingHero_1500x600_POST_Final_en-CA_FT_PVD6645._CB660540760_.jpg",
  "https://images-na.ssl-images-amazon.com/images/G/15/CA-hq/2021/img/Health_x26_Personal_Care/XCM_Manual_1312056_1602610_CA_ca_gw_pc_tallhero_2x_ca_en_3704334_1500x600_1X_en_CA._CB658780333_.jpg",
];

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Slide>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[0]})` }}>
            <span>Slide 1</span>
          </div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[1]})` }}>
            <span>Slide 2</span>
          </div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[2]})` }}>
            <span>Slide 3</span>
          </div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[2]})` }}>
            <span>Slide 4</span>
          </div>
        </div>
      </Slide>
    </div>
  );
};
export default Slideshow;
