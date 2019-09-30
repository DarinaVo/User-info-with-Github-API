import React, { Component } from "react";
import axios from "axios";
import Form from "./Form.js";
import ProfileDetails from "./ProfileDetails.js";
import SortedList from "./SortedList.js";
class App extends Component {
  constructor() {
    super();
    this.state = {
      gitun: "No username",
      infoclean: "",
      formData: {
        username: ""
      }
    };
    this.handleUserFormSubmit = this.handleUserFormSubmit.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
  }
  handleUserFormSubmit(event) {
    event.preventDefault();
    axios
      .get("https://api.github.com/users/" + this.state.formData.username)
      .then(response =>
        this.setState({
          gitun: response.data.login,
          infoclean: response.data
        })
      )
      .catch(err => {
        console.log(err);
      });
    axios
      .get(
        "https://api.github.com/users/" +
          this.state.formData.username +
          "/repos"
      )
      .then(response =>
        this.setState({
          repitems: response.data
            .filter(({ fork }) => fork === false)
            .sort(
              (b, a) =>
                a.watchers_count +
                a.forks_count -
                (b.watchers_count + b.forks_count)
            )
            .slice(0, 10)
        })
      )
      .catch(err => {
        console.log(err);
      });
  }
  handleFormChange(event) {
    const obj = this.state.formData;
    obj[event.target.name] = event.target.value;
    this.setState(obj);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">GitHub Profile</h1>
        </header>
        <hr />
        <Form
          formData={this.state.formData}
          handleUserFormSubmit={this.handleUserFormSubmit}
          handleFormChange={this.handleFormChange}
        />
        <hr />
        Profile Details:
        <ProfileDetails infoclean={this.state.infoclean} />
        <hr />
        Repositories:
        <SortedList repitems={this.state.repitems} />
        <hr />
      </div>
    );
  }
}
export default App;
