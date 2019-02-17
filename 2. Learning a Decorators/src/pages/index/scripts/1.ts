function f() {
   console.log("f(): evaluated");
   return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
       console.log("f(): called");
   }
}

function g() {
   console.log("g(): evaluated");
   return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
       console.log("g(): called");
   }
}

class C {
   @f()
   @g()
   method() {}
}

/*

function logOnCall(target: any, prop: string, descriptor: PropertyDescriptor) {
   const method = target[prop];

   target[prop] = function (...args: any) {
      console.log(`Method ${prop} called`);

      //method.apply(this, args);
   }  

}

class Player {
   constructor(private name: string) {

   }

   @logOnCall
   getName(): string {
      return this.name;
   }
}

(<any>window).Player = Player;



*/