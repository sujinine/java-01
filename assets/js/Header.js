const mobileSize = 1280;
const frame = document.querySelector("iframe");
const button = document.querySelector(".btn-mobile");
const initial = "/00Basic/01-start.html";
const current = sessionStorage.getItem("src");

const newTab = (link = initial) => {
  const linkTag = document.querySelector(".blank");
  linkTag.setAttribute("href", link);
};

const viewMobild = () => {
  button.addEventListener("click", (e) => {
    switch (e.target.textContent) {
      case "모바일 보기":
        frame.style.width = 360 + "px";
        e.target.textContent = "웹 보기";
        break;
      case "타블렛 보기":
        frame.style.width = 720 + "px";
        e.target.textContent = "모바일 보기";
        break;
      case "웹 보기":
        frame.removeAttribute("style");
        e.target.textContent = "타블렛 보기";
        break;
    }
  });
};

const resizeButton = () => {
  if (window.innerWidth < mobileSize) {
    button.style.display = "none";
  } else {
    button.style.display = "flex";
  }
};

window.addEventListener("resize", resizeButton);
window.addEventListener("load", resizeButton);

export const Header = () => {
  const gnb = document.querySelector("#gnb");
  const links = gnb.querySelectorAll("a");
  current ? newTab(current) : newTab();

  links.forEach((link) => {
    link.addEventListener("click", () => {
      newTab(link);
    });
  });

  viewMobild();
};
