document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('#contato form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        // Obtendo os valores dos campos
        const empresa = document.getElementById('empresa').value.trim();
        const email = document.getElementById('email').value.trim();
        const descricao = document.getElementById('descricao').value.trim();

        // Validação simples
        if (!empresa || !email || !descricao) {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        console.log('Formulário enviado com sucesso!');
        form.submit(); 
    });
});
