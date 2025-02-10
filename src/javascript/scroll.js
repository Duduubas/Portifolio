// Seleciona os elementos para animar
const skillCards = document.querySelectorAll('.skill-card');
const projectCards = document.querySelectorAll('.projects-section__content-projetos');

// Configurações melhoradas da animação
const animationConfig = {
    threshold: [0.2, 0.5, 0.8],  // Múltiplos pontos de trigger para animação mais suave
    rootMargin: '50px'  // Mantido o mesmo rootMargin
};

// Função de delay sequencial
const getSequentialDelay = (index) => {
    return (index * 150) + 'ms'; // 150ms de delay entre cada item
};

// Função melhorada de animação
const fadeInAnimation = (entries, observer) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            // Adiciona delay sequencial
            entry.target.style.transitionDelay = getSequentialDelay(
                Array.from(entry.target.parentNode.children).indexOf(entry.target)
            );
            
            // Adiciona a classe de animação
            entry.target.classList.add('fade-in-visible');
            
            // Remove o delay após a animação para não afetar outras transições
            setTimeout(() => {
                entry.target.style.transitionDelay = '0s';
            }, 1000);

            observer.unobserve(entry.target);
        }
    });
};

// Cria o observer com as configurações melhoradas
const observer = new IntersectionObserver(fadeInAnimation, animationConfig);

// Inicializa os cards de habilidades
skillCards.forEach((card, index) => {
    card.classList.add('fade-in-hidden');
    card.style.setProperty('--card-index', index); // Para referência no CSS
    observer.observe(card);
});

// Inicializa os cards de projeto
projectCards.forEach((card, index) => {
    card.classList.add('fade-in-hidden');
    card.style.setProperty('--card-index', index); // Para referência no CSS
    observer.observe(card);
});