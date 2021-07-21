import { Component } from 'react';
import { Application } from '../Application';
import './App.css';

class App extends Component {
  constructor() {
    super({});
  }
  public componentDidMount(){
    new Application();
  }
  public render() {
    return (
      <div id = "main">
        Hello World
      </div>
    );
  }
}

export default App;
