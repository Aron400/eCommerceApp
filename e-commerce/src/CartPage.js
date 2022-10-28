import React from "react";
import PropTypes from 'prop-types';
import './CartPage.css';

import Item from './Item';
//import { items } from './static-data';

function CartPage({items, onAddOne, onRemoveOne}) { 

    return ( 
        <ul className="CartPage-items"> 
            {items.map(item => 
                <li key={item.id} className="CartPage-item"> 
                    <Item item={item}>
                    <button className="Item-addToCart" onClick={()=>onRemoveOne(item)}> 
                        - 
                    </button> 
                    {item.count}
                    <button className="Item-addToCart" onClick={()=>onAddOne(item)}> 
                        + 
                    </button>     
                    </Item> 
                </li>)} 
        </ul> 
        );
} 

CartPage.propTypes = { 
    items: PropTypes.array.isRequired,
    onAddOne: PropTypes.func.isRequired,
    onRemoveOne: PropTypes.func.isRequired
};

export default CartPage;