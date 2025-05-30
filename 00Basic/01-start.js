/* -------------------------------------------------------------------------- */
/*                                    변수정의                                  */
/* -------------------------------------------------------------------------- */
const staminaIcon = "🦾";
const attackIcon = "🔪";
const shieldIcon = "📫";

/* -------------------------------------------------------------------------- */
/*                                    UI 정의                                   */
/* -------------------------------------------------------------------------- */
const nickname = document.querySelector(".name");
const stamina = document.querySelector(".stamina");
const attack = document.querySelector(".attack");
const shield = document.querySelector(".shield");
const levelup = document.querySelector(".levelup");
const progress = document.querySelector("progress");
const level = document.querySelector(".level span");

stamina.dataset.icon = staminaIcon;
attack.dataset.icon = attackIcon;
shield.dataset.icon = shieldIcon;
let count = 0;
let Level = 1;

// 경험치
const handleExp = () => {
  count++;
  progress.value = count * 5;
  if (progress.value === 100) {
    progress.value = 0;
    count = 0;
    level.textContent = Level++;
  }
};

// 토스트 팝업
const show = () => {
  document.body.insertAdjacentHTML("afterbegin", `<span class="show">EXP + 1</span>`);
  const lvup = document.querySelector(".show");
  lvup.addEventListener("animationend", (e) => {
    e.target.remove();
  });
  handleExp();
};

/* -------------------------------------------------------------------------- */
/*                                    이벤트실행                                */
/* -------------------------------------------------------------------------- */
levelup.addEventListener("click", show);
