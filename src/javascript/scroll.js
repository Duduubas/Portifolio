// Primeiro, vamos selecionar todos os elementos que queremos animar
const skillCards = document.querySelectorAll('.skill-card');
const projectCards = document.querySelectorAll('.projects-section__content-projetos');

// Configurações da animação
const animationConfig = {
    threshold: 0.3,  // Quando 30% do elemento estiver visível, a animação começa
    rootMargin: '50px'  // Margem extra para começar a animação um pouco antes
};

// Função que será executada quando o elemento ficar visível
const fadeInAnimation = (entries, observer) => {
    entries.forEach(entry => {
        // Verifica se o elemento está visível na tela
        if (entry.isIntersecting) {
            // Adiciona a classe que vai disparar a animação
            entry.target.classList.add('fade-in-visible');
            // Para de observar o elemento depois que a animação acontecer
            observer.unobserve(entry.target);
        }
    });
};

// Cria o observer que vai monitorar os elementos
const observer = new IntersectionObserver(fadeInAnimation, animationConfig);

// Adiciona a classe inicial e começa a observar cada card
skillCards.forEach(card => {
    card.classList.add('fade-in-hidden');  // Classe inicial (invisível)
    observer.observe(card);  // Começa a observar o card
});

// Faz o mesmo para os cards de projeto
projectCards.forEach(card => {
    card.classList.add('fade-in-hidden');
    observer.observe(card);
});