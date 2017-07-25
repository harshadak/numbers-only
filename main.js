// Make a function that copies an array, ONLY accepting the items that are numbers.

"strict"

function numbersOnly(arr) {
    var newArray = [];
    for (var i = 0; i < arr.length; i++) {
        if (typeof (arr[i]) === "number") {
            newArray.push(arr[i]);
        }
    }
    return newArray;
}

numbersOnly([1, "apple", -3, "orange", 0.5]);


// Make a second function that removes them from the given array. (instead of copying to a new array)


function removeStrings(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (typeof (arr[i]) !== "number") {
            var index = arr.indexOf(arr[i]);
            if (index > -1) {
                arr.splice(index, 1);
            }
        }
    }
    return arr;
}
removeStrings([1, "apple", -3, "orange", 0.5]);
