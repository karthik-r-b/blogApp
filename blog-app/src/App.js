import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Post from "./components/Post";
import AboutUs from "./components/AboutUs";
import Album from "./components/Album";
import Photo from "./components/Photo";
import Add from "./components/Add";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/About" component={AboutUs} />
          <Route exact path="/Albums" component={Album} />
          <Route path="/Albums/:photoId" component={Photo} />
          <Route path="/post/add" component={Add} />
          <Route path="/:postId" component={Post} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
