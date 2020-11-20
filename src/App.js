import React from "react";
import GlobalStyle from "./components/GlobalStyle";
import AboutUs from "./pages/AboutUs";
import styled from "styled-components";
import Nav from "./components/Nav";
import OurWork from "./pages/OurWork";
import ContactUs from "./pages/ContactUs";
import { Switch, Route, useLocation } from "react-router-dom";
import MovieDetail from "./pages/MovieDetail";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  console.log("In App.");
  return (
    <div className="App">
      <GlobalStyle />
      <Nav></Nav>
      {/* <AnimatePresence exitBeforeEnter> */}
      <Switch location={location} key={location.pathname}>
        <Route path="/work" exact>
          <OurWork></OurWork>
        </Route>
        <Route path="/work/:id">
          <MovieDetail />
        </Route>
        <Route path="/contact">
          <ContactUs></ContactUs>
        </Route>
        <Route path="/" exact>
          <AboutUs></AboutUs>
        </Route>
      </Switch>
      {/* </AnimatePresence> */}
    </div>
  );
}

export default App;
