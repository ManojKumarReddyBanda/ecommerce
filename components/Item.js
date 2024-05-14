import React from 'react';
import '../styles/Item.module.css';

const Item = ({ item }) => {
  return (
    <div className="item">
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <p>Price: ${item.price}</p>
      {}
    </div>
  );
};

export default Item;
