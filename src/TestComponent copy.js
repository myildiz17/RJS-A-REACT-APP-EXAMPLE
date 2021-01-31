import React, { Component } from 'react';

// no need to modify anything in here. The second test is looking for the returned JSX from this component
class TestComponent extends Component {
  render() {
    return (
      <div className="Test">
        <img src="https://s3.amazonaws.com/ironboard-learn/sunglasses.gif" alt="a deeply impressed man, perhaps thinking 'whoa'"/>
        <p>Whoa!</p>
      </div>
    );
  }
}

export default TestComponent;
