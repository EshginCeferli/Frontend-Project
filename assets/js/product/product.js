$(document).ready(function () {

    $(".option-three img").mouseover(function () {
        console.log("dw");
        document.getElementById("foto").src = this.src;
    })


})