// search function for ACS Documentation.  This searches the page and highlights as the user types - JML 04072014

$(".navbar-search").on("keyup", function () {
    var v = $(this).val();
    $(".lead").removeClass("lead");
    var re = new RegExp("\\b" + v + "\\b","g")
    $("p").each(function () {
        if (v != "" && $(this).text().search(re) != -1) {
            $(this).addClass("lead");
        }
    });
});