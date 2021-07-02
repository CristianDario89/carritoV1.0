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


var myName = prompt("Ingrese Usuario");


if(myName == 'usuario'||  myName == 'mono'  ||  myName == 'mono' ||  myName == 'melli' ||  myName == 'admin' ||  myName == 'naupro'){
         
function sendMessage() {
    // get message
    var message = document.getElementById("message").value;

    // save in database
    firebase.database().ref("messages").push().set({
        "sender": myName,
        "message": message
    });

    // prevent form from submitting
    return false;
}
 
    }else{
        alert("Usuario mal ingresado");
        location.href = "chat.html";
    }
    
  

 // listen for incoming messages // listen for incoming messages
  // listen for incoming messages // listen for incoming messages
   // listen for incoming messages // listen for incoming messages
 firebase.database().ref("messages").on("child_added", function (snapshot) {
    var html = "";
    // give each message a unique ID
    html += "<li  id='message-" + snapshot.key + "'>";
    // show delete button if message is sent by me
    if (snapshot.val().sender == myName) {
        html += "<button  data-id='" + snapshot.key + "' onclick='deleteMessage(this);'>";
            html += "X";
        html += "</button>";
    }
    html += snapshot.val().sender + ": " + snapshot.val().message;
    html += "</li>";

    document.getElementById("messages").innerHTML += html;
});

function deleteMessage(self) {
    // get message ID
    var messageId = self.getAttribute("data-id");
 
    // delete message
    firebase.database().ref("messages").child(messageId).remove();
}
 
// attach listener for delete message
firebase.database().ref("messages").on("child_removed", function (snapshot) {
    // remove message node
    document.getElementById("message-" + snapshot.key).innerHTML = "Eliminado";
});

