import "./Footer.css";

import React from "react";

function Footer() {
  return (
    <section className="footer-section">
      <div className="footer-container">
        <div className="top-destinations">
          <h3 className="footer-sub-head">Top Destinations</h3>
          <p>Mt.Kenya</p>
          <p>Mt. Rwenzori</p>
          <p>Lake Nakuru</p>
          <p>Tsavo National Park</p>
          <p>Coastal Kenya</p>
          <p>Nairobi National Park</p>
        </div>
        <div className="company-footer">
          <h3 className="footer-sub-head">Company</h3>
          <p>About Us</p>
          <p>FAQ</p>
          <p>Contact Us</p>
          <p>Private Policy</p>
          <p>Terms and Conditions</p>
        </div>
        <div className="offices">
          <h3 className="footer-sub-head">Offices</h3>
          <p>Nairobi, Kenya.</p>
          <p>Map</p>
          <p>Tel: 0798123456</p>
        </div>
      </div>
      <h4 className="copy-right">
        {" "}
        &copy; <i>FrancisMurayaDev 2025</i>
      </h4>
    </section>
  );
}

export default Footer;
