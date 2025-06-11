/* -------------------------------------------------------------------------- */
/*                                    JSON                                    */
/* -------------------------------------------------------------------------- */
const handleObject = () => {
  const name = document.querySelector("#name").value;
  const age = Number(document.querySelector("#age").value);

  const user = {
    name: name,
    age: age,
  };

  console.log(JSON.stringify(user));
};

const handleJSON = () => {
  return fetch("./38-json.json")
    .then((res) => res.json())
    .catch((err) => {
      console.error(err);
    });
};

const data = async () => {
  const user = await handleJSON();
  console.log(user);
};

const handleJSONOBJ = () => {
  const text = document.querySelector("textarea");

  const data = JSON.parse(text.value);
  console.log(data);
};
