var data;


data = {
    method: "getinterests",
    userid: parseInt(sessionStorage.getItem("id"))
};

console.log(sessionStorage.getItem("id"));
$.ajax({
    type: "POST",
    url: "http://friendlygamechat.jasperdekroon.nl/getdatabase.php",
    data: data,
    dataType: "json",
    success: successHandler
});

function successHandler(data) {
    $.each(data, function (i, value) {
        console.log(Object.values(value));
        if(Object.values(value) == 0){
            $("#dynamic-activities").append('<button data-id= 0 data-toggle="modal" data-target="#exampleModal" class="btn btn-primary btn-lg btn-block align-content-center interest-btn">Going to the movies</button>')
        } else if(Object.values(value) == 1){
            $("#dynamic-activities").append('<button data-id= 1 data-toggle="modal" data-target="#exampleModal" class="btn btn-primary btn-lg btn-block align-content-center interest-btn">Bicycling</button>')
        } else if(Object.values(value) == 2){
            $("#dynamic-activities").append('<button data-id= 2 data-toggle="modal" data-target="#exampleModal" class="btn btn-primary btn-lg btn-block align-content-center interest-btn">Running</button>')
        } else if(Object.values(value) == 3) {
            $("#dynamic-activities").append('<button data-id= 3 data-toggle="modal" data-target="#exampleModal" class="btn btn-primary btn-lg btn-block align-content-center interest-btn">Visit a Bar</button>')
        } else if(Object.values(value) == 4){
            $("#dynamic-activities").append('<button data-id= 4 data-toggle="modal" data-target="#exampleModal" class="btn btn-primary btn-lg btn-block align-content-center interest-btn">Fitness</button>')
        } else if(Object.values(value) == 5){
            $("#dynamic-activities").append('<button data-id= 5 data-toggle="modal" data-target="#exampleModal" class="btn btn-primary btn-lg btn-block align-content-center interest-btn">Horse Riding</button>')
        } else if(Object.values(value) == 6){
            $("#dynamic-activities").append('<button data-id= 6 data-toggle="modal" data-target="#exampleModal" class="btn btn-primary btn-lg btn-block align-content-center interest-btn">Have coffee</button>')
        } else if(Object.values(value) == 7){
            $("#dynamic-activities").append('<button data-id= 7 data-toggle="modal" data-target="#exampleModal" class="btn btn-primary btn-lg btn-block align-content-center interest-btn">Visit a museum</button>')

        }
    });
    $(".interest-btn").on("click", function(){
        sessionStorage.setItem("activityid", $(this).data("id"));
        sessionStorage.setItem("activityname", $(this).text());
        window.location.replace("match.html");


    });
}