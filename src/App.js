import React from 'react';
import { connect } from 'react-redux';

import './App.css';

import Button from './components/Button';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-buttons">
          <Button color="red" />
          <Button color="orange" />
          <Button color="yellow" />
          <Button color="green" />
          <Button color="blue" />
          <Button color="purple" />
        </div>

        <ul>
          {props.colors.map(color => {
            return <li key={color}>{color}</li>;
          })}
        </ul>
      </header>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    colors: state.colors
  }
}

export default connect(mapStateToProps)(App);
