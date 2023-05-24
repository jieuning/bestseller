jQuery(document).ready(function () {

  /* faq 아코디언메뉴 */
  $(".faq-head").click(function () {
    let btn = $(this);
    let sub = btn.siblings(".faq-content");

    $(".faq-content").not(sub).slideUp(); // 다른 요소를 클릭하면 전에 클릭했던 요소가 닫힌다
    sub.slideToggle();

    /* faq 화살표 클릭시 rotate 실행 */
    let li = btn.parent(); // 클릭한 .faq-head의 부모 요소 대입
    $(".faq-list > ul > li").not(li).removeClass("arrow_action"); // 클릭한 faq-head의 부모 요소를 제외한 li를 선택해서 arrow_action클래스가 있을 경우 제거
    li.toggleClass("arrow_action");
  });

  /* mobile menu 토글 버튼 */
  $(".m_menu").click(function () {
    $(".m_nav").toggleClass("open");
    $(this).toggleClass("click_btn")
  });

  /* mobile card-hover click */
  $(".card").click(function () {
    $(this).toggleClass("card-view");
  });
});