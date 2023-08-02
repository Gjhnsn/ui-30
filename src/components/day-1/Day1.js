import React, { useState } from "react";
import Layout from "../../common/Layout/Layout";
import { Button, ModalContainer } from "./styles";

const Day1 = () => {

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const modal = (
    <ModalContainer>
      <button onClick={() => setModalIsOpen(!modalIsOpen)}>Close</button>
      <p>Hello</p>
    </ModalContainer>
  )

  return (
    <Layout>
      <Button onClick={() => setModalIsOpen(!modalIsOpen)}>Click Me!</Button>
      {modalIsOpen && modal}
    </Layout>
  );
};

export default Day1;
