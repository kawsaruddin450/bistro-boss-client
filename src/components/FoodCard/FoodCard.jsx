import { useContext } from "react";
import Button from "../Button/Button";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";


const FoodCard = ({ item }) => {
    const { name, recipe, image, category, price, _id } = item;
    const { user } = useContext(AuthContext);
    const [, refetch ] = useCart();
    const navigate = useNavigate();
    const location = useLocation();

    const handleAddToCart = (item) => {
        console.log(item);
        if (user) {
            const cartItem = { itemId: _id, name, price, image, email: user?.email };
            fetch('http://localhost:8000/carts', {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch();
                        Swal.fire({
                            title: "Successful!",
                            text: "Added to cart Successfully",
                            icon: "success"
                        });
                    }
                    else {
                        Swal.fire({
                            title: "Oppss!",
                            text: "An Error has occured",
                            icon: "error"
                        });
                    }
                })
        }
        else {
            Swal.fire({
                title: "Sorry!",
                text: "You have to login first.",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } });
                }
            });
        }
    }
    return (
        <div className="card bg-slate-200 shadow-xl rounded-none">
            <p className="w-20 py-2 text-center bg-slate-900 text-white absolute right-5 top-5">${price}</p>
            <figure className="">
                <img
                    src={image}
                    alt="Food Item"
                    className="" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions">
                    <button onClick={() => handleAddToCart(item)}><Button>Add To Cart</Button></button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;