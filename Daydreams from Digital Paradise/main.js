$(function () {
    $(".window").draggable({
        containment: "parent",
        scroll: false
    });
});
$(".button.close").click(function () {
    $(this).parents('.window').hide();
});
$(".login-button").click(function () {
    $(".login-whiteout").hide();
});

$(".memory-button").click(function () {
    $(".error-whiteout").hide();
});

$(".contacts-button").click(function () {
    $(".error-2-whiteout").hide();
});
$('.js-opens-window').click(function() {
    var target = $(this).data('window');
    $(target).show();
});

$(function () {
    $("#tabs").tabs();
});

var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

var newDate = new Date();
newDate.setDate(newDate.getDate());
$('#DateAbbr').html(dayNames[newDate.getDay()].substr(0, 3) + " ");

setInterval(function () {
    var minutes = new Date().getMinutes();
    $(".min, .mins").html((minutes < 10 ? "0" : "") + minutes);
}, 1000);

setInterval(function () {
    var hours = new Date().getHours();
    $(".hours, .hour").html((hours < 10 ? "0" : "") + hours);
}, 1000);


$(document).ready(function(){
    $(".refreshbutton").click(function(){
        location.reload(true);
    });
});


$(".window").click(function(){
       $('.top').removeClass('top');
       $(this).addClass('top');

    });

    $(document).ready(function(){
              $(".dropbtn").click(function(){
            $(".dropbtn").css("animation-play-state", "paused",);;
            
        });
    });

