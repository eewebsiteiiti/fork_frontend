import * as React from "react"
import ImageList from "@mui/material/ImageList"
import ImageListItem from "@mui/material/ImageListItem"
import { Container, Grid, Typography } from "@mui/material"

export default function WovenImageList() {
  return (
    <Container>
      {/* <Heading heading="Gallery" /> */}
      <Typography
        sx={{ textAlign: "center", fontSize: "2.3rem", py: 4 }}
        variant="h1"
        component="h2"
      >
        Electrical Engineering is vital in our lives!
      </Typography>
      <ImageList
        sx={{ width: "100%", height: "20%", margin: "auto" }}
        variant="woven"
        cols={3}
        gap={20}
      >
        {itemData1.map((item) => (
          <ImageListItem key={item.img} sx={{ overflow: "hidden" }}>
            <img
              src={`${item.img}`} // srcSet={`${item.img}`}
              className="MuiImageListItem-img"
              alt={item.type}
              imgloading="lazy"
              width="200"
              height="100"
            />
          </ImageListItem>
        ))}
      </ImageList>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        spacing={2}
        sx={{ p: 2 }}
      >
        <Grid
          item
          xs={12}
          md={4}
          lg={4}
          sx={{ display: { xs: "none", sm: "none", md: "block" } }}
        >
          <img height="245" src="Images/gallery/FC2.JPG" alt="" />
        </Grid>

        <Grid item xs={12} md={4} lg={4}>
          <center>
            {/* <video
              style={{ padding: "10px 0px" }}
              width="100%"
              height="240"
              autoPlay
              muted
              controls
            >
              <source src={`Videos/DepartmentalVideo.mp4`} type="video/mp4" />
            </video> */}
            <iframe
              title="Departmental Video"
              width="350"
              height={240}
              src="https://www.youtube.com/embed/4ZBnNHY2Bpk"
            ></iframe>
          </center>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          lg={4}
          sx={{ display: { xs: "none", sm: "none", md: "block" } }}
        >
          <img height="245" src="Images/gallery/FC2.JPG" alt="" />
        </Grid>
      </Grid>

      <ImageList
        sx={{ width: "100%", height: "20%", margin: "auto" }}
        variant="woven"
        cols={3}
        gap={20}
      >
        {itemData2.map((item) => (
          <ImageListItem key={item.img} sx={{ overflow: "hidden" }}>
            <img
              src={`${item.img}`} // srcSet={`${item.img}`}
              className="MuiImageListItem-img"
              alt={item.type}
              imgloading="lazy"
              width="200"
              height="100"
            />
          </ImageListItem>
        ))}
      </ImageList>
      <br />

      {/* <ImageList
        sx={{ width: "100%", height: "20%", margin: "auto" }}
        variant="woven"
        cols={3}
        gap={20}
      >
        {itemData3.map((item) => (
          <ImageListItem key={item.img} sx={{ overflow: "hidden" }}>
            <img
              src={`${item.img}`} // srcSet={`${item.img}`}
              className="MuiImageListItem-img"
              alt={item.type}
              imgloading="lazy"
              width="200"
              height="100"
            />
          </ImageListItem>
        ))}
      </ImageList> */}

      {/* <br />
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        spacing={2}
        sx={{ p: 2 }}
      >

        
        <Grid item xs={12} md={4} lg={4}>
          <center>
            <video
              style={{ padding: "10px 0px" }}
              width="100%"
              height="240"
              autoPlay
              muted
              controls
            >
              <source src={`Videos/video.mp4`} type="video/mp4" />
            </video>
          </center>
        </Grid>
      </Grid>
      <br />
       */}
    </Container>
  )
}

const itemData1 = [
  {
    img: "/Images/carousel/1.JPG",
    type: "img",
  },
  {
    img: "/Images/carousel/2.JPG",
    type: "img",
  },
  {
    img: "/Images/gallery/ps.JPG",
    type: "img",
  },
]
const itemData2 = [
  {
    img: "/Images/gallery/vdn.JPG",
    type: "img",
  },
  {
    img: "/Images/carousel/4.JPG",
    type: "img",
  },
  {
    img: "/Images/carousel/14.JPG",

    type: "img",
  },
  // {
  //   img: "/Images/gallery/csp.JPG",
  //   type: "img",
  // },
  // {
  //   img: "/Images/gallery/IMG_6892.JPG",
  //   type: "img",
  // },
  // {
  //   img: "/Images/gallery/9K6A6843.JPG",
  //   type: "img",
  // },
]
