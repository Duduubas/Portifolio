// Detectar e reagir à abertura do DevTools
(function() {
    // Detectar por mudança de tamanho da janela (F12)
    let devtools = function() {};
    devtools.toString = function() {
        window.location.href = 'about:blank'; // Redireciona ao detectar
        return '-';
    }
    
    // Monitor principal
    setInterval(function() {
        const widthThreshold = window.outerWidth - window.innerWidth > 160;
        const heightThreshold = window.outerHeight - window.innerHeight > 160;
        
        if(widthThreshold || heightThreshold) {
            document.body.innerHTML = 'DevTools detectado!';
            window.location.href = 'about:blank';
        }
    }, 1000);

    // Detectar console.log
    const consoleOutput = console.log.bind(console);
    console.log = function() {
        consoleOutput.apply(console, [devtools]);
    }

    // Detectar atalhos comuns
    window.addEventListener('keydown', function(e) {
        // F12, CTRL+SHIFT+I, CTRL+SHIFT+J, CTRL+SHIFT+C
        if (
            e.keyCode === 123 || 
            (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74 || e.keyCode === 67))
        ) {
            e.preventDefault();
            window.location.href = 'about:blank';
        }
    });

    // Desabilitar clique direito
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });

    // Detector alternativo usando debugger
    setInterval(function() {
        debugger;
    }, 100);

    // Detector por performance
    let start = new Date().getTime();
    debugger;
    let end = new Date().getTime();
    if(end - start > 100) {
        window.location.href = 'about:blank';
    }
})();

// Ofuscar o código-fonte
(() => {
    const scramble = (str) => btoa(encodeURIComponent(str));
    const unscramble = (str) => decodeURIComponent(atob(str));
    
    // Exemplo de como ofuscar conteúdo sensível
    const sensiveContent = scramble('conteúdo sensível');
    // Use unscramble(sensiveContent) quando precisar do conteúdo
})();