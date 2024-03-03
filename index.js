function input(num){

    var result = document.getElementById("result");
    result.value += num;
}


function calc(){
    var result = document.getElementById("result");
    var output = eval(result.value);
    result.value = output;
}


function cancle (){

    result.value = "";
}