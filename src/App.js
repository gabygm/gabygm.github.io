import React, { Component } from 'react';
import MenuSide from './components/MenuSide'
import Home from './Home'

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <MenuSide />
        <Home />
      </div>
    )
  }
}
export default App;
