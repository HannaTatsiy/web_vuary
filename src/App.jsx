import './App.css'
import {Route, Routes} from "react-router-dom";
import AuthLayout from "./components/layouts/authLayout.jsx";
import AuthHomePage from "./pages/home/authHomePage.jsx";

function App() {

    return (
        <Routes>
            <Route element={<AuthLayout/>}>
                <Route path={"/"} element={<AuthHomePage/>}/>
            </Route>
        </Routes>
    )
}

export default App
