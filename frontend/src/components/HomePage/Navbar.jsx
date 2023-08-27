import React from "react";
import { Box, Divider, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import navs from "../../NavData";
export default function Navbar() {
  return (
    <div>
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <div className="navdiv">
          <nav className="naviiii">
            <div className="logo-text">
              <a href="https://www.iiti.ac.in/" target="_blank">
                <img
                  src="/Images/logo/blue_logo.png"
                  alt="logo_png"
                  width="100px"
                ></img>
              </a>
              {/* <Link to="https://www.iiti.ac.in/"></Link> */}
              <Link to="/">
                <div>
                  <Typography variant="h4" color={"white"} padding={5}>
                    INDIAN INSTITUTE OF TECHNOLOGY, INDORE
                    <br /> DEPARTMENT OF ELECTRICAL ENGINEERING
                  </Typography>
                </div>
              </Link>
            </div>
            <div className="menu-wrapper">
              <ul className="nav-links">
                <li className="menu">
                  <Link to="/">
                    <Typography variant="h5" color="white">
                      {" "}
                      Home
                    </Typography>
                  </Link>
                </li>
                {Object.keys(navs).map((key, i) => (
                  <>
                    <li className="menu">
                      <Link to="#">
                        <Typography variant="h5" color="white">
                          {key}
                        </Typography>
                      </Link>
                      {typeof navs[key] === "object" ? (
                        <>
                          <ul className="ani-menu">
                            {Object.keys(navs[key]).map((key2, i2) => (
                              <>
                                {typeof navs[key][key2] === "object" ? (
                                  <>
                                    <li className="aniani-menu-trigger">
                                      <div className="link-button">
                                        <Link to="#">
                                          <Typography
                                            variant="h5"
                                            color="white"
                                          >
                                            {key2}
                                          </Typography>
                                        </Link>
                                        <ul className="aniani-menu">
                                          {Object.keys(navs[key][key2]).map(
                                            (key3, i3) => (
                                              <>
                                                <li>
                                                  <div className="link-button">
                                                    <Link
                                                      to={navs[key][key2][key3]}
                                                    >
                                                      <Typography
                                                        variant="h5"
                                                        color="white"
                                                      >
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
                                      <div className="link-button">
                                        <Link to={navs[key][key2]}>
                                          <Typography
                                            variant="h5"
                                            color="white"
                                          >
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
