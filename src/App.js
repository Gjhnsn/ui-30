import "./App.css";
import { GlobalStyle } from "./styles/globalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/globalStyles";
import Layout from "./Layout/Layout";
import Card from "./components/Card/Card";
import Modal from "./components/Modal/Modal";

function App() {
  return (
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        <div>
          <nav>
            <h1>UI 30</h1>
          </nav>
          <Layout >
            <Card />
            <Modal />
            <Card />
          </Layout>
        </div> 
    </ThemeProvider>
  );
}

export default App;
