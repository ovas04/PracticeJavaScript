const ingresos =  [
    new Ingreso("Salario",8000),
    new Ingreso("Bono", 2000),
    new Ingreso("Extra", 1000),

];

const egresos =  [
    new Egreso("Estudios",4000),
    new Egreso("Ropa", 400)
];


let cargarApp = () => {

    cargarCabecero();

    cargarIngresos();

    cargarEgresos();


}


function cargarCabecero(){

    const _totalIngreso = totalIngreso();

    const _totalEngreso = totalEngreso();

    const _porcentaje = parseFloat(_totalEngreso/_totalIngreso);

    document.getElementById("presupuesto").innerHTML = formatoMoneda(_totalIngreso - _totalEngreso);

    document.getElementById("ingresos").innerHTML = formatoMoneda(_totalIngreso);

    document.getElementById("egresos").innerHTML = formatoMoneda(_totalEngreso);

    document.getElementById("porcentaje").innerHTML = formatoPorcentaje(_porcentaje);


}


let totalIngreso = () => {

    let suma = 0;

    for(let ingreso of ingresos){

        suma += ingreso.getValor;

    }

    return suma;

}

let totalEngreso = () => {

    let suma = 0;

    for(let egreso of egresos){

        suma += egreso.getValor;

    }

    return suma;

}


const formatoMoneda = (valor) => {

    return valor.toLocaleString('en-US',{style:'currency',currency:'USD',minimumFractionDigits:2});

}

const formatoPorcentaje = (valor) => {

    return valor.toLocaleString('en-US',{style:'percent',minimumFractionDigits:1});

}

const cargarIngresos = () => {

    let ingresosHTML = '';  

    for(let ingreso of ingresos){

        ingresosHTML += crearIngresoHTML(ingreso);

    }

    document.getElementById("lista-ingresos").innerHTML=ingresosHTML;

}

const crearIngresoHTML = (ingreso) => {

    let ingresoHTML = `<div class="elemento limpiarEstilos">
                    <div class="elemento_descripcion">${ingreso.getDescripcion}</div>
                    <div class="derecha limpiarEstilos">
                        <div class="elemento_valor">+ ${formatoMoneda(ingreso.getValor)}</div>
                        <div class="elemento_eliminar">
                            <button class="elemento_eliminar--btn">
                                <ion-icon name="close-circle-outline"
                                    onclick="eliminarIngreso(${ingreso.idIngreso})"></ion-icon>
                            </button>
                        </div>
                    </div>
                </div>`;

    return ingresoHTML;
}

const eliminarIngreso = (idIngreso) => {

    let indiceEliminar = ingresos.findIndex(ingreso => ingreso.getId == idIngreso);

    ingresos.splice(indiceEliminar, 1);

    cargarCabecero();

    cargarIngresos()


}


const cargarEgresos = () => {

    let egresosHTML = '';  

    for(let egreso of egresos){
        
        egresosHTML += crearEgresoHTML(egreso);
        
    }

    document.getElementById("lista-egresos").innerHTML=egresosHTML;

}

const crearEgresoHTML = (egreso) => {


    porcentaje = egreso.getValor/totalIngreso();

    let egresosHTML = `<div class="elemento limpiarEstilos">
                <div class="elemento_descripcion">${egreso.getDescripcion}</div>
                <div class="derecha limpiarEstilos">
                    <div class="elemento_valor">-${formatoMoneda(egreso.getValor)}</div>
                    <div class="elemento_porcentaje">${formatoPorcentaje(porcentaje)}</div>
                    <div class="elemento_eliminar">
                        <button class="elemento_eliminar--btn">
                            <ion-icon name="close-circle-outline"
                             onclick="eliminarEgreso(${egreso.idEgreso})"></ion-icon>
                        </button>
                    </div>
                </div>
            </div>`;

    return egresosHTML;
}


const eliminarEgreso = (idEgreso) => {

    let indiceEliminar = egresos.findIndex(egreso => egreso.getId == idEgreso);

    egresos.splice(indiceEliminar, 1);

    cargarCabecero();

    cargarEgresos();


}

let agregarDato = () => {

   let forma = document.forms['forma'];

    let tipo = forma["tipo"];
     
    let descripcion = forma['descripcion'];

    let valor = forma['valor'];

    if(descripcion.value !== '' && valor.value !== ''){

        if(tipo.value === 'ingreso')
            
            ingresos.push(new Ingreso(descripcion.value, +valor.value));

        else

            egresos.push(new Egreso(descripcion.value, +valor.value));


    }
    else {

        alert("CAMPO VACIO");

    }

    cargarCabecero();

    cargarIngresos();

    cargarEgresos();
    
    /* OTRA FORMA
   let forma =  document.getElementById("forma");

    console.log(forma);

    let valor = forma["valor"];

    let descripcion = forma["descripcion"];

    let tipo = forma["tipo"];

    console.log(descripcion.value);

    console.log(tipo.value);
    
    console.log(parseInt(valor.value));
    
    if(tipo.value == "ingreso") ingresos.push(new Ingreso(descripcion.value,valor.value));
    
    else egresos.push(new Egreso(descripcion.value, valor.value));*/



}