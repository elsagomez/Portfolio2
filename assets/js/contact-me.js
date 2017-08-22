
var config = {
    apiKey: "AIzaSyAnF9OklELLx-GH4g9gSHPpWe66f7hucKk",
    authDomain: "portfolio-4d2a3.firebaseapp.com",
    databaseURL: "https://portfolio-4d2a3.firebaseio.com",
    projectId: "portfolio-4d2a3",
    storageBucket: "portfolio-4d2a3.appspot.com",
    messagingSenderId: "394562979074"
};
firebase.initializeApp(config);

var database = firebase.database();

$("#submit").click(function(event) {
    event.preventDefault();
    var name = $("#name").val();
    var email = $("#email").val();
    var phone = $("#phone").val();
    var message = $("#message").val();



    var newContact = {
        name: name,
        email: email,
        phone: phone,
        message: message


    }

    database.ref().push(newContact);

document.getElementById("contactForm").reset();


});

