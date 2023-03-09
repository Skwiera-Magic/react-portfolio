import React from "react";
import { HashRouter, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import Home from "./components/pages/Home";
import ProjectGallery from "./components/pages/ProjectGallery";
import Contact from "./components/pages/Contact";



function App() {
  return (
    <HashRouter>
      <div>
        <Header />
        <Routes basename="/">
          <Route path="/" element={<Home />} />
          <Route path="/project-gallery/" element={<ProjectGallery />} />
          <Route path="/contact/" element={<Contact />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
