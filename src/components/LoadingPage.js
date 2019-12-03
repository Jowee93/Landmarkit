import React from "react";
import Logo from "../components/Gear-0.2s-200px.svg";

class LoadingPage extends React.Component {
  render() {
    return (
      <div>
        <img src={Logo} alt="loader" />
      </div>
    );
  }
}

export default LoadingPage;
