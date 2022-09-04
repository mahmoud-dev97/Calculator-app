let btns = document.querySelectorAll("span");
let result = document.querySelector(".box");
btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "RESET":
        result.innerText = "0";
        break;
      case "=":
        result.innerText = eval(result.innerText);
        break;
      case "DEL":
        result.innerText = result.innerText.slice(0, -1);
        break;
      default:
        result.innerText += e.target.innerText;
    }
  });
});
