import UsersList from "../components/users/usersList.jsx";

export default function ForVladPage(){

    return (
        <>
            <div className="container mt-5">
                <div className="my-3 p-3 bg-body rounded shadow-sm min-height-container">
                    <UsersList/>
                </div>
            </div>
        </>
    )

}