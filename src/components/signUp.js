import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Icon from "@material-ui/core/Icon";
import Typography from "@material-ui/core/Typography";
import "../components/css/signUp.css";
import Container from "@material-ui/core/Container";
import axios from "axios";
import logo from "../components/logo.png";

class SignUp extends React.Component {
  state = {
    username: "",
    email: "",
    password: "",
    usernameValid: false,
    passwordValid: false,
    emailValid: false,
    uniqueEmail: false
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { username, email, password } = this.state;
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    // if (username.length <= 0 && password.length <= 0 && email.length <= 0) {
    //   this.setState({
    //     usernameValid: true,
    //     passwordValid: true,
    //     emailValid: true
    //   });
    //   return "Please fill in all fields";
    // } else if (email !== re) {
    //   this.setState({
    //     uniqueEmail: true
    //   });
    //   return "That email doesn't exist";
    // } else {
    await axios
      .post("https://lamppost.herokuapp.com/api/v1/users/signup", {
        username: username,
        email: email,
        password: password
      })
      .then(res => {
        // let JWT = res.data.jwt;
        // localStorage.setItem("userToken", JWT);
        // localStorage.setItem("userData", JSON.stringify(res.data));
        console.log("Successfully signed up !");
        this.setState({
          currentUsername: username,
          currentEmail: email,
          currentPassword: password
        });
        window.location.reload();
      })
      .catch(error => {
        console.log(error);
      });
    // }
  };

  render() {
    return (
      <div>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className="paper">
            <br />
            <Avatar className="avatar" src={logo}>
              {/* <Icon className="iconRoot">
                <img className="imageIcon" src={logo} alt="imageIcon" />
              </Icon> */}
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign Up
            </Typography>
            <form onSubmit={this.handleSubmit} className="form" noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="uname"
                    name="username"
                    variant="outlined"
                    required
                    fullWidth
                    id="username"
                    label="Username"
                    value={this.state.username}
                    autoFocus
                    onChange={this.handleChange}
                    type="text"
                    style={
                      this.state.usernameValid
                        ? { border: "1px red" }
                        : { border: "1px white" }
                    }
                  />
                  <p
                    style={
                      this.state.usernameValid
                        ? { color: "red" }
                        : { display: "none" }
                    }
                  >
                    Please fill in username
                  </p>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="email"
                    name="email"
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Email"
                    value={this.state.email}
                    autoFocus
                    onChange={this.handleChange}
                    type="email"
                    style={
                      (this.state.emailValid
                        ? { border: "1px red" }
                        : { border: "1px white" },
                      this.state.uniqueEmail
                        ? { border: "1px red" }
                        : { border: "1px white" })
                    }
                  />
                  <p
                    style={
                      this.state.emailValid
                        ? { color: "red" }
                        : { display: "none" }
                    }
                  >
                    Please fill in email
                  </p>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="pword"
                    name="password"
                    variant="outlined"
                    required
                    fullWidth
                    id="password"
                    label="Password"
                    value={this.state.password}
                    type="password"
                    autoFocus
                    onChange={this.handleChange}
                    style={
                      this.state.passwordValid
                        ? { border: "1px red" }
                        : { border: "1px white" }
                    }
                  />
                  <p
                    style={
                      this.state.passwordValid
                        ? { color: "red" }
                        : { display: "none" }
                    }
                  >
                    Please fill in password
                  </p>
                </Grid>
              </Grid>
              <br />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className="submit"
              >
                Sign Up
              </Button>
            </form>
            <br />
          </div>
        </Container>
      </div>
    );
  }
}

export default SignUp;
