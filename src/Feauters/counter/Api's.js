const initialState = {
    users : []
}
export default function stateReducer (state = initialState, action){
    switch(action.type){
        case "loginData":{
            return {...state, loginRes : action.payload};
        }
        case 'users':{
            return {...state, users : action.payload};
        }
        default :
        return state;
    }
}
export const saveLoginData = (data) => async (dispatch, getState) =>{
  dispatch({type : "loginData", payload : data.data})
}