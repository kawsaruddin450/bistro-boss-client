import Button from "../Button/Button";


const FoodCard = ({item}) => {
    const {name, recipe, image, category, price} = item;
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
                    <Button>Add To Cart</Button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;