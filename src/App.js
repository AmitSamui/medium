import React from "react";
import { useState } from "react";
import LandingPage from "./pages/LandingPage";
import PostWriting from "./pages/PostWriting";
import { Container, Button } from "@material-ui/core";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<LandingPage />}></Route>
          <Route path="/postwriting" exact element={<PostWriting />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
