const bulb = document.getElementById('bulb');
const btn = document.getElementById('toggleBtn');

let isOn = false;

function toggleBulb() {
  isOn = !isOn;

  if (isOn) {
    bulb.src = 'https://www.w3schools.com/js/pic_bulbon.gif';
    btn.textContent = 'Turn Off';
    btn.classList.add('off');
  } else {
    bulb.src = 'https://www.w3schools.com/js/pic_bulboff.gif';
    btn.textContent = 'Turn On';
    btn.classList.remove('off');
  }
}
