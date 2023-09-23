const input = document.querySelector("input");

function numberCheck() {
  const correctLength = this.dataset.length;
  console.log(correctLength);
  const inputDataLength = this.value.length;
  console.log(inputDataLength);

  if (correctLength == inputDataLength) {
    this.classList.remove("invalid");
    this.classList.add("valid");
  } else {
    this.classList.add("invalid");
  }
}

input.addEventListener("blur", numberCheck);
