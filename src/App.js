import "./App.css";
import { GlobalStyle } from "./styles/globalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/globalStyles";
import Layout from "./Layout/Layout";
import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Day1 from "./components/day-1/Day1";
import Home from "./components/home/Home";

function App() {

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyle />
        <>
          <nav>
            <h1>UI 30</h1>
          </nav>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/day-1" element={<Day1 />} />
            </Routes>
          </Layout>
        </>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
