export const type = (data) => {
  // \ 👉 문자를 찾기위한 정규식
  // | 👉 or
  // g 👉 매칭되는 모든 것
  const isData = Object.prototype.toString.call(data).replace(/\[object |\]/g, "");
  console.log(isData);
};
