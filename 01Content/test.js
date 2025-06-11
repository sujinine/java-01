const all = document.querySelectorAll(".payment-details div");
const total = document.querySelector(".total div");

let sum = 0;
all.forEach((el, index) => {
  const number = Number(el.textContent.replaceAll("원", "").replaceAll(",", ""));
  // console.log(`현재 ${index} - ` + (sum = sum + number));
  sum += number;
  total.textContent = sum.toLocaleString() + "원";
});
