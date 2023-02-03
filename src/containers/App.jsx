import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoEncontrado from "../pages/NoEncotrado";
import Registro from "../pages/Registro";
import Login from "../pages/Login";
import Autobus from "../pages/RegistroAutobus";
function App() {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path="/" element = {<Login/>} />
                <Route path="/login" element = {<Login/>} />
                <Route path="/registro" element = {<Registro/>} />
                <Route path="/autobusregistro" element = {<Autobus/>} />
                <Route path="/*" element = {<NoEncontrado/>} />
            </Routes>
        </BrowserRouter>
     );
}

export default App;