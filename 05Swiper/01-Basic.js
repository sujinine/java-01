import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

const fetchJSON = async (filePath) => {
  try {
    const response = await fetch(filePath); // JSON 파일 요청
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json(); // JSON 데이터를 객체로 변환
    return data; // 객체 반환
  } catch (error) {
    console.error("JSON 데이터를 불러오는데 실패했습니다:", error);
    return {}; // 오류 발생 시 빈 객체 반환
  }
};

// JSON 파일 불러오기
fetchJSON("./data.json")
  .then((dataObject) => {
    swiper(dataObject);
  })
  .then(() => {
    const swiper = new Swiper(".swiper");
  });

const swiper = (obj) => {
  const wrapper = document.querySelector(".swiper-wrapper");

  const slide = obj
    .map((item) => {
      const { title, desc } = item;
      return `
      <div class="swiper-slide">
        <h2>${title}</h2>
        <p>${desc}</p>
      </div>
    `;
    })
    .join("");

  wrapper.innerHTML = slide;
};
