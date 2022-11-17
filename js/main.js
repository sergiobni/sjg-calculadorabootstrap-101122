function element(id) {
  if (id === 'btn=') {
    resultado = eval(document.getElementById('pantalla').value);
    document.getElementById('memoria').textContent += `${resultado} | `;
    document.getElementById('pantalla').value = '';
    document.getElementById('tag').innerHTML =
      document.getElementById(id).innerHTML;
  } else if (id === 'btnc') {
    document.getElementById('pantalla').value = '';
    document.getElementById('memoria').textContent = '';
    document.getElementById('tag').innerHTML =
      document.getElementById(id).innerHTML;
  } else {
    let element = document.getElementById(id).innerHTML;
    document.getElementById('pantalla').value += element.trim();
    document.getElementById('tag').innerHTML = element;
  }
}
