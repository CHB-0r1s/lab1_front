import React from 'react';
import '../styles/honey.css'; // или путь к вашему файлу CSS

const HoneyItem = ({ honey, addToCart }) => {
    return (
        <div className="honeycomb-gradient">
            <h3>{honey.name}</h3>
            <ul>
                <li>{honey.price}</li>
                <li>{honey.manufactureCost}</li>
                <li>{honey.owner.name}</li>
            </ul>
            <button onClick={() => addToCart(honey)}>Добавить в корзину</button>
        </div>
    );
};

export default HoneyItem;