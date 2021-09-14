import "./App.css";
import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      search: "",
      loading: true,
    };
  }

  componentDidMount() {
    let url = "https://jsonplaceholder.typicode.com/users";

    const getData = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        this.setState({ loading: false, monsters: data });
      } catch (e) {
        this.setState({ loading: true });
      }
    };

    getData();
  }

  handleChange = (e) => {
    this.setState({ search: e.target.value });
  };

  render() {
    const { monsters, search } = this.state;
    const filteredMonsters = monsters.filter((monster) => monster.name.toLowerCase().includes(search.toLowerCase()));

    return (
      <div className="App">
        {this.state.loading ? (
          <div>Ładowanie...</div>
        ) : (
          <>
            <h1>Monsters Rolodex</h1>
            <SearchBox placeholder={"search"} handleChange={this.handleChange} />
            <CardList monsters={filteredMonsters} />
          </>
        )}
      </div>
    );
  }
}

export default App;
