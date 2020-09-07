

module.exports = (x,y,z,callback) => {
    var material = 100.0;
    if (x == 0 || y == 0 || z==0) 
        setTimeout(() => 
            callback(new Error("Una de las cantidades ingresadas no tiene cantidad"), 
            null),
            2000);
    else 
        setTimeout(() => 
            callback(null, {
                precioHorasTrabajadas: () => ( x * y ),
                totalPagarEmpleados: () => (x * y * z  ),
                proyectoTotal: () => ((x * y * z  )+material),
                holguraProyecto: () => (((x * y * z  )+material)*0.08)
            }), 
            2000);
}

                //precioHorasTrabajadas = horasTrabajo*precioHora;
                //totalPagarEmpleados = PrecioHorasTrabajadas*personaP;
               // proyectoTotal = totalPagarEmpleados+Materiales;
               // holguraProyecto = proyectoTotal*0.08;