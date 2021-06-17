var nombre = document.getElementById("nombre");
var correo = document.getElementById("correo");
var telefono = document.getElementById("telefono");
var i = 0;
var filita = "";
var estado = 0;
function agregar(){  
    if(estado==0){
        alert("save");
    var table = document.getElementById("table");
    var tbody = document.getElementById("tbd");
    var fila = document.createElement("tr");
    var celda_nombre = document.createElement("td");
    celda_nombre.innerHTML=nombre.value;

    var celda_correo = document.createElement("td");
    celda_correo.innerHTML=correo.value;

    var celda_telefono = document.createElement("td");
    celda_telefono.innerHTML=telefono.value;

    var celda_accion = document.createElement("td");
    celda_accion.classList.add("accion");
    celda_accion.innerHTML=
    "<a href='#' class='icono2' onclick='editar(this)'><i class='fa fa-pencil-square-o' aria-hidden='true'></i></a>"
    +"<a href='#' class='icono1' onclick='eliminar(this)'><i class='fa fa-trash' aria-hidden='true'></i></a>";

    fila.appendChild(celda_nombre);
    fila.appendChild(celda_correo);
    fila.appendChild(celda_telefono);
    fila.appendChild(celda_accion);    
    tbody.appendChild(fila);
    table.appendChild(tbody);
    limpiar();
    i+=1;
    }else{
        alert("editar");
        filita.cells[0].innerHTML = nombre.value;
        filita.cells[1].innerHTML = correo.value;
        filita.cells[2].innerHTML = telefono.value;
        filita = "";
        limpiar();
        estado = 0;
    }
}
function limpiar(){
    nombre.value="";
    correo.value="";
    telefono.value="";
}
function editar(row){
    filita = row.parentNode.parentNode;  
    nombre.value = filita.cells[0].innerHTML;
    correo.value = filita.cells[1].innerHTML;
    telefono.value = filita.cells[2].innerHTML;
    estado = 1;
}
function eliminar(row){
    var fil = row.parentNode.parentNode;
    fil.parentNode.removeChild(fil);
}
