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

    // $(".competitionImage img").each(function() {
    //     hello = $(this).attr("class");
    //     if (hello == "active") {
    //         $(this).show()
    //     } else {
    //         $(this).hide()
    //     }
    // })

    $(" .turnRight").click(function() {
        sonuncu = $(this).parent().parent().next().length
        if (sonuncu == 0) {
            $(this).parent().parent().removeClass("d-block", 2000).addClass("d-none")
            $("#firstRught").parent().parent().addClass("d-block", 2000).removeClass("d-none", 2000)

        } else {
            $(this).parent().parent().removeClass("d-block", 2000).addClass("d-none")
            $(this).parent().parent().next().addClass("d-block", 2000).removeClass("d-none", 2000)
        }
        content = $(this).attr("data-id")
        $(".competitionImage img").each(function() {

            if (content == $(this).attr("data-id")) {
                if ($(this).next().length == 0) {
                    $(this).removeClass("d-block").addClass("d-none")
                    $("#firstSlidePhoto").removeClass("d-none").addClass("d-block")
                } else {
                    $(this).removeClass("d-block").addClass("d-none")
                    $(this).next().removeClass("d-none").addClass("d-block")
                }
            }
        })
    });
    $(" .turnLeft").click(function() {
        if ($(this).attr("id") == "firstLeft") {
            console.log("yess")
            $(this).parent().parent().removeClass("d-block", 2000).addClass("d-none")
            $("#lastLeft").parent().parent().addClass("d-block", 2000).removeClass("d-none", 2000)
        } else {

            console.log("noo")
            $(this).parent().parent().removeClass("d-block", 2000).addClass("d-none")
            $(this).parent().parent().prev().addClass("d-block", 2000).removeClass("d-none", 2000)
        }
        content = $(this).attr("data-id")
        $(".competitionImage img").each(function() {

            if (content == $(this).attr("data-id")) {
                if ($(this).prev().length == 0) {
                    console.log("yyeeee")
                    $(this).removeClass("d-block").addClass("d-none")
                    $("#lastSlidePhoto").removeClass("d-none").addClass("d-block")
                } else {
                    console.log("nouuuuu")
                    $(this).removeClass("d-block").addClass("d-none")
                    $(this).prev().removeClass("d-none").addClass("d-block")
                }
            }
        })
    })

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
})