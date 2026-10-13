const swapBtn = document.getElementById('swap-btn');
const inputA = document.getElementById('input-a');
const inputB = document.getElementById('input-b');

swapBtn.addEventListener('click', () => {
  const temp = inputA.value;

  inputA.value = inputB.value;
  inputB.value = temp;
});
