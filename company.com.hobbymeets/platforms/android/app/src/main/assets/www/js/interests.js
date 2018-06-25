var interests = [0,0,0,0,0,0,0,0];

$(".interest-btn").on("click", function(){
   console.log($(this).data("id"));
   if(interests[$(this).data("id")]){
       interests[$(this).data("id")] = 0;
       $(this).removeClass('btn-success');
       $(this).addClass('btn-primary');

   } else {
       interests[$(this).data("id")] = 1;
       console.log('gozah');
       $(this).addClass('btn-success');
       $(this).removeClass('btn-primary');
   }
   console.log(interests);
});

$(".confirm-btn").on("click", function(){
    $.each(interests, function (i, value) {
        var data;
        if(value > 0){
            data = {
                method: "registerinterest",
                interestid: i,
                userid: sessionStorage.getItem("id")
            };

            console.log(data);

            $.ajax({
                type: "POST",
                url: "http://friendlygamechat.jasperdekroon.nl/getdatabase.php",
                data: data,
                success: successHandler
            });
        }
    });
});

function successHandler(data){
    console.log(data);
    sessionStorage.setItem("message", "Interests set! Now you can make an appointment.");
    window.location.replace("dashboard.html");

}