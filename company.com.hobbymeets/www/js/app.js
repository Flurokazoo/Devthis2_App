$( "#register" ).submit(function(e) {
    var data = {};
    e.preventDefault();

    data = {
        method: "register",
        firstname: $("#Firstname").val(),
        lastname: $("#Lastname").val(),
        email: $("#Email").val(),
        password: $("#exampleInputPassword1").val(),
        cityid: 4
    };

    console.log(data);

    $.ajax({
        type: "POST",
        url: "http://friendlygamechat.jasperdekroon.nl/getdatabase.php",
        data: data,
        success: successHandler
    });
});

$( "#login" ).submit(function(e) {
    var data = {};
    e.preventDefault();

    data = {
        method: "login",
        email: $("#Email").val(),
        password: $("#exampleInputPassword1").val(),
    };

    $.ajax({
        type: "POST",
        url: "http://friendlygamechat.jasperdekroon.nl/getdatabase.php",
        data: data,
        dataType: "json",
        success: loginSuccessHandler
    });
});

function successHandler(data){
    console.log(data);
    window.location.replace("login.html");

}

function loginSuccessHandler(data){
    console.log(data.firstname);
    if(data){
        console.log("Succesful login");
        sessionStorage.setItem("firstname", data.firstname);
        sessionStorage.setItem("lastname", data.lastname);
        sessionStorage.setItem("id", data.id);
        window.location.replace("dashboard.html");
    } else {
        console.log("We couldn't log you in with that data");
    }
}

console.log(sessionStorage.getItem("lastname"));

