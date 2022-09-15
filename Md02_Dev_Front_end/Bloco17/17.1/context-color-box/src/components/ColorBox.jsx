// ./components/ColorBox.js
import React from 'react';
import MyContext from '../MyContext';
import '../styles/box.css';

class ColorBox extends React.Component {
  render() {
    return(
      <MyContext.Consumer>
        {
          ({color, handleClick}) => (
            <div>
              <button
                type="button"
                className="box"
                style={ { backgroundColor:  color } }
                onClick={handleClick}
              >
              Click me to change my color!
              </button>
            </div>
          )
        }
      </MyContext.Consumer>
    )
  }
}
export default ColorBox;