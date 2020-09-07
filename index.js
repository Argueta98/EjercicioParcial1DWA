var empleado = require('./empleado');

var PrecioHora =3; //Precio de la hora
var CantidadHora = 80; //Cantidad de horas trabajadas
var Materiales = 100.0;
//var TiempoProyecto= 3; //Meses
var CantidadPersonasP = 5; //Personas en un proyecto


console.log("*****************************************************");
console.log("*                 PROYECTO CERO                     *");
console.log("*****************************************************");


function empleadoU(horasTrabajo, precioHora,personaP){
    console.log("* Detalles:                                         *");
    console.log("* Cantidad de Horas: "+horasTrabajo+"                             *");
    console.log("* Precio de l hora: $"+precioHora+"                              *");
    console.log("* Cantidad de personas: "+personaP+"                           *");
    console.log("* Gasto en Material: $"+Materiales+"                           *" );

    empleado(horasTrabajo,precioHora,personaP, (err,rect) => {
        if(err){
            console.log("Error: ", err.message);
        }
        else{
            console.log("*****************************************************");
            console.log("*               Resolviendo Calculo                 *");
            console.log("*****************************************************");

            

            console.log("* Sueldo de un trabajador por: "+horasTrabajo+" horas es: $" + rect.precioHorasTrabajadas()+"    *");
            console.log("* Precio a pagar por "+personaP+" personas es: $"+ rect.totalPagarEmpleados()+"           *");
            console.log("* Precio del Proyecto es: $"+rect.proyectoTotal() +"                     *");
            console.log("* Gastos Adicionales (Holgura): $"+rect.holguraProyecto()+"                *");
            console.log("*****************************************************");

            console.log("*****************************************************");
            console.log("*            GASTO TOTAL DEL PROYECTO               *");
            console.log("*****************************************************");

            console.log("Total: $"+(rect.proyectoTotal()+rect.holguraProyecto()));
            console.log("-----------------------------------------------------");
        }
        //return empleado;
    });

}

empleadoU(CantidadHora,PrecioHora,CantidadPersonasP);
//tiempoConvertido = TiempoProyecto*30;

//unaPersona = PrecioHora*CantidadHora;
//cntidadPersonas = PrecioHora*CantidadHora*CantidadPersonasP;
//precioDuracion = cntidadPersonas*tiempoConvertido;

//Total=precioDuracion+Materiales;




//console.log("Cantidad por persona: "+ unaPersona );
//console.log("Precio por personas en el proyecto: "+cntidadPersonas);
//console.log("Precio por la duracion del proyecto:"+precioDuracion);
//console.log("Costo Total del proyecto: "+Total);
//console.log("El 8%: "+(Total*0.08));




