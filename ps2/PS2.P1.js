// Generator 1: Generates  the fibonacci sequence

function* fibGenerator() {
    let current_num = 0;
    let next_num = 1;

    while (true) {
        yield current_num;
        [current_num, next_num] = [next_num, current_num + next_num]
    }
}
// ASSUMING 0 DOES NOT COUNT
// Second generator will yield that number
function* findEven() {
    let generatorObject = fibGenerator();
    while (true) {
        let current_fib =  generatorObject.next().value;
        if (current_fib % 2 === 0 && current_fib !== 0) { //Must be even and not 0
            yield current_fib;
        }
    }
}

let num_iterations = 6; // As specified by the problem
const generatorObj = findEven(); // Create generator object

for(let i = 0; i < num_iterations ; i ++){
    console.log(generatorObj.next().value);
}

