import React from 'react';

function Filtered(props) {
    const products = props.products;
    const listItems = products.map((item, index) =>
        <li key={index}>
            {item.name} - {item.type}
        </li>
    );
    return (
        <ul>{listItems}</ul>
    );
}

export default Filtered;