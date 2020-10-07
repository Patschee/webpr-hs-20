
// atoms
const id    = x =>      x;
const konst = x => y => x;

let week4OK = [];

const Left   = x => f => g => f(x);
const Right  = x => f => g => g(x);
const either = e => f => g => e (f) (g);

const safeDiv = num => divisor =>
    divisor === 0
        ? Left  ("Cannot divide by 0")
        : Right (num / divisor);


const eShow  = f => either( id(f) ) ( x => x ) ( x => "Result is: "+x);

const x_ = Math.random();


week4OK.push( eShow( safeDiv(1)(0))  === "Cannot divide by 0")
week4OK.push( eShow( safeDiv(x_)(1)) === "Result is: "+x_ )
document.writeln("<br>")


// Q9d
const twice = x => x*2;

week4OK.push([1,2,3].map(twice).toString() === "2,4,6")


// Q9e

const divides = x => y => y % x === 0

week4OK.push([1,2,3,4,5,6].filter(divides(3)).toString() === "3,6");


// Q9f

const join = x => (a,b) => a + x + b

week4OK.push([1,2,3].reduce(join('-')) === '1-2-3')



if ( week4OK.every(elem => elem) ) {
    document.writeln("All " + week4OK.length + " tests ok.");
} else {
    document.writeln("Not all tests ok! Details:");
    for (let i = 0; i < week4OK.length; i++) {
        if (week4OK[i]) {
            document.writeln("Test " + i + " ok");
        } else {
            document.writeln("Test " + i + " failed");
        }
    }
}