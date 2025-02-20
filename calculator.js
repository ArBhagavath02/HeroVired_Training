var a = parseFloat(prompt("Enter the 1st Number:"));
var b = parseFloat(prompt("Enter the 2nd number:"));
var opr = prompt("Enter the value: ");
if(opr == "+" ){
    add();
}
else if(opr == "-"){
    sub();
}
else if(opr == "*"){
    mul();
}
else if(opr == "/"){
    div();
}
else{
    console.log("I am Sry Try Next time");
}

function add(){
    console.log(a + b);    
}

function sub(){
    console.log(a-b);
}
function mul(){
    console.log(a*b);
}
function div(){
    console.log(a/b);
}
