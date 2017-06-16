import React from 'react';

function Filtered(props) {
    const products = props.products;
    const listItems = products.map((item, index) =>
        <li key={index} className="result-li">
            {item.name} - {item.type.toLowerCase()}
            <hr/>
        </li>
    );
    return (
        <div>
            <ul className="result-ul">
                {listItems}
            </ul>
        </div>
    );
}

export default Filtered;