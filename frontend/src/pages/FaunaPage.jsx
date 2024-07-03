import React from "react";
import Header from "../components/Header";
import { fauna } from "../HeaderData";
import Navbar from "../components/BodyNavbar/BodyNavbar";
import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import Email from "@mui/icons-material/Email";
import LazyLoad from "react-lazyload";
import { ReactPhotoCollage } from "react-photo-collage";
import Instagram from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

class Fauna extends React.Component {
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
    return [3, 2, 3, 3, 2, 3];
  }
  render() {
    const setting = {
      width: this.state.innerWidth - 100,
      height: ["450px", "350px"],

      layout: this.getWidth(this.state.innerWidth),
      photos: [
        {
          source: "/Images/flaura_fauna/IITI_peacock.JPG",
        },
        {
          source: "/Images/flaura_fauna/IITI_Fox.JPG",
        },
        {
          source: "/Images/flaura_fauna/IITI_Lapwing.JPG",
        },
        {
          source: " /Images/flaura_fauna/IITI_Roller_Kshipra.JPG",
        },
        {
          source: "/Images/flaura_fauna/IITI_Leopard-2.JPG",
        },
        {
          source: "/Images/flaura_fauna/IITI_Leopard-3.JPG",
        },
        {
          source: "/Images/flaura_fauna/IITI_Leopard-4.JPG",
        },
        {
          source: "/Images/flaura_fauna/IITI_Snake.JPG",
        },
        {
          source: "/Images/flaura_fauna/IITI_Nightjar_Kshipra.JPG",
        },
        {
          source: "/Images/flaura_fauna/IITI_Leopard_DRB.JPG",
        },
        {
          source: "/Images/flaura_fauna/IITI_Owl_Guest_House.JPG",
        },
        {
          source: "/Images/flaura_fauna/IITI_Bird_KV.JPG ",
        },
        {
          source: "/Images/flaura_fauna/IITI_Plum_Headed.JPG",
        },
        {
          source: " /Images/flaura_fauna/IITI_Leopard.JPG",
        },
        {
          source: "/Images/flaura_fauna/IITI_Owl_DRB.JPG",
        },
        {
          source: "/Images/flaura_fauna/IITI_spotted.JPG",
        },
      ],
      showNumOfRemainingPhotos: true,
    };

    return (
      <div>
        <Navbar />
        <Header
          title={fauna.title}
        />
        <Container>
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

export default Fauna;

