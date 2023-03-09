import React from "react";

function Project(props) {
  return (
    <div class="card card-custom border-dark bg-success text-dark col-md-5 col-lg-4 mt-1 mb-1 p-1" id={props.id}>
      <img src={props.image} class="card-img-top"
        alt={props.name} />
      <div class="card-body">
        <h5 class="card-title">{props.cardTitle}</h5>
        <p class="card-text">{props.cardText}</p>
        <a href={props.link}
          class="btn btn-danger text-warning m-1" target="_blank" rel="noreferrer">{props.buttonText} </a>
        <a href={props.repo}
          class="btn btn-warning text-danger" target="_blank" rel="noreferrer">GitHub Repo</a>
      </div>
    </div>
  );
}

export default Project;
