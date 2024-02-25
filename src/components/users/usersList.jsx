import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAllUsers} from "../../actions/users/action.jsx";
import {Table} from "react-bootstrap";
import UsersTableData from "./usersTableData.jsx";

export default function UsersList() {

    const dispatch = useDispatch();

    // вызов ф-ии получения списка пользователей от сервера
    useEffect(() => {
        dispatch(getAllUsers());
    }, [dispatch])

    const users = useSelector(state => state.users.users);

    return (
        <>
            {(users.length !== 0) ? <>
                <Table>
                    <thead>
                    <tr>
                        <th>Фамилия имя</th>
                        <th>Эл. почта</th>
                        <th>Телефон</th>
                        <th>Должность</th>
                        <th>Дата рождения</th>
                        <th>Активирован</th>
                        <th>Права доступа</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.map((item) => (
                        <UsersTableData key={item.id} user={item}/>
                    ))}
                    </tbody>
                </Table>

            </> : <p className={"ms-1 text-dark"}>По вашему запросу ничего не найдено</p>}

        </>
    )
}