// 알고리즘 설명 : 날짜를 입력받고 해당 날짜로부터 548일 후의 날짜를 구한다.
// 다음에 추가할

const year = 2021;
const month = 1;
const day = 8;
// 31 (28,29) 31 30 31 30 31 31 30 31 30 31
let days = [31, 28, 31,30,31,30,31,31,30,31,30,31];
let start = new Date(year,month-1,day+1);
// 윤년 계산 알고리즘
function isLeapyear(){
  
  const curYear = start.getFullYear();

  if((curYear%4==0 && curYear % 100 != 0)||curYear % 400 == 0){
    return true;
  }
  else{
    return false;
  }
}

// 1회용 flag : 윤년일 때 딱 한번 29일로 계산 후 버리는 용도
let flag = false;
if(isLeapyear()){
  flag = true;
}

function div(value){
  return (value + 13)%12; 
}

let i;

let nextMonth = start.getMonth();

for(i = 0;i < 18;i++){
  
  if(flag) {
    start.setDate(start.getDate()+1);
    flag = false;
  }
  
  start.setDate(start.getDate()+days[div(nextMonth++)]);
}
