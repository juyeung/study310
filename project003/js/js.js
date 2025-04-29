$(document).ready(function(){
    // 페이지 로드 시 초기 세팅
    $('nav').hide();
    $('.logoTop').hide();
    $('#wrap').hide();
    $('.intro').show().addClass('on');

    // 화면의 높이값을 구해라
    let ht = $(window).height()
    console.log(ht);

    $('#wrap>div').height(ht);

    // 화면의 크기가 변경될때마다 화면의 크기를 찾아서 
    // section의 높이를 설정해라

    $(window).resize(function(){  
        let ht = $(window).height();
        $('#wrap>div').height(ht);
    })

    // 인트로 클릭 이벤트
    $('.intro .logo').click(function(){
        $('.intro').fadeOut(function() {
            $(this).removeClass('on').hide();
        });
        $('#wrap').fadeIn().addClass('on');
        $('nav').fadeIn();
        $('.logoTop').fadeIn();
    });

    // 인트로 자동 넘어가기 (5초 후)
    setTimeout(function(){
        if ($('.intro').is(':visible')) {
            $('.intro .logo').trigger('click');
        }
    }, 8000);

    // 메인 로고 클릭 시 다시 인트로로 복귀
    $('.logoTop').click(function(){
        $('#wrap').fadeOut(function() {
            $(this).removeClass('on').hide();
        });
        $('.intro').fadeIn().addClass('on');
        $('nav').fadeOut();
        $('.logoTop').fadeOut();
    });

    // 윈도우에서 스크롤했을때 스크롤top 값을 찾아라.

    $(window).scroll(function(){

        let sc = $(this).scrollTop()
        let ht = $(window).height();
        let h2ot = $('#wrap>div').offset().top;
       
        console.log(h2ot)
        console.log(sc);

        for(let a = 0; a <5; a++){

            if(sc>=(ht*a)-100 && sc<(ht*(a+1))-100){
                $('nav li').removeClass('on')
                $('nav li').eq(a).addClass('on');
                $('.box2 .navi p').removeClass('on')
                $('.box2 .navi p').eq(0).addClass('on')
                $('.box2>div').removeClass('on')
                $('.box2>div').eq(0).addClass('on')
                $('.box3 .navi p').removeClass('on')
                $('.box3 .navi p').eq(0).addClass('on')
                $('.box3 .player').removeClass('on')
                $('.box3 .player').eq(0).addClass('on')
            }

        }
        
        if(sc >= ht && sc < ht*4) {
            $("nav p").css("color", "#fff");
            $("nav .dot").css("background-color", "#fff");
            
        }
        else{
            $("nav p").css("color", "#66655d");
            $("nav .dot").css("background-color", "#b9b9b6");
        }
    });

    // gnb li 를 클릭했을때, scrollTop의 위치를 바꿔라 

    $('nav li').click(function(){

        // html body 안의 scrollTop을 애니매이션을 이용해 움직이게해라 

        /*
        애니메이션만드는방법 

        $('선택자').stop().animate({'속성명':'속성값'},작동시간-1000/1초,easing-생략가능)


        */

        let i = $(this).index();
        let ht = $(window).height();

        $('nav li').removeClass('on')
        $(this).addClass('on');

        $('html,body').stop().animate({'scrollTop':ht*i},1400)
    })


    // section에서 마우스 휠을 했을때, 다음화면으로 또는 이전화면으로 이동해라
    $('#wrap>div').mousewheel(function(event,delta){
        event.preventDefault();

        // 마우스를 올렸을때
        if(delta > 0) {
            let prev = $(this).prev().offset().top;
            $('html,body').stop().animate({'scrollTop':prev},800)
        }


        // 마우스를 내렸을때 
        else if (delta < 0){
            let next = $(this).next().offset().top;
            $('html,body').stop().animate({'scrollTop':next},800)
        }
    });

    // btn 클릭 시 4번째 div로 이동
    $('.btn').click(function(e) {
        e.preventDefault();
        let target = $('#wrap > div').eq(3);
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 800); // 1400ms 동안 부드럽게 스크롤
    });

    // ===================================================================

    // nav li 에 클릭을때, 나 자신에게 addClass를 해라
    $('nav li').click(function(){
        $('nav li').removeClass('on')
        $(this).addClass('on');

        // 클릭할때마다, 나 자신의 순변을 구하고,
        // 그 순번에 맞는 box의 높이를 찾아라
        let i = $(this).index()
        let divHt = $('#wrap>div').eq(i).height()
        

        // 박스마다 화면상단에서부터 떨어져있는 거리를 찾아라
        let divot = $('#wrap>div').eq(i).offset().top;
        console.log('박스'+i+'의 거리는'+divot);

        $('html,body').stop().animate({'scrollTop':divot},800)

        // 두 번째 li 클릭시 nav의 색을 변경
        if ($(this).index() >= 1 && $(this).index() <= 3) {
            $("nav p").css("color", "#fff");
            $("nav .dot").css("background-color", "#fff");  // 두 번째 li 클릭 시
        } else {
            $("nav p").css("color", "");
            $("nav .dot").css("background-color", "");  // 두 번째 li가 아니면 원래 색으로
        }
   
    });

    // player 네비게이션
    $('.box2 .navi p').click(function() {
        let index = $(this).index(); // 클릭한 p의 인덱스 (0부터 시작)

        $('.box2>div:not(.navi)').removeClass('on'); // 모든 div에서 active 제거
        $('.box2>div').eq(index).addClass('on'); // 해당 인덱스의 div에 active 추가
        
        $('.box2 .navi p').removeClass('on')
        $(this).addClass('on')
    });

    $('.box3 .navi p').click(function() {
        let index = $(this).index(); // 클릭한 p의 인덱스 (0부터 시작)

        $('.box3 .player').removeClass('on'); // 모든 div에서 active 제거
        $('.box3 .player').eq(index).addClass('on'); // 해당 인덱스의 div에 active 추가
        
        $('.box3 .navi p').removeClass('on')
        $(this).addClass('on')
    });


    // 갤러리
    $('article').mouseenter(function(){
        $(this).parent('.panolama').addClass('on')
    })

    $('article').mouseleave(function(){
        $(this).parent('.panolama').removeClass('on')
    })

    // article 클릭 시 팝업 열기
    const $modal = $(".modal");
    const $modalImg = $(".modal img");
    const $closeBtn = $(".modal .close");

    $(".box3 .panolama article").click(function () {
        let imgSrc = $(this).find("img").attr("src");
    
        console.log("수정된 이미지 경로:", imgSrc);
    
        if (imgSrc) {
            $(".modal img").attr("src", imgSrc);
            $(".modal").css("display", "flex").hide().fadeIn();
        }
        $("body").css("overflow", "hidden");
    });

    // 닫기 버튼 클릭 시 팝업 닫기
    $closeBtn.click(function () {
        $modal.fadeOut();
    });

    // 모달 배경 클릭 시 닫기
    $modal.click(function (e) {
        if ($(e.target).is($modal)) {
            $modal.fadeOut();
        }
        $("body").css("overflow", "auto");
    });

    // ESC 키 누르면 닫기
    $(document).keydown(function (e) {
        if (e.key === "Escape") {
            $modal.fadeOut();
        }
        $("body").css("overflow", "auto");
    });

    // 유튜브 영상 불러오기
    const videos = {
        "thum01": { id: "C0EZ09az1k4", title: "슬램덩크 오프닝한국판 너에게로 가는길" },
        "thum02": { id: "o24BBVXEs4Y", title: "보고 또 봐도 가슴이 울리는 명작! 슬램덩크 한방에 몰아보기 (애니리뷰) (결말포함)" },
        "thum03": { id: "nhjdgKVEa_g", title: "[더 퍼스트 슬램덩크 THE FIRST SLAM DUNK] 일본 The First 절찬상영중 예고편: 2023.01" },
        "thum04": { id: "O0Bpy4Kfw-U", title: "[더 퍼스트 슬램덩크] 확대 상영 기념 스페셜 영상" }
    };

    $(".vid").html('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/' + videos.thum04.id + '" frameborder="0" allowfullscreen></iframe>');
    $(".videoBox .title p").text(videos.thum04.title);

    $.each(videos, function (key, video) {
        $("." + key).click(function () {
            $(".vid").html('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/' + video.id + '" frameborder="0" allowfullscreen></iframe>');
            $(".videoBox .title p").text(video.title);
        });
    });

    // 마우스가 움직일때마다, img들의 위치값이 바뀌어라.
    $('.box4').mousemove(function(e){
        // 마우스의 위치값을 찾아라.
        let x = e.pageX;
        let y = e.pageY;

        $('.oj01').css({'bottom':50-(y/100), 'left':80-(x/120)})
        $('.oj02').css({'bottom':-10+(y/100), 'left':420+(x/120)})
        $('.oj03').css({'bottom':-20+(y/100), 'right':400+(x/120)})
        $('.oj04').css({'top':150+(y/100), 'left':250+(x/120)})
        $('.oj05').css({'bottom':280+(y/100), 'left':300-(x/120)})
        $('.oj06').css({'top':100+(y/100), 'left':50+(x/120)})
        $('.oj07').css({'top':100+(y/100), 'right':50+(x/120)})
        $('.oj08').css({'top':100-(y/100), 'right':400+(x/120)})
        $('.oj09').css({'top':0+(y/100), 'left':440+(x/120)})
        $('.oj10').css({'bottom':150+(y/100), 'left':50+(x/120)})
        $('.oj11').css({'bottom':100+(y/100), 'left':300+(x/120)})
        $('.oj12').css({'top':350+(y/100), 'right':360+(x/120)})

    })
    

    let audio = new Audio();
let isPlaying = false;
let isMuted = false;
let audioContext = new (window.AudioContext || window.webkitAudioContext)();
let visualizerAnalyzer, visualizerSource;

document.body.addEventListener("click", () => {
    if (audioContext.state === "suspended") {
        audioContext.resume();
    }
});

function initVisualizer() {
    let canvas = document.querySelector(".vlizer");
    if (!canvas) {
        console.error("Canvas 요소를 찾을 수 없습니다!");
        return;
    }
    let ctx = canvas.getContext("2d");
    canvas.width = 800;
    canvas.height = 150;

    if (!visualizerAnalyzer) {
        visualizerAnalyzer = audioContext.createAnalyser();
        visualizerAnalyzer.fftSize = 512; 
    }

    if (!visualizerSource) {
        visualizerSource = audioContext.createMediaElementSource(audio);
        visualizerSource.connect(visualizerAnalyzer);
        visualizerAnalyzer.connect(audioContext.destination);
    }

    function draw() {
        requestAnimationFrame(draw);
        let dataArray = new Uint8Array(visualizerAnalyzer.frequencyBinCount);
        visualizerAnalyzer.getByteTimeDomainData(dataArray); // 시간 도메인 데이터 사용
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    
        let sliceWidth = canvas.width / dataArray.length;
        let x = 0;
        ctx.lineWidth = 2;
        ctx.strokeStyle = "#66655d";  
        ctx.lineJoin = "round";
        ctx.lineCap = "round";
    
        ctx.beginPath();
    
        for (let i = 0; i < dataArray.length; i++) {
            let v = dataArray[i] / 255.0;  // 0~1 정규화
            let y = v * canvas.height;  // 높이를 캔버스 범위 내에서 조정
    
            if (i === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
    
            x += sliceWidth;
        }
    
        ctx.stroke();
    }
    
    draw();
}

// 목록 클릭 시 음악 재생
$(".listBox > div").click(function () {
    let filePath = $(this).attr("data-src"); // data-src 속성에서 경로 가져오기
    if (!filePath) return;

    audio.src = filePath;
    audio.play();
    isPlaying = true;
    $(".play i").removeClass("fa-play").addClass("fa-pause");
    $(".sound i").removeClass("fa-volume-high").addClass("fa-volume-xmark");

    // Initialize the visualizer after audio starts playing
    initVisualizer();

    // 모든 리스트의 이미지 스타일 초기화
    $(".listBox > div").removeClass("selected");

    // 클릭한 리스트에 selected 클래스 추가 (확대 유지)
    $(this).addClass("selected");

    // 모든 리스트의 이미지를 흑백 처리 후, 선택한 리스트만 컬러 유지
    $(".listBox > div img").css("filter", "grayscale(100%)"); // 모든 이미지 흑백
    $(this).find("img").css("filter", "grayscale(0%)"); // 클릭한 리스트만 컬러
});

// 플레이 상태 확인 변수

$(".play").click(function () {
    if (isPlaying) {
        audio.pause();
        $(".play i").removeClass("fa-pause").addClass("fa-play"); // 아이콘 변경
    } else {
        audio.play();
        $(".play i").removeClass("fa-play").addClass("fa-pause"); // 아이콘 변경
    }
    isPlaying = !isPlaying;
});

$(".stop").click(function () {
    audio.pause();
    audio.currentTime = 0; // 재생 위치를 처음으로 되돌리기
    $(".play i").removeClass("fa-stop").addClass("fa-play"); // 아이콘 변경
    $(".listBox > div").removeClass("selected");
    $(".listBox > div img").css("filter", "grayscale(0%)");
    isPlaying = false;
});


// 음소거 버튼
$(".sound").click(function () {
    isMuted = !isMuted;
    audio.muted = isMuted;

    if (isMuted) {
        $(".sound i").removeClass("fa-volume-xmark").addClass("fa-volume-high"); // 음소거 아이콘 변경
    } else {
        $(".sound i").removeClass("fa-volume-high").addClass("fa-volume-xmark");
         // 볼륨 아이콘 변경
    }
});

function updateTimeDisplay() {
    let currentTime = audio.currentTime;
    let duration = audio.duration;

    let currentMinutes = Math.floor(currentTime / 60);
    let currentSeconds = Math.floor(currentTime % 60);
    let durationMinutes = Math.floor(duration / 60);
    let durationSeconds = Math.floor(duration % 60);

    // 현재 시간 표시
    document.querySelector('.current-time').textContent = `${currentMinutes}:${currentSeconds < 10 ? '0' + currentSeconds : currentSeconds}`;
    // 전체 시간 표시
    document.querySelector('.duration-time').textContent = `${durationMinutes}:${durationSeconds < 10 ? '0' + durationSeconds : durationSeconds}`;

    // 진행바 업데이트
    let progress = (currentTime / duration) * 100;
    document.querySelector('.progress-bar').value = progress;
}

audio.addEventListener('timeupdate', updateTimeDisplay);

$(".progress-bar").on('input', function() {
    let newTime = (audio.duration * $(this).val()) / 100;
    audio.currentTime = newTime;
});


}) // 스크립트 끝