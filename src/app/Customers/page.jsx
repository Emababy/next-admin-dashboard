'use client';

import { BsPersonFill, BsThreeDotsVertical } from "react-icons/bs";
import Sidebar from "../components/Sidebar";
import { useEffect, useState } from 'react';
import LoadingSpinner from '@/app/components/LoadingSpinner';


function Customers (){

    const ApiUrlUsers = "https://fakestoreapi.com/users";
    const [Users, setUsers] = useState([]);

    useEffect(() => {
        fetch(ApiUrlUsers)
            .then((response) => response.json())
            .then((responseData) => setUsers(responseData));
    }, []);

    if (Users.length < 1) {
        return (
            <LoadingSpinner />
        )
    } else {
        return (
            <main className='bg-gray-100 min-h-screen'>
                <Sidebar />

                <div className="flex justify-between px-4 pt-4 ml-20">
                    <h2>Customers</h2>
                    <h2 className="hidden md:flex">Welcome Back , Ziad</h2>
                </div>

                <div className="p-4 ml-20">
                    <div className="w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto">
                        <div className="my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer">
                            <span>Name</span>
                            <span className="sm:text-left text-right">City</span>
                            <span className="hidden sm:grid">Email</span>
                            <span className="hidden md:grid">Phone</span>
                        </div>
                        <ul>
                            {Users.map((User) => (
                                <li className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer" key={User.id}>
                                    <div className="flex items-center">
                                        <div className="bg-purple-100 rounded-lg">
                                            <BsPersonFill className="text-purple-800" />
                                        </div>
                                        <p className="pl-4">{User.name.firstname + ' ' + User.name.lastname}</p>
                                    </div>
                                    <p className="sm:text-left text-right text-gray-600">{User.address.city}</p>
                                    <p className="hidden md:flex">{User.email}</p>
                                    <div className="sm:flex hidden justify-between items-center">
                                        <p>{User.phone}</p>
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

export default Customers;