String.prototype.sarcastic = function() {
  return [...this]
    .map((char, i) => char[`to${i % 2 ? "Upper" : "Lower"}Case`]())
    .join("");
};

let common = {
  copyToClipboard: (value) => {
    let tempInput = document.createElement("input");
    tempInput.style = "position: absolute; left: -1000px; top: -1000px";
    tempInput.value = value;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
  },

  init() {
    let btn = document.querySelector("button"),
    input = document.querySelector("input"),
    result = document.querySelector("p");
        
    input.addEventListener("input", () => {
      result.innerText = input.value.sarcastic();
    });
        
    btn.addEventListener("click", () => {
      this.copyToClipboard(result.innerText);
    });
  }
}

if (typeof window !== `undefined`) {
  common.init();
}
