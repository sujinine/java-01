const handleFetch = async () => {
  try {
    const response = await fetch("/assets/data/data-gnb.json");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const link = (title, link) => {
  switch (title) {
    case "basic":
      return `/00Basic/${link}`;
      break;
    case "content":
      return `/01Content/${link}`;
      break;
    case "website project":
      return `/02Website/${link}`;
      break;
    case "mobile project":
      return `/03Mobile/${link}`;
      break;
    case "responsive project":
      return `/04Responsive/${link}`;
      break;
    case "swiper":
      return `/05Swiper/${link}`;
      break;
    case "chartjs":
      return `/06Chart/${link}`;
      break;
    case "gsap":
      return `/07Gsap/${link}`;
      break;
  }
};

export const GNB = async () => {
  const gnb = document.querySelector("#gnb");
  if (!gnb) return;

  const data = await handleFetch(); // 함수 실행을 위해 () 필요
  if (!data) return;

  gnb.innerHTML = data
    .map((item, index) => {
      return /* html */ `
        <details name="gnb" ${index === 0 && "open"}>
          <summary>${item.title}</summary>

          ${
            item.nav
              ? `
              <ul>
                  ${item.nav
                    .map((navItem) => {
                      return /* html */ `
                        <li>
                            <a href="${link(item.title, navItem.link)}" target="frame">${navItem.name}</a>
                        </li>
                      `;
                    })
                    .join("")}
            
              </ul>
            `
              : item.depth
                  .map((depthItem, idx) => {
                    return /* html */ `
                      <strong>${depthItem.title}</strong>
                      ${
                        depthItem.nav &&
                        `<ul>
                          ${depthItem.nav
                            .map((navItem, i) => {
                              return /* html */ `
                                <li>
                                    <a href="${link(item.title, navItem.link)}" target="frame"  class="${idx === 0 && i === 0 ? "active" : ""}">${navItem.name}</a>
                                </li>
                              `;
                            })
                            .join("")}
                        </ul>`
                      }
                    `;
                  })
                  .join("")
          }
        </details>
      `;
    })
    .join("");
};
