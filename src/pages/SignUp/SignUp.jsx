import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";


const SignUp = () => {
    const { user, signUp, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data);
        signUp(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                updateUserProfile(data.name)
                    .then(() => {
                        const saveUser = { name: data.name, email: data.email };
                        fetch('http://localhost:8000/users/', {
                            method: "POST",
                            headers: {
                                "content-type": "application/json",
                            },
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    Swal.fire({
                                        title: "Congratulations!",
                                        text: "User has been created Successfully",
                                        icon: "success"
                                    });
                                    reset();
                                    navigate('/');
                                }
                            })
                    }).catch(error => {
                        console.log(error.message);
                    })
            }).catch(error => {
                console.log(error.message);
            })
    }

    return (
        <div className="hero min-h-screen max-w-screen-lg mx-auto">
            <Helmet>
                <title>Sign Up - Bistro Boss Resturant</title>
            </Helmet>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Sign Up now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" {...register("name", { required: true })} name="name" className="input input-bordered" />
                            {errors.name && <span className="text-red-600">This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" {...register("email", { required: true })} name="email" className="input input-bordered" />
                            {errors.email && <span className="text-red-600">This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>

                            <input type="password" placeholder="password" {...register("password", {
                                required: true,
                                maxLength: 20,
                                minLength: 6,
                                pattern: /(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z].*[a-z])/
                            })} name="password" className="input input-bordered" />

                            {/* Error handling */}
                            {errors.password?.type === "required" && <span className="text-red-600">This field is required</span>}
                            {errors.password?.type === "minLength" && <span className="text-red-600">Password must be at least 6 characters long</span>}
                            {errors.password?.type === "maxLength" && <span className="text-red-600">Password must be at most 20 characters long</span>}
                            {errors.password?.type === "pattern" && <span className="text-red-600">Password must contain two uppercase, two lowercase letter, one special character and a number.</span>}
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" value="Sign Up" className="btn btn-primary" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                Have an account? <Link to="/login" className="label-text link link-hover">Log In</Link>
                            </label>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;