

const MenuItem = ({item}) => {
    const {name, image, recipe, price} = item;
    return (
        <div className="flex gap-8">
            <img src={image} style={{borderRadius: "0 150px 150px 150px"}} className="w-28" alt="" />
            <div>
                <h3 className="text-black">{name} ---------</h3>
                <p className="text-neutral">{recipe}</p>
            </div>
            <p className="text-yellow-600">${price}</p>
        </div>
    );
};

export default MenuItem;