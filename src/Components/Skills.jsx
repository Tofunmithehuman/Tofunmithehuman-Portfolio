import React from "react";
import "../Styles/Styles.css";
import Slider from "./Slider";

function Skills() {
  const images = [
    "https://res.cloudinary.com/dzzwvcapu/image/upload/v1711618418/tofunmithehuman/cdutxien4ru4nhq8m9ev.jpg",
    "https://res.cloudinary.com/dzzwvcapu/image/upload/v1711618418/tofunmithehuman/fuiwyueh8zn32rih5qqg.jpg",
    "https://res.cloudinary.com/dzzwvcapu/image/upload/v1711618418/tofunmithehuman/lw8dyelpbwr7gpbybuge.jpg",
    "https://res.cloudinary.com/dzzwvcapu/image/upload/v1711618417/tofunmithehuman/wch0pitpktpewd5wi893.jpg",
    "https://res.cloudinary.com/dzzwvcapu/image/upload/v1711618417/tofunmithehuman/katc43hni6wjimuyrt3l.jpg",
    "https://res.cloudinary.com/dzzwvcapu/image/upload/v1711618417/tofunmithehuman/ikjqa79f15jrcszpxotx.jpg",
  ];

  return (
    <div className="Skills" id="skills">
      <div className="container">
        {/* <h3>Programming Language</h3> */}
        {/* <i class="fa-brands fa-html5"></i>
        <i class="fa-brands fa-css3-alt"></i>
        <i class="fa-brands fa-js"></i> */}
        <h3>Certifications</h3>
        <Slider images={images} />
      </div>
    </div>
  );
}

export default Skills;
