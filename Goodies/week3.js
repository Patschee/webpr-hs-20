
//warum funktioniert das? mit beliebig vielen Argumenten?
console.log(1,2,3,4)


const f1 = (x,y) => console.log(x,y)
f1(x) //geht nicht
f1(x,y) //geht
f1(x,y,z) //geht nicht

const f2 = (x, ...y) => console.log(x,y) // geht aber y ist nun ein array
f2(1,2,3,4,5,6) // geht aber 2 bis 6 sind in einem array

const f3 = (x, ...y) => console.log(x,...y) // Array wieder dekonstruiert --> geht

