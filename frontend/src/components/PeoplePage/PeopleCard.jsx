import React, { useEffect, useState } from "react";
import { Card, CardMedia } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import axios from "axios";
import LoadingPage from "../../pages/LoadingPage";
import { api, image_api } from "../../Api";
export default function PeopleCard(props) {
  const [data, setData] = useState();
  console.log(props.program)
  const [isError, setIsError] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      axios
        .get(`${api}/people/${props.program}/read/${props.year}`, {
          mode: "cors",
        })
        .then((response) => setData(response.data))
        .catch((error) => setIsError(error.message));
      if (!isError) {
        setData("Not Available");
      }
    }, 3000);
    
  }, [props.year, isError, props.program]);
  return (
    <div>
      {data ? (
        <>
          <Grid
            container
            justifyContent="Left"
            direction="row"
            alignItems="center"
            spacing={2}
          >
            {data?.map((item, i) => (
              <>
                {console.log(item.program)}
                {props.prog === item.program ? (
                  <>
                    <>
                      {console.log(item.image)}
                      <Grid item mt={5}>
                        <Card sx={{ width: 150, height: 280 }}>
                          {console.log(item.image)}
                          {item.image ? (
                            <CardMedia
                              sx={{ height: "150px" }}
                              image={`${image_api}${
                                 "/media/" 
                              }${item.image}`}
                              // title="Faculty"
                              loading="lazy"
                            />
                          ) : (
                            <>
                              <CardMedia
                                sx={{ height: 150 }}
                                image="/Images/profile_placeholder.jpg"
                                // title="Faculty"
                                loading="lazy"
                              />
                            </>
                          )}
                          {/* <CardMedia
                            sx={{ height: 150 }}
                            image={props.photo}
                            title="Staff"
                          /> */}
                          {/* yeh extra tha commented part isliye nahi chal rha tha  */}
                          <CardContent>
                            <Typography
                              gutterBottom
                              component="div"
                              fontSize={12}
                            >
                              {item.name}
                            </Typography>

                            <Typography
                              variant="body2"
                              color="black"
                              fontSize={12}
                            >
                              <p>{item.roll_no}</p>
                              <p> {item.year}</p>
                              <p> {item.program}</p>
                              <p> {item.date}</p>
                              <p>{item.title}</p>

                              <p> {item.email}</p>
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                    </>
                  </>
                ) : (
                  <></>
                )}
              </>
            ))}
          </Grid>
        </>
      ) : (
        <LoadingPage />
      )}
    </div>
  );
}
