let num = Math.floor(Math.random() * 100) + 1; // 1から100までのランダムな整数を代入
console.log(num);
switch (num){
  case (num % 3 == 0 && num % 5 == 0):
    console.log("3と5の倍数です");
    break;
  case (num % 3 == 0):
    console.log("3の倍数です");
    break;
  case (num % 5 == 0):
    console.log("5の倍数です");
    break;
}



