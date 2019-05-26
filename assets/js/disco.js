$(function () {

    $(".items img").hover(function () {

        var geturl = $(this).attr("src");
        $("#wrapperOpacity").removeClass("opacity1");
        $("#wrapperOpacity").addClass("opacity0");
        $("#wrapper").css("background-image", "url(" + geturl + ")");
    }, function () {
        $("#wrapperOpacity").addClass("opacity1");
        $("#wrapperOpacity").removeClass("opacity0");

    });

});
