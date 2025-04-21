$(document).ready(function(){
    $("#datepicker").datepicker({
        dateFormat: "yy년 mm월 dd일",
        showOtherMonths: true,
        selectOtherMonths: true,
        prevText: "",
        nextText: "",
        beforeShow: function () {
          setTimeout(setIcons, 0);
        },
        onChangeMonthYear: function () {
          setTimeout(setIcons, 0);
        }
      });

      function setIcons() {
        $(".ui-datepicker-prev").html('◀');
        $(".ui-datepicker-next").html('▶');
      }

    //   스크롤 이동
      $(".landing .title .button>p").click(function () {
        $("html, body").animate({
          scrollTop: 3300 // 원하는 위치(px 단위)
        }, 1000); // 0.5초 동안 스크롤 이동
      });

    //   header 숨기기 나타내기
    let lastScrollTop = 0;

  $(window).on("scroll", function () {
    let st = $(this).scrollTop();

    if (st > lastScrollTop) {
      // 스크롤 내릴 때: header 숨기기
      $(".header").css("top", "-100px");
    } else {
      // 스크롤 올릴 때: header 보여주기
      $(".header").css("top", "0");
    }

    lastScrollTop = st;
    // 배경 투명 처리
  if (st === 0) {
    $(".header").css("background-color", "transparent");
  } else {
    $(".header").css("background-color", "rgba(0, 0, 0, 0.4)");
  }
  });
  

  // 마우스가 상단에 올라왔을 때 header 강제로 보이기
  $(document).on("mousemove", function (e) {
    if (e.clientY <= 100) {
      $(".header").css("top", "0");
    }
  });
});