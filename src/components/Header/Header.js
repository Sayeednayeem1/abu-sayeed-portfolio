import React from 'react';
import { Link } from 'react-router-dom';
import icon from '../../assets/Images/bruce-mars-FWVMhUa_wbY-unsplash.jpg'
const Header = () => {

    const navItems = <React.Fragment>
        <li className="text-xl font-bold text-slate-500"><Link to='/'>Home</Link></li>
        <li className="text-xl font-bold text-slate-500"><Link to='/projects'>Projects</Link></li>
        <li className="text-xl font-bold text-slate-500"><Link to='/contact'>Contact</Link></li>
        <li className="text-xl font-bold text-slate-500"><Link to='/skills'>Skills</Link></li>
        <li className="text-xl font-bold text-slate-500"><Link to='https://drive.google.com/file/d/16ekUWaFuC33fuG3-Xhk-Y2_zLr5vWGpl/view?usp=sharing' target="_blank">Resume</Link></li>
    </React.Fragment>

    return (
        <div className="navbar container mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <div className="avatar">
                    <div className="w-10 rounded-full">
                        <img src={icon} alt='icon' />
                    </div>
                </div>
                <a href='/' className="btn btn-ghost normal-case text-xl text-slate-500">SAYEED</a>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
        </div>
    );
};

export default Header;
