import React from "react";
import { Typography, Box, Container, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { api, image_api } from "../Api";
import { useParams } from "react-router-dom";
import Navbar from "../components/BodyNavbar/BodyNavbar";
import Header from "../components/Header";

const BooksPage = () => {
  const [data, setData] = useState();
  const [isError, setIsError] = useState([false]);
  const params = useParams();
  useEffect(() => {
    axios
      .get(`${api}/achievements/${params.achievement}/read`, {
        mode: "cors",
      })
      .then((response) => setData(response.data))
      .catch((error) => setIsError(error.message));
    if (!isError) {
      setData("Not Available");
    }
  }, [params, isError]);
  console.log(data);
  return (
    <>
      <Navbar />
      <Header
        title={`${
          params.achievement === "books"
            ? "Books Published"
            : params.achievement === "students"
            ? "Students Achievement"
            : params.achievement === "faculty"
            ? "Faculty Achievement"
            : ""
        }`}
      />
      <Container sx={{ py: 2 }}>
        <br />
        <Grid container direction={"column-reverse"}>
        {data?.map((item, key) => (
          <>
            <Grid item sx={{backgroundColor:item.award==="The President of India Gold Medalist"? "#ffda95": item.award==="Departmental Silver Medalist"?"#dfdfdf":"white"}}>
            <Grid
              container
              justifyContent="space-between"
              direction="row-reverse"
              alignItems="center"
              spacing={2}
            >
              {item.image ? (
                <Grid item>
                  <img
                    src={`${image_api}${item.image}`}
                    alt={item.image}
                    width={50}
                  />
                </Grid>
              ) : (
                <><img
                src={"/Images/profile_placeholder.jpg"}
                alt={item.image}
                width={50}
              /></>
              )}

              <Grid item>
                <Grid
                  container
                  justifyContent="space-between"
                  direction="row"
                  alignItems="center"
                  spacing={2}
                >
                  <Grid item>
                    <Typography mt={1} color={"primary.main"} fontWeight={600}>
                      {item.name}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography mt={1} color={"primary.main"} fontWeight={600}>
                      {item.roll_no}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography fontSize={14} color="gray">
                      {item.year}
                    </Typography>
                  </Grid>
                </Grid>
                <Typography fontSize={12} mb={1}>
                  {item.author}
                </Typography>
                <br />
                <Typography fontSize={12} mb={1}>
                  {item.publication}
                </Typography>
              </Grid>
            </Grid>
            <Typography color={"primary.main"}>{item.award}</Typography>
            <hr color="rgb(50,50,50,.1)" />
            </Grid>
          </>
        ))}
        </Grid>
      </Container>
    </>
  );
};

export default BooksPage;
