var total = 0;

function insertanumero(){

            var numeroAleatorio = Math.floor(Math.random() * 100) + 1;

            // Crear un nuevo elemento de fila y celdas
            var nuevafila = document.createElement("tr");
            var celda_numero = document.createElement("td");
            var celda_eliminar_numero = document.createElement("td");

            var lista_numeros = [];
            lista_numeros.push(numeroAleatorio);
            celda_numero.textContent = numeroAleatorio;

            var link_eliminar_numero = document.createElement("button");
            link_eliminar_numero.textContent = "Eliminar número";
            link_eliminar_numero.addEventListener("click", function() {

                for (let i=0; i < lista_numeros.length; i++){
                    document.getElementById("eliminar").innerHTML = "Has clicado en eliminar el número " + lista_numeros[i];
                }    

            });

            celda_eliminar_numero.appendChild(link_eliminar_numero);
    
            // Agregar las celdas a la fila
            nuevafila.appendChild(celda_numero);
            nuevafila.appendChild(celda_eliminar_numero);
    
            // Agregar la fila a la tabla
            document.querySelector("table tbody").appendChild(nuevafila);

            total = total + 1;

            document.getElementById("lista_javaScript").innerHTML = "La lista en Javascript tiene " + total + " numeros.";     
            
        }