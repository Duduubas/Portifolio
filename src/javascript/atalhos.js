// Desabilitar botão direito
document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
});

// Desabilitar algumas teclas de atalho
document.addEventListener('keydown', (e) => {
    // Previne Print Screen
    if (e.key === 'PrintScreen') {
        e.preventDefault();
    }

    // Previne CTRL+P (Imprimir)
    if (e.ctrlKey && e.key === 'p') {
        e.preventDefault();
    }

    // Previne CTRL+S (Salvar)
    if (e.ctrlKey && e.key === 's') {
        e.preventDefault();
    }

    // Previne CTRL+C (Copiar)
    if (e.ctrlKey && e.key === 'c') {
        e.preventDefault();
    }
});

// Desabilitar seleção de texto
document.addEventListener('selectstart', (e) => {
    e.preventDefault();
});

// Desabilitar arrastar imagens
document.addEventListener('dragstart', (e) => {
    e.preventDefault();
});