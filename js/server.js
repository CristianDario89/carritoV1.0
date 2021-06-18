var firebaseConfig = {
    apiKey: "AIzaSyDK1UgpbYtY9YcpKjU1T7rLux-c0xIbLlE",
authDomain: "carritopro-6e9fb.firebaseapp.com",
databaseURL: "https://carritopro-6e9fb-default-rtdb.firebaseio.com",
projectId: "carritopro-6e9fb",
storageBucket: "carritopro-6e9fb.appspot.com",
messagingSenderId: "143099735093",
appId: "1:143099735093:web:9f8c49f1f5fe88e510157c",
measurementId: "G-DCC4DCENF6"
};

//Initialize Firebase 
firebase.initializeApp(firebaseConfig);

function buy(){
    var productsFirebase =  [];
    for (let index = 0;index < products.length;index++){
        if(products[index].cart){
            var product = {
                    name: products[index].name,
                    price: products[index].price,
                    quantity: products[index].quantity,
                    total: products[index].total
            }
            productsFirebase.push(product);
        }
    }

    firebase.database().ref('cart').push({
        total:total(),
        products:productsFirebase
    });

    Swal.fire({
        type: 'success',
        title: 'Success',
        text: 'Operacion completada'
    });
    clearInterval();
}

var products = [
    {
        id: 1,
        img: './img/bebi/bb9.jpg',
        name:'Algo',
        price:33,
        cart:false,
        quantity:1,
        total:0
    },
    {
        id: 2,
        img: './img/bebi/bb3.webp',
        name:'Algo2',
        price:55,
        cart:false,
        quantity:1,
        total:0
    },
    {
        id: 3,
        img: './img/bebi/bb2.png',
        name:'Algo3',
        price:33,
        cart:false,
        quantity:1,
        total:0
    },
    {
        id: 4,
        img: './img/bebi/bb1.webp',
        name:'Algo4',
        price:55,
        cart:false,
        quantity:1,
        total:0
    },
    {
        id: 5,
        img: './img/bebi/bb5.webp',
        name:'Algo5',
        price:33,
        cart:false,
        quantity:1,
        total:0
    },
    {
        id: 6,
        img: './img/bebi/bb11.jpg',
        name:'Algo6',
        price:55,
        cart:false,
        quantity:1,
        total:0
    },
    {
        id:7,
        img: './img/bebi/bb6.webp',
        name:'Algo7',
        price:33,
        cart:false,
        quantity:1,
        total:0
    },
    {
        id: 8,
        img: './img/bebi/c22.png',
        name:'Algo8',
        price:55,
        cart:false,
        quantity:1,
        total:0
    }
];

function total() {
    let total = 0;
    for(let index = 0; index < products.length;index++){
        if(products[index].cart){
            total+= products[index].total;
        }
    }
    return total
}

var con=0;
var con2=[];//position at table

function clean(){
    for(let index = 0; index < products.length;index++){
        products[index].cart = false;
     
        products[index].quantity = 1,
        products[index].total=0;
        var con2=[];
        updateCart();
    }

}

function add(id){
    for(let index = 0; index < products.length;index++){
        if(products[index].id != id || products[index].cart==true ){
            
        }else{
            products[index].cart = true;
            con2.push(products[index].id);
            document.getElementById('tableProducts').innerHTML+=  `
            <tr>
            <th scope="row">${con+1} </th>
            <td><button class="btn btn-danger" onclick="remove(${products[index].id})">X</button></td>
            <td><img src="${products[index].img}" style="width:5rem" alt=""></td>
            <td${products[index].name}></td>
        
            <td>
                <input type="text" style="width:2rem;" id="${products[index].id}" value="${products[index].quantity}" disabled>
                <button class="btn btn-primary" onclick="reduceAmount(${products[index].id})">-</button>
                <button class="btn btn-primary" onclick="addAmount(${products[index].id})">+</button>
            </td>

            <td>${products[index].price*products[index].quantity  }</td>
            
        </tr>
            ` 

            con++;
            products[index].total=products[index].price*products[index].quantity;
        }
        document.getElementById('total').innerHTML =`
                
            <tr>
            <th scope="row"></th>
            <td></td>
            <td></td>
            <td></td>
            <td>
                <h4>Total:</h4>
            </td>
            <td>
                $ ${total()}.00
            </td>
            </tr>

            <tr>
                <th scope="row"></th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                <button class="btn btn-success" onclick="buy()">Comprar</button>
                </td>
            </tr>
        ` 
    }
}
function remove(id){
    for(let index = 0; index < products.length;index++){
        if(products[index].id == id){
            products[index].cart = false;
            products[index].quantity = 1,
            products[index].total=0;
            total();
            for(let index2 = 0; index2< con2.length;index2++){
                if(products[index].id == con2[index2]){
                    con2.splice(index2,1);
                }else{

                }
            }
            updateCart();
        }else{
            updateCart();
        }
    } 
}

