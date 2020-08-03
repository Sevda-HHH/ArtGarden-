$(document).ready(function() {
    // var btnPage= $(".pageBtn").
    $(".smallPic img").click(function() {
        pageaa = $(this).attr("src");
        $(".largePic img").attr("src", pageaa);
        menuName = $(this).attr("data-name");
        menuPrice = $(this).attr("data-price");
        $(".menuPrice").text(menuPrice);
        $(".menuName").text(menuName);
    })
    $(".pageBtn").click(function() {
        $(".pageBtn").each(function() {
            $(this).removeClass("active")
        })
        $(this).addClass("active")
        var sevda = $(this).attr("data-page");
        $(".pageAlbm").each(function() {
            hello = $(this).attr("data-page");
            if (hello == sevda) {
                $(this).removeClass("d-none")
            } else {
                $(this).addClass("d-none")
            }
        })
    })

    $(".competitionImage img").each(function() {
        hello = $(this).attr("class");
        if (hello == "active") {
            $(this).show()
        } else {
            $(this).hide()
        }
    })
    $(".competitionText").each(function() {
        hello = $(this).attr("class");
        if (hello == "col-lg-5 col-sm-6 competitionText active") {
            $(this).show()
            alo = $(this).next()
            halo = $(this).prev().prev()
            console.log(alo.length)

            console.log(halo.length)

        } else {
            $(this).hide()
        }
    })
    $(" #turnRight").click(function() {
        $(".competitionText").each(function() {
            hello = $(this).attr("class");
            if (hello == "col-lg-5 col-sm-6 competitionText active") {
                console.log("hello")
            }
            return;
        })
    })

});
// $(document).ready(function() {
//     var vid = document.getElementById("mywVideo");
//     // document.getElementById("mywVideo").play();
//     // vid.play() vid.muted = true;
//     // $("video").hover(function() {
//     //     this.controls = false;
//     }) $(".artGardenn").hover(function() {
//         $(".artGarden").css("display", "block");
//     }) $(".artGardenn").mouseout(function() {
//         $(".artGarden").css("display", "none");
//     }) $(".shopp").hover(function() {
//         $(".shop").css("display", "block");
//     }) $(".shopp").mouseout(function() {
//         $(".shop").css("display", "none");
//     }) $(".emalatanaa").hover(function() {
//         $(".emalatxana").css("display", "block");
//     }) $(".emalatanaa").mouseout(function() {
//         $(".emalatxana").css("display", "none");
//     }) $(".xoyski").hover(function() {
//         $(".xoyskii").css("display", "block");
//     }) $(".xoyski").mouseout(function() {
//         $(".xoyskii").css("display", "none");
//     }) $(".bizeQoshull").hover(function() {
//         $(".bizeQoshul").css("display", "block");
//     }) $(".bizeQoshull").mouseout(function() {
//         $(".bizeQoshul").css("display", "none");
//     })
// })