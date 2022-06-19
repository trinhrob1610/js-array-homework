function bai1(n){
    var result = "";
    var z;
    for(var i = 0; i < n;i += 10){
        z = i + 1;
        if(z < 10){
            for(var j = z; j < z + 10; j++){
                result += j + " " + " ";
            }
        }else{
            for(var j = z; j < z + 10; j++){
                result += j + " ";
            }
        }
        result += "\n"
    }
    console.log(result);
}
bai1(100);


function bai2(n)
  {
      // Biến cờ hiệu
      var flag = true;

      // Nếu n bé hơn 2 tức là không phải số nguyên tố
      if (n < 2){
          flag = false;
      }
      else{
          // lặp từ 2 tới n-1
          for (var i = 2; i < n-1; i++)
          {
              if (n % i == 0){
                  flag = false;
                  break;
              }
          }
      }

      // Kiểm tra biến flag
      if (flag == true){
          document.write(n + " là số nguyên tố <br/>");
      }
      else{
          document.write(n + " không phải là số nguyên tố <br/>");
      }
  }

 bai2(5);
 bai2(2);
 bai2(8);
 bai2(7);
 bai2(10);



function tinhTong(){
    var S = 0;

  var n = document.getElementById("inputNumber").value;
  for(var i = 2; i <= n; i++){
    S = S + i;
  }
  calc = "(2+3+4+...+n)+2n = " + (S + 2 * n);
    document.getElementById("showResult").innerHTML = calc;
}
tingTong();