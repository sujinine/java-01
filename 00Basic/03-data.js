const levelup = document.querySelector(".levelup");

/* -------------------------------------------------------------------------- */
/*                                    변수정의                                  */
/* -------------------------------------------------------------------------- */
const nameValue = "CodingPing";
const levelValue = "타입 확인";
const staminaValue = 12555;
const attackValue = 88766;
const shieldValue = 28745;

const staminaIcon = "🦾";
const attackIcon = "🔪";
const shieldIcon = "📫";

const image = "./images/character.webp";

/* -------------------------------------------------------------------------- */
/*                                💡  타입확인  💡                              */
/* -------------------------------------------------------------------------- */
levelup.addEventListener("click", () => {
  myTypeis(); //👈 함수에 원하는 데이터를 넣어보세요.
});

/* -------------------------------------------------------------------------- */
/*                                    초기실행                                  */
/* -------------------------------------------------------------------------- */
function init() {
  const nickname = document.querySelector(".name");
  const stamina = document.querySelector(".stamina");
  const attack = document.querySelector(".attack");
  const shield = document.querySelector(".shield");
  const character = document.querySelector(".character img");

  nickname.innerText = nameValue;
  stamina.innerText = staminaValue;
  attack.innerText = attackValue;
  shield.innerText = shieldValue;
  levelup.innerText = levelValue;

  stamina.dataset.icon = staminaIcon;
  attack.dataset.icon = attackIcon;
  shield.dataset.icon = shieldIcon;

  character.setAttribute("src", image);
}

/* -------------------------------------------------------------------------- */
/*                                  애니메이션 제어                             */
/* -------------------------------------------------------------------------- */
function myTypeis(data) {
  const lvup = document.querySelector(".show");
  const istype = checkType(data);

  document.body.insertAdjacentHTML("afterbegin", `<span class="show">${istype}</span>`);

  lvup.addEventListener("animationend", (e) => {
    e.target.remove();
  });
}

/* -------------------------------------------------------------------------- */
/*                                   데이터 확인                                */
/* -------------------------------------------------------------------------- */
function checkType(data) {
  return Object.prototype.toString.call(data).slice(8, -1);
}

init();
