function mergeSort(arr) {
    if (arr.length === 1) return arr;
    let length = arr.length;

    let midIdx = Math.round((length - 1)/2);  
    let sLeft = mergeSort(arr.slice(0, midIdx));
    let sRight = mergeSort(arr.slice(midIdx));
    let sArr = [];

    for (let i = 0; i < length; i++) {
        if (sRight[0] < sLeft[0] || sLeft[0] == null) {
            sArr.push(sRight[0]);
            sRight.shift();
        } else {
            sArr.push(sLeft[0]);
            sLeft.shift();
        }
    }
    console.log(sArr);
    return sArr;
}
