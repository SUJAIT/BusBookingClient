import React from 'react'
import { Link } from 'react-router-dom'
import './Register.css'

const Login = () => {
  return (
    <div>
 
    <div className="w2 regParent">
    <div className='regLogo'>
          <img src="https://www.jatri.co/_nuxt/jatri-logo.19582a96.svg" alt="" />
   </div>
 <div className="hero-content flex-col lg:flex-row-reverse">
   <div className="text-center lg:text-left">
   </div>
   <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
    
<div>
  <p className='mt-4 text-2xl font-semibold'>Log in to Jatri</p>
</div>

     <form className="card-body ">
     
       <div className="form-control">
         <label className="label">
           <span className="label-text">Email</span>
         </label>
         <input type="email" placeholder="email" className="input input-bordered" required />
       </div>
       <div className="form-control">
         <label className="label">
           <span className="label-text">Password</span>
         </label>
         <input type="password" placeholder="password" className="input input-bordered" required />
         <label className="label">
           <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
         </label>
       </div>
       <div className="form-control mt-6">
         <button className="btn btn-error"><span className='font-bold text-white'>Login</span></button>
       </div>
    <span className='text-lg font-semibold'><span className='fontColor mr-2'>Create a new account?</span><Link className='text-sky-500' to={'/register'}>Register</Link></span>   
     </form>
   </div>
 </div>
</div>
   </div>
  )
}

export default Login
