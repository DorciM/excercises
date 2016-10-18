/**
 * Created by doramedgyasszay on 2016. 10. 18..
 */
var numberFinder = function (n, number) {
    var nString = n.toString();
    var numString = number.toString();
    var result = [];
    for (var i=0; i <= numString; i++) {
        if (nString === numString[i]) {
            result.push(numString[i])
        } else {
            continue
        };
     return result;
    }
};
