import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";


const Navbar = () => {
    const logo = '/vite.svg'
    const { user, handlesignOut } = useContext(AuthContext)
    const [open, setopen] = useState(false)
    const handleLogOut = () => {
        handlesignOut()
            .then(() => {
                toast.warning("SuccessFully Sign Out")
            })
            .catch((err) => {
                toast.error(err)
            })
    }
    const navItem = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/myCart'}>My Cart</NavLink></li>
        <li><NavLink to={'/addProduct'}>Add Product</NavLink></li>
        {
            user ?
                <div className="pl-2">
                    <div className='flex flex-col lg:justify-center lg:items-center px-5 lg:px-0'>
                        <abbr title="Click here to see profile">
                            <img src={user?.photoURL ? user.photoURL : ""} alt="img" className='w-10 h-10 border rounded-full'
                                onClick={() => setopen(!open)} />
                        </abbr>

                        {
                            open === true ?
                                <div className='lg:mt-40 text-white border border-[#FFFFF]
                                 bg-[#2b2b2b] p-4 mt-10 
                             rounded-md z-20 ml-8 lg:ml-0 lg:mr-40 absolute
                            text-center shadow-lg shadow-[#858585]'>
                                    <h1 className='' >{user?.displayName && user.displayName}</h1>
                                    <h1 className='lowercase' >{user?.email && user.email}</h1>
                                    <li onClick={handleLogOut} className="bg-[#2b3440] rounded-md 
                                    py-2 px-3 text-white mt-2
                                    ">LogOut</li>

                                </div>
                                :
                                <div className='hidden absolute font-medium'>
                                    <h1 className='' >{user?.displayName && user.displayName}</h1>
                                    <h1 className='' >{user?.email && user.email}</h1>
                                </div>
                        }
                    </div>
                </div>
                :
                <>
                    <li><NavLink to={'/login'}>Sign In</NavLink></li>
                    {/* <img src={userImg} alt="" className='w-10 h-10 rounded-full'/> */}

                </>
        }

    </>

    return (
        <div>
            <div className="bg-gradient-to-t from-[#383838] to-[#636262] text-white flex items-center justify-center">
                <div className="navbar mx-auto max-w-7xl">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#383838] rounded-box w-52">
                                {navItem}
                            </ul>
                        </div>
                        <div className="hidden lg:flex">
                            <Link to={'/'} className="">
                                <div className="flex justify-center items-center gap-2">
                                    <img src={logo} alt="" />
                                    <p className="font-semibold">
                                        ThunderShop
                                    </p>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="navbar-end hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {navItem}
                        </ul>
                    </div>
                </div>
                <div className="">
                <div className="navbar-end lg:hidden flex justify-end w-full pr-10">
                            <Link to={'/'} className="">
                                <div className="flex justify-center items-center gap-2">
                                    <img src={logo} alt="" />
                                    <p className="font-semibold">
                                        ThunderShop
                                    </p>
                                </div>
                            </Link>
                        </div>
                </div>
                <ToastContainer></ToastContainer>
            </div>
        </div>
    );
};

export default Navbar;