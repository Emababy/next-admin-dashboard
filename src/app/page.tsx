'use client'

import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import TopCards from './components/TopCards';
import BarCharts from './components/BarCharts';
import RecentOrders from './components/RecentOrders';
import LoadingSpinner from './components/LoadingSpinner';

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const apiUrl = 'https://fakestoreapi.com/products';
    fetch(apiUrl)
      .then((response) => response.json())
      .then((responseData) => setProducts(responseData))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  if (products.length < 1) {
    return <LoadingSpinner />;
  } else {
    return (
      <main className='bg-gray-100 min-h-screen'>
        <Sidebar />
        <Header />
        <TopCards />
        <div className='p-4 grid md:grid-cols-3 grid-cols-1 gap-4 ml-24'>
          <BarCharts />
          <RecentOrders
            products={products}
          />
        </div>
      </main>
    );
  }
}

export default Home;
