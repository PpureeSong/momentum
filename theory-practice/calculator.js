console.log('Im Working. Im JS. Im Beautiful. Im worth it');

function sayHello(name, age) {
    console.log('hello ', name, ' you have ', age, "years of age.");
    console.log(`hello ${name} you are ${age} years of old.`);
}

sayHello('ppuree', 27);
console.log

const calculator = {
    plus: function(a,b) {
        return a+b;
    },
    minus: function(a,b){
        return a-b;
    },
    multiple: function(a,b) {
        return a*b;
    },
    divide: function(a,b) {
        return a/b
    },
    power: function(a, b) {
        return a**b;
    },
    remainder:function(a, b) {
        return a%b;
    }
 }
console.log(calculator.plus(1,3));
console.log(calculator.minus(1,3));
console.log(calculator.multiple(1,3));
console.log(calculator.power(2, 3));
console.log(calculator.remainder(3,3));
