// Write your code here.
import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {inputString: ''}

  OnClickEvent = event => {
    const {value} = event.target
    this.setState({inputString: value})
  }

  render() {
    const {inputString} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <form className="form">
            <label htmlFor="searchResult" className="description">
              Enter the phrase
            </label>
            <input
              className="inputClass"
              type="text"
              id="searchResult"
              placeholder="Enter the phrase"
              onChange={this.OnClickEvent}
              value={inputString}
            />
          </form>

          <div className="button">
            <p>No.of letters: {inputString.length}</p>
          </div>
        </div>
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
        />
      </div>
    )
  }
}

export default LettersCalculator
