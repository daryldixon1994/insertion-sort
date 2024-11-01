// function circlesArea(r) {
//   return r * r * 3.14;
// }

// let btn = document.getElementById("btn");
// btn.addEventListener("click", function () {
//   let input = document.querySelector("input");
//   let head = document.querySelector("h1");
//   let result = circlesArea(input.value);
//   head.textContent = result;
// });
// let count = 0;
// let x = 3;
// let sum = 0;
// let y;
// while (count < 3) {
//   count++;
//   y = (1 + 2 * count) % 3;
//   switch (y) {
//     default:
//       sum++;
//     case 0:
//       x = x - 1;
//       break;
//     case 1:
//       x = x + 5;
//   }
// }
// console.log(x);
// console.log(sum);

// bubble sort
let tab = [10, 7, 5, 1, 0];
for (let i = 0; i < tab.length; i++) {
  for (let j = 0; j < tab.length - 1; j++) {
    if (tab[j] > tab[j + 1]) {
      const current = tab[j + 1];
      tab[j + 1] = tab[j];
      tab[j] = current;
    }
  }
}
console.log(tab)
