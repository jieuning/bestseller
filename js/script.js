jQuery(document).ready(function () {
  // 메인 슬라이드
  var mainSwiper = new Swiper("#main_slide", {
    loop: true,
    autoplay: {
      delay: 6000,
      disableOnInteraction: false
    },
  });
  // 메뉴 슬라이드
  var sllerSwiper = new Swiper("#seller_swiper", {
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

  /* faq 아코디언메뉴 */
  $(".faq-head").click(function () {
    var btn = $(this);
    var sub = btn.siblings(".faq-content");

    $(".faq-content").not(sub).slideUp(); // 다른 요소를 클릭하면 전에 클릭했던 요소가 닫힌다
    sub.slideToggle();

    /* btn 디자인 */
    var li = btn.parent(); // 클릭한 .faq-head의 부모 요소 대입
    $(".faq-list > ul > li").not(li).removeClass("arrow_action"); // 클릭한 faq-head의 부모 요소를 제외한 li를 선택해서 arrow_action클래스가 있을 경우 제거
    li.toggleClass("arrow_action");
  });

  /* mobile menu click */
  $(".m_menu").click(function () {
    $(".m_nav").toggleClass("open");
    $(this).toggleClass("click_btn")
  });

  /* mobile card-hover click */
  $(".card").click(function () {
    $(this).toggleClass("card-view");
  });

  /* 스크롤 애니메이션 효과 */
  $(".text_title").scrollToGiveClass({
    class: "scroll",
    baseline: 'middle',
    add: 300
  });

  $(".seller_btn").scrollToGiveClass({
    class: "scroll",
    baseline: 'middle',
    add: 300
  });

  $(".seller_txt").scrollToGiveClass({
    class: "scroll",
    baseline: 'middle',
    add: 300
  });

  $("#review .title").scrollToGiveClass({
    class: "scroll",
    baseline: 'middle',
    add: 300
  });

  $(".review_item").scrollToGiveClass({
    class: "scroll",
    baseline: 'middle',
    add: 300
  });

  $("#faq .title").scrollToGiveClass({
    class: "scroll",
    baseline: 'middle',
    add: 300
  });

  $(".faq-list").scrollToGiveClass({
    class: "scroll",
    baseline: 'middle',
    add: 300
  });
});