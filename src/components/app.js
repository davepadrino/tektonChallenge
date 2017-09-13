import React, { Component } from 'react';
import DigitalNumbers from "./digitalNumbers";
import SearchBar from '../containers/search-bar'

export default class App extends Component {
  render() {
    return (
      <div>React simple starter
            <SearchBar />
      </div>

    );
  }
}
