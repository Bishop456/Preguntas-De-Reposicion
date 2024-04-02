function copiar() {
  var numero = document.querySelector('input[type="text"]').value;
  var sms = document.querySelector('input[name="sms"]:checked');
  var smsValue = sms ? sms.value : '';
  var combo = obtenerComboSeleccionado();
  var llamadas = document.getElementById('llamadas').value;

  if (numero && smsValue && llamadas) {
    var textoCopiado =
      "Número: " + numero + "\n" +
      "¿Has enviado SMS este mes❓\n" +
      " " + smsValue + "\n\n" +
      "🔒 ¿Cuál fue el Combo que compraste con más frecuencia en los últimos 3 meses❓\n" +
      " " + combo + "\n\n" +
      "🔒 ¿Número al que más llamas con frecuencia❓\n" +
      llamadas;

    navigator.clipboard.writeText(textoCopiado)
      .then(() => {
        alert("¡Texto copiado al portapapeles!");
      })
      .catch(err => console.error('Error al copiar el texto: ', err));
  } else {
    alert("Por favor completa todos los campos.");
  }
}

function obtenerComboSeleccionado() {
  var combos = document.getElementsByName("combo");
  for (var i = 0; i < combos.length; i++) {
    if (combos[i].checked) {
      return combos[i].value;
    }
  }
  return "Ninguno"; // Devuelve "Ninguno" si ningún combo está seleccionado
}

