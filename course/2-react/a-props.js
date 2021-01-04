import React from 'react';
import { render } from 'react-dom';
import Hello from './Hello';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const App = (props) => (
  <div style={styles}>
    <h2>{props.count}</h2>
  </div>
);

const App2 = function(props) {
  return (
    <div style={styles}>
      <h2>{props.count}</h2>
    </div>
  )
}
let count = 0

// This is the exact same thing but with arrow notation
//
//setInterval(
//  () => render(<App2 count={count++} />, document.getElementById('root')),
//    1000
//  )

setInterval(
  function() {render(<App2 count={count++} />, document.getElementById('root'))},
  1000
)
