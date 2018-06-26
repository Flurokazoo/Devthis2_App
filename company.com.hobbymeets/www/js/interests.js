var interests = [0,0,0,0,0,0,0,0];

/**
 * Function runs when interest button is clicked
 */
$(".interest-btn").on("click", function(){
   console.log($(this).data("id"));

   //Checks whether an interest is set to active or not active, changes classes and sets the array object
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

/**
 * Function runs when the final submit button is pushed. Sends data to databse
 */
$(".confirm-btn").on("click", function(){
    $.each(interests, function (i, value) {
        var data;
        if(value > 0){
            //Fills data object with data if user selected that interest.
            data = {
                method: "registerinterest",
                interestid: i,
                userid: sessionStorage.getItem("id")
            };

            console.log(data);

            //Ajax call to database
            $.ajax({
                type: "POST",
                url: "http://friendlygamechat.jasperdekroon.nl/getdatabase.php",
                data: data,
                success: successHandler
            });
        }
    });
});

/**
 * Sets message for use on dashboard page and redirects to dashboard
 * @param data
 */
function successHandler(data){
    console.log(data);
    sessionStorage.setItem("message", "Interests set! Now you can make an appointment.");
    window.location.replace("dashboard.html");

}