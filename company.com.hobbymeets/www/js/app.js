/**
 * Function runs on register submission. Posts user to database
 */

$( "#register" ).submit(function(e) {
    var data = {};
    e.preventDefault();

    //Fills data object for AJAX
    data = {
        method: "register",
        firstname: $("#Firstname").val(),
        lastname: $("#Lastname").val(),
        email: $("#Email").val(),
        password: $("#exampleInputPassword1").val(),
        cityid: 4
    };

    console.log(data);

    //AJAX call to database
    $.ajax({
        type: "POST",
        url: "http://friendlygamechat.jasperdekroon.nl/getdatabase.php",
        data: data,
        success: successHandler
    });
});

/**
 * Function runs on login submission. Checks if user can login
 */

$( "#login" ).submit(function(e) {
    var data = {};
    e.preventDefault();

    //Fills data object for AJAX
    data = {
        method: "login",
        email: $("#Email").val(),
        password: $("#exampleInputPassword1").val(),
    };

    //AJAX call to database
    $.ajax({
        type: "POST",
        url: "http://friendlygamechat.jasperdekroon.nl/getdatabase.php",
        data: data,
        dataType: "json",
        success: loginSuccessHandler
    });
});

/**
 * Function runs when registration is succesful
 * @param data
 */
function successHandler(data){
    console.log(data);
    window.location.replace("login.html");

}

/**
 * Function runs when login is succesful
 * @param data
 */
function loginSuccessHandler(data){
    console.log(data.firstname);
    if(data){
        console.log("Succesful login");

        //Set local storage variables
        sessionStorage.setItem("firstname", data.firstname);
        sessionStorage.setItem("lastname", data.lastname);
        sessionStorage.setItem("id", data.id);
        window.location.replace("dashboard.html");
    } else {
        console.log("We couldn't log you in with that data");
    }
}

console.log(sessionStorage.getItem("lastname"));

