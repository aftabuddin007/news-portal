import React from 'react';
import { Link } from 'react-router';

const Registration = () => {
    return (
        <div className='flex justify-center min-h-screen items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h2 className='text-center text-3xl font-bold'>Register Your Account</h2>
        <form >
            <fieldset className="fieldset">
                {/* name */}
        <label className="label">Name</label>
          <input type="text" className="input" 
          placeholder="name" />
          {/* photoURL */}
          <label className="label">Photo URL</label>
          <input type="email" className="input" 
          placeholder="Photo URL" />
                {/* email */}
          <label className="label">Email</label>
          <input type="email" className="input" 
          placeholder="Email" />
          {/* password */}
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <button className="btn btn-neutral mt-4">Register</button>
         <p className='font-semibold  pt-5'>Already Have an Account? <Link className='text-red-500 ' to='/auth/login'>Login</Link></p>

        </fieldset>
        </form>
      </div>
    </div>
        </div>
    );
};

export default Registration;