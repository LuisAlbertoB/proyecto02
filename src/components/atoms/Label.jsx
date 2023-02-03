function Label({identificador, texto}) {
    return (  
        <label htmlFor={identificador}>{texto}</label>
    );
}

export default Label;