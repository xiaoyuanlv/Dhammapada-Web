import React, { FC } from "react";
import styles from "./Footer.module.css";
import moment from "moment";
import { NavLink, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import ic_logo from "../../assets/img/ic_logo.svg";

interface FooterProps {}

const Footer: FC<FooterProps> = () => {
  let navigate = useNavigate();

  return (
    <div className={styles.Footer}>
      <footer className="footer pt-5 mt-5 py-2">
        <div className="container">
          <div className="row py-5">
            <div className="col-md-12 mb-4 text-center">
              <div>
                <img
                  src={ic_logo}
                  style={{ width: "100px", height: "auto" }}
                  className="mb-3"
                  alt="Lotus Flower"
                />
                <h5 className="font-weight-bolder mb-4">Dhammapada</h5>
              </div>
            </div>
          </div>

          <div className="row align-items-center justify-content-center text-center mb-2">
            <div className="col-12 col-md-12 text-center mb-7">
              <ul className="nav nav-footer justify-content-center justify-content-lg-center">
                <li className="nav-item">
                  <NavLink to={"/"} className="nav-link">
                    🪷 Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to={"/about"} className="nav-link">
                    📖 About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to={"/privacy"} className="nav-link">
                    🐚 Privacy
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to={"/terms"} className="nav-link">
                    ⚖️ Terms
                  </NavLink>
                </li>
                <li className="nav-item">
                  <a
                    href="https://apps.apple.com/us/app/the-dhammapada/id1631533228"
                    className="nav-link"
                    target="_blank"
                  >
                    📱 iOS
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.senlasy.dhammapada"
                    className="nav-link pe-0"
                    target="_blank"
                  >
                    📱 Android
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="row text-center mb-5 mt-2">
            <div className="col-12 col-md-12 my-auto text-center">
              <div className="copyright text-center text-sm text-center">
                All rights reserved. Copyright © {moment().format("yyyy")}
                {"   "}<br />
                <br />
                Coded with 🙏🏻🪷🕊 by &nbsp;
                <a
                  href="https://i-am-xiao-yuan-lv.web.app"
                  className="font-weight-bold"
                  target="_blank"
                >
                  @_XiaoYuanLv
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
