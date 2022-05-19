import React from 'react';
import { useForm } from 'react-hook-form';
import useUser from '../../hooks/useUser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Navigate, useNavigate } from 'react-router-dom';

const AddTodoForm = () => {
    const { register, handleSubmit, reset} = useForm();
    const {setLoading,token,loading} = useUser()
    const Navigate = useNavigate()
    
    const onSubmit = data =>{
        // console.log(data);
        fetch('http://139.99.90.200/api/v1/CreateToDo',{
            method:"POST",
            headers:{
                'content-type':"application/json",
                "token-key":`${token}`
            },
            body:JSON.stringify(data)
        }).then(res=>res.json())
        .then(data=>{
            if(data.status === 'success'){
                Navigate('/')
                setLoading(false)
                toast.success("Todo Added Successfully")
                setTimeout(() =>window.location.reload(false) , 2000);
            }else{
                setLoading(true)
            }
            reset()
        })
    }

    if(loading === true){
        return <img className="mx-auto mt-32" src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921" alt="" />
      }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className='w-3/4 border-2 mb-2 h-10 pl-3 focus:outline-none' placeholder='Enter To do' {...register("TodoSubject", { required: true })} /> <br/>
                <textarea className='h-20 pl-3 pt-2 rounded focus:outline-none border-2 w-3/4 mb-3' placeholder='Enter description' {...register("TodoDescription")}></textarea> <br/>
                {/* errors will return when field validation fails  */}
                {/* {errors.exampleRequired && <span>This field is required</span>} */}
                
                <input className='bg-blue-500 text-white px-5 py-1 rounded-sm cursor-pointer' type="submit" value={'Add Todo'} />
            </form>
            <ToastContainer/>
        </>
    );
};

export default AddTodoForm;