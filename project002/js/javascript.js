// 제이쿼리 기본설정
$(document).ready(function(){
    // 실행문

    // product 제품페이지 안에 enjoy리스트
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


    // pro_d 제품상세페이지 안에 추천리스트
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



    // 장바구니 추가
    let cart = 0;

    $('.list .add').click(function(){

        let count = $('.cart_sub ul li').length;
            $('.util').find('.num').text(count+1);
            $('.total>div').eq(0).find('span').text(count+1)

    })

    // 장바구니를 클릭시 장바구니가 나타난다.

    // let aa=0
    
    // $('.cart').children('h2').click(function(){

    //     aa++;
    //     if(aa==2)aa=0;
    //     if(aa==1){
    //     $('.cart').addClass('on')
    // } else{
    //     $('.cart').removeClass('on')
    // }  
    // })

    // info의 리스를 클릭했을때,
    // img를 불러오고
    // p의 text를 불러와라

    $('.list .add').click(function(){
        let text = $(this).closest('li').find('h3').text();
        console.log(text);

        // $('.cartList').find('p').text(text);

        // attr()은 속성값을 불러오거나 작성하는 메서드다
        let img = $(this).closest('li').find('img').attr('src');
        console.log(img);
        // $('.cartList').find('img').attr({'src':img});

        $('<li><a href=""><div class="cartpro"><div class="imgBox"><img src="'+img+'" alt=""></div><div class="txt"><h4>'+text+'</h4><p>3,330원 x <span>1</span></p></div></div></a><div class="close"><img src="img/close_01.png" alt=""></div></li>').appendTo('.cart_sub ul')

        // cartList의 span을 클릭했을때, li가 사라져라.
        $('.cart_sub .close').click(function(){
            $(this).closest('li').remove();

            let count = $('.cartList ul li').length;
            $('.util').find('.num').text(count);
            $('.total>div').eq(0).find('span').text(count)
        })
    })

}) // 제이쿼리 끝.