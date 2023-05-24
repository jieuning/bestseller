jQuery(document).ready(function () {

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