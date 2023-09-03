import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Box, Container, Grid, Typography } from '@mui/material';

export default function WovenImageList() {
  return (
    <Container>
      {/* <Heading heading="Gallery" /> */}
      <Typography
        sx={{ textAlign: "center", fontSize: "2.3rem", py: 4 }}
        variant="h1"
        component="h2"
      >
        Electrical Engineering is vital in our Lives!
      </Typography>
      <ImageList
        sx={{ width: "100%", height: "20%", margin: "auto" }}
        variant="woven"
        cols={5}
        gap={20}
      >
        {itemData1.map((item) => (
          <ImageListItem key={item.img} sx={{ overflow: 'hidden' }} >

            <img
              src={`${item.img}`}                // srcSet={`${item.img}`}
              className="MuiImageListItem-img"
              alt={item.type}
              imgloading="lazy"
              width="200" height='100'
            />

          </ImageListItem>
        ))}
      </ImageList>
      <Grid container justifyContent="center" alignItems="center" spacing={2} sx={{ p: 2 }} >
        <Grid item xs={12} md={4} lg={4} >
          <img width="320" height="240" src="/Images/carousel/4.JPG" alt="" />
        </Grid>
        <Grid item xs={12} md={4} lg={4} >
          <video style={{ padding: "10px 0px" }} width="350" height="240" autoPlay muted controls >
            <source src={`Videos/video.mp4`} type="video/mp4" />
          </video>
        </Grid>
        <Grid item xs={12} md={4} lg={4} >
          <img width="320" height="240" src="/Images/carousel/6.JPG" alt="" />

        </Grid>

      </Grid>








      <ImageList
        sx={{ width: "100%", height: "20%", margin: "auto" }}
        variant="woven"
        cols={5}
        gap={20}
      >
        {itemData2.map((item) => (
          <ImageListItem key={item.img} sx={{ overflow: 'hidden' }} >

            <img
              src={`${item.img}`}                // srcSet={`${item.img}`}
              className="MuiImageListItem-img"
              alt={item.type}
              imgloading="lazy"
              width="200" height='100'
            />

          </ImageListItem>
        ))}
      </ImageList>
      <br />
      <br />

    </Container>
  );
}

const itemData1 = [
  {
    img: '/Images/carousel/1.JPG',
    type: 'img',
  },
  {
    img: '/Images/carousel/2.JPG',
    type: 'img',
  },
  {
    img: '/Images/carousel/3.JPG',
    type: 'img',
  },
  {
    img: '/Images/carousel/4.JPG',
    type: 'img',
  },
  {
    img: '/Images/carousel/5.JPG',
    type: 'img',
  },
];
const itemData2 = [
  {
    img: '/Images/carousel/6.JPG',
    type: 'img',
  },
  {
    img: '/Images/carousel/7.JPG',
    type: 'img',
  },
  {
    img: '/Images/carousel/8.JPG',
    type: 'img',
  },
  {
    img: '/Images/carousel/9.JPG',
    type: 'img',
  },
  {
    img: '/Images/carousel/10.JPG',
    type: 'img',
  },
]