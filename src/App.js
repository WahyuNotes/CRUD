import React, { Component } from "react";
import axios from "axios";

export default class App extends Component {
  state = {
    name: "",
    address: "",
  };

  handleDeleteJson() {
    axios
      .delete("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => console.log(response.data));
  }

  handlePutJson() {
    const user = {
      idNumber: 1,
      name: this.state.name,
      address: this.state.address,
    };
    axios
      .put("https://jsonplaceholder.typicode.com/posts/1", { user })
      .then((response) => console.log("PUT :", response.data))
      .catch((error) => alert(error));
  }

  handleGetJson() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
  }

  handleSubmit(event) {
    event.preventDefault();
    const user = {
      name: this.state.name,
      address: this.state.address,
    };
    axios
      .post("https://jsonplaceholder.typicode.com/posts", { user })
      .then((response) => {
        alert(response.data.user.address);
        console.log(response.data);
      })
      .catch((error) => {
        alert(error);
      });
  }

  handleChangeName(event) {
    this.setState({
      name: event.target.value,
    });
  }

  handleChangeAddress(event) {
    this.setState({
      address: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={(value) => this.handleSubmit(value)}>
          <label>
            Person Name :
            <input
              type="text"
              name="name"
              onChange={(value) => this.handleChangeName(value)}
            />
          </label>
          <label>
            Address :
            <input
              type="text"
              name="address"
              onChange={(value) => this.handleChangeAddress(value)}
            />
          </label>

          <button onClick={(value) => this.handleSubmit(value)} type="submit">
            Post JSON
          </button>
        </form>
        <button onClick={(value) => this.handleGetJson(value)}>Get JSON</button>
        <button onClick={(value) => this.handlePutJson(value)}>Put JSON</button>
        <button onClick={(value) => this.handleDeleteJson(value)}>
          Delete JSON
        </button>
      </div>
    );
  }
}
