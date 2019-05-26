$(function () {
    $('.movieItem img').on('click', function (e) {
        e.preventDefault(); //リンクの停止

        $("html,body").animate({
            'scrollTop': 180
        }, 500);


        var getmovie = $(this).attr("alt")

        $("#latestMovie iframe").attr("src", getmovie);




    });
});
