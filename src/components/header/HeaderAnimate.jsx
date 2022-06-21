import React from "react";
import {
  FaAngular,
  FaHtml5,
  FaCss3,
  FaReact,
  FaJsSquare,
  FaGitAlt,
} from "react-icons/fa";

const HeaderAnimate = () => {
  return (
    <div className="stage_cube_cont">
      <div className="cubespinner">
        <div className="face1">
          <FaAngular color="#DD0031" />
        </div>
        <div className="face2">
          <FaHtml5 color="#F06529" />
        </div>
        <div className="face3">
          <FaCss3 color="#28A4D9" />
        </div>
        <div className="face4">
          <FaReact color="#5ED4F4" />
        </div>
        <div className="face5">
          <FaJsSquare color="#EFD81D" />
        </div>
        <div className="face6">
          <FaGitAlt color="#EC4D28" />
        </div>
      </div>
    </div>
  );
};

export default HeaderAnimate;
