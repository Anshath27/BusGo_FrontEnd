import { Grid } from "@mui/material";
import React from "react";
import "./Footer.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Logo from "../../logo/BusGoN.png";

export default function Footer() {
  return (
    <div>
      <div className="Footer">
        <div className="containerSX">
          <div className="row">
            <div className="col-md-8 col-lg-8 col-12 ft-1">
              <h3>
                <span>Bus<span style={{color : "#803E2F" }}>GO</span></span>
              </h3>
              <p>
                Transforming Bus Travel in Srilanka with Real-Time Updates,
                Community Engagement and Enhanced Passenger Services
              </p>
              <div className="footer-icons">
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-linkedin-in"></i>
              </div>
            </div>

            <div className="col-md-4 col-lg-3 col-12 mt-5 mt-md-0 ft-3">
              <h5>Contact Info</h5>
              <p>
                <i class="fa-solid fa-phone-volume"></i> 0768723965
              </p>
              <p>
                <i class="fa-solid fa-envelope"></i> BusGo@gmail.com
              </p>
              <p>
                <i class="fa-solid fa-paper-plane"></i> Colombo, SriLanka.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="Last-footer">
      <img
            src={Logo}
            width={200}
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
          />
        <p> All Rights Reserved BusGO 2025</p>
      </div>
    </div>
  );
}
