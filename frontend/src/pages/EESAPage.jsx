import React from "react";
import Header from "../components/Header";
import { eesa } from "../HeaderData";
import Navbar from "../components/BodyNavbar/BodyNavbar";
import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import Email from "@mui/icons-material/Email";
import LazyLoad from "react-lazyload";
import { ReactPhotoCollage } from "react-photo-collage";
import Instagram from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

class EESAPage extends React.Component {
  state = {
    innerWidth: window.innerWidth,
  };

  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }

  resize() {
    this.setState({ innerWidth: window.innerWidth });
  }
  getWidth(innerWidth) {
    if (innerWidth <= 700) return [2, 2, 1, 2, 1, 2];
    return [3, 2, 3, 3, 2, 3,3];
  }
  render() {
    const setting = {
      width: this.state.innerWidth - 100,
      height: ["450px", "350px"],

      layout: this.getWidth(this.state.innerWidth),
      photos: [
        {
          source: "/Images/eesa/eesa.JPG",
        },
        {
          source: "/Images/eesa/eesa1.jpg",
        },
        {
          source: "/Images/eesa/eesa9.jpg",
        },
        {
          source: "/Images/eesa/eesa2.jpg",
        },
        {
          source: "/Images/eesa/eesa15.JPG",
        },
        {
          source: "/Images/eesa/eesa3.jpg",
        },
        {
          source: "/Images/eesa/eesa6.jpg",
        },
        {
          source: "/Images/eesa/eesa11.JPG",
        },
        {
          source: "/Images/eesa/eesa8.jpg",
        },
        {
          source: "/Images/eesa/eesa7.jpg",
        },
        {
          source: "/Images/eesa/eesa10.jpg",
        },
        {
          source: "/Images/eesa/eesa5.jpg",
        },
        {
          source: "/Images/eesa/eesa4.JPG",
        },
        {
          source: "/Images/eesa/eesa12.jpg",
        },
        {
          source: "/Images/eesa/eesa13.jpg",
        },
        {
          source: "/Images/eesa/eesa14.jpg",
        },
        {
          source: "/Images/eesa/eesa16.jpg",
        },
        {
          source: "/Images/eesa/eesa17.jpg",
        },
        {
          source: "/Images/eesa/eesa18.jpg",
        },



      ],
      showNumOfRemainingPhotos: true,
    };

    return (
      <div>
        <Navbar />
        <Header 
          title={eesa.title}
          description={eesa.description }
          image={eesa.image}
        />
        <Container>
          <div style={{ display: "flex" }}>
            <div style={{ marginLeft: "20px" }}>
              <a
                rel="noreferrer"
                href="https://www.youtube.com/watch?v=4ZBnNHY2Bpk"
                target="_black"
              >
                <YouTubeIcon sx={{ color: "primary.main", fontSize: "35px" }} />
              </a>
            </div>
            <div style={{ marginLeft: "10px" }}>
              <a
                rel="noreferrer"
                href="https://instagram.com/eesa_iiti?igshid=NzZlODBkYWE4Ng"
                target="_black"
              >
                <Instagram sx={{ color: "primary.main", fontSize: "35px" }} />
              </a>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Email sx={{ color: "primary.main", fontSize: "35px",marginLeft:"10px" }} /> Email:
              &nbsp;
              <a href="mailto:eesa@iiti.ac.in">
                <Typography variant="p" color={"primary"}>
                  eesa@iiti.ac.in
                </Typography>
              </a>
            </div>
          </div>
          <div className="gallery">
            <Container sx={{ py: 2 }}>
              <LazyLoad height={200}>
                <ReactPhotoCollage {...setting} />
              </LazyLoad>
            </Container>
          </div>
        </Container>
      </div>
    );
  }
}

export default EESAPage;
