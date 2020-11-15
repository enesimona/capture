import React from "react";
import GlobalStyle from "./components/GlobalStyle";
import AboutUs from "./pages/AboutUs";
import styled from "styled-components";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <GlobalStyle></GlobalStyle>
      <AboutUs></AboutUs>
    </div>
  );
}

export default App;
