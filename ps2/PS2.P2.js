
function* printer(inputString){
    let array = inputString.split(' ');
    let counter = 0;
    while(counter < array.length){
        yield array[counter];
        counter ++;
    }
}


str = 'All I know is something like a bird within her sang';

generatorObject =printer(str);
let word = generatorObject.next()

while(!word.done) {

    console.log(`${word.value}`);
    word = generatorObject.next();
}

