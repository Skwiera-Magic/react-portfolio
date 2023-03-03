import React from "react";

function ProjectGallery() {
  return (
    <div>
      <div class="row">
        <div class="card card-custom border-dark bg-success text-dark col-lg">
          <img src="https://github.com/Skwiera-Magic/portfolio-beta/raw/main/images/portfolio.png" class="card-img-top" alt="screenshot of previous portfolio deployed" />
          <div class="card-body">
            <h5 class="card-title">Old Portfolio</h5>
            <p class="card-text">First attempt at portfolio without bootstrap knowledge.</p>
            <a href="https://skwiera-magic.github.io/portfolio-beta/" class="btn btn-danger text-warning">Check out my progress</a>
          </div>
        </div>
        <div class="card card-custom border-dark bg-success text-dark col-lg">
          <img src="https://github.com/Skwiera-Magic/weather-dashboard/raw/main/assets/images/screenshot-weather.png" class="card-img-top" alt="screenshot of weather dashboard deployed" />
          <div class="card-body">
            <h5 class="card-title">Weather Dashboard</h5>
            <p class="card-text">Another fiert time :D Here it's with APIs, code looks nightmarish but hey, I'm learning :D</p>
            <a href="https://skwiera-magic.github.io/weather-dashboard/" class="btn btn-danger text-warning">Check your weather</a>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="card card-custom border-dark bg-success text-dark col-lg">
          <img src="https://github.com/Skwiera-Magic/planner-app/raw/main/assets/images/screenshot-planner.png" class="card-img-top" alt="screenshot of planner-app deployed" />
          <div class="card-body">
            <h5 class="card-title">Day Planner</h5>
            <p class="card-text">Simple app where you can plan your day, save it for later use, clear everything easly</p>
            <a href="https://skwiera-magic.github.io/planner-app" class="btn btn-danger text-warning">Not much but still worth trying</a>
          </div>
        </div>
        <div class="card card-custom border-dark bg-success text-dark col-lg">
          <img src="https://github.com/Skwiera-Magic/password-generator/raw/main/images/screenshot.png" class="card-img-top" alt="screenshot of password generator deployed" />
          <div class="card-body">
            <h5 class="card-title">Password Generator</h5>
            <p class="card-text">My first contact with JavaScript since about 2010. Struggled a lot with it but makes me even more proud of myself</p>
            <a href="https://skwiera-magic.github.io/password-generator" class="btn btn-danger text-warning">Try it!</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectGallery;
