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
        $('.header02').css('background-color','#FFFAEE')
    })
    $('nav p').eq(1).click(function(e){
        e.preventDefault()
        $('.wrap>div').removeClass('on')
        $('.wrap>div').eq(1).addClass('on')
        $('.header02').css('background-color','#FFFAEE')
    })
    $('nav p').eq(2).click(function(e){
        e.preventDefault()
        $('.wrap>div').removeClass('on')
        $('.wrap>div').eq(2).addClass('on')
        $('.header02').css('background-color','#FFFAEE')
    })

    // logo를 클릭했을때, main에 on이 붙어라
    $('.logo').click(function(e){
        e.preventDefault()
        $('.wrap>div').removeClass('on')
        $('.wrap>div').eq(0).addClass('on')
        $('nav p').removeClass('on')
        $('nav p').eq(0).addClass('on')
        $('.header02').css('background-color','#FFFAEE')
    })

    // 프로젝트 상세페이지 연결d
    $('article').eq(0).children('.mockup').click(function(e){
        e.preventDefault()
        $('.wrap>div').removeClass('on')
        $('.wrap .project01').addClass('on')
        $('.header02').css('background-color','#F9FBFF')
    })
    $('article').eq(1).children('.mockup').click(function(e){
        e.preventDefault()
        $('.wrap>div').removeClass('on')
        $('.wrap .project02').addClass('on')
        $('.header02').css('background-color','#FFFAEE')
    })
    $('article').eq(2).children('.mockup').click(function(e){
        e.preventDefault()
        $('.wrap>div').removeClass('on')
        $('.wrap .project03').addClass('on')
        $('.header02').css('background-color','#FBFBFA')
    })
    $('.latestBox>div').eq(0).click(function(e){
        e.preventDefault()
        $('.wrap>div').removeClass('on')
        $('.wrap .project01').addClass('on')
        $('.header02').css('background-color','#F9FBFF')
    })
    $('.latestBox>div').eq(1).click(function(e){
        e.preventDefault()
        $('.wrap>div').removeClass('on')
        $('.wrap .project02').addClass('on')
        $('.header02').css('background-color','#FFFAEE')
    })
    $('.latestBox>div').eq(2).click(function(e){
        e.preventDefault()
        $('.wrap>div').removeClass('on')
        $('.wrap .project03').addClass('on')
        $('.header02').css('background-color','#FBFBFA')
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

    // home mainImg 마우스위치에 따라 이미지 조정
    const $mainImg = $('.mainImg');
    const $rightBox = $('.rightBox');
    
    $mainImg.on('mousemove', function(e) {
        const mainImgWidth = $mainImg.width();
        const mouseX = e.clientX; // 마우스 X 좌표
        
        const percentage = (mouseX / mainImgWidth) * 100;
        
        // 오른쪽 박스: 마우스가 오른쪽으로 갈수록 더 많이 보이게 (오른쪽으로 이동)
        $rightBox.css('clip-path', 'inset(0 0 0 ' + (100 - percentage) + '%)');
    });

   
}) // 스크립트 끝