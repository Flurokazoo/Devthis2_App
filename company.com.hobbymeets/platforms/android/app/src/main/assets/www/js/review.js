$(".confirm").on("click", function(){
    var item = $(this).parent().parent();
    console.log($(this).parent().parent().remove());
});