function updateCart(){
    con=0;

    document.getElementById('tableProducts').innerHTML='';
    for(let index = 0; index < con2.length;index++){
        var position= con2[index];

        for(let index3 = 0; index3< products.length;index3++){
            if(position ==products[index3].id){
                document.getElementById('tableProducts').innerHTML+=  `
            <tr>
            <th scope="row">${con+1} </th>
            <td><button class="btn btn-danger" onclick="remove(${products[index3].id})">X</button></td>
            <td><img src="${products[index3].img}" style="width:5rem" alt=""></td>
            <td${products[index3].name}></td>
        
            <td>
                <input type="text" style="width:2rem;" id="${products[index3].id}" value="${products[index3].quantity}" disabled>
                <button class="btn btn-primary" onclick="reduceAmount(${products[index3].id})">-</button>
                <button class="btn btn-primary" onclick="addAmount(${products[index3].id})">-</button>
            </td>

            <td>${products[index].price*products[index].quantity  }</td>
            </tr>
            ` 
            products[index3].total=products[index3].price*products[index3].quantity;
 

            }else{

            }
        }
        con=con+1;
    }
    if (total()==0) {
        document.getElementById('total').innerHTML=';'
    } else {
        document.getElementById('total').innerHTML =`
                
        <tr>
        <th scope="row"></th>
        <td></td>
        <td></td>
        <td></td>
        <td>
            <h4>Total:</h4>
        </td>
        <td>
            $ ${total()}.00
        </td>
        </tr>

        <tr>
            <th scope="row"></th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>
            <button class="btn btn-success" onclick="buy()">Comprar</button>
            </td>
        </tr>
    `
    }
}

function reduceAmount(id){
    for(let index = 0; index< products.length;index++){
        if(products[index].id == id){
            if(products[index].quantity > 1){
                products[index].quantity  = products[index].quantity-1;
                updateCart();
            }else{

            }
        }else{

        }
    }
}

function addAmount(id){
    for(let index = 0; index< products.length;index++){
        if(products[index].id == id){
            if(products[index].quantity > 0){
                products[index].quantity  = products[index].quantity+1;
                updateCart();
            }else{

            }
        }else{
            
        }
    }
}
  //RENDER
  (() => {
    for(let index = 0; index < products.length;index++){
       document.getElementById('row1').innerHTML+=`
       <div class="card mx-2 my-1" style="width:115px;">
       <img src="${products[index].img}" class="card-img-top" alt=""> 
       <div class="card-body">
            <p class="card-textmio">$ ${products[index].price}.00</p>
           <button class="btnmio" onclick="add('${products[index].id}')">Agregar</button>
       </div>
    </div>
       ` 
    }
  })();


  /*----------------*/
  var firestore = firebase.firestore()

//Variable to access database collection
const db2 = firestore.collection("fomData")

//Get Submit Form
let submitButton = document.getElementById('submit')

//Create Event Listener To Allow Form Submission
submitButton.addEventListener("click", (e) => {
  //Prevent Default Form Submission Behavior
  e.preventDefault()

  //Get Form Values
  let firstName = document.getElementById('fname').value
  let lastName = document.getElementById('lname').value
  let country = document.getElementById('country').value

  //Save Form Data To Firebase
  db2.doc().set({
    fname: firstName,
    lname: lastName,
    country: country
  }).then( () => {
    console.log("Data saved")
  }).catch((error) => {
    console.log(error)
  })

  //alert
  alert("Your Form Has Been Submitted Successfully")
})
