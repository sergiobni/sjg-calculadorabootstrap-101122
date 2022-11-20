let memoria = document.getElementById('memoria');
let pantalla = document.getElementById('pantalla');
let tag = document.getElementById('tag');
let selector = document.getElementById('selector');
let value = document.getElementById('valor');

function element(id) {
  if (id === 'btn=') {
    let resultado = eval(document.getElementById('pantalla').value);
    memoria.textContent += `${resultado} | `;
    pantalla.value = '';
  } else if (id === 'btnc') {
    pantalla.value = '';
    memoria.textContent = '';
  } else {
    let element = document.getElementById(id).innerHTML;
    pantalla.value += element.trim();
  }
  selector.innerHTML = document.getElementById(id).type;
  tag.innerHTML = id;
  value.innerHTML = document.getElementById(id).innerHTML;
}
