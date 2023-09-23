const counterValue = document.querySelector("#value");
const incrementElement = document.querySelector('[data-action="increment"]');
const decrementElement = document.querySelector('[data-action="decrement"]');

const counter = {
  value: 0,
  increment() {
    this.value += 1;
  },
  decrement() {
    this.value -= 1;
  },
};

incrementElement.addEventListener("click", () => {
  counter.increment();
  counterValue.textContent = counter.value;
});

decrementElement.addEventListener("click", () => {
  counter.decrement();
  counterValue.textContent = counter.value;
});
