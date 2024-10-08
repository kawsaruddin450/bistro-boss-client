import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { FaRegTrashAlt, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";


const AllUsers = () => {
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:8000/users')
            return res.json();
        }
    })

    const handleMakeAdmin = id => {
        fetch(`http://localhost:8000/users/admin/${id}`, {
            method: "PATCH"
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount === 1) {
                    Swal.fire({
                        title: "Updated!",
                        text: "This user is now an admin.",
                        icon: "success"
                    });
                    refetch();
                }
            })
    }

    const handleDelete = user => {
        //delete user
    }

    return (
        <div className='w-full max-w-screen-md mx-auto my-12'>
            <Helmet>
                <title>All Users - Bistro Boss Resturant</title>
            </Helmet>
            <h2 className="text-3xl font-bold">Total Users: {users.length}</h2>
            <div className="overflow-x-auto rounded-t-2xl mt-12">
                <table className="table table-zebra">
                    {/* head */}
                    <thead className='bg-[#D1A054] text-white'>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr
                                key={user._id}
                            >
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td className="text-center">
                                    {
                                        user.role === 'admin' ?
                                            <div className="badge text-[#D1A054]  badge-sm">Admin</div>
                                            : <button onClick={() => handleMakeAdmin(user._id)} className="btn btn-square bg-[#D1A054] text-white btn-sm hover:bg-[#D1A054]"><FaUserShield></FaUserShield></button>
                                    }
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(user)} className="btn btn-square bg-[#B91C1C] text-white btn-sm hover:bg-[#B91C1C]"><FaRegTrashAlt></FaRegTrashAlt></button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;