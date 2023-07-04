// YOUR CODE BELOW
function mySplice(origArr, startIdx, delCount, toAdd) {
    let storedArr = []; 
    let deletedItems = [];  

    for (let i = origArr.length - 1; i >= startIdx; i--) {
        storedArr.push(origArr.pop());
    } 
    if (toAdd) {
        origArr.push(toAdd);
    }
    if (delCount > 0) {
        let delIdx = storedArr.length - delCount;
        for (let j = storedArr.length - 1; j >= 0; j--) {
            if (j >= delIdx) {
                deletedItems.push(storedArr.pop());
            } else {
                origArr.push(storedArr.pop());
            }
        }
    } else if (delCount === 0) {
        for (let j = storedArr.length - 1; j >= 0; j--) {
            origArr.push(storedArr.pop());
        }
    }
return deletedItems;
}

  