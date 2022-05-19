import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import {FaSignInAlt} from 'react-icons/fa'
import UpdateModal from '../../../components/UpdateModal/UpdateModal';
import useUser from '../../../hooks/useUser';

const Header = () => {
    const {user,token,setLoading} = useUser()
    const { register, handleSubmit, reset } = useForm();
    const navigate = useNavigate()
    const handleSignOut =()=>{
        localStorage.removeItem('token')
        navigate('/login')
        window.location.reload()
    }
    const onSubmit = data =>{
        fetch('http://139.99.90.200/api/v1/UpdateProfile',{
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
                toast.success('Profile Updated.')
            }else{
                // setLoading(false)
            }
            reset()
            // console.log(data)
        })
    }



    return (
        <div className='shadow'>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl"><Link to={'/'}>ToDo App</Link></a>
                </div>
                <div className="flex-none gap-2">
                            {
                        user?.UserName ? <div>Welcome {user.UserName}</div> :
                        <div className='mr-10'>
                            <Link className='ml-5 text-lg font-medium' to={'/login'}><FaSignInAlt className='inline-block'/>  Login</Link>
                        </div>
                    }
                    {
                        user?.UserName && <div className="dropdown dropdown-end">
                        <label tabindex="0" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                            <img src="https://api.lorem.space/image/face?hash=33791" />
                            </div>
                        </label>
                        <ul tabindex="0" className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                            <span className="justify-between">
                                <label htmlFor="my-modal-3">Edit Profile</label>
                            </span>
                            </li>
                            <li onClick={handleSignOut}><a>Logout</a></li>
                        </ul>
                        </div>
                    }
                </div>
            </div>
            <div className="demo">
                <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <UpdateModal onSubmit={onSubmit} register={register} handleSubmit={handleSubmit} />
                </div>
                </div>
            </div>
        </div>
    );
};

export default Header;