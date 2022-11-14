let suma = '';

function element(id) {
  alert(document.getElementById(id));
  console.log(document.getElementById(id));
  suma += document.getElementById(id);
}

function sumar() {
  console.log();
}

//poner el resultado de lo selecciona en el html derecho

function element(id) {
  let element = document.getElementById(id).innerHTML;

  document.getElementById('tag').innerHTML = element;
  document.getElementById('tag').innerHTML = element;
}
