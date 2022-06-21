import React from "react";
import Resume from "../../assets/Resume.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={Resume} download="Resume-Oscar" className="btn">
        Download Resume
      </a>
      <a href="#contact" className="btn">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
