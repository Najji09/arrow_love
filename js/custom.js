$(document).ready(function () {
  //마우스 무브시 안쪽 의 구문 실행
  $('body').mousemove(function (event) {
    //변수 win 에 브라우저 넓이 저장
    var win = $(window).width();
    //변수 posX에 화면상 마우스 커서 위치저장
    var posX = event.pageX;
    //백분율 200까지 백분율 수치저장
    var percent = Math.floor((posX / win) * 186);

    //해당변수 h3에 출력

    // $('h3').text(percent);
    //모든 img 태그 숨김처리

    $('section>img').hide();
    //현재 마우스 위치에 해당하는 img 의 순서만 보임
    $('section>img').eq(percent).show();
  });

  //변수 imgs에 따옴표만 넣어 빈 문자열 생성
  var imgs = '';
  //for문을 이용하여 변수i를 0부터 199까지 증가
  for (i = 1; i <= 186; i++) {
    //변수 imgs 에 대입연산자 이용해서 태그를 200개가 될떄까지 추가
    imgs += `<img src="img/${i}.jpg">`;
  }
  //section 태그 연결 변수 imgs를 넣어 다시 영역안에 추가
  $('section').html(imgs);
});
