import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Container, Typography } from '@mui/material';

export default function WovenImageList() {
    return (
      <Container>
        {/* <Heading heading="Gallery" /> */}
        <Typography
          sx={{ textAlign: "center", fontSize: "2.3rem", py: 4 }}
          variant="h1"
          component="h2"
        >
          Electrical is very important in our Lives!
        </Typography>
        <ImageList
          sx={{ width: "100%", height: "20%", margin: "auto" }}
          variant="woven"
          cols={5}
          gap={20}
        >
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}`}
                // srcSet={`${item.img}`}
                className="MuiImageListItem-img"
                alt={item.title}
                loading="lazy"
                // width="200" height='100'
              />
            </ImageListItem>
          ))}
        </ImageList>
        <br />
        <br />
        <Typography
          sx={{ textAlign: "center", fontSize: "2.3rem", py: 4 }}
          variant="h1"
          component="h2"
        >
          Timeline!
        </Typography>
        <img src="/Images/history.png" alt='not available' width="98%" />
      </Container>
    );
}

const itemData = [
    {
        img: '/Images/carousel/1.JPG',
        title: 'Bed',
    },
    {
        img: '/Images/carousel/2.JPG',
        title: 'Kitchen',
    },
    {
        img: '/Images/carousel/3.JPG',
        title: 'Sink',
    },
    {
        img: '/Images/carousel/4.JPG',
        title: 'Books',
    },
    {
        img: '/Images/carousel/5.JPG',
        title: 'Chairs',
    },
    {
        img: '/Images/carousel/6.JPG',
        title: 'Candle',
    },
    {
        img: '/Images/carousel/7.JPG',
        title: 'Laptop',
    },
    {
        img: '/Images/carousel/8.JPG',
        title: 'Doors',
    },
    {
        img: '/Images/carousel/9.JPG',
        title: 'Coffee',
    },
    {
        img: '/Images/carousel/10.JPG',
        title: 'Coffee',
    },
];