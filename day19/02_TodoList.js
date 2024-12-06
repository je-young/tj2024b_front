// [1] 기본 배열 및 요소(객체) 작성
let 할일목록 = [
  { 할일코드: 1, 할일내용: '학원수업듣기', 할일상태: false },
  { 할일코드: 2, 할일내용: '장보기', 할일상태: true },
];
console.log(할일목록);

// [2] 식별번호 변수 저장
let 식별번호 = 3;

// [3] 등록함수, 실행조건 : 등록버튼 클릭시 onclick
function 등록함수() {
  // 1. [입력] html 로 부터 (할일내용) 입력받는 값(value)를 js 로 가져온다.
  let content = document.querySelector('.contentInput').value; // value 호출
  // 2. [처리] 객체생성 ---> 배열에 저장(push) ---> 콘솔에 출력 테스트
  let 해야할일 = {
    할일코드: 식별번호, // '식별번호' 변수값을 할일코드에 대입
    할일내용: content, // 입력받은 'content' 값을 할일내용에 대입
    할일상태: false, // 할일상태 초기값을 'false'(미완료 의미)에 대입
  }; // 해야할일 end
  할일목록.push(해야할일); // 생성한 객체를 배열에 저장/대입
  식별번호++; // 다음 '해야할일' 등록시에 식별코드가 1씩 증가하기 위함
  console.log(할일목록); // 할일목록에 추가 되는지 확인

  // + 부가코드ㅜ
  alert('Todo List 등록 되었습니다.');
  document.querySelector('.contentInput').value = ''; // 인풋에 텍스트 공백으로
  return; // 함수종료, 리턴값이 없는 생략가능
} // function end

// [4] 전체출력함수, 실행조건 : js 실행될때 등록, 수정(완료/미완료), 삭제가 성공했을때
function 전체출력함수() {
  // 1. 어디에 : #todoBottom, document.querySelector('#todoBottom');
  let todoBottom = document.querySelector('#todoBottom');

  // 2. 무엇을 : html 에 객체정보 넣기
  let html = '';
  for (let index = 0; index <= 할일목록.length - 1; index++) {
    // index 는 0부터 마지막 index까지 1씩 증가 반복
    let 객체정보 = 할일목록[index]; // index 번째의 객체(할일) 꺼내기
    // 객체정보를 html 로 구성하기, 삼항연산자를 이용한 값에 따른 class 넣기/빼기
    // 만약에 index 번째의 할일객체내 할일 상태가 'true' 이면 'success' 클래스명을 넣어주고 아니면 '' 공백을 넣는다.
    html += `<div class="contentBox ${
      객체정보.할일상태 == true ? 'success' : ''
    }">
              <h4 class="content"> ${객체정보.할일내용} </h4>
              <div class="contentBtns">
                <button onclick="수정함수(${
                  객체정보.할일코드
                })" class="updateBtn" type="button"> 수정 </button>
                <button onclick="삭제함수(${
                  객체정보.할일코드
                })" class="deleteBtn" type="button"> 삭제 </button>
              </div>
            </div>`;
  } // for end
  // 3. html 출력, innerHTML
  todoBottom.innerHTML = html;
  return; // 함수종료, 리턴값이 없는 생략가능
} // function end

// [5]
