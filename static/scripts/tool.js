$(".bi-arrow-up-circle-fill").hide();
$(window).scroll(function () {
    var scroll_amount = $(window).scrollTop();
    if (scroll_amount > 10) {
        $(".navbar").addClass('navbar_resize');
        $(".navbar").removeClass('navbar_noresize');
        $('.navbar').removeClass('navbar_color');
        $(".navbar img").addClass('navbar_logo_resize');
        $(".navbar img").removeClass('navbar_logo_noresize');
        $(".navbar-toggler").addClass('navbar_toggler_resize');
        $(".navbar-toggler").removeClass('navbar_toggler_noresize');
        $(".bi-arrow-up-circle-fill").fadeIn();
    }
    if (scroll_amount == 0) {
        $(".navbar").removeClass('navbar_resize');
        $(".navbar").addClass('navbar_noresize');
        $(".navbar img").removeClass('navbar_logo_resize');
        $(".navbar img").addClass('navbar_logo_noresize');
        $(".navbar-toggler").removeClass('navbar_toggler_resize');
        $(".navbar-toggler").addClass('navbar_toggler_noresize');
        $(".bi-arrow-up-circle-fill").fadeOut();
    }
});

function goToDownload() {
    document.getElementById("download").scrollIntoView();
}
function goToDemos() {
    document.getElementById("demos").scrollIntoView();
}
function goToDetails() {
    document.getElementById("details").scrollIntoView();
}
function goToSystemBoundary() {
    document.getElementById("systemBoundary").scrollIntoView();
}
function goToStudyLimits() {
    document.getElementById("studyLimits").scrollIntoView();
}
function goToFunctionalUnit() {
    document.getElementById("functionalUnit").scrollIntoView();
}
function goToDataSource() {
    document.getElementById("dataSource").scrollIntoView();
}
function goToEC3() {
    window.open("https://carbonleadershipforum.org/what-we-do/initiatives/ec3/");
}
function goToICE() {
    window.open("https://circularecology.com/embodied-carbon-footprint-database.html");
}
function load_coming_soon() {
    $("#coming_soon").fadeOut();
    $("#coming_soon").fadeIn();
}

var images = ["../static/images/tool/slideshow/general_script_layout.jpg",
    "../static/images/tool/slideshow/graph_and_color.jpg",
    "../static/images/tool/slideshow/graph_and_color_no_gh.jpg",
    "../static/images/tool/slideshow/material_and_layer_assignment.jpg"];
$(function () {
    var i = 0;
    $("#header").css("background-image", "url(images/" + images[i] + ")");
    setInterval(function () {
        i++;
        if (i == images.length) {
            i = 0;
        }
        $("#header").fadeOut(2000, function () {
            $(this).css("background-image", "url(images/" + images[i] + ")");
            $(this).fadeIn("slow");
        });
    }, 1000);
});