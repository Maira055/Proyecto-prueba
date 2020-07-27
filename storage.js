//----Variables globales-----
var registro = document.getElementById("registro");
var login = document.getElementById("login");
var salir = document.getElementById("salir");
var labelUsuario = document.getElementById("labelUsuario");

//---Funciones---
function registroUsuario() {
    let user = prompt("registra tu usuario");
    let pass = prompt("registra tu contraseña");
    localStorage.setItem('usuario',user);
    localStorage.setItem('pass',pass);
    alert("registro exitoso");

}
function loginUsuario() {
    let user = prompt("ingresa tu usuario");
    let pass = prompt("ingresa tu contraseña");
    
    if (user == localStorage.getItem('usuario') && pass == localStorage.getItem('pass')) {
        alert("Login exitoso");
        labelUsuario.innerHTML = user;
    } else {
        alert("Error en el login");
}
    
}


function salirUsuario() {
    //1 Poner vacio la variable user (usuario)
    let user = ""; 
    localStorage.setItem('usuario', user);
    
    //2 Poner vacio la vaiable pass (clave)
    let pass = "";
    localStorage.setItem('clave' , pass);

    //3 Label usuario lo va a poner vacio user
    labelUsuario.innerHTML = user;
 
  }
//---onclicks---
registro.onclick = function () {
    registroUsuario ();
    
}
login.onclick = function () {
    loginUsuario();
    
}
salir.onclick = function () {
    salirUsuario();

    
}

