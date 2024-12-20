import React, { useEffect, useState } from 'react';
import { fetchHoney } from './api';

import HoneyList from './components/HoneyList';
import Filter from './components/Filter';
import Cart from './components/Cart';
import AddHoneyForm from './components/AddHoneyForm';
import honeyGif from '/Users/luzin/IdeaProjects/lab_front/honey-app/src/os.gif';

const App = () => {
  const [honeyData, setHoneyData] = useState([]);
  const [filter, setFilter] = useState('');
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const getHoneyData = async () => {
      const data = await fetchHoney();
      setHoneyData(data);
    };
    getHoneyData();
  }, []);

  const addToCart = (honey) => {
    setCartItems([...cartItems, honey]);
  };

  const filteredHoney = honeyData.filter(honey =>
      honey.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
      <div>
          <h1>База данных мёда</h1>
          <div className="honey-container">
              <div className="filters-container">
                  <Filter setFilter={setFilter}/>
                  <Filter setFilter={setFilter}/>
                  <Filter setFilter={setFilter}/>
                  <Filter setFilter={setFilter}/>
                  <Filter setFilter={setFilter}/>
              </div>
              <AddHoneyForm onHoneyAdded={() => fetchHoney().then(setHoneyData)}/>
              <img src={honeyGif} alt="Медовая анимация"/>
          </div>
          <HoneyList honeyData={filteredHoney} addToCart={addToCart}/>
          <Cart cartItems={cartItems} />
      </div>
  );
};

export default App;