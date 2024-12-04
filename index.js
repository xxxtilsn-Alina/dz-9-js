// Завдання 1

// Напиши функцію logItems(array), яка отримує масив і використовує цикл for, який для кожного елемента масиву буде виводити
//  в консоль повідомлення в форматі [номер елемента] - [значення елемента].

// Нумерація повинна починатися з 1.
//  Наприклад, для першого елемента масиву ['Mango', 'Poly', 'Ajax'] з індексом 0 буде виведено '1 - Mango', а для індексу 2 виведе '3 - Ajax'.

function logItems(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].includes("Mango")) {
      console.log(` 1 - ${array[i]}`);
    } else if (array[i].includes("Poly")) {
      console.log(` 2 - ${array[i]}`);
    } else if (array[i].includes("Ajax")) {
      console.log(`3 - ${array[i]}`);
    } else {
      console.log("такого немає");
    }
  }
  return array;
}
logItems(["Mango", "Poly", "Ajax"]);

// Завдання 2

// Напиши скрипт підрахунку вартості гравіювання прикрас.
//  Для цього створи функцію calculateEngravingPrice(message, pricePerWord)
//  приймаючу рядок (в рядку будуть тільки слова і прогалини) і ціну гравіювання одного слова,
//   і повертає ціну гравіювання всіх слів в рядку.

function calculateEngravingPrice(message, pricePerWord) {
  const messageWords = message.split(" ");
  const sum = messageWords.length * pricePerWord;
  console.log(`Ціна гравіювання - ${sum} гривень`);
  return;
}

calculateEngravingPrice("Золотий вік", 5);

// Завдання 3

// Напиши функцію findLongestWord(string), яка приймає параметром довільний рядок
// (в рядку будуть тільки слова і прогалини) і повертає найдовше слово в цьому рядку.

function findLongestWord(string) {
  let word = "";
  const words = string.split(" ");
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > word.length) {
      word = words[i];
    }
  }
  return word;
}

console.log(findLongestWord("word apple orange responsibility sociable"));

// Завдання 4
// Напиши функцію formatString(string) яка приймає рядок і форматує його якщо необхідно.
// Якщо довжина рядка не перевищує 40 символів, функція повертає її в початковому вигляді.
// Якщо довжина більше 40 символів, то функція обрізає рядок до 40-ка символів і додає в кінець рядка три крапки '...', після чого повертає укорочену версію.

function formatString(strings) {
  if (strings.length > 40) {
    const fourth = strings.slice(0, 40) + ". . .";
    return fourth;
  }
}

console.log(
  formatString(
    "Гори мої високії,Не так і високі,Як хороші, хорошії,Блакитні здалека.З Переяслава старого,З Виблої могили,Ще старішої… мов ті хмари"
  )
);

// Завдання 5
// Напиши функцію checkForSpam(message), приймаючу 1 параметр message — рядок.
//  Функція перевіряє її на вміст слів spam і sale. Якщо знайшли заборонене слово, то функція повертає true,
//  якщо заборонених слів немає функція повертає false.
//  Слова в рядку можуть бути в довільному регістрі.

function checkForSpam(message) {
  if (message.includes("spam") || message.includes("sale")) {
    return true;
  }
  return message;
}

console.log(checkForSpam("spam, love, orange, sale, apple,kivi, juse"));

// Завдання 6

// Напиши скрипт з наступним функціоналом:
// При завантаженні сторінки користувачеві пропонується в prompt ввести число.
// Введення зберігається в змінну input і додається в масив чисел numbers.
// Операція введення числа користувачем і збереження в масив триває до тих пор, пір, поки користувач не натисне Cancel в prompt.
// Після того як користувач припинив введення натиснувши Cancel, якщо масив не порожній, необхідно порахувати суму всіх елементів масиву і записати її в змінну total.
// Використовуй цикл for або for...of. Після чого в консоль виведи рядок 'Загальна сума чисел дорівнює [сума]'.
let input;
const num = [];
let total = 0;

do {
  input = prompt("Введіть число");
  num.push(Number(input));
} while (input !== null);

function caculetet(numberses, masiw, sum) {
  for (let i = 0; i < masiw.length; i++) {
    sum = sum + Number(masiw[i]);
  }
  return sum;
}
console.log(caculetet(input, num, total));
