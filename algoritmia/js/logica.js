//problema 1
function problema1(){

    var p1_input = document.querySelector('#p1-input').value;

    var p1_array = p1_input.split(' ').reverse();

    var p1_res = '';


    p1_array.forEach(function (palabra, i){
        if(i != 0 || i != p1_array.length) p1_res += ' ';
        p1_res += palabra;
    });

    document.querySelector('#p1-output').textContent = p1_res;

}






//problema 2
function problema2(){
    
    var p2_x1 = document.querySelector('#p2-x1').value;
    var p2_x2 = document.querySelector('#p2-x2').value;
    var p2_x3 = document.querySelector('#p2-x3').value;
    var p2_x4 = document.querySelector('#p2-x4').value;
    var p2_x5 = document.querySelector('#p2-x5').value;

    var p2_y1 = document.querySelector('#p2-y1').value;
    var p2_y2 = document.querySelector('#p2-y2').value;
    var p2_y3 = document.querySelector('#p2-y3').value;
    var p2_y4 = document.querySelector('#p2-y4').value;
    var p2_y5 = document.querySelector('#p2-y5').value;


    var v1 = [p2_x1, p2_x2, p2_x3, p2_x4, p2_x5];
    var v2 = [p2_y1, p2_y2, p2_y3, p2_y4, p2_y5];

    v1 = v1.sort(function(a, b){
        return b-a;
    });

    v2 = v2.sort(function(a, b){
        return b-a;
    });

    v2 = v2.reverse();

    var p2_producto = 0;

    for(var i = 0; i < v1.length; i++){
        p2_producto += v1[i]*v2[i];
    }

    document.querySelector('#p2-output').textContent = 
    'Producto escalar minimo : '+p2_producto;
}








//problema 3

function problema3(){
    
    var alfabeto = ['A', 'B', 'C', 'D', 'E', 'F',
            'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',
            'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U',
            'V', 'W', 'X', 'Y', 'Z'];

    
    var p3_input = document.querySelector('#p3-input').value;

    var p3_palabras = p3_input.split(',');

    p3_palabras = p3_palabras.map(function (palabra){
        return palabra.replace(/\s/g, '').toUpperCase();
    });

    var p3_res = '';

    p3_palabras.forEach(function (palabra, i){
        //separar las palabras en un array para leer cada letra
        var letras_unicas = [];
        var palabra_array = palabra.split('');
        //iterar al alfabeto
        alfabeto.forEach(function (letra, j){
            //iterar por palabra
            palabra_array.forEach(function (letra_palabra, k){
                //comprobar que la letra esta dentro del alfabeto
                if(letra_palabra == letra){
                    //si la letra no la hemos contado, la agregamos a un array
                    //para contar las letras unicas
                    if(letras_unicas.indexOf(letra) < 0){
                        letras_unicas.push(letra);
                    }
                }
            });

        });
        p3_res += 'Palabra: ' + palabra + ' = ' + letras_unicas.length + '\n';
    });

    document.querySelector('#p3-output').textContent = p3_res;

}

//funcion validacion numeros

function validacionNumeros(evt){
    if(window.event){
        keynum = evt.keyCode;
    }else{
        keynum = evt.which; 
    }

    if ((keynum > 47 && keynum < 58) || keynum == 8 || keynum == 13) {
        return true;
    } else {
        alert("Ingrese unicamente números")
    }
}

//funcion validacion letras

function validacionLetras(evt){
    if(window.event){
        keynum = evt.keyCode;
    }else{
        keynum = evt.which; 
    }

    if ((keynum > 64 && keynum < 91) || keynum == 8 || keynum == 13) {
        return true;
    } else {
        alert("Ingrese unicamente letras")
    }
}