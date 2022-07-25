import React from "react";

const About = (props) => {
  return (
    <div id="about">
      <div className="about-image">
        <img src={props.image} />
      </div>
      <div className="about-text">
        <h2>{props.title}</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          beatae hic nihil magni deleniti laudantium aperiam illo, dignissimos
          quam libero placeat accusamus ea, quis debitis architecto mollitia in
          repudiandae nobis ipsam aspernatur sed at. Vitae.
        </p>
        <button>{props.button}</button>
      </div>
    </div>
  );
};

export default About;
