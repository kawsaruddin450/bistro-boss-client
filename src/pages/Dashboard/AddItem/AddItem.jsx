import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../../components/SectionTitle/SectionTitle'
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const AddItem = () => {
    const { register, handleSubmit, reset } = useForm();
    const token = localStorage.getItem('access-token');
    const onSubmit = data => {
        const { name, image, category, price, recipe } = data;
        const menuItem = { name, image, category, price: parseFloat(price), recipe };
        console.log(menuItem);

        fetch(`http://localhost:8000/menu`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
                authorization: `bearer ${token}`
            },
            body: JSON.stringify(menuItem)
        }).then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: "Added!",
                        text: "This item has been added.",
                        icon: "success"
                    });
                    reset();
                }
            })
    };


    return (
        <div className='w-full max-w-screen-md mx-auto my-12'>
            <Helmet>
                <title>Add an Item - Bistro Boss Resturant</title>
            </Helmet>
            <SectionTitle heading={"Add an item"} subHeading={"What's New?"}></SectionTitle>
            <div className='my-16'>
                <form onSubmit={handleSubmit(onSubmit)} className='p-12 bg-base-200'>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Recipe name *</span>
                        </div>
                        <input type="text" placeholder="Recipe name"
                            {...register("name", { required: true, maxLength: 80 })}
                            className="input input-bordered w-full" />
                    </label>
                    <div className='flex gap-5 items-center'>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Category *</span>
                            </div>
                            <select defaultValue={"Pick One"} {...register("category", { required: true })} className="select select-bordered">
                                <option disabled>Pick One</option>
                                <option>salad</option>
                                <option>pizza</option>
                                <option>soup</option>
                                <option>dessert</option>
                                <option>drinks</option>
                            </select>
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Price *</span>
                            </div>
                            <input type="text" placeholder="Price"
                                {...register("price", { required: true, maxLength: 10 })}
                                className="input input-bordered w-full" />
                        </label>
                    </div>
                    <label className="form-control">
                        <div className="label">
                            <span className="label-text">Recipe Details *</span>
                        </div>
                        <textarea
                            {...register("recipe", { required: true })}
                            className="textarea textarea-bordered h-32" placeholder="Recipe Details"></textarea>
                    </label>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Image Url *</span>
                        </div>
                        <input type="text" placeholder="Image Url"
                            {...register("image", { required: true })}
                            className="input input-bordered w-full" />
                    </label>
                    <input type="submit" value={`Add Item`} className='btn bg-[#D1A054] rounded-none text-white mt-5 text-xl font-semibold' />
                </form>
            </div>
        </div>
    );
};

export default AddItem;