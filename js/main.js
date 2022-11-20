const memoria = document.getElementById('memoria');
const pantalla = document.getElementById('pantalla');
const tag = document.getElementById('tag');
const selector = document.getElementById('selector');
const valor = document.getElementById('valor');

function element(id) {
  const idElement = document.getElementById(id);
  if (id === 'btn=') {
    const resultado = eval(pantalla.value);
    memoria.textContent += `${resultado} | `;
    pantalla.value = '';
  } else if (id === 'btnc') {
    pantalla.value = '';
    memoria.textContent = '';
  } else {
    const elementInner = idElement.innerHTML;
    pantalla.value += elementInner.trim();
  }
  selector.innerHTML = idElement.type;
  tag.innerHTML = id;
  valor.innerHTML = idElement.innerHTML;
}
