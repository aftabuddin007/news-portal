import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../AuthProvider';

const Login = () => {
  const [error,setError]=useState('')
  const location = useLocation();
  const navigate = useNavigate()
  console.log(location)
  const {signIn} = use(AuthContext)
  const handleLogin=(e)=>{
    e.preventDefault()
    const form = e.target;
    const email = form.email.value
    const password = form.password.value
    console.log({email,password})
    signIn(email,password)
    .then(res=>{
      const user = res.user;
      console.log(user)
      navigate(`${location.state?location.state:'/'}`)
    })
    .catch(err=>{
       const errorCode = err.code;
    const errorMessage = err.message;
    // alert(errorCode,errorMessage)
    setError(errorCode)
    })
  }
    return (
        <div className='flex justify-center min-h-screen items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h2 className='text-center text-3xl font-bold'>Login Your Account</h2>
        <form onSubmit={handleLogin}>
            <fieldset className="fieldset">
          {/* email  */}
          <label className="label">Email</label>
          <input name='email' type="email" className="input" placeholder="Email" required />
          <label className="label">Password</label>
          <input name='password' type="password" className="input" placeholder="Password" required />
          <div><a className="link link-hover">Forgot password?</a></div>

          {error && <p className='text-red-400'>{error}</p>}

          <button type='submit' className="btn btn-neutral mt-4">Login</button>
         <p className='font-semibold  pt-5'>Don't Have an Account? <Link className='text-red-500 ' to='/auth/registration'>Register</Link></p>

        </fieldset>
        </form>
      </div>
    </div>
        </div>
    );
};

export default Login;