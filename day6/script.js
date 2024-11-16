// qs 1
// function showData() {
//   console.log("Variable name is", name)
//   console.log("Variable name is", age)
//   var name = "Jhon Bey"
//   let age = 999;
// }
// showData()

// qs 2

// for (var i = 0; i < 4; i++){
//   setTimeout(() => console.log(i), 5)
// }

// for(let i = 0; i < 4; i++){
//   setTimeout(() => console.log(i), 5)
// }

// const income = {
//   skills: 108,
//   monthly() {
//     return this.skills * 108;
//   },
//   yearly: () => 888 * this.skills
// }

// console.log(income.monthly());
// console.log(income.yearly());

// console.log(+true);
// console.log(!"javascript");

// const code = {
//   type: "web",
// };

// const reactJS = {
//   name: "js",
//   web: true,
// };

// (function(){
//   let a = b = 5;
// })();

// console.log(typeof a)
// console.log(typeof b)

function test() {
  console.log(this);
}
test.call(null)