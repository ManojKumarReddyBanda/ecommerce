import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { addToCartDB } from '../utils/indexedDB'; 

const ItemsPage = () => {
  const [quantities, setQuantities] = useState({}); // State to manage quantities for each product
  const router = useRouter();

  const handleAddToCart = async (product) => {
    await addToCartDB({ ...product, quantity: quantities[product.id] || 0 }); // Pass the quantity for the specific product
  };

  const handleIncreaseQuantity = (productId) => {
    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [productId]: (prevQuantities[productId] || 0) + 1 // Increase quantity for the specific product
    }));
  };

  const handleDecreaseQuantity = (productId) => {
    if (quantities[productId] > 0) { // Allow decrease until quantity is 0
      setQuantities(prevQuantities => ({
        ...prevQuantities,
        [productId]: prevQuantities[productId] - 1 // Decrease quantity for the specific product
      }));
    }
  };

  const products = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 15 },
    { id: 3, name: 'Product 3', price: 20 },
    { id: 4, name: 'Product 4', price: 25 },
    { id: 5, name: 'Product 5', price: 30 },
  ];

  const handleViewCart = () => {
    router.push('/cart'); // Redirect to the cart page
  };

  return (
    <div>
      <h2>Items List</h2>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>Price: ${product.price}</p>
          <button onClick={() => handleDecreaseQuantity(product.id)}>-</button>
          <input type="number" value={quantities[product.id] || 0} readOnly />
          <button onClick={() => handleIncreaseQuantity(product.id)}>+</button>
          <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
        </div>
      ))}
      <button onClick={handleViewCart}>View Cart</button>
    </div>
  );
};

export default ItemsPage;









































