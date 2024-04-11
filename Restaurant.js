const play = () => {
    $("#hall").click(function(){
        $("#hell").text("Working!!!");
        $(".freecodecamp-logo").toggle(1000);
    })
}

$(document).ready(play);