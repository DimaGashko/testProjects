var a: number = 5;
const mes: string | number = `asdf ${a}`;
let b: boolean = true;
console.log(mes);

var arr: Array<number|string> = [1, 2, 3, '4'];

interface GameInterface { 
   name: string;
   size: number;
}

class Game implements GameInterface {
   name: string = "asdf";

   constructor(public size: number = 5) { 

   }
}