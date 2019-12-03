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

class SignIn extends React.Component {
  state = {
    username: "",
    password: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { username, password } = this.state;
    await axios
      .post("https://lamppost.herokuapp.com/api/v1/users/login", {
        username: username,
        password: password
      })
      .then(res => {
        console.log("Successfully signed in !");
        console.log(res);
        let JWT = res.data.jwt;
        localStorage.setItem("userToken", JWT);
        localStorage.setItem("userData", JSON.stringify(res.data));
        this.setState({
          currentUsername: username,
          currentPassword: password
        });
        window.location = "/main";
      })
      .catch(error => {
        console.log(error.response);
      });
  };

  render() {
    return (
      <div>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className="paper">
            <br />
            <Avatar className="avatar" src={logo}></Avatar>
            <Typography component="h1" variant="h5">
              Sign In
            </Typography>
            <form onSubmit={this.handleSubmit} className="form" noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="fname"
                    name="username"
                    variant="outlined"
                    required
                    fullWidth
                    id="userName"
                    label="Username"
                    autoFocus
                    value={this.state.username}
                    onChange={this.handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="pword"
                    name="password"
                    variant="outlined"
                    required
                    fullWidth
                    id="passWord"
                    label="Password"
                    autoFocus
                    type="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
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
                Sign In
              </Button>
            </form>
            <br />
          </div>
        </Container>
      </div>
    );
  }
}

export default SignIn;
