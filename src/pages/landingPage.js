import React from "react";
import { Input, Form, FormGroup, Button } from "reactstrap";
import axios from "axios";

class LandingPage extends React.Component {
  state = {
    currentImage: "",
    previewImage: ""
  };

  handleImage = e => {
    this.setState({
      currentImage: e.target.files[0],
      previewImage: URL.createObjectURL(e.target.files[0])
    });

    // e.preventDefault();

    // let formData = new FormData();

    // formData.append("user_image", e.target.files[0]);
    // formData.append("user_id", 31);

    // axios({
    //   method: "POST",
    //   url: "http://localhost:5001/api/v1/users/json",
    //   data: formData
    // })
    //   .then(response => {
    //     console.log(response);
    //     // if (response.data.success) {
    //     //   this.setState({
    //     //     currentImage: ""
    //     //   });
    //     // }
    //   })
    //   .catch(error => {
    //     console.log(error.response);
    //   });

    return this.props.history.push({
      pathname: "/photo",
      state: { currentImage: URL.createObjectURL(e.target.files[0]) }
    });
  };

  handleUpload = e => {
    e.preventDefault();

    let formData = new FormData();

    formData.append("user_image", this.state.currentImage);
    formData.append("user_id", 31);

    axios({
      method: "POST",
      url: "http://localhost:5001/api/v1/users/json",
      data: formData
    })
      .then(response => {
        console.log(response);
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

  test = () => {
    console.log(this.state.currentImage);
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
          <Button onClick={this.test} type="submit" color="primary">
            Add
          </Button>
          <p onClick={this.test}>click me</p>
          <img src={this.state.previewImage}></img>
        </Form>
      </div>
    );
  }
}

export default LandingPage;
