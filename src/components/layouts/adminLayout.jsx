import {Outlet} from "react-router-dom";
import {NavLink} from "react-bootstrap";
import useAuthContext from "../../context/authContext.jsx";

export default function AdminLayout() {

    const {user, logout} = useAuthContext()

    const setActive = ({isActive}) => "nav-link " + (isActive ? "active" : "");

    return (
        <>
                <>
                    <nav className="navbar navbar-expand-lg bg-dark rounded navbar-dark sticky-top">
                        <div className="container-fluid">
                            <div className={"collapse navbar-collapse d-lg-flex"} id="navbarsExample11">
                                <a className="navbar-brand col-lg-3 me-0" href="#">
                                    Kotitonttu</a>

                                <ul className="navbar-nav col-lg-6 justify-content-lg-center">
                                    <li className="nav-item">
                                        <NavLink to="/" className={setActive}>Пользователи</NavLink>
                                    </li>
                                </ul>
                                {user &&
                                    <div className="d-lg-flex col-lg-3 justify-content-lg-end">
                                        <button onClick={logout} className="btn btn-primary">Выход</button>
                                    </div>}
                            </div>
                        </div>
                    </nav>
                    <Outlet/>
                </>
        </>
    );
}