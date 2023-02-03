import { useRef } from "react";
import Input from "../molecules/Input";
import Label from "../atoms/Label";
import { useNavigate } from "react-router-dom";
import mack from "../../assets/img/mack.jpeg"
function FormularioRegistro() {
    const FormularioRegistro = useRef();
    const navigate = useNavigate();
    const Regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const endPoint ='http://34.225.239.102/api/registrar/usuario';
    const handlerClick = (e) =>{
        e.preventDefault();
        const Registro = new FormData(FormularioRegistro.current);
        if(Regex.test(Registro.get("correo"))){
            console.log("Correo aceptado");
            const options = {
                method:"POST",
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "nombre":Registro.get("nombre"),
                    "usuario": Registro.get("usuario"),
                    "correo": Registro.get("correo"),
                    "contrasenia":Registro.get("contra")
                })
            }

            fetch(endPoint, options) 
            .then(response => response.json())
            .then(data => {
                console.log(data.status);
                alert(JSON.stringify(data))
                navigate("/autobusregistro")
            })
        }else{
            alert("Correo incorrecto");
        }
    
    
    }
    const handlerClickLogin = (e) =>{
        navigate("/login");
    }
    return ( 
        <form action="" ref={FormularioRegistro} id="registro">
            <img src={mack} alt="Imagen camion" id="mack"/>
            <h1>Registro</h1>
            <Input tipo="text" id="text"  nombre="nombre" textoLabel="Nombre: " />
            <Input tipo="email" id="email"  nombre="correo" textoLabel="E-mail: " />
            <Input tipo="text" id="text"  nombre="usuario" textoLabel="Usuario: " />
            <Input tipo="password" id="password"  nombre="contra" textoLabel="Contraseña " />
            <button type="button" onClick={handlerClick}>Registrate</button>
            <label htmlFor="" id="label2">¿Tienes una cuenta?</label>
            <button type="button" onClick={handlerClickLogin}>Iniciar Sesion</button>
        </form>
     );
}

export default FormularioRegistro;