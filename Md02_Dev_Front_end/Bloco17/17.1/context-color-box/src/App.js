// ./App.js
import './App.css';
import React from 'react';
import ColorBox from './components/ColorBox';
import MyContext from './MyContext';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      color: 'blue',
    }
  }

  handleClick = () => {
    const { color } = this.state;

    switch (color) {
      case 'blue':
        this.setState({color: 'red'});
        break;
      case 'red':
        this.setState({color: 'yellow'});
        break;
      case 'yellow':
        this.setState({color: 'blue'});
        break;
      default:
        break;
    }
  }

  render() {
    const { color } = this.state;

    const objContext = {
      color,
      handleClick: this.handleClick,
    }

    return (
      <MyContext.Provider value={objContext}>
        <ColorBox />
      </MyContext.Provider>
    );
  }
}
export default App;
