import axios from 'axios'
import {GET_ERRORS} from './types'
export const createWatch = (newWatch, history) => async dispath =>{
    await axios.post('http://localhost:8080/watch',newWatch)
        .then((res)=>{
            history.push('/dashboard')
            
        }).catch((err)=>{
           dispath({type:GET_ERRORS,payload:err.response.data})

        })
}
