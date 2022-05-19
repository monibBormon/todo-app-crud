import React from 'react';
import {FaEdit, FaTrashAlt} from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useUser from '../../hooks/useUser';
import UpdateTodo from '../UpdateTodo/UpdateTodo';

const SingleTodo = ({todo}) => {
    const {token,setLoading} = useUser()
    const handleId=()=>{
        localStorage.setItem('_id',todo._id)
    }

    const handleUpdateStatus=(value)=>{
        localStorage.setItem('status',value)
        const data ={
            TodoStatus:localStorage.getItem('status') ,
            _id:todo._id

        }
        console.log(data);
        fetch('http://139.99.90.200/api/v1/UpdateStatusToDo',{
            method:"POST",
            headers:{
                'content-type':"application/json",
                "token-key":`${token}`
            },
            body:JSON.stringify(data)
        }).then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.status === 'success'){
                setLoading(false)
                toast.success("Todo Status Updated!")
                setTimeout(() =>window.location.reload(false) , 3000);
            }else{
                setLoading(true)
            }
            localStorage.removeItem("status")
            
        })
    }

    const handleDeleteTodo=(id)=>{
        const body={
            _id:id
        }
        fetch(`http://139.99.90.200/api/v1/RemoveToDo`,{
            method:"POST",
            headers:{
                'content-type':"application/json",
                "token-key":`${token}`
            },
            body:JSON.stringify(body)
        }).then(res=>res.json())
        .then(data=>{
            if(data.status === 'success'){
                setLoading(false)
                toast.success('Todo Delete Success.')
                setTimeout(() =>window.location.reload(false) , 3000);
            }else{
                setLoading(true)
            }
        })

    }


    return (
        <>
            <div className="todo-list shadow-lg p-5">
                <div className='flex justify-end'>
                    <label onClick={handleId} htmlFor="my-modal-2">
                        <FaEdit className='mr-2 text-blue-500 cursor-pointer'/>
                    </label>
                    <FaTrashAlt onClick={()=>handleDeleteTodo(todo._id)} className='text-red-500 cursor-pointer'/>
                </div>
                <h3 className='text-2xl'>{todo.TodoSubject}</h3>
                <p>{todo.TodoDescription}</p>
                <div className='flex justify-between'>
                    <p >Status: <span className='bg-blue-300 inline-block font-semibold text-sm rounded-lg px-1'>{todo.TodoStatus}</span></p>
                    <select onChange={(e)=>handleUpdateStatus(e.target.value)} className="select select-bordered select-xs max-w-xs">
                        <option disabled selected value='Change Status'>Change Status</option>
                        <option value='New'>New</option>
                        <option value='Complete'>Complete</option>
                    </select>
                </div>
                <UpdateTodo />
                <ToastContainer/>
            </div>
            {/* <div className="demo-modal">
                <input type="checkbox" id="my-modal-2" class="modal-toggle" />
                <div class="modal">
                    <div class="modal-box relative">
                        <label htmlFor="my-modal-2" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <UpdateTodo/>
                    </div>
                </div>  
            </div> */}
            
        </>
    );
};

export default SingleTodo;