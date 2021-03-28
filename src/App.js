import React, { Component } from "react";
//import UserCard from "./components/UserCard";
import SearchForm from "./components/SearchForm";
//import SearchResults from "./components/SearchResults";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import users from "./users.json";
import Table from "./components/Table";
//import API from "./components/utils/API";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    users,
    search: "",
    results: [],
    ids: [],
    error: "",
  };

  // componentDidMount() {
  //   API.getBaseBreedsList()
  //     .then((res) => this.setState({ users: res.data.message }))
  //     .catch((err) => console.log(err));
  // }

  handleInputChange = (event) => {
    this.setState({ search: event.target.value });
    console.log(event);
  };

  // handleFormSubmit = (event) => {
  //   event.preventDefault();
  //   API.getDogsOfBreed(this.state.search)
  //     .then((res) => {
  //       if (res.data.status === "error") {
  //         throw new Error(res.data.message);
  //       }
  //       this.setState({ results: res.data.message, error: "" });
  //     })
  //     .catch((err) => this.setState({ error: err.message }));
  // };

  findUser = (id) => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const users = this.state.users.filter((user) => user.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ users });
  };

  removeFriend = (id) => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const users = this.state.users.filter((user) => user.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ users });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Employee Directory</Title>
        <SearchForm
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
          ids={this.state.ids}
        />
        {/* <SearchResults results={this.state.results} /> */}
        {/* {this.state.users.map((user) => (
          <UserCard
            removeFriend={this.removeFriend}
            id={user.id}
            key={user.id}
            name={user.name}
            image={user.image}
            occupation={user.occupation}
            location={user.location}
          />
        ))} */}
        {this.state.users
          .filter((user) => {
            return user.name.includes(this.state.search);
          })
          .map((user) => (
            <Table
              removeFriend={this.removeFriend}
              id={user.id}
              key={user.id}
              name={user.name}
              image={user.image}
              occupation={user.occupation}
              location={user.location}
            />
          ))}
      </Wrapper>
    );
  }
}

export default App;
