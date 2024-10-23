import React from 'react'
import { Link } from 'react-router-dom'
import './Register.css'

const Register = () => {
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
  <p className='mt-4 text-2xl font-semibold'>Register in to Jatri</p>
</div>

      <form className="card-body ">
        <div className="form-control">
          <label className="label">
            <span className="label-text">User</span>
          </label>
          <input type="email" placeholder="User Name" className="input input-bordered" required />
        </div>
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
          <Link className="btn btn-error"><span className='text-white font-bold'>Sign-in</span></Link>
        </div>
     <span className='text-lg font-semibold'><span className='fontColor mr-2'>Already have an account?</span><Link className='text-sky-500' to={'/login'}>Login</Link></span>   
      </form>
    </div>
  </div>
</div>
    </div>
  )
}

export default Register
