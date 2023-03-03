import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import Home from "./components/pages/Home";
import Project from "./components/pages/Project";
import ProjectGallery from "./components/pages/ProjectGallery";
import Contact from "./components/pages/Contact"



function App() {
  return (
    <Router>
      <div>
        <Header />
        {/* Wrap Route elements in a Routes component */}
        <Routes basename="react-portfolio">
          {/* Define routes using the Route component to render different page components at different paths */}
          {/* Define a default route that will render the Home component */}
          <Route path="/react-portfolio" element={<Home />} />
          <Route path="react-portfolio/project" element={<Project />} />
          <Route path="react-portfolio/project-gallery" element={<ProjectGallery />} />
          {/* Define a route that will have descendant routes */}
          <Route path="react-portfolio/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
