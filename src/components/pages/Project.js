import React from "react";

function Project(props) {
  return (
    <div class="card card-custom border-dark bg-success text-dark col-lg" id={props.id}>
      <img src={props.image} class="card-img-top"
        alt={props.name} />
      <div class="card-body">
        <h5 class="card-title">{props.cardTitle}</h5>
        <p class="card-text">{props.cardText}</p>
        <a href={props.link}
          class="btn btn-danger text-warning m-1">{props.buttonText}</a>
        <a href={props.repo}
          class="btn btn-warning text-danger">GitHub Repo</a>
      </div>
    </div>
  );
}

export default Project;
