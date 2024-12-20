import React from 'react';
import '../styles/honey.css';

const Filter = ({ setFilter }) => {
    return (
        <input className="filter-input"
            type="text"
            placeholder="Фильтр по имени"
            onChange={(e) => setFilter(e.target.value)}
        />
    );
};

export default Filter;