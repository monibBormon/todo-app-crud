import React from 'react';
import useTodos from '../../hooks/useTodos';
import useUser from '../../hooks/useUser';

const Filter = () => {
    const {token,setLoading} = useUser()
    const {todos,setTodos} = useTodos()

    const filterByStatus=(status)=>{
        const data = {"TodoStatus":status}
        
        fetch(`http://139.99.90.200/api/v1/SelectToDoByStatus`,{
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
                setTodos(data.data)
                console.log(data.data);
            }else{
                // setLoading(false)
            }
        })
    }

    return (
        <div className='flex'>
            <div className="date mr-5">
                <p className='font-semibold'>Filter Date</p>
                <input type="date" />
            </div>
            <div className="status">
                <p className='font-semibold'>Filter Status</p>
                <select onChange={(e)=>filterByStatus(e.target.value)} className="select select-bordered select-xs max-w-xs">
                    <option disabled selected value='Change Status'>Change Status</option>
                    <option value='New'>New</option>
                    <option value='Complete'>Complete</option>
                </select>
            </div>
        </div>
    );
};

export default Filter;