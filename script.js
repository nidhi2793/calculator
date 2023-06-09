let display = document.getElementById("display");
let symbol = ["/", "*", "+", "-"];
let buttons = Array.from(document.getElementsByClassName("button"));
buttons.map((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "C":
        display.innerText = "";
        break;
      case "←":
        display.innerText = display.innerText.slice(0, -1);
        break;
      case "=":
        for (let i = 0; i < display.innerText.length; i++) {
          if (display.innerText[i] == "/" && display.innerText[i + 1] == "0") {
            display.innerText = "Infinity";
          }
        }

        if (display.innerText.length == 0) {
          display.innerText = "0";
        } else {
          try {
            display.innerText = eval(display.innerText);
          } catch {
            display.innerText = "Invalid Input";
          }
        }

        break;
      default:
        if (
          symbol.includes(display.innerText[display.innerText.length - 1]) &&
          symbol.includes(e.target.innerText)
        ) {
          display.innerText = display.innerText.slice(0, -1);
          display.innerText += e.target.innerText;
        } else if (display.innerText.length == 1 && display.innerText == "0") {
          display.innerText = display.innerText.slice(0, -1);
          display.innerText += e.target.innerText;
        } else if (
          display.innerText == "Invalid Input" ||
          display.innerText == "Infinity"
        ) {
          display.innerText = e.target.innerText;
        } else {
          display.innerText += e.target.innerText;
        }
    }
  });
});
