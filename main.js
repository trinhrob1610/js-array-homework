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


function bai2(arr){
    for(var i = 0; i < arr.length;i++){
        console.log(i);
    }
}
arr([1, 4, 3, 1, 4, 4]);
bai2();

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