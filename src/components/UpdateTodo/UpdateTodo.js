import React from 'react';
import { useForm } from 'react-hook-form';
import useUser from '../../hooks/useUser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpdateTodo = () => {
    const { register, handleSubmit, reset } = useForm();
    const {token,setLoading} = useUser()
    
    const onSubmit = data =>{
        data._id = localStorage.getItem("_id")
        console.log(data);
        fetch('http://139.99.90.200/api/v1/UpdateToDo',{
            method:"POST",
            headers:{
                'content-type':"application/json",
                "token-key":`${token}`
            },
            body:JSON.stringify(data)
        }).then(res=>res.json())
        .then(data=>{
            if(data.status === 'success'){
                setLoading(false)
                toast.success("Todo Update Success!")
                setTimeout(() =>window.location.reload(false) , 3000);
            }else{
                setLoading(true)
            }
            reset()
            localStorage.removeItem("_id")
        })
    }
    return (
        <>
        <div className="demo-modal">
            <input type="checkbox" id="my-modal-2" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-2" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input className='w-3/4 border-2 mb-2 h-10 pl-3 focus:outline-none' placeholder='Enter To do' {...register("TodoSubject", { required: true })} /> <br/>
                        <textarea className='h-20 pl-3 pt-2 rounded focus:outline-none border-2 w-3/4 mb-3' placeholder='Enter description' {...register("TodoDescription")}></textarea> <br/>
                        {/* errors will return when field validation fails  */}
                        {/* {errors.exampleRequired && <span>This field is required</span>} */}
                        
                        <input className='bg-blue-500 text-white px-5 py-1 rounded-sm cursor-pointer' type="submit" value={'Update Todo'} />
                    </form>
                </div>
            </div>  
        </div>
        <ToastContainer/>
        </>
    );
};

export default UpdateTodo;