import React from "react";

function Contact() {
  return (
      <footer class="container">
        <div class="row" id="social">
          <div class="col-2">
            <h3>Social</h3>
          </div>
          <div class="row col-10">
            <a href="https://github.com/Skwiera-Magic" class="col-6 col-md btn footer-link" target="_blank" rel="noreferrer"><img src="https://img.icons8.com/windows/1x/github.png" alt="GitHub icon" />GitHub</a>
            <a href="https://www.youtube.com/user/MrSkwiera" class="col-6 col-md btn footer-link" target="_blank" rel="noreferrer"><img src="https://img.icons8.com/ios-glyphs/1x/youtube-play.png" alt="YouTube icon" />YouTube</a>
            <a href="https://www.twitch.tv/skwiera_magic" class="col-6 col-md btn footer-link" target="_blank" rel="noreferrer"><img src="https://www.iconninja.com/files/737/596/877/black-twitch-icon.png" alt="Twitch icon" />Twitch</a>
            <a href="https://www.linkedin.com/in/mskwierawski" class="col-6 col-md btn footer-link" target="_blank" rel="noreferrer"><img src="https://img.icons8.com/ios-glyphs/1x/linkedin.png" alt="LinkedIn icon" />LinkedIn</a>
            <a href="https://github.com/Skwiera-Magic/react-portfolio/blob/main/src/components/Profile.pdf" class="col-6 col-md btn footer-link" target="_blank" rel="noreferrer"><img src="https://img.icons8.com/ios-glyphs/1x/linkedin.png" alt="LinkedIn icon" />Resume</a>
          </div>
        </div>
        
        <p>If you would like to contact me best place to do that would be: <a class="contact-link" href="mailto:mckskwiera@icloud.com">my email</a></p>
          <p>Other ways to contact me can be found here: <a class="contact-link" href="https://www.linkedin.com/in/mskwierawski">linkedIn</a> or <a class="contact-link" href="https://www.twitch.tv/skwiera_magic">Twitch</a></p>
      </footer>
  );
}

export default Contact;
