import React from 'react';
import { FaBook, FaCalendarAlt, FaShoppingCart, FaUsers, FaWallet } from 'react-icons/fa';
import { GiShoppingBag } from 'react-icons/gi';
import { IoMdHome } from 'react-icons/io';
import { MdMenu } from 'react-icons/md';
import { NavLink, Outlet } from 'react-router-dom';
import '../index.css';
import useCart from '../hooks/useCart';
import { ImSpoonKnife } from 'react-icons/im';
import { TfiMenuAlt } from 'react-icons/tfi';
import useAdmin from '../hooks/useAdmin';

const Dashboard = () => {
    const [cart] = useCart();

    // TODO: load data from the server to have dynamic admin based on data
    // const isAdmin = true;
    const [admin, refetch, isAdminLoading] = useAdmin();
    const isAdmin = admin?.admin;
    console.log(isAdmin);
    

    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <Outlet />
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
                        Open drawer
                    </label>
                </div>
                <div className="drawer-side" id='dashboard-sidebar'>
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-[#D1A054] text-base-content min-h-full w-80 p-4 uppercase">
                        {
                            isAdmin ? <>
                                {/* Sidebar content here */}
                                <li><NavLink to='/dashboard/home'><IoMdHome></IoMdHome> Admin Home</NavLink></li>
                                <li><NavLink to='/dashboard/addItem'><ImSpoonKnife></ImSpoonKnife> Add Items</NavLink></li>
                                <li><NavLink to='/dashboard/history'><TfiMenuAlt></TfiMenuAlt> Manage Items</NavLink></li>
                                <li><NavLink to='/dashboard/history'><FaBook></FaBook> Manage Bookings</NavLink></li>
                                <li><NavLink to='/dashboard/allusers'><FaUsers></FaUsers> All Users</NavLink></li>
                            </>
                                : <>
                                    {/* Sidebar content here */}
                                    <li><NavLink to='/dashboard/home'><IoMdHome></IoMdHome> User Home</NavLink></li>
                                    <li><NavLink to='/dashboard/reservations'><FaCalendarAlt></FaCalendarAlt> Reservations</NavLink></li>
                                    <li><NavLink to='/dashboard/history'><FaWallet></FaWallet> Payment History</NavLink></li>
                                    <li>
                                        <NavLink to='/dashboard/mycart'><FaShoppingCart></FaShoppingCart> My Cart
                                            <div className="badge badge-neutral">{cart?.length || 0}</div>
                                        </NavLink>
                                    </li>
                                </>
                        }
                        <div className="divider"></div>
                        <li><NavLink to="/"><IoMdHome></IoMdHome> Home</NavLink></li>
                        <li><NavLink to="/menu"><MdMenu></MdMenu> Menu</NavLink></li>
                        <li><NavLink to="/order/salad"><GiShoppingBag></GiShoppingBag> Shop Now</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;