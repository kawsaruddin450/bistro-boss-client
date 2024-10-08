import { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../../providers/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                const saveUser = { name: user.displayName, email: user.email };
                fetch('http://localhost:8000/users/', {
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        // navigate(from, {replace: true});
                    })
                Swal.fire({
                    title: "Successful!",
                    text: "Logged in Successfully",
                    icon: "success"
                });
                navigate(from, { replace: true });
            }).catch(err => {
                console.log(err.message);
            })
    }
    return (
        <div className='text-center'>
            <div className="divider"></div>
            <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline btn-warning">
                <FaGoogle></FaGoogle>
            </button>
        </div>
    );
};

export default SocialLogin;