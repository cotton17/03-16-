$(function(){

    $('#gnb-tpggle-btn').click(function(){

        $('#gnb').toggleClass('on')
    });

    $('#site-map-btn').click(function(){
        $('#sitemap-modal').addClass('on')
    });

    $('#sitemap-modal-close').click(function(){
        $('#sitemap-modal').removeClass('on')
    });
})