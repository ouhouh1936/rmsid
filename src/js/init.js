function startRandom() {
  console.log("start random");

  const randomValue = Math.random() * 3 + 1;

  const exeValue = Math.floor(randomValue);
  const backgroudFileName = exeValue + ".pug";
  console.log(backgroudFileName);
}

function init() {
  console.log("init start");
  startRandom();
  //다른함수를 실행();
  //다른 함수를 위에 놓기
}
init();
/**
 * 표기법 : camel  표기법 ||case 표기법 || 낙타 표기법
 * 소문자로 시작하고, 띄어쓰기를 해야 하는 경우 띄어쓰기를 하지 않고 다음 글자를 대문자로 표기한다
 * 단, Class를 생성할 경우는 대문자로 시작한다.
 * 숫자로 시작할 수 없고, 특수문자는 _(언더바)만 가능하다.
 *
 * get backgroud name => getBackgroudName
 * modifind board data => modifindBoardDanta
 *
 * 변하지 않는수 상수 const
 * 클수록 변하는수 let
 */

//5+5=10
//"5"+"5"="55"
