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

    // 프로젝트 상세페이지 연결
    $('article').eq(0).click(function(e){
        e.preventDefault()
        $('.wrap>div').removeClass('on')
        $('.wrap .project01').addClass('on')
    })
    $('article').eq(1).click(function(e){
        e.preventDefault()
        $('.wrap>div').removeClass('on')
        $('.wrap .project02').addClass('on')
    })
    $('article').eq(2).click(function(e){
        e.preventDefault()
        $('.wrap>div').removeClass('on')
        $('.wrap .project03').addClass('on')
    })

    // 깃허브페이지 연결
    $('.project01 .gitadd').on('click', function() {
        window.open('https://juyeung.github.io/study310/project001/index.html', '_blank');
    });
    $('.project02 .gitadd').on('click', function() {
        window.open('https://juyeung.github.io/study310/project002/index.html', '_blank');
    });
    $('.project03 .gitadd').on('click', function() {
        window.open('https://juyeung.github.io/study310/project003/index.html', '_blank');
    });

}) // 스크립트 끝