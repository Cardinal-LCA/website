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

$("#work_sample").removeAttr('required');
$("#experience").removeAttr('required');
$("#cv_url").removeAttr('required');

$("#work_sample_div").hide();
$("#experience_div").hide();

$("#role").change(function () {
    stageChange($(this).val());
});

function stageChange(stateValue) {
    if (stateValue == "Digital Content Creator") {
        $("#work_sample_div").show();
        $("#experience_div").show();
        $("#cv_url").removeAttr('required');
        $("#cv_url_label").html('Can we get the link to your CV?');
        $("#work_sample").prop('required', true);
        $("#experience").prop('required', true);
    }
    if (stateValue == "Database Manager/API Developer") {
        $("#cv_url").prop('required', true);
        $("#cv_url_label").html('Can we get the link to your CV?*');
        $("#work_sample_div").hide();
        $("#experience_div").hide();
        $("#work_sample").removeAttr('required');
        $("#experience").removeAttr('required');
    }
}