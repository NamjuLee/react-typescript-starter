import React, { Component } from 'react';
import './App.css';

import { Application } from '../Application';

class App extends Component {
  constructor(props: {}) {
    super(props);
    new Application();

  }

  public render() {
    return (
      <div className="main">

      </div>
    );
  }
}

export default App;
