import React, { Component } from 'react';
import './App.css';
import products from './products.js';
import Filtered from "./Filtered";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {products: []};
    }

    componentDidMount() {
        const originalData = products;
        this.setState({
            products: originalData['products']
        })
    }

  render() {
    return (
      <div className="App">
        <Filtered products={this.state.products}/>
      </div>
    );
  }
}

export default App;
