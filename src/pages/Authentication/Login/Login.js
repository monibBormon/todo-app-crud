import React from 'react';
import { useForm } from 'react-hook-form';
import { Link,  useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import useAuthentication from '../../../hooks/useAuthentication';

const Login = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const {loginUser} =  useAuthentication()
    const navigate = useNavigate()
    const onSubmit = data =>{
        // console.log(data)
        loginUser(data, navigate)
        toast.success("Login Success.")
        reset()
    }
    return (
        <div>
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4">
                    <div className="login-img mt-5">
                        <img src="https://img.freepik.com/free-vector/user-verification-unauthorized-access-prevention-private-account-authentication-cyber-security-people-entering-login-password-safety-measures_335657-3530.jpg?t=st=1652877221~exp=1652877821~hmac=c1b67d5ab2fbbf7ac5b1fb0f01bd550406a6dfb1ebb5b0b49302461c7c459be9&w=740" alt="login" />
                    </div>
                    <div className="login-form">
                        <h2 className='text-4xl mb-5'>Please Login</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input className='border-2 w-full mb-3 h-12 pl-3' placeholder='Enter User Name' {...register("UserName")} /><br/>
                            <input className='border-2 w-full mb-3 h-12 pl-3' placeholder='Enter Password' {...register("Password")} /><br/><br/>
                            {/* errors will return when field validation fails  */}
                            {errors.exampleRequired && <span>This field is required</span>}
                            
                            <input className='bg-blue-500 text-white cursor-pointer px-8 py-2 font-semibold rounded-md' type="submit" value={'Sign In'} />
                        </form>
                        <p className='mt-5'>New User? <Link className='underline font-medium' to={'/registration'}>Create A free Account.</Link></p>
                    </div>
                </div>
            </div>
            <ToastContainer/>
        </div>
    );
};

export default Login;