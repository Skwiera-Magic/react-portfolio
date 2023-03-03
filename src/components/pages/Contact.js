import React from "react";

function Contact() {
  return (
    <div>
      <h1>Contact Page</h1>
      <footer class="container">
    <div class="row" id="social">
      <div class="col-2">
        <h3>Social</h3>
      </div>
      <div class="row col-12 col-md-10">
        <a href="https://www.facebook.com/SkwieraMagic" class="col btn footer-link"><img src="./images/search.png" alt="serach icon"/>Facebook</a>
        <a href="https://github.com/Skwiera-Magic" class="col btn footer-link"><img src="./images/user.png" alt="user icon"/>GitHub</a>
        <a href="https://www.youtube.com/user/MrSkwiera" class="col btn footer-link"><img src="./images/search.png" alt="search icon"/>YouTube</a>
        <a href="https://www.twitch.tv/skwiera_magic" class="col btn footer-link"><img src="./images/shopping-bag.png" alt="shopping bag icon"/>Twitch</a>
      </div>
    </div>
  </footer>
    </div>
  );
}

export default Contact;
