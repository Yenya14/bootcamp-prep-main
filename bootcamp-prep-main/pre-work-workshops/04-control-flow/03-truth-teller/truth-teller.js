// let boolean1 = true, boolean2 = true;
let boolean1 = true, boolean2 = false;
// let boolean1 = false, boolean2 = true;
// let boolean1 = false, boolean2 = false;

let result;

if (boolean1===true && boolean2===true){
    result='both';
}
else if(boolean1===true || boolean2===true){
    result='one';
}
else{
    result='none';
}
