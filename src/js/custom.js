$(function () {
    $(".product__price").eq( 0 ).click(function () {
        $(".product__price").eq( 0 ).addClass("product__price--hover");
        $(".product__price").eq( 1 ).removeClass("product__price--hover");
        $(".product__price").eq( 2 ).removeClass("product__price--hover");
    });
    $(".product__price").eq( 1 ).click(function () {
        $(".product__price").eq( 1 ).addClass("product__price--hover");
        $(".product__price").eq( 0 ).removeClass("product__price--hover");
        $(".product__price").eq( 2 ).removeClass("product__price--hover");
    });
    $(".product__price").eq( 2 ).click(function () {
        $(".product__price").eq( 2 ).addClass("product__price--hover");
        $(".product__price").eq( 0 ).removeClass("product__price--hover");
        $(".product__price").eq( 1 ).removeClass("product__price--hover");
    });
});