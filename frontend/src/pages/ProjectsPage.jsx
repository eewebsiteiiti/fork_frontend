import { useEffect, useState } from "react";
import axios from "axios";
import { Typography, Box } from "@mui/material";
import { api } from "../Api"
import Header from "../components/Header";
import Navbar from "../components/BodyNavbar/BodyNavbar";
import {projects} from '../HeaderData';
import '../components/styles/projects.css';

export default function ProjectsPage() {
  const [data, setData] = useState();
  const [isError, setIsError] = useState();

  useEffect(() => {
    axios
      .get(`${api}/research/project/read`)
      .then((response) => setData(response.data))
      .catch((error) => setIsError(error.message));
    if (!isError) {
      setIsError("Not Available");
    }
  }, [isError]);

  return (
    <>
    <Navbar/>
    <Header title={projects.title} description={projects.description} image={projects.image}/>
      <div className="projects">
      <Box>
        <br/>
        <br/>
        
        <table>
          <tr>
            <th>Title</th>
            <th align="right">Project Incharge</th>
            <th align="right">Funding</th>
            <th align="right">Duration</th>
            <th align="right">Source</th>
          </tr>

          {data?.map((item, key) => (
            <>
              <tr>
                <td>{item.title}</td>
                <td align="center">{item.worker}</td>
                <td align="center">{item.funding}</td>
                <td align="center">{item.duration}</td>
                <td align="center">{item.project_type}</td>
              </tr>
            </>
          ))}
        </table>
      </Box>
      </div>
      <br />
    </>
  );
}