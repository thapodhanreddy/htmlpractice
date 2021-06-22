const redux = require('redux');
const thunk = require('redux-thunk').default;
const axios = require('axios');
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;


const initialState = {
    loading:false,
    users:[],
    error:''
}
 
const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
const FETCH_USERS_SUCCESS ='FETCH_USERS_SUCCESS';
const FETCH_USERS_FAILURE ='FETCH_USERS_FAILURE';


const  request = ()=>{
    return {
        type:FETCH_USERS_REQUEST
    }

    }

const  success = (users)=>{
        return {
            type:FETCH_USERS_SUCCESS,
            payload:users
        }
    }
    const  failure = (error)=>{
        return {
            type:FETCH_USERS_FAILURE,
            payload:error
        }
    }



const reducer = (state=initialState,action)=>{
    switch(action.type){
        case FETCH_USERS_REQUEST:
             return {
            ...state,
            loading: true
        }
        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                loading:false,
                users:action.payload,
                error:''
            }
        case FETCH_USERS_FAILURE:
            return {
                ...state,
                loading:false,
                users:[],
                error:action.payload

            }
    }
}


const  fetchUsers = ()=>{
    return function(dispatch){
        dispatch(request());
        axios.get('https://jsonplaceholdr.typicode.com/users')
        .then(response =>{
            const users = response.data.map(user=>user.id);
            dispatch(success(users));
        }
            )
            .catch(error=>{
                dispatch(failure(error.message));
            })

    }

}


const store = createStore(reducer,applyMiddleware(thunk));
store.subscribe(()=>{console.log(store.getState())});
store.dispatch(fetchUsers());

            
