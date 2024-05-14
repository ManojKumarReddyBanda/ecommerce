import React from 'react';
import Link from 'next/link';
import Header from '../components/Header';

const IndexPage = () => {
  return (
    <div>
      <Header />
      <div className="container mx-auto py-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Welcome to My E-commerce App</h2>
        <p>Discover amazing deals on thousands of products!</p>
        <Link href="/login">
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default IndexPage;










