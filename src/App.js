import "./App.css";
import { GlobalStyle } from "./styles/globalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/globalStyles";
import {
  Routes,
  Route,
} from "react-router-dom";
import Day1 from "./components/day-1/Day1";
import Home from "./components/home/Home";
import { Nav, NavTitle } from "./Layout/Grid/styles";

function App() {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <>
        <Nav>
          <NavTitle to="/">
            <h1>UI 30</h1>
          </NavTitle>
        </Nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/day-1" element={<Day1 />} />
        </Routes>
      </>
    </ThemeProvider>
  );
}

export default App;
