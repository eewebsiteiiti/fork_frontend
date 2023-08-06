import React from 'react';
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
              <Link to="/">
                <img
                  src="/Images/logo/blue_logo.png"
                  alt="logo_png"
                  width="100px"
                ></img>
              </Link>
              <Link to="/">
                <div>
                  <Typography variant="h5" color={"white"} padding={5}>
                    Indian Institute Of Technology Indore
                    <br /> Department of Electrical Engineering
                  </Typography>
                </div>
              </Link>
            </div>
            <div className="menu-wrapper">
              <ul className="nav-links">
                <li className="menu">
                  <Link to="/">Home</Link>
                </li>
                {Object.keys(navs).map((key, i) => (
                  <>
                    <li className="menu">
                      <Link to="#">{key}</Link>
                      {typeof navs[key] === "object" ? (
                        <>
                          <ul className="ani-menu">
                            {Object.keys(navs[key]).map((key2, i2) => (
                              <>
                                {typeof navs[key][key2] === "object" ? (
                                  <>
                                    <li className="aniani-menu-trigger">
                                      <div className="link-button">
                                        <Link to="#">{key2}</Link>
                                        <ul className="aniani-menu">
                                          {Object.keys(navs[key][key2]).map(
                                            (key3, i3) => (
                                              <>
                                                <li>
                                                  <div className="link-button">
                                                    <Link
                                                      to={navs[key][key2][key3]}
                                                    >
                                                      {key3}
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
                                        <Link to={navs[key][key2]}>{key2}</Link>
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

 