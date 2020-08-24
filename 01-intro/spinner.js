var spinner = /* ...... */
//up(), down()

spinner.up() //=> 1
spinner.up() //=> 2
spinner.up() //=> 3

spinner.down() //=> 2
spinner.down() //=> 1
spinner.down() //=> 0
spinner.down() //=> -1

The return values of up() and down() should NOT BE influenced from outside


spinner.counter = 10000
spinner.up() 

counter = 10000
spinner.up()


var spinner = (function (){
    var counter = 0;

    function up(){
        return ++counter;
    }

    function down(){
        return --counter;
    }

    return {
        up : up,
        down : down
    }
})();


function spinnerFactory(){
    var counter = 0;

    function up(){
        return ++counter;
    }

    function down(){
        return --counter;
    }

    return {
        up : up,
        down : down
    }
}

var s1 = spinnerFactory();
var s2 = spinnerFactory();