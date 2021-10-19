import '../CSS.css';
import React from 'react';
// import black from '../static/images/black.jpg'
import Product from '../components/Products';
/* intention was to set a black background */

const Shop = (props) => {
   
    return (
        <div className="container-fluid">
            <div className="row shop">
            {/* <img src={black} className="blackbackground" alt="black background"/> */}    
                {
                    !props.clowns
                    ?
                    <h1>Clowns Are Getting Ready...</h1>
                    :
                    Object.values(props.clowns).map((clown) => {
                        return <Product clown={clown} key={clown.id} cart={props.cart} setCart={props.setCart}/>
                    })
                }
            </div>
        </div>
    )
};
export default Shop;