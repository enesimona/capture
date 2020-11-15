import React from "react";
import GlobalStyle from "./components/GlobalStyle";
import AboutUs from "./pages/AboutUs";
import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <GlobalStyle></GlobalStyle>
      <AboutUs></AboutUs>
    </div>
  );
}

export default App;
