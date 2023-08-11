import "./App.css";
import theme from "./Theme";
import BodyNavbar from "./components/BodyNavbar/BodyNavbar";
import Footer from "./components/HomePage/Footer"
import HomePage from "./pages/HomePage";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import Header from "./components/Header";


// importing the header data
import { about } from "./HeaderData";


function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/about"
              element={
                <>
                  <Header title={about.title} description={about.description} image={about.image} />
                  <AboutPage />
                </>
              }
            />
            <Route path="/a" element={<BodyNavbar />} />
          </Routes>

          {/* <Footer /> */}
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
