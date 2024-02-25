import {GET_ALL_USERS} from "../actions/users/action_const.jsx";

const initialState = {
    users: [],
}

export default function usersReducer(state = initialState, action){
    switch (action.type){

        //список пользователей
        case GET_ALL_USERS:
            return {
                ...state,
                users: action.payload.users
        }

        default:
            return state;
    }
}