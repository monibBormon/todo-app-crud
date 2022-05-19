import { useEffect, useState } from 'react';
import useUser from './useUser';

const useTodos = () => {
    const [todos,setTodos] = useState([])
    const {token,setLoading } = useUser()
    useEffect(()=>{
        fetch('http://139.99.90.200/api/v1/SelectTodo',{
            headers:{
                "token-key":`${token}`
            }
        }).then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.status === 'success'){
                setLoading(false)
                setTodos(data.data)
            }else{
                // setLoading(false)
            }
        })
    },[token])

    
    return {
        setTodos,
        todos
    }
};

export default useTodos;