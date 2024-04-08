

function calcularInversion(){
    
    let inversionInicial = parseFloat(document.getElementById('inversion').value);
    let interesm = inversionInicial * 0.02;
    let inversionf = inversionInicial + interesm;
    let ganancia = inversionf - inversionInicial;

    document.getElementById('resultado1').innerHTML = `
    <p> Su inversion inicial fue de ${inversionInicial} y al aplicarle la taza de intereses de 2% despues de un mes se obtuvo una ganancia de ${ganancia.toFixed(2)} <p/>
    `;
}








function calcularComisiones(){

    let sueldoBase = parseFloat(document.getElementById('sueldoBase').value);
    let ventaa = parseFloat(document.getElementById('venta1').value);
    let ventab = parseFloat(document.getElementById('venta2').value);
    let ventac = parseFloat(document.getElementById('venta3').value);

    let comisiones = (ventaa + ventab + ventac) * 0.10;
    let suedofinal = sueldoBase + comisiones;

    document.getElementById('resultado2').innerHTML = `
    <p> Usted genero $${comisiones.toFixed(2)} de comisiones, por lo tanto su suedo final es de $${suedofinal.toFixed(2)} <p/>
    `;

}










function calcularDescuento(){
    
    let costo = parseFloat(document.getElementById('costoCompra').value);
    let descuento = costo * 0.10;
    let costoFinal = costo - descuento;

    document.getElementById('resultado3').innerHTML = `
    <p> Se le descontara $${descuento.toFixed(2)} y el costo final del producto es de $${costoFinal.toFixed(2)} <p/>
    `;


}









function calcularCalFinal() {
    let par1 = parseFloat(document.getElementById('calPar1').value);
    let par2 = parseFloat(document.getElementById('calPar2').value);
    let par3 = parseFloat(document.getElementById('calPar3').value);
    let calEx = parseFloat(document.getElementById('calExamen').value);
    let calTra = parseFloat(document.getElementById('calTrabajo').value);

    let parciales = ((par1 + par2 + par3)/3) * 0.55;
    let examen = calEx * 0.30;
    let trabajo = calTra * 0.15;

    let calFinal = parciales + examen + trabajo;

    document.getElementById('resultado4').innerHTML= `
    <p> Su calificacion final tomando en cuenta los parciales examen y trabajo 55%, 30% y 15% respectivamente es de ${calFinal.toFixed(2)} <p/>
    `;

    
}














function calcularPorcentajes() {
    let cantidadHombres = document.getElementById('cantHombres').value;
    let cantidadMujeres = document.getElementById('cantMujeres').value;

    cantidadHombres = parseFloat(cantidadHombres);
    cantidadMujeres = parseFloat(cantidadMujeres);

    let cantTotal = cantidadMujeres+cantidadHombres;
    cantTotal = parseFloat(cantTotal);

    let porcentajeHombres = (cantidadHombres*100)/cantTotal;
    let porcentajeMujeres = (cantidadMujeres*100)/cantTotal;

    porcentajeHombres = parseFloat(porcentajeHombres);
    porcentajeMujeres = parseFloat(porcentajeMujeres);

    document.getElementById('resultado5').innerHTML = `
    <p>El porcentaje de hombres es de ${porcentajeHombres.toFixed(2)}%.</p>
    <p>El porcentaje de mujeres es de ${porcentajeMujeres.toFixed(2)}%.</p> 
    ` ;
}







function calcularEdad(){
    let na = parseFloat(document.getElementById('fechaNacimiento').value);
    let añoAc = parseFloat(document.getElementById('añoActual').value);

    let edad = añoAc - na;

    document.getElementById('resultado6').innerHTML = `
    <p>Su edad es de ${edad}</p>
    ` ;


}