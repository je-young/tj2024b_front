let 클래스목록 = [
  { 강의코드: 1, 강의명: 'HTML', 호실: '101호', 강사: '김철수' },
  { 강의코드: 2, 강의명: 'CSS', 호실: '102호', 강사: '이영희' },
  { 강의코드: 3, 강의명: 'JS', 호실: '103호', 강사: '홍길동' },
];

let 수강생목록 = [
  { 학생코드: 1, 학생이름: '유재석', 성별: '남', 전화번호: '010-1111-1111' },
  { 학생코드: 2, 학생이름: '이영애', 성별: '여', 전화번호: '010-2222-2222' },
  { 학생코드: 3, 학생이름: '강호동', 성별: '남', 전화번호: '010-3333-3333' },
];

let 수강목록 = [
  { 수강로고코드: 1, 학생코드: 1, 강의코드: 1 },
  { 수강로고코드: 2, 학생코드: 1, 강의코드: 3 },
];

let 학생코드 = 4;
// [1] 등록함수
function 등록함수() {
  // 1. [입력] html 수강생(input)으로 부터 입력받은 값(value)을 JS 로 가져온다.
  let 학생이름 = document.querySelector('#inputName').value;
  let 성별 = document.querySelector('#gender').value;
  let 전화번호 = document.querySelector('#phoneNumber').value;

  // 2. [처리] 새 수강생 객체 생성 --> 배열에 저장(push)
  let 새수강생 = {
    학생코드: 학생코드,
    학생이름: 학생이름,
    성별: 성별,
    전화번호: 전화번호,
  };
  수강생목록.push(새수강생); // 생성한 객체를 배열에 추가
  학생코드++; // 다음 학생코드 등록할때 학생코드가 1씩 증가 하기 위해서

  // 3. [출력]
  console.log(수강생목록); // 테스트/확인
  전체출력함수();

  // + 부가 코드
  alert(`${학생이름} 님 등록 되었습니다.`);
  document.querySelector('#inputName').value = ''; // [value 값 공백으로 수정]
  document.querySelector('#gender').value = ''; // [value 값 공백으로 수정]
  document.querySelector('#phoneNumber').value = ''; // [value 값 공백으로 수정]
  전체출력함수();
  return; // 함수종료, 리턴 값이 없는 생략 가능
}

// [2] 전체출력함수
// 전체출력함수();
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
                <td>
                  <button onclick="수정함수(${수강생.학생코드})">수정</button>
                  <button onclick="삭제함수(${수강생.학생코드})">삭제</button>
                </td>
            </tr>`;
  }
  // 3. html 출력, innerHTML
  전체출력.innerHTML = html;
  return; // 함수종료, 리턴 값이 없는 생략 가능
}

// [4] 삭제함수, [삭제]버튼 클릭시 onclick
function 삭제함수(삭제할코드) {
  console.log(`삭제함수가 호출되었습니다. 삭제할 코드: ${삭제할코드}`);
  // 1. 배열내 삭제할 요소(객체)를 찾기/조회/검색 등등
  for (let index = 0; index <= 수강생목록.length - 1; index++) {
    if (수강생목록[index].학생코드 === 삭제할코드) {
      // 만약에 index번째의 수강생목록 객체내 식별코드와 삭제할코드와 같으면
      // 2. 배열내 요소(객체) 삭제, .splice( 삭제할인덱스 , 개수 ) , 인덱스 필요.
      수강생목록.splice(index, 1); //현재 찾은 index 요소를 삭제한다.
      break; // 삭제 성공했을때 [다른 객체를 조회할 필요없이] 가장 가까운 반복문 종료.
    }
  }
  전체출력함수();
  return;
}

// [5] 수정함수, [수정]버튼 클릭시 onclick
function 수정함수(수정할코드) {
  console.log(`수정함수가 호출되었습니다. 수정할 코드: ${수정할코드}`);
  // 1. 배열내 수정할 요소(객체)를 찾기/조회/검색 등등
  for (let index = 0; index <= 수강생목록.length - 1; index++) {
    if (수강생목록[index].학생코드 === 수정할코드) {
      // 만약에 index번째의 수강생목록 객체내 식별코드와 수정할코드가 같으면
      // 2. 배열내 요소(객체)수정, prompt()
      let 수강생수정 = prompt(
        '수강생명 | 성별 | 전화번호 를 입력하세요!'
      ).split('|');
      수강생목록[index].학생이름 = 수강생수정[0];
      수강생목록[index].성별 = 수강생수정[1];
      수강생목록[index].전화번호 = 수강생수정[2];
      break; // 수정했다면 다음 객체 조회는 할 필요 없이 반복문 종료
    }
  }
  전체출력함수();
  return;
}

// ============================================================================================================================

let 강의코드 = 4;
클래스출력함수();

function 클래스등록함수() {
  let 클래스명 = document.querySelector('#클래스명').value;
  let 호실명 = document.querySelector('#호실명').value;
  let 강사명 = document.querySelector('#강사명').value;
  let 객체 = {
    강의코드: 강의코드,
    강의명: 클래스명,
    호실: 호실명,
    강사: 강사명,
  };
  클래스목록.push(객체);
  클래스출력함수();
} //f end

function 클래스출력함수() {
  let 클래스출력함수2 = document.querySelector('#클래스테이블');
  let innerHTML = '';
  for (let index = 0; index < 클래스목록.length; index++) {
    innerHTML += '<tr>';
    let 클래스 = 클래스목록[index];

    //console.log(인사정보)
    innerHTML += `<td>${클래스.강의명}</td><td>${클래스.호실}</td><td>${클래스.강사}</td><td><button onclick="클래스수정함수(${클래스.강의코드})">수정</button><button onclick="클래스삭제함수(${클래스.강의코드})">삭제</button></td>`;
    innerHTML += '</tr>';
  }
  클래스출력함수2.innerHTML = innerHTML;
} //f end

function 클래스삭제함수(강의코드) {
  // 1. 배열내 삭제할 요소(객체)를 찾기/조회/검색 등등
  for (let index = 0; index <= 클래스목록.length - 1; index++) {
    if (클래스목록[index].강의코드 == 강의코드) {
      // 만약에 index번째의 할일객체내 할일코드와 삭제할할일코드와 같으면
      // 2. 배열내 요소(객체) 삭제, .splice( 삭제할인덱스 , 개수 ) , 인덱스 필요.
      클래스목록.splice(index, 1); //현재 찾은 index 요소를 삭제한다.
      break; // 삭제 성공했을때 [다른 객체를 조회할 필요없이] 가장 가까운 반복문 종료.
    } // if end
  } // for end
  클래스출력함수();
  return;
} //f end

function 클래스수정함수(강의코드) {
  // 1. 배열내 수정할 객체/요소 를 찾는다.
  for (let index = 0; index <= 클래스목록.length - 1; index++) {
    if (클래스목록[index].강의코드 == 강의코드) {
      let 임시 = prompt('강의명/호실/강사 를 입력해주세요').split('/');
      클래스목록[index].강의명 = 임시[0];
      클래스목록[index].호실 = 임시[1];
      클래스목록[index].강사 = 임시[2];
      break;
    }
  }
  클래스출력함수();
  return;
} //f end
