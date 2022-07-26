import React from "react";
import FeatureBox from "./featureBox";
import feature1 from "../images/feature_1.png";
import feature2 from "../images/feature_2.png";
import feature3 from "../images/feature_3.png";

const Feature = () => {
  return (
    <div id="features">
      <div className="a-container">
        <FeatureBox image={feature1} title="Development Course" />
        <FeatureBox image={feature2} title="Money Saving Services" />
        <FeatureBox image={feature3} title="Useability Interface" />
      </div>
    </div>
  );
};

export default Feature;
