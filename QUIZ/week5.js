
// atoms
const id    = x =>      x;
const konst = x => y => x;

let week5OK = [];

const Left   = x => f => g => f(x);
const Right  = x => f => g => g(x);
const either = e => f => g => e (f) (g);



week5OK.push(True)



if ( week5OK.every(elem => elem) ) {
    document.writeln("All " + week5OK.length + " tests ok.</br>");
} else {
    document.writeln("Not all tests ok! Details:</br>");
    for (let i = 0; i < week5OK.length; i++) {
        if (week5OK[i]) {
            document.writeln("Test " + i + " ok</br>");
        } else {
            document.writeln("Test " + i + " failed</br>");
        }
    }
}