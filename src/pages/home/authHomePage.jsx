import useAuthContext from "../../context/authContext.jsx";
import UserHomePage from "./userHomePage.jsx";
import GuestHomePage from "./guestHomePage.jsx";
import AdminHomePage from "./adminHomePage.jsx";

export default function AuthHomePage(){

    const {user} = useAuthContext();

    return user ? (user.role === "ROLE_ADMIN" ? <AdminHomePage/> : <UserHomePage/>) : <GuestHomePage/>
}