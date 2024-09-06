import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../../hooks/useCart";
import useAdmin from "../../../hooks/useAdmin";


const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [cart] = useCart();
    const [admin] = useAdmin();
    const isAdmin = admin?.admin;

    const handleLogOut = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    title: "Successful!",
                    text: "Logged Out Successfully",
                    icon: "success"
                });
            }).catch(err => {
                console.log(err);
            })
    }

    const navItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/menu'>Our Menu</Link></li>
        <li><Link to={`/order/salad`}>Order Food</Link></li>
        <li>
            <Link to='/dashboard/mycart'>
                <button className="btn">
                    <FaShoppingCart/>
                    <div className="badge badge-secondary">{cart?.length || 0}</div>
                </button>
            </Link>
        </li>
        {
            user ? <>
                <button onClick={handleLogOut} className="btn btn-ghost">Log Out</button>
            </> : <>
                <li><Link to={`/login`}>Login</Link></li>
            </>
        }
    </>
    return (
        <>
            <div className="navbar fixed z-10 bg-opacity-30 bg-neutral text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {navItems}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Bistro Boss</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to={isAdmin ? '/dashboard/adminhome' : '/dashboard/userhome'} className="btn">{user?.displayName}</Link>
                </div>
            </div>
        </>
    );
};

export default NavBar;