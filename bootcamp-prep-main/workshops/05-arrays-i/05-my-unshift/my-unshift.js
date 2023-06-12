// YOUR CODE BELOW
function myUnshift(oArr, value) {
    let newArray = [value];
    for (let i = 0; i < oArr.length; i++) {
      let value = oArr[i];
      newArray.push(value);
    }
    return newArray;
}