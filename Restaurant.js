const start = () => {
    $(".page1").ready(function() {
        $(".page1 .name").addClass("animate__animated animate__bounce");
        $(".page1 img").addClass("animate__animated animate__slideInRight");
    })
}

$(document).ready(start);