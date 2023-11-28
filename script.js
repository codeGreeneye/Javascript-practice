// 9nov even number

function evenNumber(x){
    if(x % 2 === 0){
        return true;
    }else{
        return false;
    }
}
const even = evenNumber(10)
console.log(even)


// 14nov assignment tables

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



// months name 15nov

function getMonth(month) {
    switch (month) {
      case 1:
        console.log("january");
        break;
      case 2:
        console.log("february");
        break;
      case 3:
        console.log("march");
        break;
      case 4:
        console.log("april");
        break;
      case 5:
        console.log("may");
        break;
      case 6:
        console.log("june");
        break;
      case 7:
        console.log("july");
        break;
      case 8:
        console.log("august");
        break;
      case 9:
        console.log("september");
        break;
      case 10:
        console.log("october");
        break;
      case 11:
        console.log("november");
        break;
      case 12:
        console.log("december");
        break;
      default:
        console.log("error");
    }
  }
  
  getMonth(11);
  getMonth(10);
  getMonth(15);
  
  //novb

  const Array = [1, 2, 3, 4, 5, "x", "y", "z"];

function logArrayElements(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function logArrayElementsForOf(arr) {
  for (let element of arr) {
    console.log(element);
  }
}

logArrayElements(Array);




