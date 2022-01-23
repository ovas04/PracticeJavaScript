console.log("VINCULADA")

const personas = [

    new Persona("Oscar", "Lobaton"),

    new Persona("Sthefanny", "Calderon")

];


let mostrarPersonas = () => {

    let texto = '';

    for (let per of personas){

        console.log(per.toString());
    
       texto += `<li>${per.toString()}</li>`;

       
    
    }

    document.getElementById("personas").innerHTML=texto;

}


let agregarPersona = () => {

    const forma = document.getElementById("forma");

    /*const _nombre = forma["nombre"].value;

    const _apellido = forma["apellido"].value;

    const per =  new Persona(_nombre,_apellido); */
    
    if(forma["nombre"].value != '' && forma["apellido"].value != '')

    personas.push(new Persona(forma["nombre"].value, forma["apellido"].value));

    else alert("NO HAY INFORMACION QUE AGREGAR");

  //  personas.push(per);

    mostrarPersonas();
}