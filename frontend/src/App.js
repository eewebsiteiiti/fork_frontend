import "./App.css";
import theme from "./Theme";
import Footer from "./components/HomePage/Footer"
import HomePage from "./pages/HomePage";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
          <Footer />
        </BrowserRouter>

      </ThemeProvider>
    </div>
  );
}

export default App;
