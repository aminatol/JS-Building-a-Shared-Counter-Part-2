async function main() {
  const countContainer = document.querySelector("#count-container");
  const incrementButton = document.querySelector("#increment-button");
  const decrementButton = document.querySelector("#decrement-button");
  const url = "http://localhost:9001/counter";

  const response = await fetch(url);

  const result = await response.json();

  let countValue = result.value;

  function increment() {
    countValue++;
    countContainer.textContent = countValue;
    updateCounter(countValue);
  }

  function decrement() {
    countValue--;
    countContainer.textContent = countValue;
    updateCounter(countValue);
  }

  function updateCounter(countValue) {
    fetch(url, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        value: countValue,
      }),
    });
  }
  incrementButton.addEventListener("click", increment);
  decrementButton.addEventListener("click", decrement);
  countContainer.textContent = countValue;
}
main();
