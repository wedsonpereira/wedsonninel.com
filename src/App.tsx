import {BrowserRouter, Routes,Route} from "react-router-dom";
import Home from "./Pages/Home.tsx";
import NavBar from "./Components/NavBar.tsx";


function App() {

  return (
    <>
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/services"} element={<div>Hello</div>}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
