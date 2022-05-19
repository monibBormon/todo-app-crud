import React from 'react';

const UpdateModal = ({onSubmit,handleSubmit,register}) => {
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input className='w-3/4 border-2 mb-2 h-10 pl-3 focus:outline-none' placeholder='Enter First Name' {...register("FirstName", { required: true })} /> <br/>
            <input className='w-3/4 border-2 mb-2 h-10 pl-3 focus:outline-none' placeholder='Enter Last Name' {...register("LastName", { required: true })} /><br/>
            <input className='w-3/4 border-2 mb-2 h-10 pl-3 focus:outline-none' placeholder='Enter Email' type='email' {...register("EmailAddress", { required: true })} /><br/>
            <input className='w-3/4 border-2 mb-2 h-10 pl-3 focus:outline-none' placeholder='Enter Phone' {...register("MobileNumber", { required: true })} /><br/>
            <input className='w-3/4 border-2 mb-2 h-10 pl-3 focus:outline-none' placeholder='Enter City' {...register("City", { required: true })} /><br/>
            {/* errors will return when field validation fails  */}
            {/* {errors.exampleRequired && <span>This field is required</span>} */}
            
            <button className='bg-blue-500 text-white px-5 py-1 rounded-sm cursor-pointer' type='submit'>Update Profile</button>
        </form>
    );
};

export default UpdateModal;