import React from 'react'
import { useForm } from "react-hook-form"
import ReCAPTCHA from "react-google-recaptcha";

const Recaptach = () => {
    const { register, handleSubmit }  = useForm()
   
    const handleRegister = (data) => {
     console.log(data)
    }
    function onChange(value) {
        console.log("Captcha value:", value);
      }
  return (
    <form onSubmit={handleSubmit(handleRegister)}>
    <div className='form-group'>
    <label htmlFor='email'>Email</label>
    <input 
    {...register("email", {required: true})}
    placeholder="Email"
    className='form-control'/>
    </div>
    <ReCAPTCHA
    sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
    onChange={onChange}
 />
    <button type='submit'>Submit</button>
    </form>
  )
}

export default Recaptach
