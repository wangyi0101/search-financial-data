import React from 'react';

function Filtered(props) {
    const products = props.products;
    const listItems = products.map((item, index) =>
        <li key={index} className="result-li">
            {item.name} - {item.type.toLowerCase()}
            <hr/>
        </li>
    );
    if (products.length > 0) {
        return (
            <div>
                <ul className="result-ul">
                    {listItems}
                </ul>
            </div>
        );
    } else {
        return (<div />)
    }

}

export default Filtered;