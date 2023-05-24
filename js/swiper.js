jQuery(document).ready(function () {
  // 메인 슬라이드
  let mainSwiper = new Swiper("#main_slide", {
    loop: true,
    autoplay: {
      delay: 6000,
      disableOnInteraction: false
    },
  });
  // 메뉴 슬라이드
  let sllerSwiper = new Swiper("#seller_swiper", {
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 24,
    speed: 700,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false // 사용자가 상호작용 후에도 스와이퍼가 비활성화 되지 않는다.
    },
    // 페이지네이션
    pagination: {
      el: ".seller_pager",
      type: "progressbar",
    },
    // 반응형 조건 속성
    breakpoints: {
      768: { // 디바이스 width가 768px 이상일 경우
        centeredSlides: false, // 슬라이드 왼쪽 정렬
        spaceBetween: 33,
      }
    }
  });
});
