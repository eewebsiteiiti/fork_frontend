import React from "react";
import { Container, Grid, Divider } from "@mui/material";
import { useParams } from "react-router-dom";
import Navbar from "../components/BodyNavbar/BodyNavbar";
import Header from "../components/Header";
import { btech, faculty, staff, mtech, phd, alumni } from "../HeaderData";
import StaffCard from "../components/PeoplePage/StaffCard";
import PeopleCard from "../components/PeoplePage/PeopleCard";
import { ms } from "../HeaderData";
const PeoplePage = () => {
  const params = useParams();
  console.log(params.program);
  console.log(params.year);
  const [news, setNews] = React.useState(1);
  return (
    <div>
      <Navbar />

      {params.program == "BTech" ? (
        <>
          <Header
            title={btech.title + " Batch " + params.year}
            description={btech.description}
            image={btech.image}
          />
          <div className="bg_border">
            <Container>
              <Grid
                container
                justifyContent={"space-around"}
                alignItems={"center"}
                direction={"column"}
              >
                <Grid item>
                  <PeopleCard program={params.program} year={params.year} />
                </Grid>
              </Grid>
            </Container>
          </div>
        </>
      ) : (
        <></>
      )}

      {params.program == "Faculty" ? (
        <>
          <Header
            title={faculty.title}
            description={faculty.description}
            image={faculty.image}
          />
          <div className="bg_border">
            <Container>
              <Grid
                container
                justifyContent={"space-around"}
                alignItems={"center"}
                direction={"column"}
              >
                <Grid item>
                  <StaffCard name="Faculty" />
                </Grid>
              </Grid>
            </Container>
          </div>
        </>
      ) : (
        <></>
      )}

      {params.program == "Staff" ? (
        <>
          <Header
            title={staff.title}
            description={staff.description}
            image={staff.image}
          />
          <div className="bg_border">
            <Container>
              <Grid
                container
                justifyContent={"space-around"}
                alignItems={"center"}
                direction={"column"}
              >
                <Grid item>
                  <StaffCard name="Staff" />
                </Grid>
              </Grid>
            </Container>
          </div>
        </>
      ) : (
        <></>
      )}

      {params.program == "MTech" ? (
        <>
          <Header
            title={mtech.title + " Batch " + params.year}
            description={mtech.description}
            image={mtech.image}
          />
          <Container>
            <Grid
              container
              justifyContent={"space-around"}
              alignItems={"center"}
              direction={"column"}
            >
              <Grid item>
                <PeopleCard program={params.program} year={params.year} />
              </Grid>
            </Grid>
          </Container>
        </>
      ) : (
        <></>
      )}
      {params.program == "MS" ? (
        <>
          <Header
            title={ms.title + " Batch " + params.year}
            description={ms.description}
            image={ms.image}
          />
          <Container>
            <Grid
              container
              justifyContent={"space-around"}
              alignItems={"center"}
              direction={"column"}
            >
              <Grid item>
                <PeopleCard program={params.program} year={params.year} />
              </Grid>
            </Grid>
          </Container>
        </>
      ) : (
        <></>
      )}

      {params.program == "PhD" ? (
        <>
          <Header
            title={phd.title + " Batch " + params.year}
            description={phd.description}
            image={phd.image}
          />
          <div className="bg_border">
            <Container>
              <Grid
                container
                justifyContent={"space-around"}
                alignItems={"center"}
                direction={"column"}
              >
                <Grid item>
                  <PeopleCard program={params.program} year={params.year} />
                </Grid>
              </Grid>
            </Container>
          </div>
        </>
      ) : (
        <></>
      )}

      {params.program == "Alumni" ? (
        <>
          <div className="bg_border">
            <Container>
              <Grid
                container
                justifyContent={"space-around"}
                alignItems={"center"}
                direction={"column"}
              >
                <Grid item>
                  <PeopleCard program={params.program} year={params.year} />
                </Grid>
              </Grid>
            </Container>
          </div>
        </>
      ) : (
        <></>
      )}

      {params.program === "Alumni" ? (
        <>
          <Header
            title={alumni.title + " Batch " + params.year}
            description={alumni.description}
            image={alumni.image}
          />
          <div className="bg_border">
            <Container>
              <br />

              <Grid
                container
                justifyContent="left"
                direction="row"
                alignItems="center"
              >
                <Grid
                  item
                  marginX={1}
                  borderTop={news === 1 ? 3 : 0}
                  borderColor={"primary.main"}
                  xs={1.5}
                  color={news === 1 ? "primary.main" : "black"}
                  backgroundColor={news === 1 ? "primary.main" : "white"}
                  sx={{
                    boxShadow:
                      news === 1 ? "0px 0px 0.5px 0px #010101" : "none",
                  }}
                >
                  <button
                    className="news"
                    onClick={() => setNews(1)}
                    style={{
                      textAlign: "center",
                      width: "100%",
                      padding: "20px",
                    }}
                  >
                    B. Tech
                  </button>
                </Grid>
                <Grid
                  item
                  marginX={1}
                  borderTop={news === 2 ? 3 : 0}
                  borderColor={"primary.main"}
                  xs={1.5}
                  color={news === 2 ? "primary.main" : "black"}
                  backgroundColor={
                    news === 2 ? "primary.mainGradient" : "white"
                  }
                  sx={{
                    boxShadow:
                      news === 2 ? "0px 0px 0.5px 0px #010101" : "none",
                    width: "100%",
                  }}
                >
                  <button
                    className="mtech"
                    onClick={() => setNews(2)}
                    style={{
                      textAlign: "center",
                      width: "100%",
                      padding: "20px",
                    }}
                  >
                    M. Tech
                  </button>
                </Grid>
                <Grid
                  item
                  marginX={1}
                  borderTop={news === 3 ? 3 : 0}
                  borderColor={"primary.main"}
                  xs={1.5}
                  color={news === 3 ? "primary.main" : "black"}
                  backgroundColor={news === 3 ? "primary." : "white"}
                  sx={{
                    boxShadow:
                      news === 3 ? "0px 0px 0.5px 0px #010101" : "none",
                  }}
                >
                  <button
                    className="news"
                    onClick={() => setNews(3)}
                    style={{
                      textAlign: "center",
                      width: "100%",
                      padding: "20px",
                    }}
                  >
                    Ph.D
                  </button>
                </Grid>
                <Grid
                  item
                  marginX={1}
                  borderTop={news === 4 ? 3 : 0}
                  borderColor={"primary.main"}
                  xs={1.5}
                  color={news === 4 ? "primary.main" : "black"}
                  backgroundColor={news === 4 ? "primary." : "white"}
                  sx={{
                    boxShadow:
                      news === 4 ? "0px 0px 0.5px 0px #010101" : "none",
                  }}
                >
                  <button
                    className="news"
                    onClick={() => setNews(4)}
                    style={{
                      textAlign: "center",
                      width: "100%",
                      padding: "20px",
                    }}
                  >
                    MS (Research)
                  </button>
                </Grid>
              </Grid>
              <Divider
                sx={{
                  bgcolor: "primary.main",
                  borderBottomWidth: 1,
                  opacity: 1,
                }}
              />
              {news === 1 ? (
                <>
                  <PeopleCard
                    year={params.year}
                    program={params.program}
                    prog="B.Tech."
                  />
                </>
              ) : (
                <></>
              )}
              {news === 2 ? (
                <>
                  <PeopleCard
                    year={params.year}
                    program={params.program}
                    prog="M.Tech."
                  />
                </>
              ) : (
                <></>
              )}
              {news === 3 ? (
                <>
                  <PeopleCard
                    year={params.year}
                    program={params.program}
                    prog="Ph.D."
                  />
                </>
              ) : (
                <></>
              )}
              {news === 4 ? (
                <>
                  <PeopleCard
                    year={params.year}
                    program={params.program}
                    prog="MS"
                  />
                </>
              ) : (
                <></>
              )}
              <br />
              <br />
            </Container>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default PeoplePage;
