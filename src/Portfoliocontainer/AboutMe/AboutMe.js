import React from "react";

import Floop from "../Floopers/Floop";
import "./About.css";

function AboutMe() {
  return (
    <div className="AboutMe">
      <div className="Me">
        <h1 className="Myself">
          Hello! I’m Ropio Derrick a softaware developer. I love designing and
          developing websites,web applications and mobile Apps. I am a fast
          learner, hard worker and team player who is proficient in an array of
          standard programming languages and definately powerful javascript
          developer. I work closely with my clients to deliver the best possible
          solutions for their needs.
        </h1>
        <h1 className="Myself2">
          I have worked with a couple of teams and firms for both Website
          development and Web Applications development. I am proficient with CMS
          softwares like WordPress and graphic design packs like Adobe, well
          familiar with hosting services that can make your designed website
          safe and secure online.
        </h1>
      </div>
      <div className="FlooperOne">
        
        <Floop />
      </div>
    </div>
  );
}

export default AboutMe;
