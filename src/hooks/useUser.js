import { useState,useContext, useCallback } from 'react';
import Context from '../context/UserContext'
import loginService from '../service/loginService'

const useUser = () =>{
    const [jwt,setJWT] = useContext(Context);
    const [state,setState] = useState({loading: false,error:false})

    const login = useCallback(({username,password})=>{
        setState({loading:true,error:false})
        loginService({username,password})
            .then(jwt =>{
                setJWT(jwt)
                window.sessionStorage.getItem('jwt',jwt)
                setState({loading:false,error:false})
            })
            .catch(err=>{
                window.sessionStorage.removeItem('jwt')
                setState({loading:false,error:true})
                console.error(err)
            })
    },[setJWT])

    const logout = useCallback(()=>{
        window.sessionStorage.getItem('jwt')
        setJWT(null)
    },[setJWT])

    return(
        {
            isLogged: Boolean(jwt),
            login,
            logout,
            isLogginLoading: state.loading,
            HasLoginError: state.error
        }
    )
}

export default useUser;