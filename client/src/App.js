import Nav from "./components/Nav";
import Landing from "./components/Landing";
import AddGame from "./components/AddGame";
import Details from "./components/Details";
import Home from "./components/Home";
import Background from "./components/Background";
import Loader from "./components/Loader";
import React from "react";
import { Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Nav />
      <Background/>
      <Route exact path='/'>
        <Landing />
      </Route>
      <Route path='/home'>
        <Home />
      </Route>
      <Route path='/add'>
        <AddGame />
      </Route>
      <Route path='/details/:id'>
        <Details />
      </Route>
      <Route path='/loader'>
        <Loader/>
      </Route>
    </div>
  );
}

export default App;
//<Route path="/"></Route>
