import React from 'react';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import useAuthentication from '../../../hooks/useAuthentication';

const Registration = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const {registerUser} =  useAuthentication()
    const navigate = useNavigate()
    const onSubmit = data =>{
        // console.log(data)
        registerUser(data, navigate)
        toast.success("Registration Successfull.")
        reset()
    }


    return (
        <div className='container mx-auto'>
            <div className="grid grid-cols-1 items-center md:grid-cols-2 gap-4">
                <div className="login-img mt-5">
                    <img src="https://img.freepik.com/free-vector/user-verification-unauthorized-access-prevention-private-account-authentication-cyber-security-people-entering-login-password-safety-measures_335657-3530.jpg?t=st=1652877221~exp=1652877821~hmac=c1b67d5ab2fbbf7ac5b1fb0f01bd550406a6dfb1ebb5b0b49302461c7c459be9&w=740" alt="login" />
                </div>
                <div className="reg-form">
                 <h2 className='text-4xl mb-5'>Please Register</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input className='border-2 w-full mb-3 h-10 pl-3' placeholder='Enter First Name' {...register("FirstName")} /> <br/>
                        <input className='border-2 w-full mb-3 h-10 pl-3' placeholder='Enter Last Name' {...register("LastName")} /><br/>
                        <input className='border-2 w-full mb-3 h-10 pl-3' placeholder='Enter Email' type='email' {...register("EmailAddress")} /><br/>
                        <input className='border-2 w-full mb-3 h-10 pl-3' placeholder='Enter Phone' {...register("MobileNumber")} /><br/>
                        <input className='border-2 w-full mb-3 h-10 pl-3' placeholder='Enter City' {...register("City")} /><br/>
                        <input className='border-2 w-full mb-3 h-10 pl-3' placeholder='Enter User Name' {...register("UserName")} /><br/>
                        <input className='border-2 w-full mb-3 h-10 pl-3' placeholder='Enter Password' {...register("Password")} /><br/><br/>
                        {/* errors will return when field validation fails  */}
                        {errors.exampleRequired && <span>This field is required</span>}
                        
                        <input className='bg-blue-500 text-white px-8 py-2 font-semibold rounded-md'  type="submit" value={'Sign Up'} />
                    </form>
                    <p className='mt-5'>Already Have an Account? <Link className='underline font-medium' to={'/login'}>Login Here.</Link></p>
                </div>
            </div>
            <ToastContainer/>
        </div>
    );
};

export default Registration;