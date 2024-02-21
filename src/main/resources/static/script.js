var total = 0;
let lista_numeros = [];

function insertanumero(){

            var numeroAleatorio = Math.floor(Math.random() * 100) + 1;

            // Crear un nuevo elemento de fila y celdas
            var nuevafila = document.createElement("tr");
            var celda_numero = document.createElement("td");
            var celda_eliminar_numero = document.createElement("td");

            lista_numeros.push(numeroAleatorio);
            celda_numero.textContent = numeroAleatorio;

            var link_eliminar_numero = document.createElement("button");
            link_eliminar_numero.textContent = "Eliminar número";
            celda_eliminar_numero.appendChild(link_eliminar_numero);

            // Agregar las celdas a la fila
            nuevafila.appendChild(celda_numero);
            nuevafila.appendChild(celda_eliminar_numero);

            // Agregar la fila a la tabla
            document.querySelector("table tbody").appendChild(nuevafila);

            link_eliminar_numero.addEventListener("click", function() {

                var filaAEliminar = this.parentNode.parentNode;
                var numeroAEliminar = parseInt(this.parentNode.previousElementSibling.textContent);
                var indiceAEliminar = lista_numeros.indexOf(numeroAEliminar);
                lista_numeros.splice(indiceAEliminar, 1);
                filaAEliminar.remove();

                document.getElementById("lista_array").innerHTML = "";
                for (let i=0; i < lista_numeros.length; i++){
                    document.getElementById("lista_array").innerHTML += lista_numeros[i] + " ";
                }
                document.getElementById("lista_javaScript").innerHTML = "La lista en Javascript tiene ahora " + (lista_numeros.length) + " numeros.";


            });

            document.getElementById("lista_array").innerHTML = "";

            for (let i=0; i < lista_numeros.length; i++){
                document.getElementById("lista_array").innerHTML += lista_numeros[i] + " ";
            }

            document.getElementById("lista_javaScript").innerHTML = "La lista en Javascript tiene " + (lista_numeros.length) + " numeros.";

//$.ajax({
//type:"POST",
//url: "addJsNumber",
//data:{"numero":numeroAleatorio}
//})
//param={numero:numeroAleatorio,numero2:"30"};
//$.post("addJsNumber",param,function(response){
//}).fail(function(){
//});

myMap={};
myMap["numero"]=numeroAleatorio;
myMap["numero2"]=30;
$.ajax({
    url : '/addJsNumber',
    data : JSON.stringify(myMap),
    type : 'POST',
    contentType:"application/json",
    success : function(json) {
        var CC = 8;
    }
});
        }