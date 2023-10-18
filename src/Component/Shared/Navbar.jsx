import { NavLink } from "react-router-dom";

const Navbar = () => {

    const navItem=<>
      <li><NavLink to={'/'}>Home</NavLink></li>
      <li><NavLink to={'/myCart'}>My Cart</NavLink></li>
      <li><NavLink to={'/addProduct'}>Add Product</NavLink></li>
      <li><NavLink to={'/login'}>Login</NavLink></li>
    </>

    return (
        <div>
            <div className="bg-gradient-to-t from-[#383838] to-[#636262] text-white">
               <div className="navbar mx-auto max-w-7xl">
               <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                           {navItem}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItem}
                    </ul>
                </div>
               </div>
                {/* <div className="navbar-end">
                    <a className="btn">Button</a>
                </div> */}
            </div>
        </div>
    );
};

export default Navbar;