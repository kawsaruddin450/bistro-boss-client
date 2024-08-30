import { useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';

const Login = () => {
    const [disabled, setDisabled] = useState(true);
    const captchaRef = useRef(null);
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);
    }

    const handleValidateCaptcha = () => {
        const userCaptcha = captchaRef.current.value;
        if(validateCaptcha(userCaptcha) === true){
            setDisabled(false);
        }else{
            setDisabled(true);
        }
    }
    return (
        <div className="hero min-h-screen max-w-screen-lg mx-auto">
            <div className="hero-content flex-col md:flex-row">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <LoadCanvasTemplate />
                            </label>
                            <input ref={captchaRef} type="text" placeholder="Type the captcha" name="captcha" className="input input-bordered" required />
                            <button onClick={handleValidateCaptcha} className='btn btn-outline btn-xs mt-4'>Validate</button>
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" disabled={disabled} value="Login" className={`btn btn-primary`} />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;