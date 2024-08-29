import { Link } from "react-router-dom";
import Button from "../../../components/Button/Button";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title, img }) => {
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 my-12'>
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className="text-center">
                <Link to={`/order/${title}`}><Button>Order Your Favourite Food</Button></Link>
            </div>
        </div>
    );
};

export default MenuCategory;