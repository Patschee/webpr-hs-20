// // const foo = () => true;
// // document.writeln(foo(1));
// //
// //
// // function two(x,y){
// //     return x+y;
// // }
// //
// // document.writeln(two(1,1,1))
// // const id = x => x
// // const konst = x => y => x;
// // const snd = x => y => y;
// //
// // const fst = konst;
// // const K = konst;
// // const KI = snd;
// //
// // const T = fst;
// // const F = snd;
// // document.writeln("Woche3: \n")
// //
// //
// // const pair = a => b => f => f(a)(b);
// // const first = p => p(T);
// // const second = p => p(F);
// //
// // const oneTwo = pair (1,2);
// //
// //
// // document.writeln(first(oneTwo))
//
// const s1 = x => y => z => x;
// const s2 = x => y => z => y;
// const s3 = x => y => z => z;
//
// const triple = x => y => z => f => f(x)(y)(z);
// const a = t => t(s1);
// const b = t => t(s2);
// const c = t => t(s3);
//
// const oneTwoThree = triple(1)(2)(3);
//
// document.writeln( a(oneTwoThree) === 1 );


const Left   = x => f => g => f (x);
const Right  = x => f => g => g (x);
const either = e => f => g => e (f) (g);
const id = x => x;


const eShow = l => r =>


const x_ = Math.random();
const safeDiv = num => divisor =>
    divisor === 0
        ? Left  ("Cannot divide by 0")
        : Right (num / divisor);

eShow( safeDiv(1)(0))  === "Cannot divide by 0" && eShow( safeDiv(x_)(1)) === "Result is: "+x_