var one, two;
function read1() {
one = parseInt(document.getElementById("a").value);
}
function read2() {
two = parseInt(document.getElementById("b").value);
}
function add(){
 document.getElementById("answer").innerHTML = one + two;
}
function sub(){
 document.getElementById("answer").innerHTML = one - two;
}
function mul(){
 document.getElementById("answer").innerHTML = one * two;
}
function div(){
 document.getElementById("answer").innerHTML = one / two;
}
