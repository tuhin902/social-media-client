import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../Context/AuthProvider/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut();
    }

    const menuItem = <React.Fragment>

        {
            user ?
                <>
                    <li><Link to="/media">Media</Link></li>
                    <li><Link to="/message">Message</Link></li>
                    <li> <Link to="/about">About</Link></li>
                    <button className='btn ' onClick={handleLogOut}>Sign Out</button>
                </>
                :
                <>
                    <li><Link to='/login'>Log in</Link></li>
                    <li><Link to='/signup'>Sign Up</Link></li>
                </>
        }
    </React.Fragment>

    return (
        <div className="navbar">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItem}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">My Media</Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menuItem}
                </ul>
            </div>
            {/* <div className="navbar-end">
                <Link className="btn">Get started</Link>
            </div> */}
        </div>
    );
};

export default Navbar;