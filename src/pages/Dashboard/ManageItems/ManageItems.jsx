import { Helmet } from "react-helmet-async";
import SectionTitle from '../../../components/SectionTitle/SectionTitle'
import useMenu from "../../../hooks/useMenu";
import { RiDeleteBinLine } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";


const ManageItems = () => {
    const [menu, refetch] = useMenu();
    return (
        <div className='w-full max-w-screen-md mx-auto my-12'>
            <Helmet>
                <title>Manage All Items - Bistro Boss Resturant</title>
            </Helmet>
            <SectionTitle heading={"Manage all items"} subHeading={"Hurry Up!"}></SectionTitle>
            <div className="overflow-x-auto rounded-t-2xl my-16">
                <table className="table">
                    {/* head */}
                    <thead className='bg-[#D1A054] text-white'>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th>Action</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            menu.map((item, index) => <tr
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
                                    <button  className="btn btn-square btn-sm rounded-md text-md bg-[#D1A054] text-white"><FiEdit></FiEdit></button>
                                </td>
                                <td>
                                    <button  className="btn btn-square btn-sm rounded-md text-md bg-[#B91C1C] text-white"><RiDeleteBinLine></RiDeleteBinLine></button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageItems;