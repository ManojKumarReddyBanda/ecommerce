import { openDB } from 'idb';

const dbName = 'my-e-commerce-db';
const storeName = 'cart';

// Initialize the IndexedDB database
export const initDB = async () => {
  const db = await openDB(dbName, 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(storeName)) {
        db.createObjectStore(storeName, { keyPath: 'id' });
      }
    },
  });
  return db;
};

// Function to add an item to the cart in IndexedDB
export const addToCartDB = async (item) => {
  const db = await initDB();
  const transaction = db.transaction(storeName, 'readwrite');
  const store = transaction.objectStore(storeName);
  await store.put(item); // Use put method to add or update an item in the object store
  await transaction.done;
};

// Function to retrieve all items from the cart in IndexedDB
export const getCartItemsDB = async () => {
  const db = await initDB();
  const transaction = db.transaction(storeName, 'readonly');
  const store = transaction.objectStore(storeName);
  const items = await store.getAll();
  return items;
};

// Function to remove an item from the cart in IndexedDB
export const removeCartItemDB = async (id) => {
  const db = await initDB();
  const transaction = db.transaction(storeName, 'readwrite');
  const store = transaction.objectStore(storeName);
  await store.delete(id); // Use delete method to remove an item from the object store
  await transaction.done;
};

// Function to update the quantity of an item in the cart in IndexedDB
export const updateCartItemQuantityDB = async (id, quantity) => {
  const db = await initDB();
  const transaction = db.transaction(storeName, 'readwrite');
  const store = transaction.objectStore(storeName);
  const item = await store.get(id);
  if (item) {
    item.quantity = quantity;
    await store.put(item);
  }
};







