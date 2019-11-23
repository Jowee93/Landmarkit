import React from "react";
import { Input, Form, FormGroup, Button } from "reactstrap";
import axios from "axios";

class LandingPage extends React.Component {
  state = {
    currentImage: ""
  };

  handleImage = e => {
    this.setState({
      currentImage: e.target.files[0]
    });
  };

  handleUpload = e => {
    e.preventDefault();

    let formData = new FormData();

    formData.append("user_image", this.state.currentImage);
    formData.append("user_id", 31);

    axios({
      method: "POST",
      url: "http://192.168.0.167:5001/api/v1/users/json",
      data: formData
    })
      .then(response => {
        if (response.data.success) {
          this.setState({
            currentImage: ""
          });
        }
      })
      .catch(error => {
        console.log(error.response);
      });
  };

  render() {
    return (
      <div>
        <h1>**Placeholder - Main Page Container**</h1>
        <h1>**Placeholder - Navbar**</h1>
        <Form onSubmit={this.handleUpload}>
          <FormGroup className="">
            <Input
              type="file"
              accept="image/*;capture=camera"
              onChange={this.handleImage}
            />
          </FormGroup>
          <Button type="submit" color="primary">
            Add
          </Button>
          {/* <button
            onClick={this.changecolor}
            id="testbutton"
            style={{ color: "red" }}
          >
            test button
          </button> */}
        </Form>
      </div>
    );
  }
}

export default LandingPage;
