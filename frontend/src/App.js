import "./App.css";
import theme from "./Theme";
import Footer from "./components/HomePage/Footer";
import HomePage from "./pages/HomePage";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import PeoplePage from "./pages/PeoplePage";
import GalleryPage from "./pages/GalleryPage";
import ProjectsPage from "./pages/ProjectsPage";
import EESAPage from "./pages/EESAPage";
import ResearchPage from "./pages/ResearchPage";
import LabPage from "./pages/LabPage";
import CoursePage from "./pages/CoursePage";
import BooksPage from "./pages/BooksPage";
import CourseNewPage from "./pages/CourseNewPage";
import StatsPage from "./pages/StatsPage";
import RedirectToAPIs from "./RedirectToAPIs";
import DepartmentCommittees from "./pages/DepartmentCommittees";
import ActivitiesPage from "./pages/ActivitiesPage";
import SeminarPage from "./pages/SeminarPage";
import Reads from "./pages/Reads";
import Fauna from "./pages/FaunaPage";
function App() {
  return (
    <div className="App ">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/people/:program" element={<PeoplePage/>}/>
            <Route path="/people/:program/:year" element={<PeoplePage/>}/>
            <Route path="/research" element={<ResearchPage/>}/>
            <Route path="/research/stats" element={<StatsPage/>}/>
            <Route path="/gallery" element={<GalleryPage/>}/>
            <Route path="/projects" element={<ProjectsPage/>}/>
            <Route path="/activities/upcoming" element={<ActivitiesPage />}/>
            <Route path="/activities/eesa" element={<EESAPage/>}/>
            <Route path="/activities/seminars" element={<SeminarPage/>}/> 
            <Route path ="/activities/reads" element={<Reads/>}/>
            <Route path = "/activities/flaura" element= {<Fauna/>}/>
            <Route path="/labs/:type" element={<LabPage/>}/>
            <Route path="/courses/:program" element={<CoursePage/>}/>
            <Route path="/courses/:program/:year/old" element={<CoursePage/>}/>
            <Route path="/courses/:program/new" element={<CourseNewPage />}/>
            <Route path="/courses/:program/:year" element={<CourseNewPage />}/>
            <Route path="/achievements/:achievement" element={<BooksPage />}/>
            <Route path="/research/stats/:program" element={<StatsPage />}/>
            <Route path="/admin_ee" element={<RedirectToAPIs />}/>
            <Route path="/people/Committees" element={<DepartmentCommittees />}/>  
         </Routes>
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
