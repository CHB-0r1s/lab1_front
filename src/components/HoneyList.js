import React from 'react';
import HoneyItem from './HoneyItem';
import '../styles/honey.css';

const HoneyList = ({ honeyData, addToCart }) => {
    return (
        <div className="honeycomb-container">
            {honeyData.map(honey => (
                <HoneyItem key={honey.id} honey={honey} addToCart={addToCart} />
            ))}
        </div>
    );
};

export default HoneyList;