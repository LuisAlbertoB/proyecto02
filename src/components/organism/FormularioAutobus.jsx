import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../molecules/Input";
import Label from "../atoms/Label";
import mack from "../../assets/img/mack.jpeg"
function FormularioAutobus() {
    const Formulario = useRef();
    const navigate = useNavigate();
    const Regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const endPoint ='http://34.225.239.102/api/autobus/register';
    const handlerClick = (e) => { 
        e.preventDefault();
        const Registro = new FormData(Formulario.current);
        const options = {
            method:"POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "clave": Registro.get("clave"),
                "placa":  Registro.get("placa"),
                "numasientos": Registro.get("asiento"),
                "fecha": Registro.get("fecha"),
                "tipo": Registro.get("tipo"),
                "nombre": Registro.get("nombre"),
                "licencia": Registro.get("licencia")
            })
        }

        fetch(endPoint, options) 
        .then(response => response.json())
        .then(data => {
            console.log(data.status);
            alert(data.message);
            navigate("/autobusregistro")
        })
        
        
    }

    return ( 
        <>
        
         <form action="" ref={Formulario} id="formulario3">
         <img src={mack} alt="Imagen camion" id="mack2"/>
            <h1>Registro Autobuses</h1>
             <Input tipo="text" id="text" nombre="clave" textoLabel="Clave autobus: " />
             <Input tipo="text" id="text" nombre="placa" textoLabel="Placa autobus: " />
             <Input tipo="number" id="text" nombre="asiento" textoLabel="Número de asientos: " />
             <Input tipo="date" id="text" nombre="fecha" textoLabel="Fecha de alta: " />
             <div>
            <Label texto="Tipo: " />
            <select name="tipo" id="select">
                    <option value="Turismo">Turismo</option>
                    <option value="Lujo">Lujo</option>
                </select>
            </div>
             <Input tipo="text" id="text" nombre="nombre" textoLabel="Nombre del chofer: " />
             <Input tipo="text" id="text" nombre="licencia" textoLabel="Número de licencia: " />
            <button type="button" onClick={handlerClick}>Registrar</button>
        
        </form> 
        </>
     );
}

export default FormularioAutobus;