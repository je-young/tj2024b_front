/*
  주제 : TODO LIST 구현하기

  개발순서
    1. 구현할 화면을 스케치(프로토타입) 작성.
    2. 구성한 화면을 html 과 css 로 샘플 작성하기.
    3. 배열타입 과 객체타입 을 이용한 메모리 구성
        할일코드      할일내용      할일상태
        1             수업듣기      true
        2             밥먹기        false
        3             공부하기      false

    - 할일코드 : 할일내용과 할일상태는 중복이 존재하므포 식별자 역할 못한다.
        - 식별자가 필요한 이유는 수정 또는 삭제시 수정/삭제할 대상이 식별 되어야 한다.

    - 할일상태 : 할일상태는 '완료' = 1 / true 또는 '미완료' = 0 / false 로 표현할 생각
        - true에 '완료' 의미 부여, false에 '미완료' 의미 부여
            --> 1.if 간소화 2.'완료'단어보다 true리터럴이 메모리가 더 적다.
    - 객체와 배열 샘플 구성 (표/테이블=배열, 가로/행1개 = 객체1개)

    4. (JS) 기능/이벤트 구성
        1. 필요한 함수/기능 들을 파악
        2. 각 함수들이 실행되는 조건
        3. 각 함수들의 매개변수/리턴값
          - (1)등록함수 : 실행조건 : [등록]버튼 클릭시 onclick                      , 매개변수 : X / 리턴값 : X
          - (2)출력함수 : 실행조건 : 1.JS실행될때 2.등록/수정/삭제가 성공했을때     , 매개변수 : X / 리턴값 : X
          - (3)수정함수 : 실행조건 :                                                , 매개변수 : 할일코드 / 리턴값 : X
          - (4)삭제함수 : 실행조건 :                                                , 매개변수 : 할일코드 / 리턴값 : X

          function 함수명(매개변수1, 매개변수2){
            return 리턴값
          }
          
          매개변수          과일믹서기
          과일, 물          


*/
// [1]
let 할일목록 = [
  { 할일코드: 1, 할일내용: '수업듣기', 할일상태: false },
  { 할일코드: 2, 할일내용: '밥먹기', 할일상태: true },
  { 할일코드: 3, 할일내용: '공부하기', 할일상태: true },
];

let 식별번호 = 3;

// [2] 등록함수, (p:x, r:x)
function 등록함수() {
  // 1. [입력] html 로 부터 (할일내용) 입력받은 값(value)을 JS 로 가져온다.
  let content = document.querySelector('.contentInput').value;
  // 2. [처리] 객체 생성 --> 배열에 저장(push)
  let 할일 = {
    할일코드: 식별번호, // '식별번호' 변수값을 대입
    할일내용: content, // 입력받은 'content' 변수값을 대입
    할일상태: false, // 초기값을 false(미완료 의미) 대입
  };
  할일목록.push(할일); // 생성한 객체를 배열에 저장/대입
  식별번호++; // 다음 할일이 등록할때 식별코드가 1씩 증가 하기 위해서
  // 3. [출력]
  console.log(할일목록); // 테스트/확인
  // + 부가 코드
  alert('[할일 등록 했습니다.]');
  document.querySelector('.contentInput').value = ''; // [value 값 공백으로 수정]
  return;
}

// [3] 전체출력함수, (p:x, r:x) - (2)출력함수 : 실행조건 : 1.JS실행될때 2.등록/수정/삭제가 성공했을때     , 매개변수 : X / 리턴값 : X
전체출력함수();
function 전체출력함수() {
  // 1. 어디에, #todoBottom, document.querySelector
  let todoBottom = document.querySelector('#todoBottom');
  // 2. 무엇을
  let html = ``;
  for (let index = 0; index <= 할일목록.length - 1; index++) {
    // index 는 0부터 할일목록내 마지막까지 1씩 증가 반복
    let info = 할일목록[index]; // index 번째의 객체(할일)꺼내기
    // 객체 정보를 html 로 구성하기, 삼항연산자 를 이용한 값에 따른 class 넣기/빼기
    // 만약에 index 번째의 할일 객체내 할일 상태가 true 이면 'success' 클래스명 을 넣어주고 아니면 공백
    html += `<div class="contentBox ${info.할일상태 == true ? 'success' : ''}">
        <div class="content"> ${info.할일내용} </div>
        <div class="contentBtns">
          <button class="updateBtn" type="button"> 수정 </button>
          <button class="deleteBtn" type="button"> 삭제 </button>
        </div>
      </div>`;
  }
  // 3. html 출력, innerHTML
  todoBottom.innerHTML = html;
  return; // 함수종료, 리턴 값이 없는 생략 가능
}

// [4] 수정함수, (p:할일코드, r:x)
function 수정함수() {
  전체출력함수();
  return;
}

// [5] 삭제함수, (p:할일코드, r:x), [삭제]버튼 클릭시 onclick
function 삭제함수(삭제할일코드) {
  // 1. 배열내 삭제할 요소(객체)를 찾기
  for (let index = 0; index <= 할일목록.length - 1; index++) {
    if (할일목록[index].할일코드 == 삭제할일코드) {
      할일목록.splice(index, 1);
      break;
    }
  }
  전체출력함수();
  return;
}
