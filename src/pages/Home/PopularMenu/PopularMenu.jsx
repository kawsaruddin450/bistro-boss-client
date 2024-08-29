
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import Button from '../../../components/Button/Button';
import useMenu from '../../../hooks/useMenu';

const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === "popular");
    
    return (
        <section className='max-w-screen-lg mx-auto'>
            <SectionTitle
                heading={"From Our Menu"}
                subHeading={"Check it out"}
            ></SectionTitle>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 my-12'>
                {
                    popular.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className='text-center'>
                <Button>View Full Menu</Button>
            </div>
        </section>
    );
};

export default PopularMenu;