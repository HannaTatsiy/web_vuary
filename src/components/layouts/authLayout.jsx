import useAuthContext from "../../context/authContext.jsx";
import AdminLayout from "./adminLayout.jsx";
import GuestLayout from "./guestLayout.jsx";
import UserLayout from "./userLayout.jsx";

export default function AuthLayout() {

    const {user} = useAuthContext();

    return user ? (user.role === "ROLE_ADMIN" ? <AdminLayout/> : <UserLayout/>) : <GuestLayout/>

}