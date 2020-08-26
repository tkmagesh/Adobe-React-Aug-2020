console.log('accumulator.js executed');
function accumulatorFactory(initialResult = 0){
    let result = initialResult;
    const accumulator = {
        add(x){
            result += x;
        },
        subtract(x) {
            result -= x;
        },
        multiply(x) {
            result *= x;
        },
        divide(x) {
            result /= x;
        },
        getResult(){ 
            return result; 
        }
    };
    return accumulator;
}

module.exports = accumulatorFactory;
