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

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/people/:program" element={<PeoplePage/>}/>
            <Route path="/people/:program/:year" element={<PeoplePage/>}/>
            <Route path="/gallery" element={<GalleryPage/>}/>
            <Route path="/projects" element={<ProjectsPage/>}/>
            <Route path="/eesa" element={<EESAPage/>}/>
          </Routes>
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
