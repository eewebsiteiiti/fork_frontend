import React from "react"
import { Typography, Container, Grid } from "@mui/material"
import { useEffect, useState } from "react"
import axios from "axios"
import { api, image_api } from "../Api"
import { useParams } from "react-router-dom"
import Navbar from "../components/BodyNavbar/BodyNavbar"
import Header from "../components/Header"

//importing data
import {
  studentAchievements,
  booksAchievements,
  facultyAchievements,
} from "../HeaderData"

const BooksPage = () => {
  const [data, setData] = useState()
  const [isError, setIsError] = useState([false])
  const params = useParams()
  useEffect(() => {
    axios
      .get(`${api}/achievements/${params.achievement}/read`, {
        mode: "cors",
      })
      .then((response) => {
        const sortedData = response.data.sort((a, b) => a.year - b.year);
        setData(sortedData);})
      .catch((error) => setIsError(error.message))
    if (!isError) {
      setData("Not Available")
    }
  }, [params, isError])
  return (
    <>
       <Navbar />
      {/* <MobileNavbar /> */}
      <Header
        title={`${
          params.achievement === "books"
            ? booksAchievements.title
            : params.achievement === "students"
            ? studentAchievements.title
            : params.achievement === "faculty"
            ? facultyAchievements.title
            : ""
        }`}
        description={`${
          params.achievement === "books"
            ? booksAchievements.description
            : params.achievement === "students"
            ? studentAchievements.description
            : params.achievement === "faculty"
            ? facultyAchievements.description
            : ""
        }`}
        image={`${
          params.achievement === "books"
            ? booksAchievements.image
            : params.achievement === "students"
            ? studentAchievements.image
            : params.achievement === "faculty"
            ? facultyAchievements.image
            : ""
        }`}
      />
      <Container sx={{ py: 2 }}>
        <br />
        <Grid container direction={"column-reverse"}>
          {data?.map((item, key) => (
            <>
              <Grid
                item
                sx={{
                  backgroundColor:
                    item.award === "The President of India Gold Medalist"
                      ? "#ffda95"
                      : item.award === "Departmental Silver Medalist"
                      ? "#dfdfdf"
                      : "white",
                }}
              >
                <Grid
                  container
                  justifyContent="space-between"
                  direction="row-reverse"
                  alignItems="center"
                  spacing={2}
                >
                  {item.image ? (
                    <Grid item xs={11} md={1}>
                      <img
                        src={`${image_api}${item.image}`}
                        alt={item.image}
                        width={50}
                      />
                    </Grid>
                  ) : (
                    <></>
                  )}
                  <Grid item xs={12} md={11}>
                    <Grid
                      container
                      justifyContent="space-between"
                      direction="row"
                      alignItems="center"
                      spacing={2}
                    >
                      <Grid item>
                        <Typography
                          mt={1}
                          color={"primary.main"}
                          fontWeight={600}
                        >
                          {item.name}
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography
                          mt={1}
                          color={"primary.main"}
                          fontWeight={600}
                        >
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
              </Grid>
              <br />
              <hr color="rgb(50,50,50,.1)" />
              <br />
            </>
          ))}
        </Grid>
      </Container>
    </>
  )
}

export default BooksPage
