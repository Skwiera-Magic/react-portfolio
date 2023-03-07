import React from "react";

function Home() {
  return (
    <section class="container-fluid hero">
      <div class="row">
        <div class="col-md-3"></div>
        <div class="jumbotron col-md bg-light rounded-5">
          <h1 class="display-5">My Portfolio</h1>
          <hr class="my-3" />
          <p class="lead">My best projects</p>
          <p class="jumbotron-text">
            My precioussss
          </p>
          <p id="about">After couple weeks on the bootcamp I finally have enough project to remove stock items from here</p>
        </div>
        <div class="col-md-3"></div>
      </div>
      <div class="row">
        <div class="col-md-4" />
        <div class="col-md-4 about bg-light rounded-3">
          <h3>About me</h3>
          <p>👋 Hi, I’m Skwiera-Magic</p>
          <p>I’m interested in all things related with new tech and ways of using it effectively to make life easier</p>
          <p>I’m currently learning basics of coding, maybe little more than basics but I'm definetly not a pro</p>
          <p>💞️ Skills I've learned:</p>
          <ol>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>ES6</li>
            <li>Node.js</li>
            <li>React</li>
          </ol>
          <p>👀 Things to be covered:</p>
          <ol>
            <li>Python?</li>
            <li>AI maintenance?</li>
          </ol>
        </div>        
        <div class="col-md-4" />
      </div>
    </section>
  );
}

export default Home;
