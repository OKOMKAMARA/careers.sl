import React from 'react'
import { useForm } from "react-hook-form"
import { FaEyeSlash } from "react-icons/fa"

const Login = () => {
  const { register, reset, handleSubmit, formState: {errors} } = useForm()
  const handleRegister = (data) => {
    console.log(data);
    reset()
  }
  return (
    <form onSubmit={handleSubmit(handleRegister)}>
      <h1>Login to Careers SL</h1>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
        {...register("email", {required: true})}
         placeholder="Email" 
        className="form-control" />
        {errors.email && <span>This field is required!</span>}
      </div>
      <div className="form-group">
        <label htmlFor="number">Phone Number</label>
        <input
        {...register("number", {required: true})}
         placeholder="Number" 
        className="form-control" />
        {errors.number && <span>This field is required!</span>}
      </div>
      <div  className="form-group">
        <label htmlFor="password">Password</label>
        <input
         {...register("password", {required: true, maxLength: 15},)} 
         placeholder="Password"
         className="form-control"
        />
         {errors.password && <span>This field is required</span>}
         </div>
       <div className='form-group'>
       <input 
         type='checkbox' 
         name='checkbox'
         classNamee='check'
         />
        <label htmlFor='check-box'>keep me signed in</label>
        <p>Forgetten password?</p>
        </div>
      <button type="submit">Login</button>
      <div>
      <h4>Don't you have an account? <b style={{color: "red"}}>Register</b></h4>
      </div>
    </form>
  )
}

export default Login
