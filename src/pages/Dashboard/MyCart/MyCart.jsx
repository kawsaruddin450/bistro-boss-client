import React from 'react';
import { Helmet } from 'react-helmet-async';
import useCart from '../../../hooks/useCart';
import { RiDeleteBinLine } from 'react-icons/ri';
import Swal from 'sweetalert2';
import useAdmin from '../../../hooks/useAdmin';

const MyCart = () => {
    const [cart, refetch] = useCart();
    const total = cart.reduce((sum, item) => item.price + sum, 0);
    const [admin,] = useAdmin();
    console.log(admin);

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:8000/carts/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount === 1) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "This item has been deleted.",
                                icon: "success"
                            });
                            refetch();
                        }
                    })
            }
        });
    }

    return (
        <div className='w-full max-w-screen-md mx-auto my-12'>
            <Helmet>
                <title>My Cart - Bistro Boss Resturant</title>
            </Helmet>
            <div className='flex items-center justify-evenly font-bold text-center mb-8'>
                <h2>Total Orders: {cart.length}</h2>
                <h2>Total Price: ${total.toFixed(2)}</h2>
                <button className="btn text-white bg-[#D1A054] hover:bg-[#D1A054]">Pay</button>
            </div>
            <div className="overflow-x-auto rounded-t-2xl">
                <table className="table">
                    {/* head */}
                    <thead className='bg-[#D1A054] text-white'>
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
                                    <button onClick={() => handleDelete(item._id)} className="btn btn-square btn-sm rounded-md text-md bg-[#B91C1C] text-white"><RiDeleteBinLine></RiDeleteBinLine></button>
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