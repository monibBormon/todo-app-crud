

const useAuthentication = () => {

    // register user 
    const registerUser = (data,navigate) => {
        fetch('http://139.99.90.200/api/v1/CreateProfile',{
            method:"POST",
            headers:{
                'content-type':"application/json"
            },
            body:JSON.stringify(data)
        }).then(res=>res.json())
        .then(data=>{
            // console.log(data);
            navigate('/login')
            
        })
    }

    // login user
    const loginUser = (data,navigate) => {
        fetch('http://139.99.90.200/api/v1/UserLogin',{
            method:"POST",
            headers:{
                'content-type':"application/json"
            },
            body:JSON.stringify(data)
        }).then(res=>res.json())
        .then(data=>{
            localStorage.setItem('token',data.token)
            navigate('/')
            window.location.reload()    
        })


    }


    return {
        registerUser,
        loginUser
    }




}

export default useAuthentication;