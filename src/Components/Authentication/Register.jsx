import React, { useContext } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import './Register.css'
import { AuthContext } from './ContextApi/AuthProvider'

const Register = () => {

  const {createUser} = useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname||'/';

  // user create function 
  const userCreateHandler = event =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const user = {email,password,name}
    console.log(user)

    // firbase api call 
    createUser(email,password)
    .then((userCredential) =>{
      //signin
      const user = userCredential.user;
      //
      console.log(user)
      form.reset()
      navigate(navigate(from,{replace:true}))
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode,errorMessage)
      // ..
    });
          //  firbase working End
  

  }

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

      <form onSubmit={userCreateHandler} className="card-body ">
        <div className="form-control">
          <label className="label">
            <span className="label-text">User</span>
          </label>
          <input type="name" name='name' placeholder="User Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name='password' type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <input className="btn btn-error aab" type="submit" value="Sign-in"/>
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
