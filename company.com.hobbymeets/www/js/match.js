$("#activityholder").append(sessionStorage.getItem("activityname"));

data = {
    method: "compatiblematch",
    userid: parseInt(sessionStorage.getItem("id")),
    interestid: sessionStorage.getItem("activityid")
};

console.log(sessionStorage.getItem("id"));

//Ajax call to database
$.ajax({
    type: "POST",
    url: "http://friendlygamechat.jasperdekroon.nl/getdatabase.php",
    data: data,
    dataType: "json",
    success: successHandler
});

function successHandler(data){
    console.log(data);
}

//Sets message local storage and redirects to dashboard.
$(".confirm").on("click", function(){
    sessionStorage.setItem("message", "Appointment sent! Check your schedule for more information");
    window.location.replace("dashboard.html");

});
