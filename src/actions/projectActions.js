import axios from 'axios'
import {GET_ERRORS, GET_WATCHES} from './types'
export const createWatch = (newWatch, history) => async dispath =>{
    await axios.post('http://localhost:8080/watch',newWatch)
        .then((res)=>{
            history.push('/dashboard')
            
        }).catch((err)=>{
           dispath({type:GET_ERRORS,payload:err.response.data})

        })
}

export const getWatches = () => async dispath =>{
    await axios.get('http://localhost:8080/watch')
        .then((res)=>{
           dispath({type:GET_WATCHES,payload:res.data})
            
        })
}

export const deleteWatch = (id) => async dispath =>{
    await axios.delete('http://localhost:8080/watch/${id}')
        .then((res)=>{
           dispath({type:DELETE_WATCH,payload:id})
            
        })
}


