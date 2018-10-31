function processArray (data,callback){
    for (var i=0; i< data.length;i++){
       data[i] = callback(data[i]);
    }
};


var myArray = [4, 8, 2, 7, 5];
processArray(myArray, function(a) {
    return a * 2;
});
console.log(myArray);
// [ 8, 16, 4, 14, 10 ]

var myArray = [7, 8, 9, 1, 2];
processArray(myArray, function (a) {
    return a + 5;
});
console.log(myArray);
// [ 12, 13, 14, 6, 7 ]
