
let sumar = function(... numeros){
        let resultado = numeros.reduce(function(acu, num){
            return acu + num
        })
        return console.log(resultado) 
    }
let restar = function(... numeros){
        let resultado = numeros.reduce(function(acu, num){
            return acu - num
        })
        return console.log(resultado)
    }
let multiplicar = function(... numeros){
        let resultado = numeros.reduce(function(acu, num){
            return acu * num
        })
        return console.log(resultado)
    }
let dividir = function(... numeros){
        let resultado = numeros.reduce(function(acu, num){
            return acu / num
        })
        return console.log(resultado)
    }


console.log(sumar(50,45,20));