//1
var botonAñadir = document.getElementById("addNumber");

botonAñadir.addEventListener("click", añadirNumeroAleatorio, false);

function añadirNumeroAleatorio(){
    let number= numeroAleatorio();
    
    var nuevoLi= document.createElement("LI");
    nuevoLi.innerText= number;

    document.getElementById("listaAleatorios").appendChild(nuevoLi);
}

function numeroAleatorio(){
    return Math.trunc((Math.random()*100));
}

//2
var botonPrimos= document.getElementById("numerosPrimos");

window.addEventListener("load", crearTabla, false);
window.addEventListener("click", colorearTabla, false);

function crearTabla(){
    
    var sec2= document.getElementById("s2");
    var tabla   = document.createElement("table");
    var tblBody = document.createElement("tbody");
    var k=1;
  // Crea las celdas
    for (var i = 0; i < 100; i++) {
    // Crea las filas de la tabla
    var fila = document.createElement("tr");
 
    for (var j = 0; j < 100; j++) {
      // Crea un elemento <td> y un nodo de texto, haz que el nodo de
      // texto sea el contenido de <td>, ubica el elemento <td> al final
      // de la fila de la tabla
      var celda = document.createElement("td");
      var textoCelda = document.createTextNode(""+k);
      celda.appendChild(textoCelda);
      fila.appendChild(celda);
        k++;
    }
 
    // agrega la fila al final de la tabla (al final del elemento tblbody)
    tblBody.appendChild(fila);
  }
 
  // posiciona el <tbody> debajo del elemento <table>
  tabla.appendChild(tblBody);
  // appends <table> into <body>
  sec2.appendChild(tabla);
  tabla.setAttribute("border", "2");
    
}

function colorearTabla(){

}

//3


//4