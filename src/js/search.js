const inputElement = document.getElementById("search-input");
const resultElement = document.getElementById("search-result");
const containerElement = document.getElementById("container");

inputElement.value = "";

const checkDomain = () => {
  const localhost = window.location.hostname === "127.0.0.1";

  if (localhost) {
    return "";
  }

  return "/workbook";
};

console.log("zz");

inputElement.addEventListener("input", function (event) {
  const value = event.target.value;
  const resultArr = [];

  searchArr.forEach((element) => {
    element.title.forEach((el) => {
      const a1 = el.toLowerCase();
      const a2 = value.toLowerCase();

      if (a1.includes(a2)) {
        const title = el
          .replace(/->/g, "›")
          // .replace(/&lt;(.*?)&gt;/g, '<u-code-light>&lt;$1&gt;</u-code-light>')
          // .replace(/<u>(.*?)<\/u>/g, '<em>$1</em>')
          .replace(/<u>(.*?)<\/u>/g, "<em>$1</em>");

        console.log(title);

        resultArr.push({
          title,
          path: checkDomain() + element.path,
        });
      }
    });
  });

  let html = "";
  resultArr.forEach((element) => {
    html += `
            <button
                class="search-button"
                onclick="
                    history.pushState(null, '', window.location.origin + '${element.path}');
                    // window.location.href = window.location.origin + '${element.path}';
                    window.location.reload();
                "
            >
                ${element.title}
            </button>
        `;
  });

  if (value !== "") {
    resultElement.innerHTML =
      '<div class="search-result-wrapper">' + html + "<div>";
  } else {
    resultElement.innerHTML = "";
  }
});

containerElement.addEventListener("click", function (event) {
  resultElement.innerHTML = "";
  inputElement.value = "";
});
