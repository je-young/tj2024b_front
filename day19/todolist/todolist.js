// [1] 할일목록 요소(객체) 저장
let 할일목록 = [
  { 할일코드: 1, 할일내용: '학원수업듣기', 할일상태: false },
  { 할일코드: 2, 할일내용: '장보기', 할일상태: true },
];
console.log(할일목록);

// 식별번호(할일코드) 시작지점
let 식별번호 = 3;

// [2] 등록함수 : 등록버튼 클릭시 (onclick)
function 등록함수() {
  // 1. [입력] 받은 input에 html로 부터 '할일내용' 의 값을 반환받는다.
  let content = document.querySelector('.contentInput').value;
  // 2. [처리] 객체생성
  let 해야할일 = {
    할일코드: 식별번호,
    할일내용: content,
    할일상태: false,
  };
  // 3. [저장] 할일목록.push
  할일목록.push(해야할일);
  식별번호++;
  console.log(할일목록);
  // 전체출력함수();

  // 4. alert : 등록완료시
  alert(`Todo List 등록 하였습니다.`);
  document.querySelector('.contentInput').value = '';
} // function end

// [3] 전체출력함수 : 등록, 수정, 삭제 성공시
function 전체출력함수() {
  // 1. 어디에 : .contentBox
}
