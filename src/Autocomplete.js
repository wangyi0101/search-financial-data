import React, {Component} from 'react';

class AutoComplete extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }

    generateList() {
        const {products, onClick} = this.props;
        return products.map((item, index) => {
            return <li key={index} className="auto-li" onClick={onClick}>
                {item.name}- <span style={{color: '#FF7F50'}}>{item.type.toLowerCase()}</span>
            </li>
        });
    }

    render() {
        const listItems = this.generateList();
        const {products} = this.props;
        if (products.length === 0) {
            return (null)
        } else {
            return (
                <div className="suggest-box">
                    <ul className="auto-ul">
                        {listItems}
                    </ul>
                </div>
            )
        }

    }
}

export default AutoComplete;