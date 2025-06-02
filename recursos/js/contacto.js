document.addEventListener('DOMContentLoaded', () => {
    const radios = document.querySelectorAll('input[name="contacto"]');
    const campoEmail = document.getElementById('campo-email');
    const campoTelefono = document.getElementById('campo-telefono');

    radios.forEach(radio => {
        radio.addEventListener('change', () => {
            if (radio.value === 'email') {
                campoEmail.style.display = 'block';
                campoEmail.querySelector('input').setAttribute('required', 'required');

                campoTelefono.style.display = 'none';
                campoTelefono.querySelector('input').removeAttribute('required');
                campoTelefono.querySelector('input').value = '';
            } else {
                campoTelefono.style.display = 'block';
                campoTelefono.querySelector('input').setAttribute('required', 'required');

                campoEmail.style.display = 'none';
                campoEmail.querySelector('input').removeAttribute('required');
                campoEmail.querySelector('input').value = '';
            }
        });
    });
});
