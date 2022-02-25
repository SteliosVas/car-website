import React from "react";
import Nav from "./Components/Nav";
import Banner from "./Components/Banner";
import CarRow from "./Components/CarRow";
import "./FirstScreen.css";
import Carphoto from "./Components/Carphoto";
import Warehouse from "./Components/Warehouse";
import Form from "./Components/Form";

function FirstScreen() {
  return (
    <div className="firstScreen">
      <Nav></Nav>
      <Banner></Banner>
      <br />
      <CarRow></CarRow>
      <Carphoto></Carphoto>
      <Warehouse></Warehouse>
      <Form></Form>
    </div>
  );
}

export default FirstScreen;
