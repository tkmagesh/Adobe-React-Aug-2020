function add(x,y){
    if (typeof x !== 'number' || typeof y !== 'number')
        throw new Error('Invalid arguments');
    return x + y;
}


add(10,20)
add(10, "20")
add(10, "abc")
add([10,20],[30,40])
add([10, 20], [30, "40"])
add([10, 20], [30, "abc"])
add([10, 20], [30, ["40","abc"]])
add(function(){ return 10; }, function(){ return 20;})
add(function(){ return [10, 20]; }, function(){ return [30, ["40", "abc"]];})
add(10)
add()
add(10,20,30,40,50)
add([function () { return [10, 20]; }, function () { return [30, ["40", "abc"]]; }])


function add(){ 
    function parseArg(n){
        if (typeof n === 'function') return parseArg(n());
        if (Array.isArray(n)) return add.apply(undefined, n);
        return isNaN(n) ? 0 : parseInt(n);
    }
    return arguments.length <= 1 ? parseArg(arguments[0]) : parseArg(arguments[0]) + add(Array.prototype.slice.call(arguments, 1))
}

http://bit.ly/javascript-training-videos
