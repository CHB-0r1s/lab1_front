import React, { useState } from 'react';
import { addHoney } from '../api';
import '../styles/honey.css';

const AddHoneyForm = ({ onHoneyAdded }) => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [organization, setOrg] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newHoney = { name, price, organization};
        await addHoney(newHoney);
        onHoneyAdded();
        setName(name);
        setPrice(price);
        setOrg(organization);
    };

    return (
        <form onSubmit={handleSubmit} className="add-honey-form">
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Имя мёда"
                required
            />
            <textarea
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Цена"
                required
            />
            <input
                type="text"
                value={organization}
                onChange={(e) => setOrg(e.target.value)}
                placeholder="Имя мёда"
                required
            />
            <button type="submit">Добавить мёд</button>
        </form>
    );
};

export default AddHoneyForm;