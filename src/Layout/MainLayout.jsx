import { Outlet } from 'react-router-dom';
import Navbar from '../Component/Shared/Navbar';
import Footer from '../Component/Shared/Footer';
import { useState } from 'react';

const MainLayout = () => {
    // const [theme,setTheme]=useState(true);
    
    return (
        <div>
            
           <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;