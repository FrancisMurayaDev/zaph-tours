import "./SectionHeader.css";
import React from "react";

function SectionHeader({ h2, text }) {
  return (
    <div className="section-header-title">
      <h2 className="section-title">{h2}</h2>
      <h3 className="section-text">{text}</h3>
    </div>
  );
}

export default SectionHeader;
