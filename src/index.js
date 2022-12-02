var val1 = "var変数";
// console.log(val1);

let val2 = "let変数";
// console.log(val2);

const val3 = "const変数";
// console.log(val3);

const val4 = {
  name: "hot",
  age: "24"
};
val4.name = "aaa";
val4.address = "hazama";
// console.log(val4);

const val5 = ["dog", "cat"];
val5[0] = "dack";
val5.push("monkey");
val5.pop();
// console.log(val5);

// const message1 = "私の名前は" + val4.name + "です。年は" + val4.age + "です。";
// console.log(message1);
// const message2 = `私の名前は${val5[0]}です。年は${val4.age}です。`;
// console.log(message2);

// function func1(str){
//   return str;
// }

// const func1 = function(str){
//   return str;
// }
// console.log(func1("func1"));

// const func2 = (str) => str
// console.log(func2("func2"));

// const sum = (num1, num2) => num1 + num2;
// console.log(sum(10, 20));

// const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん。`);
// sayHello();

// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// const sum = (num1, num2) => console.log(num1 + num2);
// sum(arr1[0], arr1[1]);
// sum(...arr1)

// const arr2 = [1, 2, 3, 4, 5];
// const[num1, num2, ...arr3] = arr2;
// console.log(arr3);

// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr6);
// const arr7 = [...arr4, ...arr5];
// // console.log(arr7)

// const arr8 = arr4;
// arr8[1] = 200;
// console.log(arr4);

const nameArr = ["a", "i", "u"];
// for(let index = 0; index < nameArr.length; index++){
//   console.log(nameArr[index]);
// }

const nameArr2 = nameArr.map((name) => {
  return name;
});
console.log(nameArr2);
