import React, { Component } from 'react';
import './App.css';
import products from './products.js';
import Filtered from './Filtered';
import AutoComplete from './Autocomplete';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            originalData: [],
            suggestedData: [],
            filteredData: [],
            keyWord: ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        const originalData = products;
        this.setState({
            originalData: originalData['products']
        })
    }

    handleInputChange(event) {
        const target = event.target.value;
        let tempSuugest = this.filterData(this.state.originalData, target);
        let dataSet = new Set();
        const filteredData = [];
        tempSuugest.forEach((item) => {
            if(!(dataSet.has(item.name)))
                filteredData.push(item);
                dataSet.add(item.name);
            });
        if(target.length > 0) {
            this.setState({
                suggestedData: filteredData,
                keyWord: target
            })
        } else {
            this.setState({
                suggestedData: [],
                filteredData: this.state.originalData
            })
        }
    }

    handleClick(event) {
        const key = event.currentTarget.textContent;
        const index = key.indexOf('-');
        const target = key.substring(0, index);
        let filteredData = this.filterData(this.state.originalData, target);

        this.setState({
            filteredData: filteredData
        })
    }

    filterData(data, key) {
        let filteredData = [];
        data.forEach((item) => {
            const name = item.name.toLowerCase();
            const str = key.toLowerCase();
            if(name.indexOf(str) !== -1) {
                filteredData.push(item);
            }
        });
        return filteredData;
    }

  render() {
    return (
      <div className="flex-container">
          <div className="flex-item">
              <form >
                  <input type="text" onChange={this.handleInputChange} placeholder="Search Institution Name and Type" size="50"/>
                  <AutoComplete
                      products={this.state.suggestedData}
                      onClick ={this.handleClick}
                      keyWord={this.state.keyWord}
                  />
              </form>
          </div>
          <div className="flex-item search">
              <Filtered products={this.state.filteredData.length > 0 ? this.state.filteredData : this.state.originalData} />
          </div>
      </div>
    );
  }
}

export default App;
