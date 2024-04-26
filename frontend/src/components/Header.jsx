import React from "react";
import { Container, Grid, Typography, Link } from "@mui/material";
import "./styles/template.css";

export default function Header(props) {
  const im_path = process.env.PUBLIC_URL + props.image;
  return (
    <div className="header">
      <Grid
        container
        // alignItems="center"
        justifyContent="space-between"
        sx={{
          backgroundColor: "primary.main",
          height: "fit-content",
          overflow: "hidden",
        }}
      >
        <Grid item xs={12} md={6} paddingX={10} paddingY={5}>
          <Container>
            <Typography variant="h1" color="white">
              {props.title}
            </Typography>
            <Typography variant="p" color="white">
              {props.description}
              {props.link && (
                <>
                  {" "}
                  <Link href={props.link} target="_blank" rel="noopener noreferrer" style={{variant:"p", color: "white", textDecoration: 'underline', fontWeight: 'bold' }}>
                    Alumni Portal
                  </Link>{" "}
                  {props.nextDescription}
                </>
              )}
            </Typography>
          </Container>
        </Grid>

        <Grid
          item
          xs={0}
          md={6}
          className="template-bg"
          sx={{
            backgroundImage: "url(" + im_path + ")",
            backgroundPositionY: "0",
            backgroundSize: "cover",
          }}
        ></Grid>
      </Grid>
    </div>
  );
}
