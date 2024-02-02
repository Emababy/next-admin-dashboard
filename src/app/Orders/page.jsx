'use client';

import { FaShoppingBag } from "react-icons/fa";
import Sidebar from "../components/Sidebar";
import { useEffect, useState } from 'react';
import { BsThreeDotsVertical } from "react-icons/bs";
import LoadingSpinner from '@/app/components/LoadingSpinner';


function Orders() {

    
    const ApiUrlProducts = "https://fakestoreapi.com/products";
    const [Products, setProducts] = useState([]);

    useEffect(() => {
        fetch(ApiUrlProducts)
            .then((response) => response.json())
            .then((responseData) => setProducts(responseData));
    }, []);

    
    if (Products.length < 1) {
        return (
            <LoadingSpinner />
        )
    } else {
        return(
            <main className='bg-gray-100 min-h-screen'>
                <Sidebar />

                <div className="flex justify-between px-4 pt-4 ml-20">
                    <h2>Orders</h2>
                    <h2 className="hidden md:flex">Welcome Back , Ziad</h2>
                </div>

                <div className="p-4 ml-20">
                    <div className="w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto">
                        <div className="my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer">
                            <span>Product</span>
                            <span className="sm:text-left text-right">Rating</span>
                            <span className="hidden sm:grid">Price</span>
                            <span className="hidden md:grid">Category</span>
                        </div>
                        <ul>
                            {Products.map((Product) => (
                                <li key={Product.id} className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer">
                                    <div className="flex ">
                                        <div className="bg-purple-100 p-3 rounded-lg">
                                            <FaShoppingBag className="text-purple-800" />
                                        </div>
                                        <div className="pl-3">
                                            <p className="text-gray-800 font-bold">{Product.title.slice(0, 10)}</p>
                                            <p className="text-gray-800 text-sm">{Product.rating.count}</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 sm:text-left text-right">
                                        <span className={
                                            Product.rating.rate >= 4 ? 'bg-blue-200 rounded-lg p-2' : Product.rating.rate >= 3 ? 'bg-green-200 rounded-lg p-2' : Product.rating.rate >= 2 ? 'bg-yellow-200 rounded-lg p-2' : 'bg-red-200 rounded-lg p-2'
                                        }>{Product.rating.rate}</span>
                                    </p>
                                    <p className="hidden sm:flex">{Product.price}</p>
                                    <div className="md:flex hidden justify-between items-center">
                                        <p>{Product.category}</p>
                                        <BsThreeDotsVertical />
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

            </main>
        )
    }
}


export default Orders;