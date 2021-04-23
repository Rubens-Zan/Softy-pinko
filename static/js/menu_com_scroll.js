$(function () {
    // função para 
    $(window).scroll(function () {
        let windowOffY = $(window).scrollTop();
        let windowHeight = $(window).height();
        $('.sessao').each(function () {
            let elOffY = $(this).offset().top;
            if (elOffY + 120 < (windowOffY + windowHeight) &&
                elOffY+120+$(this).height() > windowOffY) {
                $('.black').css('color', 'black');
                let id = $(this).attr('id');
                //console.log($(this).attr('id'));
                $('.' + id).css('color', 'pink'); 
                return; 
            }
        })
    })
})