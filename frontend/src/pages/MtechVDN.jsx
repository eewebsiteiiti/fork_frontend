// import { useEffect, useState } from "react"
// import axios from "axios"
// import {
//   Typography,
//   Box,
//   Container,
//   Table,
//   Paper,
//   TableBody,
//   TableHead,
//   TableRow,
//   TableCell,
// } from "@mui/material"
// import { TableContainer } from "@mui/material"
// import { useParams } from "react-router-dom"
// import { api } from "../Api"
// import Header from "../components/Header"
// import { courses } from "../HeaderData"
// import Navbar from "../components/BodyNavbar/BodyNavbar"

// export default function CourseNewPage(){
//     const param = useParams()
//   const [data, setData] = useState()
//   const [isError, setIsError] = useState()

//   useEffect(() => {
//     setTimeout(() => {
//       axios
//         .get(`${api}/course/read/${param.program}/new`, { timeout: 50000 })
//         .then((response) => setData(response.data))
//         .catch((error) => setIsError(error.message))
//       if (!isError) {
//         setIsError("Not Available")
//       }
//     }, [param.program, isError])
//   }, [param.program, isError])

//   return(
//     <div>
//         <Navbar />
//       {/* <MobileNavbar /> */}
//       <Header
//         title={courses.title}
//         description={courses.description}
//         image={courses.image}
//       />
//       <div className="bg_border">
//       <Container sx={{ py: 2 }}>
//           <br />
//           <a
//             rel="noreferrer"
//             target="_blank"
//             href={
//               param.program === "BTech"
//                 ? "https://academic.iiti.ac.in/Document/2020-November-UG-Rules+Policies+Curriculum+Syllabi-of-Courses%205%20Nov%202020.pdf"
//                 : "https://academic.iiti.ac.in/Document/2017-June-PG-Rules+Policies+Curriculum+Syllabi-of-Courses_19062017.pdf"
//             }
//           >
//             <Typography variant="h1" color="primary.main" textAlign="center">
//               {param.program === "BTech" ? "B. Tech." : "M. Tech."}
//             </Typography>

//            </a>
           
            
//      </Container>    
//       </div>
//     </div>
//   )
// }