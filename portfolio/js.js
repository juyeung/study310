$(document).ready(function(){
    // 페이지연결
    // nav 두번째 p를 클릭했을때, product에 on이 붙어라
    $('nav p').click(function(){
        $('nav p').removeClass('on')
        $(this).addClass('on')
    })
    $('nav p').eq(0).click(function(e){
        e.preventDefault()
        $('.wrap>div').removeClass('on')
        $('.wrap>div').eq(0).addClass('on')
    })
    $('nav p').eq(1).click(function(e){
        e.preventDefault()
        $('.wrap>div').removeClass('on')
        $('.wrap>div').eq(1).addClass('on')
    })
    $('nav p').eq(2).click(function(e){
        e.preventDefault()
        $('.wrap>div').removeClass('on')
        $('.wrap>div').eq(2).addClass('on')
    })

    // logo를 클릭했을때, main에 on이 붙어라
    $('.logo').click(function(e){
        e.preventDefault()
        $('.wrap>div').removeClass('on')
        $('.wrap>div').eq(0).addClass('on')
        $('nav p').removeClass('on')
        $('nav p').eq(0).addClass('on')
    })
})