import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../../components/SectionTitle/SectionTitle'
import { FaUtensils } from 'react-icons/fa';
import { useForm } from 'react-hook-form';

const AddItem = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
    };
    console.log(errors);


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
                            <select {...register("firstName", { required: true })} className="select select-bordered">
                                <option disabled selected>Pick one</option>
                                <option>Salad</option>
                                <option>Pizza</option>
                                <option>Soup</option>
                                <option>Dessert</option>
                                <option>Drinks</option>
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
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Item Image *</span>
                        </div>
                        <input type="file"
                            {...register("image", { required: true })}
                            className="file-input file-input-bordered w-full max-w-xs" />
                    </label>
                    <input type="submit" value={`Add Item`} className='btn bg-[#D1A054] rounded-none text-white mt-5 text-xl font-semibold' />
                </form>
            </div>
        </div>
    );
};

export default AddItem;