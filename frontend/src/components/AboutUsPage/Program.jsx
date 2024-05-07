import React, { useState } from "react"
import {
  Container,
  Typography,
  Grid,
  Dialog,
  DialogContent,
  IconButton,
} from "@mui/material"
import CloseIcon from "@mui/icons-material/Close" // Import CloseIcon
import "../styles/program.css"

export default function Program() {
  const [open, setOpen] = useState(false)
  const [selectedProgram, setSelectedProgram] = useState("")
  const [imagePath, setImagePath] = useState("")

  const handleClickOpen = (program, imagePath) => {
    setSelectedProgram(program)
    setImagePath(imagePath)
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <div>
        <Container>
          <Typography variant="h1" color="black" paddingY={5}>
            PROGRAMS OFFERED
          </Typography>
          <div>
            <Grid
              container
              justifyContent={"space-around"}
              alignItems={"center"}
              pb={9}
            >
              <Grid
                item
                sx={{
                  width: "150px",
                  height: "150px",
                  marginY: "10px",
                  // borderRadius: "8px",
                }}
                className="programBg1"
                onClick={() =>
                  handleClickOpen("B.Tech.", "/Images/gallery/btech22.jpg")
                }
              >
                <div
                  className="programBgColor"
                  style={{
                    display: "flex",
                    height: "150px",
                    width: "150px",
                    alignContent: "center",
                    alignItems: "center",
                    // borderRadius: "8px",
                  }}
                >
                  <Typography
                    variant="h1"
                    align="center"
                    color={"white"}
                    sx={{
                      width: "150px",
                    }}
                  >
                    B.Tech.
                  </Typography>
                </div>
              </Grid>
              <Grid
                item
                sx={{
                  width: "150px",
                  height: "150px",
                  marginY: "10px",
                  // borderRadius: "8px",
                }}
                className="programBg2"
                onClick={() => handleClickOpen("M.Tech.", "Images/mtech25.JPG")}
              >
                <div
                  className="programBgColor"
                  style={{
                    display: "flex",
                    width: "150px",
                    height: "150px",
                    alignContent: "center",
                    alignItems: "center",
                    // borderRadius: "8px",
                  }}
                >
                  <Typography
                    variant="h1"
                    align="center"
                    color={"white"}
                    sx={{ width: "150px" }}
                  >
                    M.Tech.
                  </Typography>
                </div>
              </Grid>

              <Grid
                item
                sx={{
                  width: "150px",
                  height: "150px",
                  marginY: "10px",
                  // borderRadius: "8px",
                }}
                className="programBg3"
                onClick={() => handleClickOpen("M.S.", "/Images/about.jpg")}
              >
                <div
                  className="programBgColor"
                  style={{
                    display: "flex",
                    width: "150px",
                    height: "150px",
                    alignContent: "center",
                    alignItems: "center",
                    // borderRadius: "8px",
                  }}
                >
                  <Typography
                    variant="h1"
                    align="center"
                    color={"white"}
                    sx={{ width: "150px" }}
                  >
                    M.S.
                  </Typography>
                </div>
              </Grid>
              <Grid
                item
                sx={{
                  width: "150px",
                  height: "150px",
                  marginY: "10px",
                  // borderRadius: "8px",
                }}
                className="programBg4"
                onClick={() =>
                  handleClickOpen("Ph. D.", "/Images/gallery/phd_23.jpg")
                }
              >
                <div
                  className="programBgColor"
                  style={{
                    display: "flex",
                    width: "150px",
                    height: "150px",
                    alignContent: "center",
                    alignItems: "center",
                    // borderRadius: "8px",
                  }}
                >
                  <Typography
                    variant="h1"
                    align="center"
                    color={"white"}
                    sx={{ width: "150px" }}
                  >
                    Ph. D.
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </div>
        </Container>

        <Dialog
          open={open}
          onClose={handleClose}
          fullWidth
          maxWidth="md"
          PaperProps={{
            sx: {
              // borderRadius: "16px",
            },
          }}
        >
          <DialogContent
            sx={{
              padding: 0,
              position: "relative",
              textAlign: "center",
              overflow: "hidden",
              maxHeight: "80vh",
              height: "auto",
              //
            }}
          >
            <img
              src={imagePath}
              alt="Program"
              style={{
                width: "100%",
                // height: "100%",
                height: "auto",
                objectFit: "cover",
                overflow: "hidden",
                maxHeight: "80vh",
              }}
            />
            <Typography
              variant="h1"
              sx={{
                position: "absolute",
                top: "5px",
                left: "50%",
                transform: "translateX(-50%)",
                color: "white",
                zIndex: 1,
                width: "100%",
                textAlign: "center",
                fontSize: "1.8rem",
              }}
            >
              {selectedProgram}
            </Typography>
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{
                position: "absolute",
                top: 5,
                right: 10,
                color: "#f5f5f5",
                zIndex: 1,
              }}
            >
              <CloseIcon />
            </IconButton>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
