const credits = 23580;
const pricePerDroid = 3000;
let message;

let input = prompt('Введите необходимое кол-во дроидов');
let totalPrice;

if (input === null) {
  message = 'Отменено пользователем';
} else {
  totalPrice = input * pricePerDroid;

  if (totalPrice > credits) {
    message('Недостаточно средств на счету!');
  } else {
    message = `Вы купили ${input} дроидов, на счету осталось ${
      credits - totalPrice
    } кредитов.`;
  }
}
console.log(message);

alert(message);
