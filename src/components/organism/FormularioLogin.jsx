import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../molecules/Input";
import Label from "../atoms/Label";
import mack from "../../assets/img/mack.jpeg"
function FormularioLogin() {
    const Formulario = useRef();
    const navigate = useNavigate();
    const Regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const endPoint ="http://34.225.239.102/api/iniciar"
    const handlerClick = (e) =>{
        e.preventDefault();
        const Registro = new FormData(Formulario.current);
        const options = {
            method:"POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "usuario": Registro.get("usuario"),
                "contrasenia": Registro.get("contra")
            })
        }
    
        fetch(endPoint, options) 
                        .then(response => response.json())
                        .then(data => {
                            if(data.status === true) {
                                   navigate("/autobusregistro"); 
                            }else{
                                alert("Error, " + data.message);
                            }
                            
                        })
    }
    const handlerClick2 = (e) =>{
        navigate("/registro");
    }
    return ( 
        <>
        <form action="" ref={Formulario} id="registro2">
        <img src={mack} alt="Imagen camion" id="mack"/>
            <h1>Login</h1>
            <Input tipo="text" id="text" nombre="usuario" textoLabel="Usuario: " />
            <Input tipo="password" id="text" nombre="contra" textoLabel="Contraseña: " />
            <button type="button" onClick={handlerClick}>Iniciar Sesion</button>
            <Label texto="¿No tienes cuenta?"/>
            <button type="button" onClick={handlerClick2}>Registrate Aqui</button>
        </form>
        </>
     );
}

export default FormularioLogin;