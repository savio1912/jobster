import React from "react";
import logo from "../assets/images/logo.svg";
import main from "../assets/images/main.svg";

function Landing() {
  return (
    <main>
      <nav>
        <img src={logo} alt="jobster-logo" className="logo" />
      </nav>
      <div className="conatiner page">
        {/*info */}
        <h1>
          Job <spam>Tracking</spam> app
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <button className="btn btn-hero">Login/register</button>
      </div>
      <img src={main} alt="joh-hunt" className="img main-img" />
    </main>
  );
}

export default Landing;
