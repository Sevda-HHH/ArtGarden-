$(document).ready(function() {

    // MAIN PAGE SIDENAV START  =============
    $(".navArtGarden i").mouseover(function() {
        $(this).css("color", "#F0C443")
        $(this).prev().css({
            "visibility": "visible",
            "color": "#F0C443"
        })
    })
    $(".navArtGarden").mouseout(function() {
        if ($(this).children().first().hasClass("active")) {
            return;
        } else {
            $(this).children().last().css("color", "white")
            $(this).children().first().css("visibility", "hidden")
        }
    })

    $(".navXoyski i").mouseover(function() {
        $(this).css("color", "#F0C443")
        $(this).prev().css({
            "visibility": "visible",
            "color": "#F0C443"
        })
    })
    $(".navXoyski").mouseout(function() {
        if ($(this).children().first().hasClass("active")) {
            return;
        } else {
            $(this).children().last().css("color", "white")
            $(this).children().first().css("visibility", "hidden")
        }

    })

    $(".navShop i").mouseover(function() {
        $(this).css("color", "#F0C443")
        $(this).prev().css({
            "visibility": "visible",
            "color": "#F0C443"
        })
    })
    $(".navShop").mouseout(function() {
        if ($(this).children().first().hasClass("active")) {
            return;
        } else {
            $(this).children().last().css("color", "white")
            $(this).children().first().css("visibility", "hidden")
        }
    })

    $(".navEmalatxana i").mouseover(function() {
        $(this).css("color", "#F0C443")
        $(this).prev().css({
            "visibility": "visible",
            "color": "#F0C443"
        })
    })
    $(".navEmalatxana").mouseout(function() {
        if ($(this).children().first().hasClass("active")) {
            return;
        } else {
            $(this).children().last().css("color", "white")
            $(this).children().first().css("visibility", "hidden")
        }
    })

    // MAIN PAGE SIDENAV START  =============

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

    $(" .turnRight").click(function() {
        sonuncu = $(this).parent().parent().next().length
        if (sonuncu == 0) {
            $(this).parent().parent().removeClass("d-block", 2000).addClass("d-none", 2000)
            $("#firstRught").parent().parent().addClass("d-block", 2000).removeClass("d-none", 2000)
        } else {
            $(this).parent().parent().removeClass("d-block", 2000).addClass("d-none", 2000)
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
                    $(this).removeClass("d-block").addClass("d-none")
                    $("#lastSlidePhoto").removeClass("d-none").addClass("d-block")
                } else {
                    $(this).removeClass("d-block").addClass("d-none")
                    $(this).prev().removeClass("d-none").addClass("d-block")
                }
            }
        })


    })

    //    POPUP ALBUM START 
    $(".albomPhotoPopUp").click(function() {
            pictureActive = $(this).attr("data-id");
            console.log(pictureActive)
            $(".albomPhotoSlide").children().each(function() {
                slidePic = $(this).attr("data-id")
                console.log(slidePic)
                if (pictureActive == slidePic) {
                    $(this).addClass("active")
                } else {
                    $(this).removeClass("active")
                }
            })
        })
        //    POPUP ALBUM END 


    //PROGRAM SLIDER START    
    function firstImgActive() {
        $(".firstPic img").each(function() {
            if (($(this).hasClass("active"))) {
                $(this).show()
            } else {
                $(this).hide()
            }
        })
    }

    function secindImgActiv() {
        $(".secondPic img").each(function() {
            if (($(this).hasClass("active"))) {
                $(this).show()
            } else {
                $(this).hide()
            }
        })
    }

    function thirdImgActiv() {
        $(".thirdPic img").each(function() {
            if (($(this).hasClass("active"))) {
                $(this).show()
            } else {
                $(this).hide()
            }
        })
    }

    function fourthImgActiv() {
        $(".fourthPic img").each(function() {
            if (($(this).hasClass("active"))) {
                $(this).show()
            } else {
                $(this).hide()
            }
        })
    }

    function lastImgActiv() {
        $(".lastPic img").each(function() {
            if (($(this).hasClass("active"))) {
                $(this).show()
            } else {
                $(this).hide()
            }
        })
    }
    thirdImgActiv();
    firstImgActive();
    secindImgActiv();
    fourthImgActiv();
    lastImgActiv();
    $(".carousel-control-next.programYazi").click(function() {
        $(".firstPic img.imgFirst.active").each(function() {
            if ($(this).next().length == 0) {
                $(".firstPic img.imgFirst").first().attr("class", "imgFirst active")
                $(this).attr("class", "imgFirst")
            } else {
                $(this).next().attr("class", "imgFirst active")
                $(this).attr("class", "imgFirst")
            }
        })
        $(".secondPic img.imfSecond.active").each(function() {
            if ($(this).next().length == 0) {
                $(".secondPic img.imfSecond").first().attr("class", "imfSecond active")
                $(this).attr("class", "imfSecond")
            } else {
                $(this).next().attr("class", "imfSecond active")
                $(this).attr("class", "imfSecond")
            }
        })
        $(".thirdPic img.imgThird.active").each(function() {
            if ($(this).next().length == 0) {
                $(".thirdPic img.imgThird").first().attr("class", "imgThird active")
                $(this).attr("class", "imgThird")
            } else {
                $(this).next().attr("class", "imgThird active")
                $(this).attr("class", "imgThird")
            }
        })
        $(".fourthPic img.imgFourth.active").each(function() {
            if ($(this).next().length == 0) {
                $(".fourthPic img.imgFourth").first().attr("class", "imgFourth active")
                $(this).attr("class", "imgFourth")
            } else {
                $(this).next().attr("class", "imgFourth active")
                $(this).attr("class", "imgFourth")
            }
        })
        $(".lastPic img.imgLast.active").each(function() {
            if ($(this).next().length == 0) {
                $(".lastPic img.imgLast").first().attr("class", "imgLast active")
                $(this).attr("class", "imgLast")
            } else {
                $(this).next().attr("class", "imgLast active")
                $(this).attr("class", "imgLast")
            }
        })
        secindImgActiv();
        firstImgActive();
        thirdImgActiv();
        fourthImgActiv();
        lastImgActiv();
    })
    $(".carousel-control-prev.programYazi").click(function() {
        $(".firstPic img.imgFirst.active").each(function() {
            if ($(this).prev().length == 0) {
                $(".firstPic img.imgFirst").last().attr("class", "imgFirst active")
                $(this).attr("class", "imgFirst")
            } else {
                $(this).prev().attr("class", "imgFirst active")
                $(this).attr("class", "imgFirst")
            }
        })
        $(".secondPic img.imfSecond.active").each(function() {
            if ($(this).prev().length == 0) {
                $(".secondPic img.imfSecond").last().attr("class", "imfSecond active")
                $(this).attr("class", "imfSecond")
            } else {
                $(this).prev().attr("class", "imfSecond active")
                $(this).attr("class", "imfSecond")
            }
        })
        $(".thirdPic img.imgThird.active").each(function() {
            if ($(this).prev().length == 0) {
                $(".thirdPic img.imgThird").last().attr("class", "imgThird active")
                $(this).attr("class", "imgThird")
            } else {
                $(this).prev().attr("class", "imgThird active")
                $(this).attr("class", "imgThird")
            }
        })
        $(".fourthPic img.imgFourth.active").each(function() {
            if ($(this).prev().length == 0) {
                $(".fourthPic img.imgFourth").last().attr("class", "imgFourth active")
                $(this).attr("class", "imgFourth")
            } else {
                $(this).prev().attr("class", "imgFourth active")
                $(this).attr("class", "imgFourth")
            }
        })
        $(".lastPic img.imgLast.active").each(function() {
            if ($(this).prev().length == 0) {
                $(".lastPic img.imgLast").last().attr("class", "imgLast active")
                $(this).attr("class", "imgLast")
            } else {
                $(this).prev().attr("class", "imgLast active")
                $(this).attr("class", "imgLast")
            }
        })
        secindImgActiv();
        firstImgActive();
        thirdImgActiv();
        fourthImgActiv();
        lastImgActiv();
    })

    //PROGRAM SLIDER END

    // IMAGE UPLOAD ICON START 
    $(".image-upload img").click(function() {
            $("#file-inputt").trigger("click");
        })
        // IMAGE UPLOAD ICON END 
})