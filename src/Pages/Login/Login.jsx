import { Link, useLocation, useNavigate } from 'react-router-dom';
import bg from '../../assets/img/bg/login-bg.jpg'
import { FcGoogle } from 'react-icons/fc'
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';


const Login = () => {
    const { handleLogin,signInGoogle} = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const handleSignIn = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        handleLogin(email, password)
            .then((result) => {
                const user = result.user
                if (user) {
                    toast.success("successFully Login")
                    navigate(location?.state ? location.state : '/')
                }
            }).catch((error) => {
                toast.error("Your Email or password doesn't match")
            })
    }

    const handleGoogleSIgnIn=()=>{
        signInGoogle()
        .then((result)=>{
            if(result.user){
                toast.success("SuccessFully SignIn")
                navigate(location?.state ? location.state : '/')
            }
        }).catch((err)=>{
            toast.error(err.message)
        })
    }
    return (
        <div className='bg-cover min-h-[80vh]'  style={{ backgroundImage: `url(${bg})` }}>
            <div className='mx-auto bg-[#0505059d] min-h-[80vh]' >
                <div className="py-10">
                    <div className="hero-content flex-col mx-auto">
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-xl shadow-[#383838] bg-[#ffffff9d] ">
                            <div className='rounded-2xl'>
                                <div className="text-center lg:text-left rounded-t-lg  py-5 bg-[#383838]">
                                    <h1 className="text-5xl font-bold text-center text-white">Sign In</h1>
                                </div>
                                <form className="card-body" onSubmit={handleSignIn}>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-bold">Email</span>
                                        </label>
                                        <input type="email" placeholder="email" className="input input-bordered" name='email' required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-bold">Password</span>
                                        </label>
                                        <input type="password" placeholder="password" className="input input-bordered " name='password' required />

                                    </div>
                                    <div className="form-control mt-2">
                                        <button className="text-white py-3 rounded-lg text-lg font-bold bg-[#383838]" type='submit'>Sign In</button>
                                    </div>
                                </form>
                                <div className='flex justify-center items-center gap-1 -mt-6'>
                                    <div className='h-[1px] w-[50px] bg-[#383838]'></div>
                                    <div>or</div>
                                    <div className='h-[1px] w-[50px] bg-[#383838]'></div>
                                </div>
                                <div className='mb-3 mt-2' onClick={handleGoogleSIgnIn} >
                                    <div className='flex justify-center items-center border mx-9 rounded-lg py-2 gap-2 ' >
                                        <FcGoogle className='text-2xl'></FcGoogle>
                                        <p className='font-bold'>Sign In With Google</p>
                                    </div>
                                </div>
                                <div className='flex justify-center mb-5 gap-2'>
                                    <p>Don't Have An Account.?</p>
                                    <Link to={'/signUp'} className='text-[#383838] font-bold'>Sign Up</Link>
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

export default Login;