//display value on input box

function calculator(num){
    result.value+=num
}

//clear the text field
function clearText(){
    result.value="";
}

//evaluvate th expression
function evaluvateNum(){
    // exp=result.value//1+2
    // res=eval(result.value)//eval(1+2)=3
    // result.value=res//3
    result.value=eval(result.value)
}
//remove last character from text field
function lastText(){
    result.value=result.value.slice(0,-1);
}