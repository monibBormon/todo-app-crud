import{ useEffect, useState } from 'react';

const useUser = () => {
    const [user,setUser] = useState({})
    const [loading,setLoading] = useState(true)
    const [isDelete,setIsDelete] = useState(null)
    const token = localStorage.getItem('token')

    useEffect(()=>{
        fetch('http://139.99.90.200/api/v1/SelectProfile',{
            headers:{
               "token-key":`${token}`
            }
        }).then(res=>res.json())
        .then(data=>{
            if(data.status === 'success'){
                setLoading(false)
                setUser(data.data[0])
            }else{
                // setIsDelete(false)
                // setLoading(true)
            }
        })
    },[token])


    return {
        user,
        token,
        loading,
        setLoading,
        isDelete,
        setIsDelete
    }
};

export default useUser;