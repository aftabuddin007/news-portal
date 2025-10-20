import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import userImg from '../assets/user.png'
import { AuthContext } from '../AuthProvider';
const Navbar = () => {
    const {user,logOut}=use(AuthContext)
    const handleLogOut=()=>{
        // console.log('logout successful')
        logOut()
        .then(()=>{
           alert('logout successful')
        })
        .catch(err=>{
            console.log(err)
        })
    }



    return (
        <div>
            <div className="flex justify-between text-accent items-center">
                <div className="">{user && user.email}</div>
            <div className="nav flex gap-5 ">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/career'>Career</NavLink>
            </div>
            <div className="login-btn flex gap-5">
                <img src={userImg} alt="" />
                {
                    user?(<Link onClick={handleLogOut} className="btn btn-primary px-10">LogOut</Link>):
(<Link to='/auth/login' className="btn btn-primary px-10">Login</Link>
)                }
                
            </div></div>
        </div>
    );
};

export default Navbar;