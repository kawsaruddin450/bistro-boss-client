import { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';

const PopularMenu = () => {
    const [menu, setMenu] = useState([]);
    useEffect(()=> {
        fetch('menu.json')
        .then(res => res.json())
        .then(data => setMenu(data.filter(d => d.category === "popular")))
    },[])
    return (
        <section className='max-w-screen-lg mx-auto'>
            <SectionTitle
                heading={"From Our Menu"}
                subHeading={"Check it out"}
            ></SectionTitle>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 my-12'>
                {
                    menu.map(item => <MenuItem
                    key={item._id}
                    item={item}
                    ></MenuItem>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;