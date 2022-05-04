
    function alerta(){

        var minimo = document.getElementById("minimo").value ;
        var maximo = document.getElementById("maximo").value ;
        var letra = document.getElementById("letra").value ;
        var contrasena = document.getElementById("contrasena").value ;
        var indices =[];

        for(var i = 0; i < contrasena.length; i++) {
                if (contrasena[i].toLowerCase() === letra) indices.push(i);
                    if ((indices.length >= minimo) && (indices.length <= maximo)) {
                        alert ("Contraseña correcta")
                    }
                    else {
                        alert ("contraseña incorrecta")
                    };
            
        };
    };


    function alerta2(){

        var posicion1 = document.getElementById("pos1").value ;
        var pos1 = posicion1-1
        var posicion2 = document.getElementById("pos2").value ;
        var pos2 = posicion2-1
        var letra2 = document.getElementById("letra2").value ;
        var contrasena2 = document.getElementById("contrasena2").value ;

        for(var i = 0; i < contrasena2.length; i++) {
            if ((contrasena2.indexOf(letra2,pos1)  == pos1) && (contrasena2.indexOf(letra2,pos2))!== pos2){
                alert ("Contraseña correcta")
                };
                if ((contrasena2.indexOf(letra2,pos1)  !== pos1) && (contrasena2.indexOf(letra2,pos2)) == pos2){
                    alert ("Contraseña correcta")
                    };
                    if ((contrasena2.indexOf(letra2,pos1)  !== pos1) && (contrasena2.indexOf(letra2,pos2)) !== pos2){
                        alert ("Contraseña incorrecta")
                        };
                        if ((contrasena2.indexOf(letra2,pos1)  == pos1) && (contrasena2.indexOf(letra2,pos2)) == pos2){
                            alert ("Contraseña incorrecta")
                            };

                };
            
        };
    