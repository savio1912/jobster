import React from "react";
import img from "../assets/images/not-found.svg";
import Wrapper from "../assets/wrappers/ErrorPage";
import { Link } from "react-router-dom";

function Error() {
  return (
    <Wrapper className="full-page">
      <div>
        <img src={img} alt="error-img" />
        <h3>Ohh! Page Not Found</h3>
        <p>We can't seem to find the page you are looking for</p>
        <Link to="/landing">Back home</Link>
      </div>
    </Wrapper>
  );
}

export default Error;
