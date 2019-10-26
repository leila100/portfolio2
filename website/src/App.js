import React from "react";
import homeIcons from "./assets/images/icons.png";

function App() {
  return (
    <div className='App'>
      <header>
        <div class='header_container'>
          <div class='header-frame'>
            <div class='header-content'>
              <img src={homeIcons} alt='Icons for Javascript - React - Node' />
              <div class='intro'>
                <div class='name'>LEILA BERROUAYEL</div>
                <div class='job'>WEB/SOFTWARE DEVELOPER</div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
