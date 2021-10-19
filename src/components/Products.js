import clownshoes from '../static/images/clownshoes.jpg';
import '../CSS.css';
import React from 'react';

const Product = (props) => {
    let addToCart = () => {
        let mutatingCart = {...props.cart}

        mutatingCart.size++;
        mutatingCart.items[props.clown.id] ? mutatingCart.items[props.clown.id].quantity+=1 : mutatingCart.items[props.clown.id] = {data: props.clown, quantity: 1};
        
        let floatPrice = parseFloat(props.clown.price);
        console.log(floatPrice);
        mutatingCart.total = mutatingCart.total + floatPrice;
        console.log(mutatingCart.total);

        props.setCart(mutatingCart);
        console.log(mutatingCart);
    }
    
    return (
        <div className="card clownCards">
            <img src={clownshoes} className="card-img-top" alt="Lets see if it works" />
            <div className="card-body">
            <h5 className="card-title">{props.clown.item_name}</h5>
            <p className="card-text">{props.clown.description}</p>
            </div>
            
            <div className="card-body">
                <h5>${props.clown.price}</h5>
            <button className="btn btn-sm btn-danger" onClick={addToCart}>Add to Cart</button>
            </div>
        </div>
    )
}
export default Product;