const form = document.getElementById("form");
const username = document.getElementById("username");
const password = document.getElementById("password");

form.addEventListener("submit", function(e) {
e.preventDefault();
let users = Array(
    {
        usuario:username.value,
        contraseña:password.value
    }
);
console.log(users);

localStorage.setItem("user", JSON.stringify(users));

validate();

location.href = "homepage.html"
});

function validate(){
const username2 = document.getElementById("username").value;
const password2 = document.getElementById("password").value;
 
if(username2 == 'usuario' && password2 == '123456' 
||  username2 == 'mono' && password2 == '121212'
||  username2 == 'bato' && password2 == 'bato'
||  username2 == 'aurelio' && password2 == 'aurelio'
||  username2 == 'SOPORTE' && password2 == '151515'){
         alert("Éxito. ahora en la pera.")
        return false;
    }else{
        alert("Usuario o contraseña incorrecta");
        location.href = "login.html";
    }
    validarEspacios();
  
}

function validarEspacios(){
        
    var espacios = false;
    var cont = 0;

    while (!espacios && (cont < p1.length)) {
    if (p1.charAt(cont) == " ")
        espacios = true;
    cont++;
    }
    
    if (espacios) {
    alert ("La contraseña no puede contener espacios en blanco");
    return false;
    }

 
}