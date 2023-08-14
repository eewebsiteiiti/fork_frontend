import React from "react";
import { Grid, Typography, Card } from "@mui/material";
export default function ProgramCard() {
  return (
    <div>
      <Grid
        container
        justifyContent={"space-around"}
        alignItems={"center"}
        pb={8}
      >
        <Grid
          item
          sx={{
            width: "150px",
            height: "150px",
          }}
          className="programBg1"
        >
          <div
            className="programBgColor"
            style={{
              display: "flex",
              height: "150px",
              width: "150px",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h1"
              align="center"
              color={"white"}
              sx={{
                width: "150px",
              }}
            >
              B. Tech.
            </Typography>
          </div>
        </Grid>
        <Grid
          item
          sx={{
            width: "150px",
            height: "150px",
          }}
          className="programBg2"
        >
          
          <div
            className="programBgColor"
            style={{
              display: "flex",
              width: "150px",
              height: "150px",
              alignContent: "center",
              alignItems:"center"
            }}
          >
            <Typography
              variant="h1"
              align="center"
              color={"white"}
              sx={{ width: "150px" }}
            >
              M. Tech.
            </Typography>
          </div>
        </Grid>

        <Grid
          item
          sx={{
            width: "150px",
            height: "150px",
          }}
          className="programBg3"
        >
          <div
            className="programBgColor"
            style={{ display: "flex",
              width: "150px",
              height: "150px",
              alignContent: "center",
              alignItems:"center",width: "150px", height: "150px", alignContent: "center" }}
          >
            <Typography
              variant="h1"
              align="center"
              color={"white"}
              sx={{ width: "150px" }}
            >
              M.S.
            </Typography>
          </div>
        </Grid>
        <Grid
          item
          sx={{
            width: "150px",
            height: "150px",
          }}
          className="programBg4"
        >
          <div
            className="programBgColor"
            style={{ display: "flex",
              width: "150px",
              height: "150px",
              alignContent: "center",
              alignItems:"center",width: "150px", height: "150px", alignContent: "center" }}
          >
            <Typography
              variant="h1"
              align="center"
              color={"white"}
              sx={{ width: "150px" }}
            >
              Ph. D.
            </Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
