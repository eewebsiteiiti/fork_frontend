import React from "react";
import { Box, Divider, Typography } from "@mui/material";
import { Link } from "react-router-dom";
// import "../styles/navbar.css";
import styles from "../styles/bodyHeader.module.css";

import navs from "../../NavData";
export default function Navbar() {
  return (
    <div>
      <Box sx={{ pt: 2, display: { xs: "none", md: "block" } }}>
        <div className={styles.navdiv}>
          <nav className={styles.naviiii}>
            <div className={styles.logo_text}>
              <a href="https://www.iiti.ac.in/" target="_blank">
                <img
                  src="/Images/logo/blue_logo.png"
                  alt="logo_png"
                  width="50px"
                ></img>
              </a>
              <Link to="/">
                <div>
                  <Typography variant="h4" sx={{ px: 2 }}>
                    INDIAN INSTITUTE OF TECHNOLOGY, INDORE
                    <br /> DEPARTMENT OF ELECTRICAL ENGINEERING
                  </Typography>
                </div>
              </Link>
            </div>
            <div className={styles.menu_wrapper}>
              <ul className={styles.nav_links}>
                <li className={styles.menu}>
                  <Link to="/">
                    <Typography variant="h5">Home</Typography>
                  </Link>
                </li>
                {Object.keys(navs).map((key, i) => (
                  <>
                    <li className={styles.menu}>
                      <Link to="#">
                        <Typography variant="h5">{key}</Typography>
                      </Link>
                      {typeof navs[key] === "object" ? (
                        <>
                          <ul className={styles.ani_menu}>
                            {Object.keys(navs[key]).map((key2, i2) => (
                              <>
                                {typeof navs[key][key2] === "object" ? (
                                  <>
                                    <li className={styles.aniani_menu_trigger}>
                                      <div className={styles.link_button}>
                                        <Link to="#">
                                          <Typography variant="h5">
                                            {key2}
                                          </Typography>
                                        </Link>
                                        <ul className={styles.aniani_menu}>
                                          {Object.keys(navs[key][key2]).map(
                                            (key3, i3) => (
                                              <>
                                                <li>
                                                  <div
                                                    className={
                                                      styles.link_button
                                                    }
                                                  >
                                                    <Link
                                                      to={navs[key][key2][key3]}
                                                    >
                                                      <Typography variant="h5">
                                                        {key3}
                                                      </Typography>
                                                    </Link>
                                                  </div>
                                                </li>
                                              </>
                                            )
                                          )}
                                        </ul>
                                      </div>
                                    </li>
                                  </>
                                ) : (
                                  <>
                                    <li>
                                      <div className={styles.link_button}>
                                        <Link to={navs[key][key2]}>
                                          <Typography variant="h5">
                                            {key2}
                                          </Typography>
                                        </Link>
                                      </div>
                                    </li>
                                  </>
                                )}
                                <Divider />
                              </>
                            ))}
                          </ul>
                        </>
                      ) : (
                        <></>
                      )}
                    </li>
                  </>
                ))}
              </ul>
            </div>
          </nav>
        </div>
      </Box>
    </div>
  );
}
