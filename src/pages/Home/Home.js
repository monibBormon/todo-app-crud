import React from 'react';
import AddTodoForm from '../../components/AddTodoModal/AddTodoForm';
import Filter from '../../components/Filter/Filter';
import ToDoList from '../../components/ToDoList/ToDoList';

const Home = () => {
    return (
        <div>
            <div className="container mx-auto">
                <div className="flex justify-between mt-10">
                    <Filter/>
                    <button className='text-xl border-2 bg-blue-500 text-white rounded-md font-semibold px-5 py-2 cursor-pointer'>
                        <label htmlFor="my-modal-1" className='cursor-pointer inline-block'>Add Todo</label>
                    </button>
                </div>
                <ToDoList/>
            </div>
            <div className="demo-modal">
                <input type="checkbox" id="my-modal-1" className="modal-toggle" />
                <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-1" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <AddTodoForm />
                </div>
            </div>  
            </div>
        </div>
    );
};

export default Home;