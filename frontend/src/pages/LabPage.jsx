import React from "react"
import { Typography, Container, Grid, ButtonBase } from "@mui/material"
import axios from "axios"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { api } from "../Api"
import Header from "../components/Header"
import { ug, pg, postgraduate } from "../HeaderData"
import Navbar from "../components/BodyNavbar/BodyNavbar"
import { image_api } from "../Api"

export default function LabPage() {
  const [labs, setLabs] = useState([])
  const [isError, setIsError] = useState([])
  const [active, setActive] = useState(0)
  const params = useParams()
  useEffect(() => {
    axios
      .get(`${api}/research/labs/${params.type}/read`)
      .then((response) => setLabs(response.data))
      .catch((error) => setIsError(error.message))

    if (!isError) {
      setLabs("Not Available")
    }
  }, [isError, params])

  const PostgraduateData = [
    {
      name: "Digital Circuit Design Laboratory",

      image: "/Images/Labs/DigitalCircuitDesignLaboratory.jpg",
      experiments: {
        experiments: [
          "Functional and design parameter analysis of basic digital circuits, design and analysis of standard cells for combinational and sequential circuits and design the digital blocks using HDL (Verilog/VHDL) to generate its DSII.",
        ],
      },
      equipments: {
        equipments: [],
      },
    },
    {
      name: "Discrete Device Fabrication and Characterization Laboratory",

      image:
        "/Images/Labs/DiscreteDeviceFabricationandCharacterizationLaboratory.jpg",
      experiments: {
        experiments: [
          "Functional and design parameter analysis of basic digital circuits, design and analysis of standard cells for combinational and sequential circuits and design the digital blocks using HDL (Verilog/VHDL) to generate its DSII.",
        ],
      },
      equipments: {
        equipments: [],
      },
    },
    {
      name: "System on Programmable Chip Design Laboratory",

      image: "/Images/Labs/SystemonProgrammableChipDesignLaboratory.jpg",
      experiments: {
        experiments: [
          "Building a Zynq-700 processor design in the Vivado IDE, designing a Microblaze processor using Xilinx Vivado, interfacing of designed Microblaze with available peripherals and design of custom peripherals using HDL.",
        ],
      },
      equipments: {
        equipments: [],
      },
    },
    {
      name: "Analog and Mixed Signal IC design Laboratory",
      description:
        "The lab is equipped with high-end computing resources and software tools for the design and analysis of digital signal processing algorithms. The lab is used for the implementation of various signal processing algorithms such as filtering, spectral analysis, and image processing.",
      image: "/Images/Labs/AnalogandMixedSignalICdesignLaboratory.jpg",
      experiments: {
        experiments: [
          "Switches, active resistors, current sources, current mirrors, current and voltage sources,Wilson and Widlar current mirrors, basic bipolar and CMOS process technology, D-A and A-D converters, filter design considerations. CMOS based differential and operational amplifiers, multipliers, modulators, quasi differential amplifier, errors due to mismatch, replication principle, qualitative analysis, common mode response, frequency response, noise performance of differential amplifiers.",
        ],
      },
      equipments: {
        equipments: [],
      },
    },
  ]
  return (
    <div>
      <Navbar />
      {/* <MobileNavbar /> */}
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
              <Grid item xs="11" md="3">
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
                          setActive(key)
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
                    {labs?.map((item, key) =>
                      active === key ? (
                        <>
                          <Typography
                            textAlign={"center"}
                            color="secondary.main"
                            fontWeight={600}
                            variant="h1"
                          >
                            {item.name}
                          </Typography>
                          <img
                            src={`${image_api}${item.image}`}
                            alt={item.image}
                            width={"100%"}
                            style={{ padding: 0 }}
                          />
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
                            {item?.experiments ? (
                              <>
                                {item?.experiments["experiments"]?.map(
                                  (exp, i) => (
                                    <>
                                      <Grid item> • {exp}</Grid>
                                    </>
                                  )
                                )}
                              </>
                            ) : (
                              <></>
                            )}
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
              title="Research Labs"
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
                <Grid item xs="11" md="3">
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
                            setActive(key)
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
                            <Typography
                              textAlign={"center"}
                              color="secondary.main"
                              fontWeight={600}
                              variant="h1"
                            >
                              {item.name}
                            </Typography>
                            <br />
                            <br />
                            <Grid
                              item
                              sx={{ textAlign: "left", fontWeight: "800" }}
                            >
                              <Typography variant="h5" color="secondary.main">
                                Prof. In-Charge:
                              </Typography>
                              <Typography variant="h3">
                                <a
                                  href={`${item.link}`}
                                  style={{ color: "black" }}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  {item.person}
                                </a>
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
                            <img
                              src={`${image_api}${item.image}`}
                              alt={item.image}
                              width={"100%"}
                              style={{ padding: 0 }}
                            />
                            <Grid item sx={{ textAlign: "left" }}>
                              <Typography variant="p">
                                {item.description}
                              </Typography>
                            </Grid>

                            {/* <Typography
                              textAlign={"center"}
                              mt={3}
                              color="secondary.main"
                              fontWeight={600}
                              variant="h1"
                            >
                              Research Highlights
                            </Typography>
                            <Grid item sx={{ textAlign: "left" }}>
                              {item.review ? (
                                <>
                                  {Object.keys(item.review)?.map((exp, i) => (
                                    <>
                                      <Grid item>
                                        <strong>{exp}</strong>
                                      </Grid>
                                      <Grid item>
                                        <ul>
                                          {item?.review[exp]?.map(
                                            (item2, key2) => (
                                              <li
                                                style={{
                                                  listStyleType: "circle",
                                                }}
                                              >
                                                <Typography variant="p">
                                                  {item2}
                                                </Typography>
                                              </li>
                                            )
                                          )}
                                        </ul>
                                      </Grid>
                                    </>
                                  ))}
                                </>
                              ) : (
                                <></>
                              )}
                            </Grid> */}
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
                                <Typography variant="p">• {eq}</Typography>
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
      {params.type === "postgraduate" ? (
        <>
          <Header
            title={postgraduate.title}
            description={postgraduate.description}
            image={postgraduate.image}
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
              <Grid item xs="11" md="3">
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
                    {PostgraduateData?.map((item, key) => (
                      <ButtonBase
                        onClick={() => {
                          setActive(key)
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
                    {PostgraduateData?.map((item, key) =>
                      active === key ? (
                        <>
                          <Typography
                            textAlign={"center"}
                            color="secondary.main"
                            fontWeight={600}
                            variant="h1"
                          >
                            {item.name}
                          </Typography>
                          <img
                            // src={`${image_api}${item.image}`} when backend is ready and sending data
                            src={item.image}
                            alt={item.image}
                            width={"100%"}
                            style={{ padding: 0 }}
                          />
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
                            {item?.experiments ? (
                              <>
                                {item?.experiments["experiments"]?.map(
                                  (exp, i) => (
                                    <>
                                      <Grid item> • {exp}</Grid>
                                    </>
                                  )
                                )}
                              </>
                            ) : (
                              <></>
                            )}
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
    </div>
  )
}
