/*
    - 반복문과 배열 관계
        1. 배열의 인덱스는 순차적인 순서가 존재한다.
            배열이란? 여러개 요소/값 들을 순서대로 나열한 자료의 타입 
            인덱스이란? 배열내 저장된 순서 번호
            let 배열변수 = [ '유재석' , '강호동' , '하하' ]
                    index =   0          1         2     
                    length =  3      
        2. 0 부터 마지막 인덱스 까지 1씩 증가  
        3. 마지막인덱스 구하는 방법 ? 배열변수.length - 1
        4. 배열 순회 , 배열내 모든 요소를 하나씩 호출 하는 작업 
            for( let index = 0 ; index <= 배열변수.length - 1 ; index++ ){ 
                배열변수[index]
            }
*/

/*
// [1] 배열의 데이터
let 과일상자 = ['사과', '포도', '딸기']; // 3개의 문자열을 저장하는 배열 생성후 '과일상자'변수에 대입
// - 배열내 모든 요소를 하나씩 출력하세요.
// [반복문없이]
console.log(과일상자[0]); // 0번 인덱스의 요소 값 호출 후 출력한다. // - 인덱스 시작 번호
console.log(과일상자[1]); // 1번 인덱스의 요소 값 호출 후 출력한다.
console.log(과일상자[2]); // 2번 인덱스의 요소 값 호출 후 출력한다. // - 인덱스 마지막 번호 , .length - 1
// 반복되는 코드 : console.log( 과일상자[ ? ] )
// 반복되지 않는코드 : 0 1 2 // 반복되지 않는코드 순서/패턴 : 0부터 2까지 1씩 증가
// [반복문]
for (let index = 0; index <= 2; index++) {
  // index는 0부터 2까지 1씩증가 반복
  console.log(과일상자[index]);
} // for end
for (let index = 0; index <= 과일상자.length - 1; index++) {
  // index는 0부터 마지막인덱스까지 1씩증가 반복
  console.log(과일상자[index]);
} // for end
*/

// [2] 3개의 점수를 입력받아 점수배열에 모두 저장하시오.
// [반복문없이]
let 점수배열 = []; // 점수배열 선언 , 처음에는 빈배열로 시작
// prompt('점수1 : ')           // (1)HTML 알람창에서 입력받은 값을 반환 해주는 함수
let 점수1 = prompt('점수1 : '); // (2) 반환된 값을 점수1 변수에 대입 한다.
점수배열.push(점수1); //(3) 입력받은 값을 배열에 저장
let 점수2 = prompt('점수2 : ');
점수배열.push(점수2);
let 점수3 = prompt('점수3 : ');
점수배열.push(점수3);
// 중복코드 : let 점수1 = prompt('점수? : ') , 점수배열.push( 점수? )
// 중복되지않는코드 : 1 2 3 , 패턴 : 1부터 3까지 1씩증가
// [반복문 코드]
let 점수배열2 = []; // 전역변수 : { } 안에서 선언되지 않는 변수
for (let i = 1; i <= 3; i++) {
  // i는 1부터 3까지 1씩증가 반복
  let 점수 = prompt(`점수${i} : `); // 지역변수? 특정한 { } 안에서 선언된 변수를 지역변수
  점수배열2.push(점수); // - { } 밖으로 못나감/호출 불가능 ,
  console.log(점수배열2);
  // -  } 중괄호가 끝나면 변수는 사라짐(자동삭제)
} // for end

// [3] 점수배열2 에 저장된 모든 요소 들을 <li> 마크업에 출력하시오.
// [반복문 없이]
let outHTML = `<ol>`;
outHTML += `<li> ${점수배열2[0]} </li>`;
outHTML += `<li> ${점수배열2[1]} </li>`;
outHTML += `<li> ${점수배열2[2]} </li>`;
outHTML += `</ol>`;
document.write(outHTML);

// [반복문 코드 ] 반복코드 : outHTML += `<li> ${ 점수배열2[0] } </li>`
let outHTML2 = `<ol>`;
for (let index = 0; index <= 점수배열2.length - 1; index++) {
  // index는 0부터 마지막인덱스 까지 1씩 증가 반복
  outHTML2 += `<li> ${점수배열2[index]} </li>`;
} // for end
outHTML2 += `</ol>`;
document.write(outHTML2);
