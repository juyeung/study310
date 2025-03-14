// 제이쿼리 기본설정
$(document).ready(function(){
    // 실행문

    // product 제품페이지 안에 enjoy리스트 슬라이드
    let num = 0;
    $('.yt').children('.rightbtn').click(function(){
    let maxNum = $('.yt').find('.con > ul > li').length - 4;
    if(num<maxNum) num++;
    console.log(num);

    $('.yt').children('.con').children('ul').stop().animate({'left':-262*num+'px'},800)
    })

    $('.yt').children('.leftbtn').click(function(){
    if(num>0) num--;
    console.log(num)
    
    $('.yt').children('.con').children('ul').stop().animate({'left':-262*num+'px'},800)
    })


    // pro_d 제품상세페이지 안에 추천리스트 슬라이드
    $('.more').children('.rightbtn').click(function(){
        let maxNum = $('.more').find('.moreCon > ul > li').length - 4;
        if(num<maxNum) num++;
        console.log(num);
    
        $('.more').children('.moreCon').children('ul').stop().animate({'left':-240*num+'px'},800)
        })
    
        $('.more').children('.leftbtn').click(function(){
        if(num>0) num--;
        console.log(num)
        
        $('.more').children('.moreCon').children('ul').stop().animate({'left':-240*num+'px'},800)
        })



    // 장바구니 리스트 추가삭제
    $('.add').click(function() {
        let text = $(this).closest('li').find('h3').text();
        let img = $(this).closest('li').find('img').attr('src');
        
        // 상품의 고유한 itemId 생성
        let itemId = 'item-' + text.replace(/\s+/g, '-').toLowerCase() + '-' + img.split('/').pop().replace(/\.[^/.]+$/, "");
    
        // 이미 장바구니에 해당 상품이 있는지 확인
        let existingItem = $('.cart_sub ul li').filter(function() {
            return $(this).data('id') === itemId;
        });
    
        if (existingItem.length > 0) {
            // 이미 상품이 있으면 수량만 증가
            let quantity = existingItem.find('.cart-quantity');
            let currentQty = parseInt(quantity.data('count'));  // data 속성으로 수량을 저장
            let newQty = currentQty + 1;
    
            // 수량 갱신
            quantity.data('count', newQty);
            quantity.text(newQty);  // 텍스트도 수량에 맞게 갱신
    
            // 총 금액 갱신
            let totalPrice = 3330 * newQty;
            existingItem.find('.total span').text(totalPrice.toLocaleString());
    
            // cartPage에서 수량 갱신
            let cartPageItem = $('.cartPage-item').filter(function() {
                return $(this).data('id') === itemId;
            });
            cartPageItem.find('.quantity').text(newQty);  // cartPage에서 수량 갱신
            cartPageItem.find('.total span').text((3330 * newQty).toLocaleString());  // cartPage 총액 갱신
    
        } else {
            // 상품이 없다면 새 항목 추가
            let cartSubItem = `<li data-id="${itemId}">
                <div class="cartpro">
                    <div class="imgBox">
                        <img src="${img}" alt="${text}">
                    </div>
                    <div class="txt">
                        <h4>${text}</h4>
                        <p>3,330원 x <span class="cart-quantity" data-count="1">1</span></p>
                    </div>
                </div>
                <div class="close">
                    <img src="img/close_01.png" alt="삭제">
                </div>
            </li>`;
    
            let cartPageItem = `<li class="cartPage-item" data-id="${itemId}">
                <div class="listBox">
                    <div class="proBox">
                        <div class="close">
                            <i class="fa-regular fa-circle-xmark"></i>
                        </div>
                        <div class="proImg">
                            <div class="imgBox">
                                <img src="${img}" alt="${text}">
                            </div>
                            <p>${text}</p>
                        </div>
                    </div>
                    <p>3,330원</p>
                    <div class="count">
                        <div class="countBox">
                            <p class="decrease"><i class="fa-solid fa-minus"></i></p>
                            <p class="quantity">1</p>
                            <p class="increase"><i class="fa-solid fa-plus"></i></p>
                        </div>
                    </div>
                    <div class="total">
                        <p><span>3,330</span>원</p>
                    </div>
                </div>
                <div class="line_a"></div>
            </li>`;
    
            // 장바구니에 추가
            $('.cart_sub ul').append(cartSubItem);
            $('.cartPage ul').append(cartPageItem);
    
        }
    });
    
    // 수량 증가
    $(document).on('click', '.increase', function() {
        let itemId = $(this).closest('li').data('id');
        let quantity = $(this).siblings('.quantity');
        let currentQty = parseInt(quantity.text());
        let newQty = currentQty + 1;
    
        // 수량 갱신
        quantity.text(newQty);
    
        // .cartpro에서 수량 갱신
        let cartSubItem = $(`[data-id="${itemId}"]`);
        cartSubItem.find('.cart-quantity').data('count', newQty).text(newQty);  // data 속성으로 수량 저장 및 텍스트 갱신
    
        // 총 금액 갱신
        let totalPrice = 3330 * newQty;
        cartSubItem.find('.total span').text(totalPrice.toLocaleString());
    
        // cartPage에서 수량 갱신
        let cartPageItem = $(`[data-id="${itemId}"]`);
        cartPageItem.find('.quantity').text(newQty);  // cartPage에서 수량 갱신
        cartPageItem.find('.total span').text((3330 * newQty).toLocaleString());  // cartPage 총액 갱신
    
    });
    
    // 수량 감소
    $(document).on('click', '.decrease', function() {
        let itemId = $(this).closest('li').data('id');
        let quantity = $(this).siblings('.quantity');
        let currentQty = parseInt(quantity.text());
    
        if (currentQty > 1) {
            let newQty = currentQty - 1;
    
            // 수량 갱신
            quantity.text(newQty);
    
            // .cartpro에서 수량 갱신
            let cartSubItem = $(`[data-id="${itemId}"]`);
            cartSubItem.find('.cart-quantity').data('count', newQty).text(newQty);  // data 속성으로 수량 저장 및 텍스트 갱신
    
            // 총 금액 갱신
            let totalPrice = 3330 * newQty;
            cartSubItem.find('.total span').text(totalPrice.toLocaleString());
    
            // cartPage에서 수량 갱신
            let cartPageItem = $(`[data-id="${itemId}"]`);
            cartPageItem.find('.quantity').text(newQty);  // cartPage에서 수량 갱신
            cartPageItem.find('.total span').text((3330 * newQty).toLocaleString());  // cartPage 총액 갱신
    
        }
    });

    $('.add').click(function(){

        let count = $('.cartPage ul li').length;
        $('.util').find('.num').text(count);
    })
    
    // 삭제 버튼 클릭 시 아이템 삭제
    $(document).on('click', '.close, .fa-circle-xmark', function() {
        let itemId = $(this).closest('li').data('id');
        $(`[data-id="${itemId}"]`).remove();

        let count = $('.cartPage ul li').length;
        $('.util').find('.num').text(count);

        updateTotalPrice();
    });

    // 총 금액 합산
    function updateTotalPrice() {
        let total = 0;
    
        // 모든 상품의 개별 총액(.total span) 값을 합산
        $('.cartPage ul li .total span').each(function() {
            total += parseInt($(this).text().replace(/,/g, '')); // 쉼표 제거 후 숫자로 변환
        });
    
        // 총 금액 업데이트
        $('.price span').text(total.toLocaleString());

        // 쿠폰 적용
        let couponDiscount = parseInt($('.cpcheck span').text().replace(/,/g, '').replace(/[^0-9-]/g, '')) || 0;
        let finalPrice = total + couponDiscount; // 할인 금액이 음수이므로 더하기

        // 결제 금액 업데이트
        $('.chout span').text(finalPrice.toLocaleString());
    }
    
    // 상품 추가, 수량 증가/감소, 삭제 시 총 금액 업데이트
    $(document).on('click', '.add, .increase, .decrease, .close, .fa-circle-xmark', function() {
        updateTotalPrice();
    });

    // 쿠폰 값이 변경될 때도 업데이트 (쿠폰 적용 버튼이 있으면 거기에 이벤트 추가)
    $(document).on('input', '.cpcheck span', function() {
        updateTotalPrice();
    });
    
    

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