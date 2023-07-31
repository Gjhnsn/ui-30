import "./App.css";
import { GlobalStyle } from "./styles/globalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/globalStyles";
import {
  Routes,
  Route,
  useLocation,
  useNavigate
} from "react-router-dom";
import Day1 from "./components/day-1/Day1";
import Home from "./components/home/Home";
import { Nav, NavTitle } from "./common/Grid/styles";
import Day2 from "./components/day-2/Day2";
import Day3 from "./components/day-3/Day3";
import Day4 from "./components/day-4/Day4";
import Day5 from "./components/day-5/Day5";
import Day6 from "./components/day-6/Day6";
import Day7 from "./components/day-7/Day7";
import Day8 from "./components/day-8/Day8";
import Day9 from "./components/day-9/Day9";
import Day10 from "./components/day-10/Day10";
import Day11 from "./components/day-11/Day11";
import Day12 from "./components/day-12/Day12";
import Day13 from "./components/day-13/Day13";
import Day14 from "./components/day-14/Day14";
import Day15 from "./components/day-15/Day15";
import Day16 from "./components/day-16/Day16";
import Day17 from "./components/day-17/Day17";
import Day18 from "./components/day-18/Day18";
import Day19 from "./components/day-19/Day19";
import Day20 from "./components/day-20/Day20";
import Day21 from "./components/day-21/Day21";
import Day22 from "./components/day-22/Day22";
import Day23 from "./components/day-23/Day23";
import Day24 from "./components/day-24/Day24";
import Day25 from "./components/day-25/Day25";
import Day26 from "./components/day-26/Day26";
import Day27 from "./components/day-27/Day27";
import Day28 from "./components/day-28/Day28";
import Day29 from "./components/day-29/Day29";
import Day30 from "./components/day-30/Day30";
import { TiArrowBackOutline } from 'react-icons/ti'
import { BackButton } from "./common/Layout/styles";

function App() {

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  }

  let location = useLocation();
  let backButtonIsActive = false;

  if (location.pathname !== '/') {
    backButtonIsActive = true;
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <>
        <Nav>
          { backButtonIsActive &&
          <BackButton onClick={goBack}>
            <TiArrowBackOutline />
          </BackButton>
          }
          <NavTitle to="/">
            <h1>UI 30</h1>
          </NavTitle>
        </Nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/day-1" element={<Day1 />} />
          <Route path="/day-2" element={<Day2 />} />
          <Route path="/day-3" element={<Day3 />} />
          <Route path="/day-4" element={<Day4 />} />
          <Route path="/day-5" element={<Day5 />} />
          <Route path="/day-6" element={<Day6 />} />
          <Route path="/day-7" element={<Day7 />} />
          <Route path="/day-8" element={<Day8 />} />
          <Route path="/day-9" element={<Day9 />} />
          <Route path="/day-10" element={<Day10 />} />
          <Route path="/day-11" element={<Day11 />} />
          <Route path="/day-12" element={<Day12 />} />
          <Route path="/day-13" element={<Day13 />} />
          <Route path="/day-14" element={<Day14 />} />
          <Route path="/day-15" element={<Day15 />} />
          <Route path="/day-16" element={<Day16 />} />
          <Route path="/day-17" element={<Day17 />} />
          <Route path="/day-18" element={<Day18 />} />
          <Route path="/day-19" element={<Day19 />} />
          <Route path="/day-20" element={<Day20 />} />
          <Route path="/day-21" element={<Day21 />} />
          <Route path="/day-22" element={<Day22 />} />
          <Route path="/day-23" element={<Day23 />} />
          <Route path="/day-24" element={<Day24 />} />
          <Route path="/day-25" element={<Day25 />} />
          <Route path="/day-26" element={<Day26 />} />
          <Route path="/day-27" element={<Day27 />} />
          <Route path="/day-28" element={<Day28 />} />
          <Route path="/day-29" element={<Day29 />} />
          <Route path="/day-30" element={<Day30 />} />
        </Routes>
      </>
    </ThemeProvider>
  );
}

export default App;
