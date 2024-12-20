import React from 'react';
import '../styles/honey.css';

const Cart = ({ cartItems }) => {
    return (
        <div>
            <h2>Корзина</h2>
            {cartItems.length === 0 ? (
                <p>Корзина пуста</p>
            ) : (
                cartItems.map(item => <p key={item.id}>{item.price}</p>)
            )}
        </div>
    );
};

export default Cart;