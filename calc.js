var storage1 = [], storage2 = [];
var fin1 = ''
var fin2 = ''
var sign


 function test (n) {
     fin1 = fin1.concat(n);
  return fin1
  
}
//displays integer as a number

window.console = {
  log: function(str){
    var node = document.createElement("div");
    node.appendChild(document.createTextNode(str));
    document.getElementById("myLog").appendChild(node);
  }
}
//displays the console

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function divide(a, b) {
    return a / b;
}

function multiply(a, b) {
    return a * b;
}

function operate(a, b, oper) {

    var op = oper(b, a)
    return op;
}
//operator functions

const numbers = document.querySelectorAll('p button');
const eval = document.querySelector('#equal');
const equations = document.querySelectorAll('p2 button');
const clr = document.querySelector('#clear');

clear.addEventListener('click', () => {
  fin1 = '';
  fin2 = '';
  storage1 = [];
  storage2 = [];
  console.log('cleared');
})


equations.forEach((button) => {
button.addEventListener('click', () => {
  sign = window[button.id]
  storage2 = storage1;
  fin2 = fin1
  storage1 = [];
  fin1 = ''
})
})

eval.addEventListener('click', () => {
  var int1 = parseInt(fin1), int2 = parseInt(fin2);
  storage1 = operate(int1, int2, sign);
  fin1 = operate(int1, int2, sign);
  console.log(storage1);
})

numbers.forEach((button) => {
  button.addEventListener('click', () => {
    console.clear;
    storage1.push(button.value);
    console.log(test(button.value));
    })
})
//button commands

/*currently the calcutalor can only take multi-digit positive integers and
evaluate them using simple mathematical operations(+,-,*,/). A way is also needed
to minimize the screen clutter.  */
    

