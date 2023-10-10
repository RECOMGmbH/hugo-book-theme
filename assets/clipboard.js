(function () {
  function select(element) {
    const selection = window.getSelection();

    const range = document.createRange();
    range.selectNodeContents(element);

    selection.removeAllRanges();
    selection.addRange(range);
  }

  document.querySelectorAll("pre code").forEach(code => {

    let copyIcon = document.createElement("i");
    copyIcon.classList.add("fa-solid");
    copyIcon.classList.add("fa-copy");

    let copyButton = document.createElement("button");
    copyButton.appendChild(copyIcon);
    copyButton.addEventListener("click", function (event) {
      navigator.clipboard.writeText(code.textContent);
    });

    code.appendChild(copyButton);
  });
})();
