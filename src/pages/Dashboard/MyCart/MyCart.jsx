import React from 'react';
import { Helmet } from 'react-helmet-async';
import useCart from '../../../hooks/useCart';
import { RiDeleteBinLine } from 'react-icons/ri';

const MyCart = () => {
    const [cart] = useCart();
    const total = cart.reduce((sum, item) => item.price + sum, 0);
    return (
        <div>
            <Helmet>
                <title>My Cart - Bistro Boss Resturant</title>
            </Helmet>
            <div className='max-w-screen-md mx-auto flex items-center justify-evenly font-bold text-center'>
                <h2>Total Orders: {cart.length}</h2>
                <h2>Total Price: ${total}</h2>
                <button className="btn text-white bg-[#D1A054] hover:bg-[#D1A054]">Pay</button>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item, index) => <tr
                                key={item._id}
                            >
                                <td>
                                    <span>{index + 1}</span>
                                </td>
                                <td>
                                    <div className="avatar">
                                        <div className="h-16 w-16">
                                            <img
                                                src={item.image}
                                                alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.name}
                                </td>
                                <td className='text-end'>${item.price}</td>
                                <td>
                                    <button className="btn btn-square rounded-md text-xl bg-[#B91C1C] text-white"><RiDeleteBinLine></RiDeleteBinLine></button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyCart;