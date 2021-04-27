import React, { useContext } from 'react'
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext'
import '../styles/components/Checkout.css'

const Checkout = () => {
    const {state, removeFromCart} = useContext(AppContext);
    const { cart } = state;

    const handleRemove = product => () => {
        removeFromCart(product)
    };

    const handleSumTotal = () => {
        const reducer = (acumulator, currentValue) =>  acumulator + currentValue.price;
        const sum = cart.reduce(reducer, 0);
        return sum;
    }

    return (
        <React.Fragment>
            <Helmet>
                <title>Lista de Pedidos - Platzi Conf Merch</title>
            </Helmet>
            <div className="Checkout">
                <div className="Checkout-content">
                    <h3>Lista de pedidos</h3>
                    {cart.length > 0 ? <h3>Lista de pedidos:</h3> : <h3>Sin pedidos...</h3>}
                    {cart.map((item) => (
                        <div key={item.id} className="Checkout-item">
                            <div className="Checkout-element">
                                <h4>{item.title}</h4>
                                <span>${item.price}</span>                        
                            </div>
                            <button type="button" onClick={handleRemove(item)}>
                                <i className="fas fa-trash-alt" />
                            </button>
                        </div>
                    ) )}
                </div>
                {cart.length > 0 && (
                    <div className="Checkout-sidebar">
                        <h3>{`Precio total: $ ${handleSumTotal()}`}</h3>
                        <Link to="/checkout/information">
                            <button type="button">Continuar pedido</button>
                        </Link>
                    </div>
                )}
            </div>
        </React.Fragment>
    )
}

export default Checkout
