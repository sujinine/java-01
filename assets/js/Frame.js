export const Frame = () => {
  const currentState = sessionStorage.getItem("src");
  const frame = document.querySelector("iframe");
  const initial = "/00Basic/01-start.html";

  frame.setAttribute("src", currentState || initial);
};
