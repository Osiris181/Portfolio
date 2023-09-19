import React from "react";
import "./aboutStyle.css";

export default function about() {
  return (
    <div class="about container-about" id="about-page">
      <div class="about-left">
        <img src="./about-img (2).png" alt="" id="foto-pt" />
      </div>
      <div className="about-right">
        <h1 id="about-heading">
          About <span id="accent">Me</span>
        </h1>
        <div className="about-content">
          <p>
            Currently a Fresh Graduate of Bina Nusantara University,
            majoring in Computer Science, specifically in Software Engineering.
            I love to discover and learn new things from others. I also give a
            satisfactory and active performance in every teamwork.
            <br />
            <br />
            I'm currently focusing on Application and Web App Development.
          </p>
        </div>
      </div>
    </div>
  );
}
