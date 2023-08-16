import React from "react";
import "../styles/ResearchPage.css";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const ResearchCard = (props) => {
  return (
    <>
      <div className="service">
        <Link to={props.action}>
          <div className="icon-holder">
            <img className="icon" src={props.photo} alt="" />
          </div>
          <Typography className="heading" variant="h5">
            {props.specialisation}
          </Typography>
          <Typography className="description" variant="p" fontSize="0.75rem">
            {props.description}
          </Typography>
        </Link>
      </div>
    </>
  );
};

export default ResearchCard;