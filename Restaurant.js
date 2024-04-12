const start = () => {
    $(".page1").ready(function() {
        $(".page1 .name").addClass("animate__animated animate__bounce");
        $(".page1 img").addClass("animate__animated animate__slideInRight");
        $(".page1 img").hover(function(){
            $(".page1 img").css('width','300px');
        })
    })
}

$(document).ready(start);