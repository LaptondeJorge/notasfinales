// HTML
// Ingreso de prompt para las notas de HTML
var notaHtml1 = +prompt("Ingresa tu nota 1 para HTML");
var notaHtml2 = +prompt("Ingresa tu nota 2 para HTML");
var notaHtml3 = +prompt("Ingresa tu nota 3 para HTML");

// Obtener los elementos por ID para las notas de HTML
var html1 = document.getElementById("html1");
var html2 = document.getElementById("html2");
var html3 = document.getElementById("html3");

// Inserta la información en el documento HTML para las notas de HTML
html1.innerHTML = notaHtml1;
html2.innerHTML = notaHtml2;
html3.innerHTML = notaHtml3;
htmlPromedio.innerHTML = ((notaHtml1 + notaHtml2 + notaHtml3) / 3).toFixed(2);

// CSS
// Ingreso de prompt para las notas de CSS
var notaCss1 = +prompt("Ingresa tu nota 1 para CSS");
var notaCss2 = +prompt("Ingresa tu nota 2 para CSS");
var notaCss3 = +prompt("Ingresa tu nota 3 para CSS");

// Obtener los elementos por ID para las notas de CSS
var css1 = document.getElementById("css1");
var css2 = document.getElementById("css2");
var css3 = document.getElementById("css3");

// Inserta la información en el documento HTML para las notas de CSS
css1.innerHTML = notaCss1;
css2.innerHTML = notaCss2;
css3.innerHTML = notaCss3;
cssPromedio.innerHTML = ((notaCss1 + notaCss2 + notaCss3) / 3).toFixed(2);

// JAVASCRIPT
// Ingreso de prompt para las notas de JAVASCRIPT
var notaJavascript1 = +prompt("Ingresa tu nota 1 para JAVASCRIPT");
var notaJavascript2 = +prompt("Ingresa tu nota 2 para JAVASCRIPT");
var notaJavascript3 = +prompt("Ingresa tu nota 3 para JAVASCRIPT");

// Obtener los elementos por ID para las notas de JAVASCRIPT
var javascript1 = document.getElementById("javascript1");
var javascript2 = document.getElementById("javascript2");
var javascript3 = document.getElementById("javascript3");

// Inserta la información en el documento HTML para las notas de JAVASCRIPT
javascript1.innerHTML = notaJavascript1;
javascript2.innerHTML = notaJavascript2;
javascript3.innerHTML = notaJavascript3;
javascriptPromedio.innerHTML = (
  (notaJavascript1 + notaJavascript2 + notaJavascript3) /
  3
).toFixed(2);
