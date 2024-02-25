// получение списка пользователей от сервера
import {GET_ALL_USERS} from "./action_const.jsx";
import UsersService from "../../services/usersService.jsx";

export const getAllUsers = () =>
    async (dispatch) => {
        try {
            const response = await UsersService.getAllUsers();
            dispatch({type: GET_ALL_USERS, payload: response.data});
        } catch (error){
            console.log(error)
        }
    };