import "./App.css";
import theme from "./Theme";
import BodyNavbar from "./components/BodyNavbar/BodyNavbar";
import Footer from "./components/HomePage/Footer";
import HomePage from "./pages/HomePage";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import StaffCard from "./components/PeoplePage/StaffCard";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/a" element={<BodyNavbar />} />
            <Route path="/people" element={<StaffCard />} />
          </Routes>

          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
