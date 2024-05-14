import React from 'react';
import { useAuth } from '../authContext';

const Header = () => {
  const { user, logout } = useAuth();

  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <h1 className="text-xl font-bold">My E-commerce App</h1>
      {user && (
        <button className="px-3 py-1 bg-red-600 hover:bg-red-700 rounded-md" onClick={logout}>
          Logout
        </button>
      )}
    </header>
  );
};

export default Header;




