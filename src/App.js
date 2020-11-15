import React from "react";
import GlobalStyle from "./components/GlobalStyle";
import AboutUs from "./pages/AboutUs";
import styled from "styled-components";
import Nav from "./components/Nav";
import OurWork from "./pages/OurWork";
import ContactUs from "./pages/ContactUs";
import { Switch, Route } from "react-router-dom";
import MovieDetail from "./pages/MovieDetail";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav></Nav>
      <Switch>
        <Route path="/" exact>
          <AboutUs></AboutUs>
        </Route>
        <Route path="/work" exact>
          <OurWork></OurWork>
        </Route>
        <Route path="/work/:id">
          <MovieDetail />
        </Route>
        <Route path="/contact">
          <ContactUs></ContactUs>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
