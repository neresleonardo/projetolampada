let lampadaQuebrada = false;

function acendeLampada() {
    if (!lampadaQuebrada) {
        const lampada = document.getElementById('lampada');
        lampada.setAttribute('src', 'lampada_acesa.jpg');
    }
}

function apagaLampada() {
    if (!lampadaQuebrada) {
        const lampada = document.getElementById('lampada');
        lampada.setAttribute('src', 'lampada_apagada.jpg');
    }
}

function quebraLampada() {
    if (!lampadaQuebrada) {
        const lampada = document.getElementById('lampada');
        lampada.setAttribute('src', 'lampada_quebrada.jpg');
        lampadaQuebrada = true;
    }
}