// [문제1]
// 1. 영화 이름과 평점 배열
let movieNames = ['히든페이스', '위키드', '글래디에이터2', '청설'];
let movieRating = [8, 4, 7, 6];
// 2. 출력 문자열 생성
let resultHTML = '';
for (let i = 0; i < movieNames.length; i++) {
  // 별(⭐️) 개수를 평점에 따라 생성
  let stars = '⭐️'.repeat(movieRating[i]);
  //repeat() 메소드를 사용하여 입력된 문자열을 반복해서 출력
  // 영화 제목과 별을 합쳐 한 줄 생성
  resultHTML += `${movieNames[i]} ${stars}<br>`;
}
// 3. 화면에 출력
document.write(resultHTML);

// [문제2]
