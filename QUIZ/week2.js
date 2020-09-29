// const foo = () => true;
// document.writeln(foo(1));
//
//
// function two(x,y){
//     return x+y;
// }
//
// document.writeln(two(1,1,1))

document.writeln("Woche2: \n")


const id = y => y
const fst = x => y => x

const snd = fst => id => id


const x_ = Math.random();
const y_ = Math.random();
document.writeln(snd(x_)(y_) === y_)


document.writeln()