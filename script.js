function evenNumber(x){
    if(x % 2 === 0){
        return true;
    }else{
        return false;
    }
}
const even = evenNumber(10)
console.log(even)


// 14nov assignment

function table(num) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${num} X ${i} = ${num * i}`);
  }
}
console.log("table");
table(2);

// reverse tables

function reverseTable(num) {
  for (let i = 10; i >= 1; i--) {
    console.log(`${num} X ${i} = ${num * i}`);
  }
}

console.log("Reverse table");
reverseTable(3);



