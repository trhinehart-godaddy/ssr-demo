const count = document.getElementById('count');
const button = document.getElementById('inc');

button.onclick = () => {
  ++count.innerText;
};
