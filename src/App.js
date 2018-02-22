import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { getDogs } from './actions';
import Dogs from './Dogs';

class App extends Component {
  componentDidMount() {
    this.props.getDogs();
  }
  render() {
    const { dogs } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          {this.props.fetching ? (
            <img src={logo} className="App-logo" alt="logo" />
          ) : null}
        </header>
        <Dogs dogs={dogs} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    dogs: state.dogs,
    fetching: state.fetching,
    error: state.error
  };
};

export default connect(mapStateToProps, { getDogs })(App);
