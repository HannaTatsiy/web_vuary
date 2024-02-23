import {Outlet} from "react-router-dom";
import LoginModalForm from "../login/loginModalForm.jsx";
import {useState} from "react";

export default function GuestLayout() {

    // состояние отображение модального окна
    let [formModalShow, setFormModalShow] = useState(false);

    const myOnClick = (e) => {
        e.preventDefault()
        e.stopPropagation()
        setFormModalShow(true);
    }

    return (
        <>
            <nav>
                <div className="navbar navbar-expand-lg pt-3 background-green">
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse justify-content-end"
                             id="navbarSupportedContent">
                            <ul id="nav-length"
                                className="navbar-nav justify-content-between border-top border-2 text-center">
                                <li className="nav-item">
                                    <a href="#" className="nav-link border-hover py-3 text-white">Главная</a>
                                </li>

                                <li className="nav-item">
                                    <a href="#" className="nav-link border-hover py-3 text-white">Продукция</a>
                                </li>

                                <li className="nav-item">
                                    <a href="#" className="nav-link border-hover py-3 text-white">Сервисные
                                        центры</a>
                                </li>

                                <li className="nav-item">
                                    <a href="#" className="nav-link border-hover py-3 text-white">Контакты</a>
                                </li>

                                <li className="nav-item">
                                    <a href="#" className="nav-link border-hover py-3 text-white">О нас</a>
                                </li>

                                <li className="nav-item" onClick={(e) => myOnClick(e)}>
                                    <a href="#" id="sign-in" className="nav-link my-2 px-4 text-white">
                                        <img className="me-3 mb-1" src="/public/user-circle-svgrepo-com.svg"
                                             alt="person-circle icon"/>
                                        Войти
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

            <LoginModalForm
                show={formModalShow}
                onHide={() => setFormModalShow(false)}/>
            <Outlet/>
        </>
    );
}