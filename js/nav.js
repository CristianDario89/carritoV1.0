const usernav = document.getElementById("usernav");
const close = document.getElementById("close");

let username = JSON.parse(localStorage.getItem('user'));

if(username != null){
    usernav.innerHTML = '<a href="#" id="close" class="nav-item nav-link active ">'+"hola "+username[0].usuario+'</a>';
}else{
    usernav.innerHTML = '<a href="#" id="close" class="nav-item nav-link active ">Iniciar sesion</a>';
}

close.addEventListener('click', function(){
    localStorage.clear('user');
    location.href = 'index.html'
});