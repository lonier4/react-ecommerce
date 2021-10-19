import React from "react";
import '../static/cartCSS.css';

const Cart = (props) => {

    const clearCart = () => {
        props.setCart({
            total: 0,
            size: 0,
            items: {}
        });
    }

    let increaseOne = (c) => {
        let mutatingCart = { ...props.cart }

        mutatingCart.size++;
        mutatingCart.items[c.data.id].quantity += 1;

        let floatPrice = parseFloat(c.data.price);

        mutatingCart.total = mutatingCart.total + floatPrice;

        props.setCart(mutatingCart);
    }

    let removeOne = (a) => {
        let mutatingCart = { ...props.cart }

        mutatingCart.size--;
        mutatingCart.items[a.data.id].quantity > 1 ? mutatingCart.items[a.data.id].quantity -= 1 : delete mutatingCart.items[a.data.id];

        let floatPrice = parseFloat(a.data.price);

        mutatingCart.total = mutatingCart.total - floatPrice;

        props.setCart(mutatingCart);
    }

    let clearItem = (a) => {
        let mutatingCart = { ...props.cart };

        mutatingCart.size -= a.quantity;

        let floatPrice = parseFloat(a.data.price);

        mutatingCart.total = mutatingCart.total - floatPrice * a.quantity;

        delete mutatingCart.items[a.data.id];
        props.setCart(mutatingCart);
    }

    return (
        <div className="container mt-5 mb-5">
            <div className="d-flex justify-content-center row">
                <div className="col-md-8">
                    <div className="p-2">
                        <h4>Shopping cart</h4>
                    </div>

                    {Object.values(props.cart.items).map(a => {
                        return (
                            <div className="d-flex flex-row justify-content-between align-items-center p-2 bg-white mt-4 px-3 rounded">
                                <div className="mr-1"><img className="rounded" src="https://i.imgur.com/XiFJkhI.jpg" width="70" alt="Stuff" /></div>
                                <div className="d-flex flex-column align-items-center product-details"><span className="font-weight-bold">{a.data.item_name}</span>

                                </div>
                                <div className="d-flex flex-row align-items-center qty">
                                    <i className="fa fa-minus text-danger" onClick={() => removeOne(a)}></i>
                                    <h5 className="text-grey mt-1 mr-1 ml-1">{a.quantity}</h5>
                                    <i className="fa fa-plus text-success" onClick={() => increaseOne(a)}></i>
                                </div>
                                <div>
                                    <h5 className="text-grey">{a.data.price} ea.</h5>
                                </div>

                                <div className="d-flex align-items-center"><i className="fa fa-trash mb-1 text-danger" onClick={() => clearItem(a)}></i></div>
                            </div>
                        )
                    })
                    }

                    <div className="d-flex flex-row justify-content-between align-items-center p-2 bg-white mt-4 px-3 rounded">
                        <div className="d-flex flex-column align-items-center product-details"><span className="font-weight-bold">Total</span>
                        </div>
                        <div>
                            <h4 className="text-grey">${props.cart.total.toFixed(2)}</h4>
                        </div>

                        <div className="d-flex align-items-center"><button className="btn btn-sm btn-danger" onClick={clearCart}>Remove All</button></div>
                    </div>
                    <div className="d-flex flex-row align-items-center mt-3 p-2 bg-black rounded"><button className="btn btn-info btn-block btn-lg ml-2 pay-button" type="button">Proceed to Pay</button></div>
                </div>
            </div>
        </div>
    )
}
export default Cart;