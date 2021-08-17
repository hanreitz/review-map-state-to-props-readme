import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';


class App extends Component {

  handleOnClickItems() {
    this.props.dispatch({
      type: 'GET_COUNT_OF_ITEMS',
    });
  }

  handleOnClickUsers() {
    this.props.dispatch({
      type: 'GET_COUNT_OF_USERS',
    });
  }

  render() {
    // debugger;
    return (
      <div className="App">
        <div>
          <button onClick={() => this.handleOnClickItems()}>
            Click to change items count
          </button>
          <p>Items: {this.props.items.length}</p>
        </div>
        <div>
          <button onClick={() => this.handleOnClickUsers()}>
            Click to change user count
          </button>
          <p>Users: {this.props.users.length}</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // debugger;
  return { items: state.items, users: state.users }
}

export default connect(mapStateToProps)(App);
