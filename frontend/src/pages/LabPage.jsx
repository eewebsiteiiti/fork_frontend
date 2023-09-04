import React from "react";
import { Typography, Box, Container, Grid, ButtonBase } from "@mui/material";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { api } from "../Api";
import Header from "../components/Header";
import { ug, pg } from "../HeaderData";
import Navbar from "../components/BodyNavbar/BodyNavbar";
export default function LabPage() {
  const [labs, setLabs] = useState([]);
  const [isError, setIsError] = useState([]);
  const [active, setActive] = useState(0);
  const params = useParams();
  useEffect(() => {
    axios
      .get(`${api}/research/labs/${params.type}/read`)
      .then((response) => setLabs(response.data))
      .catch((error) => setIsError(error.message));
    if (!isError) {
      setLabs("Not Available");
    }
  }, [isError, params?.type]);
  return (
    <div>
      <Navbar />
      {params.type === "ug" ? (
        <>
          <Header
            title={ug.title}
            description={ug.description}
            image={ug.image}
          />
          <br />
          <br />
          <Container margin={5}>
            <Grid
              container
              justifyContent="space-between"
              direction="row"
              alignItems="top"
            >
              <Grid item xs="12" md="3">
                <Grid
                  container
                  justifyContent="center"
                  direction="column"
                  alignItems="top"
                  sx={{
                    backgroundColor: "secondary.main",
                    color: "white",
                    borderRadius: 1,
                  }}
                  spacing={2}
                  margin={1}
                >
                  <>
                    {labs?.map((item, key) => (
                      <ButtonBase
                        onClick={() => {
                          setActive(key);
                        }}
                        // sx={{padding:"3"}}
                        sx={{ borderBottom: "2px solid white" }}
                      >
                        <Grid item padding={1} sx={{ textAlign: "center" }}>
                          <Typography variant="h5" color="white">
                            {item.name}
                          </Typography>
                        </Grid>
                      </ButtonBase>
                    ))}
                  </>
                </Grid>
              </Grid>
              <Grid item xs="12" md="8">
                <Grid
                  container
                  justifyContent="center"
                  direction="column"
                  alignItems="top"
                  // spacing = {2}
                  padding={1}
                >
                  <>
                    <Typography
                      textAlign={"center"}
                      color="secondary.main"
                      fontWeight={600}
                      variant="h1"
                    >
                      About
                    </Typography>

                    {labs?.map((item, key) =>
                      active === key ? (
                        <>
                          <Grid item sx={{ textAlign: "left" }}>
                            {item.name}
                          </Grid>

                          <Typography
                            textAlign={"center"}
                            mt={3}
                            color="secondary.main"
                            fontWeight={600}
                            variant="h1"
                          >
                            Experiments
                          </Typography>
                          <Grid item sx={{ textAlign: "left" }}>
                            {item?.experiments["experiments"]?.map((exp, i) => (
                              <>
                                <Grid item> {exp}</Grid>
                              </>
                            ))}
                          </Grid>
                          <Typography
                            textAlign={"center"}
                            mt={3}
                            color="secondary.main"
                            fontWeight={600}
                            variant="h1"
                          >
                            Equipment
                          </Typography>
                          <Grid item sx={{ textAlign: "left" }}>
                            {item?.equipments["equipments"]?.map((eq, j) => (
                              <>
                                <Grid item> • {eq}</Grid>
                              </>
                            ))}
                          </Grid>
                        </>
                      ) : (
                        <></>
                      )
                    )}
                  </>
                </Grid>
              </Grid>
            </Grid>
          </Container>
          <br />
          <br />
        </>
      ) : (
        <></>
      )}

      {params.type === "pg" ? (
        <>
          <>
            <Header
              title="Research Lab"
              description={pg.description}
              image={pg.image}
            />
            <br /> <br />
            <Container margin={5}>
              <Grid
                container
                justifyContent="space-between"
                direction="row"
                alignItems="top"
              >
                <Grid item xs="12" md="3">
                  <Grid
                    container
                    justifyContent="center"
                    direction="column"
                    alignItems="top"
                    sx={{
                      backgroundColor: "secondary.main",
                      color: "white",
                      borderRadius: 1,
                    }}
                    spacing={2}
                    margin={1}
                  >
                    <>
                      {labs?.map((item, key) => (
                        <ButtonBase
                          onClick={() => {
                            setActive(key);
                          }}
                          sx={{ padding: "3", borderBottom: "2px solid white" }}
                        >
                          <Grid item padding={1} sx={{ textAlign: "center" }}>
                            <Typography variant="h5" color="white">
                              {item.name}
                            </Typography>
                          </Grid>
                        </ButtonBase>
                      ))}
                    </>
                  </Grid>
                </Grid>
                <Grid item xs="12" md="8">
                  <Grid
                    container
                    justifyContent="center"
                    direction="column"
                    alignItems="top"
                    // spacing = {2}
                    padding={1}
                  >
                    <>
                      {labs?.map((item, key) =>
                        active === key ? (
                          <>
                            <Grid
                              item
                              sx={{ textAlign: "left", fontWeight: "800" }}
                            >
                              <Typography variant="h5" color="secondary.main">
                                Prof. In-Charge:
                              </Typography>
                              <Typography variant="h3">
                                {item.person}
                              </Typography>
                            </Grid>
                            <br />
                            <Grid item sx={{ textAlign: "left" }}>
                              <Typography variant="h5" color="secondary.main">
                                Research Keywords:
                              </Typography>
                              <Typography variant="p" fontWeight={500}>
                                {item.keywords}
                              </Typography>
                            </Grid>
                            <br />
                            <Typography
                              textAlign={"center"}
                              color="secondary.main"
                              fontWeight={600}
                              variant="h1"
                            >
                              About
                            </Typography>
                            <Grid item sx={{ textAlign: "left" }}>
                              <Typography variant="p">
                                {item.description}
                              </Typography>
                            </Grid>

                            <Typography
                              textAlign={"center"}
                              mt={3}
                              color="secondary.main"
                              fontWeight={600}
                              variant="h1"
                            >
                              Review
                            </Typography>
                            <Grid item sx={{ textAlign: "left" }}>
                              {Object.keys(item?.review)?.map((exp, i) => (
                                <>
                                  <Grid item>
                                    <strong>{exp}</strong>
                                  </Grid>
                                  <Grid item>
                                    <ul>
                                      {item?.review[exp]?.map((item2, key2) => (
                                        <li style={{ listStyleType: "circle" }}>
                                          <Typography variant="p">
                                            {item2}
                                          </Typography>
                                        </li>
                                      ))}
                                    </ul>
                                  </Grid>
                                </>
                              ))}
                            </Grid>
                            <Typography
                              textAlign={"center"}
                              mt={3}
                              color="secondary.main"
                              fontWeight={600}
                              variant="h1"
                            >
                              Equipment
                            </Typography>
                            {/* {item.equipments["equipments"][0]} */}
                            {item?.equipments["equipments"]?.map((eq, j) => (
                              <>
                                <Typography variant="p">• {eq}</Typography>{" "}
                                <br />
                              </>
                            ))}

                            {/* .equipments["equipments"][0] */}
                            {/* {labs?.map((item, key) => {
                              <Grid item sx={{ textAlign: "left" }}>
                                {item.equipments["equipments"]?.map((eq, j) => (
                                  <>
                                    <Grid item>{eq}dfdsbfhh</Grid>
                                  </>
                                ))} */}
                            {/* {Object?.keys(labs?.equipments)?.map(
                                  (item3, key3) => (
                                    <>
                                      {console.log(item3)}
                                      <Grid item>{item3}</Grid>
                                    </>
                                  )
                                )} */}
                            {/* </Grid>; */}
                            {/* })} */}
                          </>
                        ) : (
                          <></>
                        )
                      )}
                    </>
                  </Grid>
                </Grid>
              </Grid>
            </Container>
            <br /> <br />
          </>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
