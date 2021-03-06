String.prototype.sarcastic = function() {
  return [...this]
    .map((char, i) => char[`to${i % 2 ? "Upper" : "Lower"}Case`]())
    .join("");
};

const common = {
  copyToClipboard: (value) => {
    const tempInput = document.createElement("input");
    tempInput.style = "position: absolute; left: -1000px; top: -1000px";
    tempInput.value = value;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
  },

  init() {
    const btn = document.querySelector("button"),
    input = document.querySelector("input"),
    result = document.querySelector(".result");

    if (input) {
      input.addEventListener("input", () => {
        result.innerText = input.value.sarcastic();
      });
      
      btn.addEventListener("click", () => {
        this.copyToClipboard(result.innerText);
        btn.innerText = "Text Copied";

        setTimeout(() => { btn.innerText = "Copy" }, 1000);
      });

      console.log("%c| 🔧 Developed by riagoncalves.dev |", "background: #111; color: #eee; border-radius:2px; padding:.75rem;");
    } 
  }
}

if (typeof window !== `undefined`) {
  common.init();
}
