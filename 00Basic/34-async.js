/* -------------------------------------------------------------------------- */
/*                                 Async Await                                */
/* -------------------------------------------------------------------------- */
const first = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("첫번째");
      resolve();
    }, 1000);
  });
};
const second = () => {
  console.log("두번째");
};

first().then(() => {
  second();
});
