import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
export default function Dates(props) {
  return (
    <div>
      <Card
        sx={{
          width: "15vw",
          height:"17vh",
          borderRight: 3,
          borderTop: 3,
          whiteSpace: "nowrap",
          overflow:"hidden",
          textOverflow: "ellipsis",
          borderRadius: 0,
          borderColor: "primary.main",
        }}
        elevation={1}
      >
        {console.log(props)}
        {/* <CardMedia
          component="img"
          sx={{ height: 140 }}
          image={`${image_api}${props.image}`}
          loading="lazy"
        /> */}

        <CardContent>
          <Grid
            container
            justifyContent="Left"
            direction="row"
            alignItems="center"
            spacing={2}
          >
            <Grid item>
              <Typography
                color="primary.main"
                sx={{
                  fontFamily: "IBM Plex Mono, monospace",
                  fontSize: "32px",
                }}
              >
                {props.date}
              </Typography>
            </Grid>
            <Grid item>
              <Grid
                container
                justifyContent="Left"
                direction="column"
                alignItems="flex-start"
                spacing={0}
              >
                <Grid item>
                  <Typography
                    color="black"
                    sx={{
                      fontFamily: "IBM Plex Mono, monospace",
                      fontSize: "18px",
                    }}
                  >
                    {props.month}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    color="black"
                    sx={{
                      fontFamily: "IBM Plex Mono, monospace",
                      fontSize: "9px",
                    }}
                  >
                    {props.day}, {props.time}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            container
            justifyContent="Left"
            direction="column"
            alignItems="flex-start"
            spacing={0}
          >
            <br />
            <Grid item>
              <Typography
                color="gray"
                sx={{
                  fontFamily: "IBM Plex Mono, monospace",
                  fontSize: "9px",
                }}
              >
                {props.title}
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                color="gray"
                sx={{
                  fontFamily: "IBM Plex Mono, monospace",
                  fontSize: "9px",
                }}
              >
                {props.description}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
        {/* <CardActions>
          <Button size="small">
            <Link to={props.link}> Learn More...</Link>
          </Button>
        </CardActions> */}
      </Card>
    </div>
  );
}
