import { React, useEffect, useState } from "react";
import { Paper } from "@mui/material";
import { Container } from "@mui/material";
import { Typography } from "@mui/material";
import axios from "axios";
import { Box } from "@mui/material";

const Staff_Card = () => {
    // const [data, setData] = useState();
    // const [isError, setIsError] = useState();
    // useEffect(() => {
    //     axios
    //         .get(`http://127.0.0.1:8000/api/people/Faculty/read`)
    //         .then((response) => setData(response.data))
    //         .catch((error) => setIsError(error.message));
    //     if (!isError) {
    //         setIsError("Not Available");
    //     }
    // }, []);

    const data = [{ image: "https://source.unsplash.com/random/200x200?sig=1", name: "Dr.Vivek Kanhangad", at: "Ph.D IIT Indore", role: "Professor", role1: "Head Of Department", department: "Department of Electrical Engineering", ResearchFocus: ["Biometrics", "Digital Signals", "Image Processing"], address: "206 POD 1A", phone: "1234567", email: "kvivek@iiti.ac.in" },
    { image: "https://source.unsplash.com/random/200x200?sig=1", name: "Dr.Vivek Kanhangad", at: "Ph.D IIT Indore", role: "Professor", role1: "Head Of Department", department: "Department of Electrical Engineering", ResearchFocus: ["Biometrics", "Digital Signals", "Image Processing"], address: "206 POD 1A", phone: "1234567", email: "kvivek@iiti.ac.in" },
    { image: "https://source.unsplash.com/random/200x200?sig=1", name: "Dr.Vivek Kanhangad", at: "Ph.D IIT Indore", role: "Professor", role1: "Head Of Department", department: "Department of Electrical Engineering", ResearchFocus: ["Biometrics", "Digital Signals", "Image Processing"], address: "206 POD 1A", phone: "1234567", email: "kvivek@iiti.ac.in" }
    ];

    return (
        <>

            <Container sx={{ display: { xs: "none", md: "block" } }}>
                {data?.map((item, i) => (
                    <>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                px: 3,
                                my: 3,
                                width: "100%",
                                borderBottom: "1px solid #ccc",
                            }}
                        >
                            <Box sx={{ p: 2 }}>
                                <img
                                    alt=''
                                    width="150"
                                    src={`${item.image}`}
                                    loading="lazy"
                                />
                            </Box>
                            <Box sx={{ p: 2, width: "100%" }}>
                                <Typography variant="h5" color="primary">
                                    <a style={{ borderBottom: "1px solid #ccc" }} href={`${item.link}`}>{item.name}</a>
                                </Typography>
                                <Typography variant="h5">{item.at}</Typography>
                                <br />
                                <Typography variant="h5">{item.role}</Typography>
                                <Typography variant="h6">{item.role1}</Typography>
                                <Typography variant="h6">{item.department}</Typography>
                                <br />
                                <Typography fontWeight="600">Research Focus:</Typography>
                                {
                                    item.ResearchFocus.map((item1, i) => (
                                        <>{item1}</>
                                    ))
                                }
                                <Box>
                                    <Typography fontSize="0.8rem">{item.details}</Typography>
                                </Box>
                            </Box>
                            <Box sx={{ p: 2, width: "40%" }}>
                                <Typography fontSize="0.8rem">
                                    Phone: {item.phone}
                                </Typography>
                                <Typography fontSize="0.8rem">
                                    Email: <a href={`mailto:${item.email}`}>{item.email}</a>
                                </Typography>
                                <Typography fontSize="0.8rem">
                                    Address:{item.address}
                                </Typography>
                            </Box>
                        </Box>
                    </>
                ))}
            </Container>

            <Box sx={{ display: { xs: "block", md: "none" }, textAlign: "center" }}>
                {data?.map((item, i) => (
                    <>
                        <Paper
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                py: 2,
                                m: 2,
                            }}
                        >
                            <Box>
                                <img
                                    alt=''
                                    width="110"
                                    height="169"
                                    src={`${item.image}`}
                                    loading="lazy"
                                />
                            </Box>
                            <Box>
                                <Typography variant="h5" color="primary">
                                    <a href={`${item.link}`}>{item.name}</a>
                                </Typography>
                                <Typography variant="h7">{item.title}</Typography>

                                <Typography fontWeight="600">Research Interest:</Typography>
                                <Box>
                                    <Typography fontSize="0.8rem">{item.details}</Typography>
                                </Box>
                            </Box>
                            <Box>
                                <Typography fontSize="0.8rem">
                                    Email: <a href={`mailto:${item.email}`}>{item.email}</a>
                                </Typography>
                                <Typography fontSize="0.8rem">
                                    Address:{item.address}
                                </Typography>
                            </Box>
                        </Paper>
                    </>
                ))}
            </Box>

        </>
    );
};

export default Staff_Card;