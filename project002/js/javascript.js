// 제이쿼리 기본설정
$(document).ready(function(){
    // 실행문

    // product 제품페이지 안에 enjoy리스트 슬라이드
    let num = 0;
    $('.yt').children('.leftbtn').click(function(){
    let maxNum = $('.yt').find('.con > ul > li').length - 4;
    if(num<maxNum) num++;
    console.log(num);

    $('.yt').children('.con').children('ul').stop().animate({'left':-262*num+'px'},800)
    })

    $('.yt').children('.rightbtn').click(function(){
    if(num>0) num--;
    console.log(num)
    
    $('.yt').children('.con').children('ul').stop().animate({'left':-262*num+'px'},800)
    })


    // pro_d 제품상세페이지 안에 추천리스트 슬라이드
    $('.more').children('.leftbtn').click(function(){
        let maxNum = $('.more').find('.moreCon > ul > li').length - 4;
        if(num<maxNum) num++;
        console.log(num);
    
        $('.more').children('.moreCon').children('ul').stop().animate({'left':-240*num+'px'},800)
        })
    
        $('.more').children('.rightbtn').click(function(){
        if(num>0) num--;
        console.log(num)
        
        $('.more').children('.moreCon').children('ul').stop().animate({'left':-240*num+'px'},800)
        })



    // 장바구니 리스트 추가삭제
    let cart = 0;

    $('.list .add').click(function(){
        let text = $(this).closest('li').find('h3').text();
        console.log(text);

        // $('.cartList').find('p').text(text);

        // attr()은 속성값을 불러오거나 작성하는 메서드다
        let img = $(this).closest('li').find('img').attr('src');
        console.log(img);
        // $('.cartList').find('img').attr({'src':img});

        let cartsubItem = '<li><a href=""><div class="cartpro"><div class="imgBox"><img src="'+img+'" alt=""></div><div class="txt"><h4>'+text+'</h4><p>3,330원 x <span>1</span></p></div></div></a><div class="close"><img src="img/close_01.png" alt=""></div></li>';
        let cartpageItem = '<li><div class="listBox"><div class="proBox"><div class="close"><i class="fa-regular fa-circle-xmark"></i></div><div class="proImg"><div class="imgBox"><img src="'+img+'" alt=""></div><p>'+text+'</p></div></div><p>3,330원</p><div class="count"><div class="countBox"><p><i class="fa-solid fa-minus"></i></p><p>00</p><p><i class="fa-solid fa-plus"></i></p></div></div><div class="total"><p><span>3,330</span>원</p></div><div class="line_a"></div></li>';
        $('.cart_sub ul').append(cartsubItem);
        $('.cartPage ul').append(cartpageItem);

        let count = $('.cart_sub ul li').length;
        $('.util').find('.num').text(count);
        $('.total>div').eq(0).find('span').text(count)

        // li가 사라져라.
        $('.cart_sub .close').click(function(){
            $(this).closest('li').remove();

            let count = $('.cartList ul li').length;
            $('.util').find('.num').text(count);
            $('.total>div').eq(0).find('span').text(count);
        })
        $('.cartPage .close').click(function(){
            $(this).closest('li').remove();
        })
        
    })

    // 페이지 연결
    // gnb 두번째 li를 클릭했을때, product에 on이 붙어라
    $('.gnb li').eq(1).click(function(e){
        e.preventDefault()
        $('.contents').removeClass('loginBig')
        $('.contents>div').removeClass('on')
        $('.contents>div').eq(1).addClass('on')
    })

    // logo를 클릭했을때, main에 on이 붙어라
    $('.logo').click(function(e){
        e.preventDefault()
        $('.contents').removeClass('loginBig')
        $('.contents>div').removeClass('on')
        $('.contents>div').eq(0).addClass('on')
    })

    $('.login h2').click(function(){
        $('.contents').removeClass('loginBig')
        $('.contents>div').removeClass('on')
        $('.contents>div').eq(0).addClass('on')
    })

    // util 첫번째 li를 클릭했을때, cart 에 on이 붙어라
    $('.util li').eq(0).click(function(e){
        e.preventDefault()
        $('.contents>div').removeClass('on')
        $('.cartPage').addClass('on')
    })

    // ultil 두번째 li를 클릭했을때, login 에 on이 붙어라
    $('.util li').eq(1).click(function(e){
        e.preventDefault()
        $('.contents').addClass('loginBig')
        $('.contents>div').removeClass('on')
        $('.contents>div').eq(3).addClass('on')
    })

    // main 에 pro의 li들을 클릭했을때, product 에 on이 붙어라
    $('.pro_list li').click(function(){
        $('.contents').removeClass('loginBig')
        $('.contents>div').removeClass('on')
        $('.contents>div').eq(1).addClass('on')
    })

    // product의 li들을 클릭했을때, pro_d 에 on이 붙어라
    $('.prolink').click(function(e){
        e.preventDefault()
        $('.contents').removeClass('loginBig')
        $('.contents>div').removeClass('on')
        $('.contents>div').eq(2).addClass('on')
    })
    

}) // 제이쿼리 끝.