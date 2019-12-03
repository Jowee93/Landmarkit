import React from "react";
import Logo from "../components/Bean Eater.svg";

class LoadingPage extends React.Component {
  render() {
    return (
      <div>
        <img src={Logo} alt="loader" className="mx-auto" />
      </div>
    );
  }
}

export default LoadingPage;
