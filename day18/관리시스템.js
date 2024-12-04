let 수강생목록 = [
  { 학생코드: 1, 학생이름: '유재석', 성별: '남', 전화번호: '010-1111-1111' },
  { 학생코드: 2, 학생이름: '이영애', 성별: '여', 전화번호: '010-2222-2222' },
  { 학생코드: 3, 학생이름: '강호동', 성별: '남', 전화번호: '010-3333-3333' },
];

let 식별코드 = 3;
// [1] 등록함수
function 등록함수() {
  // 1. [입력] html 수강생(input)으로 부터 입력받은 값(value)을 JS 로 가져온다.
  let 수강생명 = document.querySelector('#inputName').value;
  let 수강생성별 = document.querySelector('#gender').value;
  let 폰번호 = document.querySelector('#phoneNumber').value;

  // 2. [처리] 객체 생성 --> 배열에 저장(push)
  let 학생목록 = {
    학생코드: 식별코드,
    학생이름: 수강생명,
    성별: 수강생성별,
    전화번호: 폰번호,
  };
  수강생목록.push(학생목록); // 생성한 객체를 배열에 저장/대입
  식별코드++; // 다음 학생코드 등록할때 학생코드가 1씩 증가 하기 위해서
  // 3. [출력]
  console.log(수강생목록); // 테스트/확인
  전체출력함수();

  // + 부가 코드
  alert(`${수강생명} 님 등록 되었습니다.`);
  document.querySelector('#inputName').value = ''; // [value 값 공백으로 수정]
  document.querySelector('#gender').value = ''; // [value 값 공백으로 수정]
  document.querySelector('#phoneNumber').value = ''; // [value 값 공백으로 수정]
  return; // 함수종료, 리턴 값이 없는 생략 가능
}

// [2] 전체출력함수
전체출력함수();
function 전체출력함수() {
  // 1. 어디에, #totalOutput
  let 전체출력 = document.querySelector('#totalOutput');
  // 2. 무엇을
  let html = ``;
  for (let index = 0; index <= 수강생목록.length - 1; index++) {
    // index 는 0부터 수강생목록내 마지막까지 1씩 증가 반복
    let 수강생 = 수강생목록[index]; // index 번째의 객체(수강생)꺼내기
    html += `<tr>
              <td>${수강생.학생이름}</td>
              <td>${수강생.성별}</td>
              <td>${수강생.전화번호}</td>
              <td><button onclick="수정함수()">수정</button><button onclick="삭제함수()">삭제</button></td>
            </tr>`;
  }
  // 3. html 출력, innerHTML
  전체출력.innerHTML = html;
  return; // 함수종료, 리턴 값이 없는 생략 가능
}
