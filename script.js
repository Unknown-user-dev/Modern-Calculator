const input = document.getElementById('input');

function append(value) {
    input.value += value;
}

function clearInput() {
    input.value = '';
  }

function calculate() {
    try {
        input.value = eval(input.value);
    } catch (error) {
        alert('Erreur de calcul')
    }
}
