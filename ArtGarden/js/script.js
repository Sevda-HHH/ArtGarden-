$(document).ready(function() {
    var vid = document.getElementById("mywVideo");
    document.getElementById("mywVideo").play();
    vid.play()
    vid.muted = true;
    $("video").hover(function() {
        this.controls = false;
    })
    $(".artGardenn").hover(function() {
        $(".artGarden").css("display", "block");
    })
    $(".artGardenn").mouseout(function() {
        $(".artGarden").css("display", "none");
    })
    $(".shopp").hover(function() {
        $(".shop").css("display", "block");
    })
    $(".shopp").mouseout(function() {
        $(".shop").css("display", "none");
    })
    $(".emalatanaa").hover(function() {
        $(".emalatxana").css("display", "block");
    })
    $(".emalatanaa").mouseout(function() {
        $(".emalatxana").css("display", "none");
    })
    $(".xoyski").hover(function() {
        $(".xoyskii").css("display", "block");
    })
    $(".xoyski").mouseout(function() {
        $(".xoyskii").css("display", "none");
    })
    $(".bizeQoshull").hover(function() {
        $(".bizeQoshul").css("display", "block");
    })
    $(".bizeQoshull").mouseout(function() {
        $(".bizeQoshul").css("display", "none");
    })
});