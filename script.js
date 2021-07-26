const loginInput =document.querySelector("input.input__army-data");
const loginBtn = document.querySelector("input.input__btn");
let vYear;
let vMonth;
let vDay;
let flag = false;
function onLoginSubmit(event){
  const result = document.querySelector(".result");
  let newDiv;
  event.preventDefault();
  let str = loginInput.value;

  vYear = parseInt(str.substring(0,4));
  vMonth = parseInt(str.substring(4,6));
  vDay = parseInt(str.substring(6,8));
  /*

      알고리즘 설명 : 날짜를 입력받고 해당 날짜로부터 548일 후의 날짜를 구한다.
      참고 : 현재 이 알고리즘은 불안정하여 +1 -1 정도의 오차가 있음.

      다음에 업데이트 할 내용은 공군 해군 의경 등 다양한 직무들도 추가하고
      불안정한 알고리즘을 수정할 계획.

  */
  const year = vYear;
  const month = vMonth;
  const day = vDay;
  // 31 (28,29) 31 30 31 30 31 31 30 31 30 31
  let days = [31, 28, 31,30,31,30,31,31,30,31,30,31];
  let start = new Date(year,month,day);
  // 윤년 계산 알고리즘
  function isLeapyear(){
    result.remove();
    const curYear = start.getFullYear();

    if((curYear%4==0 && curYear % 100 != 0)||curYear % 400 == 0){
      return true;
    }
    else{
      return false;
    }
  }

  function div(value){
    return (value + 13)%12; 
  }

  let i;

  let nextMonth = start.getMonth();

  for(i = 0;i < 18;i++){
    start.setDate(start.getDate()+days[div(nextMonth++)]);
  }
  start.setDate(start.getDate()-vDay+3);
  const resYear = start.getFullYear();
  const resMonth = start.getMonth();
  const resDate = start.getDate();

  newDiv = document.createElement("h1");

  if(isNaN(resYear) || isNaN(resMonth) || isNaN(resDate) || 
  year < 2020 || year > 2030 || month < 1 || month>12 || day < 1 || day > 31){
    newDiv.innerText = "당신은 지금 잘못된 값을 입력하고 있습니다. 다시 입력해주세요";
    if(!flag)
      result.appendChild(newDiv);
    flag = true;
    return;
  }

  console.log(resYear,resMonth,resDate);  
  
  if(flag)
    result.remove("h1");  
  newDiv.innerText = `전역일은 ${resYear}년 ${resMonth}월 ${resDate}일 입니다.`;

  result.appendChild(newDiv);
  loginBtn.setAttribute("disabled","");

  loginBtn.remove();
}

loginBtn.addEventListener("click",onLoginSubmit);




