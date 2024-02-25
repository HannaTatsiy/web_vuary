import {roleWorkoutBuilder} from "../../utils/utils.js";

export default function UsersTableData({user}){

    return (
        <>
            <tr>
                <td>{user?.lastname} {user?.firstname}</td>
                <td>{user?.email}</td>
                <td>{user?.phoneNumber}</td>
                <td>{roleWorkoutBuilder(user?.workerRole)}</td>
                <td>{new Date(user?.dateOfBirth).toLocaleDateString()}</td>
                <td>{(user?.activationCode) ? "Да" : "Нет"}</td>
                <td>{(user?.role === "ROLE_USER") ? "Пользователь" : "Администратор"}</td>
            </tr>
        </>
    )
}