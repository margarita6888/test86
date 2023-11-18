// 1 способ
function Test() {
  console.log(1);
}
Test(); // 1

// 2 способ
let Test1 = function () {
  console.log(2);
};
Test1();
console.log(Test1());

// 3 способ
let Test2 = () => console.log(3);
Test2(); // 3

function f() {
  return "Меня зовут Рита";
}
console.log(f());

function isValed(str) {
  return str.length > 5;
}

function t(name, age) {
  // return "Меня зовут " + name + " И мне " + age;
  // if (isValed(name)) {
  //   return "имя слишком длинное";
  // }
  return `Меня зовут ${name} И мне ${age}`;
}
console.log(t("Иван", 15));
console.log(t("Ибрагим", 20));
