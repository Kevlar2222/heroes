import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      property: 'value'
    };
    this.funcName = this.funcName.bind(this);
  }

  componentDidMount () {
  }

  funcName () {}

  render () {
    return (
      <div className="App">
        <Title />
      </div>
    );
  }
}

  function Title() {
  return (
    <div className="screen">
      <div className="cover1"></div>
      <div className="cover2"></div>
      <ul className="menu">
        <li className="button">About</li>
        <li className="button">Castles</li>
      </ul>
    </div>
  );
}


export default App;
