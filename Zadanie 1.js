const x = +prompt('Введите четное число')
 if (isNaN(x)) {
  console.log('Упс, кажется, вы ошиблись')
} else if (x % 2 === 0) {
  console.log('Число четное')
} else {
  console.log('число нечетное')
}