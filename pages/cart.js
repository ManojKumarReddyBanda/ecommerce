import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { getCartItemsDB, removeCartItemDB, updateCartItemQuantityDB } from '../utils/indexedDB';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchCartItems = async () => {
      const items = await getCartItemsDB();
      setCartItems(items);
    };

    fetchCartItems();
  }, []);

  const handleRemoveItem = async (id) => {
    await removeCartItemDB(id);
    const updatedCartItems = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCartItems);
  };

  const handleUpdateQuantity = async (id, quantity) => {
    const updatedItems = cartItems.map(item => {
      if (item.id === id) {
        return { ...item, quantity };
      }
      return item;
    });
    setCartItems(updatedItems);
    await updateCartItemQuantityDB(id, quantity);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      return total + (item.price * item.quantity);
    }, 0);
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold my-4">Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cartItems.map(item => (
              <li key={item.id}>
                <p>{item.name}</p>
                <p>Quantity: 
                  <button onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}>-</button>
                  {item.quantity}
                  <button onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}>+</button>
                </p>
                <p>Price: ${item.price * item.quantity}</p>
                <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <p>Total Price: ${getTotalPrice()}</p>
        </>
      )}
    </div>
  );
};

export default CartPage;







































