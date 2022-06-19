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
      var flag = true;

      if (n < 2){
          flag = false;
      }
      else{
          for (var i = 2; i < n-1; i++)
          {
              if (n % i == 0){
                  flag = false;
                  break;
              }
          }
      }

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

function tinhUocSo(){
    var n;
    var S = 0;
    var n = document.getElementById("inputBai4").value;
    for(var i = 1; i<=n;i++){
        if(n%i==0){
            S++;
        }
    }
    check = "uoc so la: " + S;
    document.getElementById("result").innerHTML = check;
}
tinhUocSo();