/* -------------------------------------------------------------------------- */
/*                                    변수정의                                  */
/* -------------------------------------------------------------------------- */
let nameValue = "CodingPing";
let levelValue = "LEVEL UP";
let staminaValue = 12555;
let attackValue = 88766;
let shieldValue = 28745;

let staminaIcon = "🦾";
let attackIcon = "🔪";
let shieldIcon = "📫";

let image = "./images/character.webp";

/* -------------------------------------------------------------------------- */
/*                                    UI 정의                                   */
/* -------------------------------------------------------------------------- */
const nickname = document.querySelector(".name");
const stamina = document.querySelector(".stamina");
const attack = document.querySelector(".attack");
const shield = document.querySelector(".shield");
const character = document.querySelector(".character img");
const levelup = document.querySelector(".levelup");

// 변수값 적용
nickname.innerText = nameValue;
stamina.innerText = staminaValue;
attack.innerText = attackValue;
shield.innerText = shieldValue;
levelup.innerText = levelValue;

stamina.dataset.icon = staminaIcon;
attack.dataset.icon = attackIcon;
shield.dataset.icon = shieldIcon;

character.setAttribute("src", image);

const show = () => {
  document.body.insertAdjacentHTML("afterbegin", `<span class="show">Level Up</span>`);
  const lvup = document.querySelector(".show");
  lvup.addEventListener("animationend", (e) => {
    e.target.remove();
  });
};

/* -------------------------------------------------------------------------- */
/*                                    이벤트실행                                */
/* -------------------------------------------------------------------------- */
levelup.addEventListener("click", show);
