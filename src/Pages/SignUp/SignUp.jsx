import { Link } from 'react-router-dom';
import bg from '../../assets/img/bg/login-bg.jpg'
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import { updateProfile } from 'firebase/auth';
import auth from '../../fireBase/fireBase.config';

const SignUp = () => {
    const { handleRegister } = useContext(AuthContext)

    const handleSignUp = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoUrl = form.photoUrl.value;
        const password = form.password.value;

        console.log(name, email, photoUrl, password)
        const passUpperCase = /[A-Z]/;
        const passSpecial = /[!@#\$%\^&\*_]/;
        // const pass6Char=/^.{7,}$/;

        // if (pass6Char) {
        if (passUpperCase.test(password)) {
            if (passSpecial.test(password)) {

        handleRegister(email, password)
            .then((result) => {
                const user = result.user
                updateProfile(auth.currentUser, {
                    displayName: name, photoURL: photoUrl
                }).then(() => {

                    if (user) {
                        toast.success("SuccessFully you SignUp")
                        form.reset()
                    }
                }).catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    toast.error(errorMessage)
                });

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                toast.error(errorMessage)
            });
            
        } else {
            toast.error('Your password must contain at least special char from -[ ! @ # $ % ^ & * _ ]')

        }
    } else {
        toast.error('Your password must contain at least one upper case letter.')
    }
    }

    return (
        <div style={{ backgroundImage: `url(${bg})` }} className='bg-cover min-h-[100vh]'>
            <div className='mx-auto bg-[#05050596] min-h-[100vh]' >
                <div className="mx-2 py-10">
                    <div className="hero-content flex-col mx-auto ">
                        <div className="card flex-shrink-0 w-[95%] md:w-2/4 lg:w-2/5 shadow-2xl bg-[#ffffffa8] ">
                            <div className='rounded-2xl'>
                                <div className="text-center lg:text-left rounded-t-lg  py-5 bg-[#383838]">
                                    <h1 className="text-5xl font-bold text-center text-white">Sign Up</h1>
                                </div>
                                <form className="card-body" onSubmit={handleSignUp}>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-bold">Name</span>
                                        </label>
                                        <input type="text" placeholder="name" className="input input-bordered" name='name' required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-bold">Email</span>
                                        </label>
                                        <input type="email" placeholder="email" className="input input-bordered" name='email' required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-bold">Photo Url</span>
                                        </label>
                                        <input type="text" placeholder="Photo Url" className="input input-bordered" name='photoUrl' required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-bold">Password</span>
                                        </label>
                                        <input type="password" placeholder="password" className="input input-bordered " name='password' required />

                                    </div>
                                    <div className="form-control mt-2">
                                        <button className="text-white py-3 rounded-lg text-lg font-bold bg-[#383838]" type='submit'>Sign Up</button>
                                    </div>
                                </form>
                                <div className='flex justify-center items-center gap-1 -mt-6'>
                                    <div className='h-[1px] w-[50px] bg-[#383838]'></div>
                                    <div>or</div>
                                    <div className='h-[1px] w-[50px] bg-[#383838]'></div>
                                </div>
                                <div className='flex justify-center mb-5 gap-2 mt-1'>
                                    <p>Already Have An Account.?</p>
                                    <Link to={'/login'} className='text-[#383838] font-bold'>Sign In</Link>
                                </div>
                                <ToastContainer></ToastContainer>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;