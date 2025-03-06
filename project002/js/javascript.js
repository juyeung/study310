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



}) // 제이쿼리 끝.