import {GET_WATCHES} from '../actions/types'
const initialState = {
    watch:[]
}
export default function(state=initialState,action){
    switch(action.type){
        case GET_WATCHES:
            return {...state,watches:action.payload};
        case DELETE_WATCH:
            return {...state,watches:state.watches.filter(x=>x.id!==action.payload)}
        default:
            return state;
            
    }
}