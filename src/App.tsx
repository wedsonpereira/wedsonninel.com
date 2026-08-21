import {Routes,Route} from "react-router-dom";
import Home from "./Pages/Home/Home.tsx";
// import Login from "./Pages/Login/Login.tsx";
import Admin from "./Pages/Admin/Admin.tsx";
import Login from "./Pages/Login/Login.tsx";


function App() {

    return (
    <>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/services"} element={<div>Hello</div>}/>
                <Route path={"/login"} element={<Login/>}/>
                <Route path={"/dashboard"} element={<Admin/>}/>
                <Route path={"*"} element={<div>Not Found</div>}/>
            </Routes>
    </>
  )
}

export default App
