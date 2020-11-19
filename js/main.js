const totaleElment = $(".element-item").length;

$(document).ready(function () {
    let btn = $(".project-section .but-group button");

    btn.click(function (e) {
        btn.removeClass("active");
        // console.log($(this).attr("data-filter"));
        // e.target.classList.add("active")
        $(this).addClass("active");

        let selector = $(this).attr("data-filter")

        $(".project-section .grid").isotope({
            filter: selector,
            isOriginLeft: false
        })
    })


    // Form Control list 
    let dataValue = [];
    let spanArr = [];
    var counter = 0;
    let spanElemnt = $(".form-followStep span");

    for (let i = 0; i < spanElemnt.length; i++) {
        spanArr.push(spanElemnt[i]);
    }

    let data = {
        name: "",
        email: "",
        address: "",
        message: ""
    }


    $(".input-form i").click(function () {
        if (counter <= spanElemnt.length - 1) {
            let dataValue = spanArr[counter].getAttribute("data");
            let vd = $(".input-form input").val();
            data[dataValue] = vd;
            $(".input-form input").val("");

            console.log(data);

            if (counter < spanElemnt.length - 1) {
                spanElemnt.removeClass("active");
                spanArr[counter + 1].classList.add("active")
            }
            counter++;
            console.log(counter);

        }
    })



    // display fixed nav
    $(".nav-icon").click(function () {
        // $(".nav-item").css("display", "block")
        $(".nav-item").fadeIn(400)
        $("body").css("overflow", "hidden")
    })

    $(".ex-btn img").click(function () {
        // $(".nav-item").css("display", "block")
        $(".nav-item").fadeOut(400)
        $("body").css("overflow", "auto")
    })



    // light Box
    // Set lightBox img max height  

    const wHeight = $(window).height();
    $(".lghtbox-img").css("max-height", wHeight + "px");


    // -------------Light box Start ---------------//
    //1-show the LightBox in the window
    $(".eye-icon").click(function () {
        index = $(this).parent(".project-item").index()
        $(".lightbox").addClass("open");
        lightboxShow();
    })

    //2- prev lightbox Icon 
    $(".lightbox .prev").click(function () {
        if (index == 0) {
            index = totaleElment - 1;
        } else {
            index--;
        }
        lightboxShow();
    })
    //3- Next lightbox Icon 
    $(".lightbox .next").click(function () {
        if (index == (totaleElment - 1)) {
            index = 0;
        } else {
            index++;
        }
        lightboxShow();
    })
    //4- Close lightbox Icon 
    $(".lightbox .lightbox-close").click(function () {
        $(".lightbox").removeClass("open");
    });

    //4-- close lightbox when click outside of img-box
    $(".lightbox").click(function (event) {
        if ($(event.target).hasClass("lightbox")) {
            $(this).removeClass("open");
        }
    })
    // -------------Light box End ---------------//

});

function lightboxShow() {
    const imgSrc = $(".element-item").eq(index).find("img").attr("src")
    

    $(".lghtbox-img").attr("src", imgSrc);
    $(".lightbox-counter").html(totaleElment + "/" + (index + 1));
}