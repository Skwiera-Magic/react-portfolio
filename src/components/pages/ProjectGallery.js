import React from "react";
import projects from "../projects.json"
import Project from "./Project";

function ProjectGallery() {
  return (
    <div>
      <div class="row">
        <Project name={projects[0].name} id={projects[0].id} image={projects[0].image} cardTitle={projects[0].cardTitle} cardText={projects[0].cardText} buttonText={projects[0].buttonText} />
        <Project name={projects[1].name} id={projects[1].id} image={projects[1].image} cardTitle={projects[1].cardTitle} cardText={projects[1].cardText} buttonText={projects[1].buttonText} />
        <Project name={projects[2].name} id={projects[2].id} image={projects[2].image} cardTitle={projects[2].cardTitle} cardText={projects[2].cardText} buttonText={projects[2].buttonText} />
      </div>
      <div class="row">
        <Project name={projects[3].name} id={projects[3].id} image={projects[3].image} cardTitle={projects[3].cardTitle} cardText={projects[3].cardText} buttonText={projects[3].buttonText} />
        <Project name={projects[4].name} id={projects[4].id} image={projects[4].image} cardTitle={projects[4].cardTitle} cardText={projects[4].cardText} buttonText={projects[4].buttonText} />
        <Project name={projects[5].name} id={projects[5].id} image={projects[5].image} cardTitle={projects[5].cardTitle} cardText={projects[5].cardText} buttonText={projects[5].buttonText} />
      </div>
      <div class="row">
        <Project name={projects[6].name} id={projects[6].id} image={projects[6].image} cardTitle={projects[6].cardTitle} cardText={projects[6].cardText} buttonText={projects[6].buttonText} />
        <Project name={projects[7].name} id={projects[7].id} image={projects[7].image} cardTitle={projects[7].cardTitle} cardText={projects[7].cardText} buttonText={projects[7].buttonText} />
        <Project name={projects[8].name} id={projects[8].id} image={projects[8].image} cardTitle={projects[8].cardTitle} cardText={projects[8].cardText} buttonText={projects[8].buttonText} />
      </div>
      <div class="row">
        <Project name={projects[9].name} id={projects[9].id} image={projects[9].image} cardTitle={projects[9].cardTitle} cardText={projects[9].cardText} buttonText={projects[9].buttonText} />
        <Project name={projects[10].name} id={projects[10].id} image={projects[10].image} cardTitle={projects[10].cardTitle} cardText={projects[10].cardText} buttonText={projects[10].buttonText} />
        <Project name={projects[11].name} id={projects[11].id} image={projects[11].image} cardTitle={projects[11].cardTitle} cardText={projects[11].cardText} buttonText={projects[11].buttonText} />
      </div>
    </div>
  );
}

export default ProjectGallery;
