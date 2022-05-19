import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useTodos from '../../hooks/useTodos';
import useUser from '../../hooks/useUser';
import SingleTodo from './SingleTodo';

const ToDoList = () => {
    const {todos} = useTodos()
    const {loading,token} = useUser()

    if(token){
        if(loading === true){
            return <img className="mx-auto mt-32" src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921" alt="" />
        }
    }
    

    return (
        <div className='mt-10'>
            {
                todos.length === 0 && <div>
                    <p className='text-center text-4xl mt-10'>Nothing to Do. <Link className='underline' to={'/login'}>Please Login</Link></p>
                </div>
            }
            <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
                {
                    todos?.length >= 0 && todos?.map((todo)=><SingleTodo key={todo._id} todo={todo} />)
                }
            </div>
        </div>
    );
};

export default ToDoList;