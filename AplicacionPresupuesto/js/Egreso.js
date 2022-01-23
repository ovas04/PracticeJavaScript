class Egreso extends Dato{

    static contadorEgresos = 0;

    constructor(descripcion,valor){

        super(descripcion,valor);

        this.idEgreso =  ++Ingreso.contadorEgresos;

    }

    get getId(){

        return this.idEgreso;

    }

}