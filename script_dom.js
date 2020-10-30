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
botonPrimos.addEventListener("click", colorearTabla, false);

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
function esPrimo(numero){
  for(let i = 2; i< numero; i++){
      if (numero % i === 0){
          return false;
      }
  } 
  return numero !== 1;
}

function colorearTabla(){
  var arrayTd= document.getElementsByTagName("td");

  for(let i=0; i<arrayTd.length; i++){
    if(esPrimo(arrayTd[i].innerText)){
      arrayTd[i].style.backgroundColor= "yellow";
    }
  }
}

//3
var botonMarcar= document.getElementById("marcar");
var botonDesmarcar= document.getElementById("desMarcar");
var sec3= document.getElementById("s3");
var form= document.createElement("form");

for(let i=0;i<100;i++){
  var p = document.createElement("p");
  p.innerText= ""+numeroAleatorio();
  var box = document.createElement("input");
  box.setAttribute("type", "checkbox");
  p.appendChild(box);
  form.appendChild(p);
}

sec3.appendChild(form);

botonMarcar.addEventListener("click", marcar, false);
botonDesmarcar.addEventListener("click", desmarcar, false);

function marcar(){
  var arrayBox= document.getElementsByTagName("input");
  for(let i=0;i<arrayBox.length;i++){
    arrayBox[i].checked =true;
  }
}

function desmarcar(){
  var arrayBoxDes= document.getElementsByTagName("input");
  for(let i=0;i<arrayBoxDes.length;i++){
    arrayBoxDes[i].checked = false;
  }
}


//4

var p1= document.getElementById("p1");
var p2= document.getElementById("p2");
var p3= document.getElementById("p3");
var botonReaparecer = document.getElementById("reaparecer");

p1.addEventListener("click", ocultar);
p2.addEventListener("click", ocultar);
p3.addEventListener("click", ocultar);

p1.addEventListener("dblclick", borrar);
p2.addEventListener("dblclick", borrar);
p3.addEventListener("dblclick", borrar);

botonReaparecer.addEventListener("click", reaparecer);

function ocultar(ev){
  var esperar = setTimeout(function(){
    ev.target.style.display = 'none';
  }, 200);
}

function borrar(ev){
  ev.target.parentNode.removeChild(ev.target);
}

function reaparecer(){
  p1.style.display = 'block';
  p2.style.display = 'block';
  p3.style.display = 'block';
}