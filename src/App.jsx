import './App.css'
import {Route, Routes} from "react-router-dom";
import AuthLayout from "./components/layouts/authLayout.jsx";
import AuthHomePage from "./pages/home/authHomePage.jsx";
import ForVladPage from "./pages/forVladPage.jsx";

function App() {

    /*
    *
    *         <Routes>
            <Route element={<AuthLayout/>}>
                <Route path={"/"} element={<AuthHomePage/>}/>
            </Route>
        </Routes>
    *
    * */

    return (
        <ForVladPage/>
    )
}

export default App
