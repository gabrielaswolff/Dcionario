// seleção de botoes para modais
const botoesModal = document.querySelectorAll('.botao-modal');
const modais = document.querySelectorAll('.modal');
const fecharModais = document.querySelectorAll('.fechar-modal');

// clique dos botoes
botoesModal.forEach(botao => {
    botao.addEventListener('click', function() {
        const modalId = this.getAttribute('data-modal-id');
        const modal = document.getElementById(modalId);
        modal.showModal();
    });
});

// fechar modal
fecharModais.forEach(fecharModal => {
    fecharModal.addEventListener('click', function() {
        const modalId = this.parentElement.getAttribute('id');
        const modal = document.getElementById(modalId);
        modal.close();
    });
});
