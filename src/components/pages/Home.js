import React from "react";

function Home() {
  return (
    <section class="container-fluid hero">
      <div class="row">
      </div>
      <div class="row">
        <div class="col-md-3"></div>
        <div class="jumbotron col-md">
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
        <div class="col-md-4 about">
          <h3>About me</h3>
          <p>👋 Hi, I’m Skwiera-Magic</p>
          <p>I’m interested in all things related with new tech and ways of using it effectively to make life easier</p>
          <p>I’m currently learning basics of coding, maybe little more than basics but I'm definetly not a pro</p>
          <p>If you would like to contact me best place to do that would be: <a class="contact-link" href="mailto:mckskwiera@icloud.com">my email</a></p>
          <p>Other ways to contact me can be found here: <a class="contact-link" href="https://www.linkedin.com/in/mskwierawski">linkedIn</a> or <a class="contact-link" href="https://www.twitch.tv/skwiera_magic">Twitch</a></p>
          <p>💞️ Skills I've learned:</p>
          <ol>
            <li>HTML</li>
            <li>CSS</li>
            <li>Bootstrap</li>
            <li>JavaScript</li>
          </ol>
          <p>👀 Things to be covered:</p>
          <ol>
            <li>ES6</li>
            <li id="work">Node.js</li>
            <li>React</li>
          </ol>
        </div>        
        <div class="col-md-4" />
      </div>
    </section>
  );
}

export default Home;
