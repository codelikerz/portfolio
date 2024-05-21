// Adiciona a navegação suave a todos os links da barra de navegação
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault(); // Evita o comportamento padrão de seguir o link

        const targetId = link.getAttribute('href'); // Obtém o ID da seção alvo
        const targetSection = document.querySelector(targetId); // Obtém a seção alvo

        // Verifica se a seção alvo existe
        if (targetSection) {
            // Calcula a posição da seção alvo na página
            const offsetTop = targetSection.offsetTop;

            // Rola suavemente até a seção alvo
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});