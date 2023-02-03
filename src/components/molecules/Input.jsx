import Label from "../atoms/Label";
function Input({
    tipo, id, valor, nombre, textoLabel
}) {
    return ( 
        <>
        <div>
        <Label identificador={id} texto={textoLabel}/>
        <input type={tipo} id={id} name={nombre} value={valor}></input>
        </div>
        </>
     );
}

export default Input;