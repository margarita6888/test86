// Функции
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

// Условия
let num = 0;
num = num + 1; // 1
num += 1; // 2
num++; //3
console.log(num);

// Все значения которые возвращают false при проверке на boolean тип
console.log(Boolean(""));
console.log(Boolean(0));
console.log(Boolean(NaN));
console.log(Boolean(undefined));
console.log(Boolean(null));

// Пример
let userAge = 19;
let userName = "";

// если в if будет true, тогда нижняя инструкция будет исполнена
// если в if будет false, тогда исполнена будет инструкция в else
if (userAge > 18) {
  console.log("Заходи дорогой");
} else {
  console.log("Тебе ещё рано сюда");
}

// ? - тернарный оператор, полностью повторяет условия.
userAge > 18
  ? console.log("Заходи дорогой")
  : console.log("Тебе ещё рано сюда");

// углублённый пример с тернарным оператором
if (userAge > 18) {
  console.log("Заходи дорогой");
} else if (userName !== "") {
  console.log("Хорошее имя");
} else {
  console.log("Тебе ещё рано сюда");
}

userAge > 18
  ? console.log("Заходи дорогой")
  : userName !== ""
  ? console.log("Хорошее имя")
  : console.log("Тебе ещё рано сюда");

// условные операторы   &&

console.log(1 && null && 3); // возвращает последнее true значение, а если встретился false, то возвращает его

console.log(1 || null || 3); // возвращает первое true значение, но если все значения false, то оно вернёт последнее значение

0 || console.log("Тебе сюда нельзя");

// различия == и ===
// тройное равно так же при помощи typeof проверяет тип у значений
console.log("a" == "a"); // двойное тире сравнивает значения, не обращая внимания их типы
console.log("a" === "1"); // тройное тире сравнивает значения и проверяет у значений типы typeof
