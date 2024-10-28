AOS.init();

const initTypingAnimation = () => {
    const titleApresentacao = document.querySelector('.titleApresentacao h1')
    const span = document.querySelector('.titleApresentacao span')
    const paragraph = document.querySelector('.titleApresentacao p')

    const typingAnimation = (element, text, delay) => {
        setTimeout(() => {
            element.innerHTML = '' 
            const textToArray = text.split('') 

            textToArray.forEach((item, index) => {
                setTimeout(() => element.innerHTML += item, 80 * index)
            })
        }, delay)
    }

    typingAnimation(titleApresentacao, 'Olá, eu sou o ', 0)
    typingAnimation(span, 'Guilherme Machado', 1600)
    typingAnimation(paragraph, 'Desenvolvedor Front-End', 3700)
}

initTypingAnimation()





document.querySelectorAll('.icon').forEach(icon => {
    icon.addEventListener('mouseover', () => {
        // Esconde todas as imagens
        document.querySelectorAll('.containerDemoProjetos > div').forEach(container => {
            container.style.display = 'none';
        });

        // Identifica o contêiner a ser mostrado
        const containerToShow = document.querySelector(`.containerFotos${icon.classList[0].replace('icon', '')}`);
        
        // Verifica se o contêiner a ser mostrado é válido
        if (containerToShow) {
            containerToShow.style.display = 'flex'; // Mostra a imagem correspondente
        } else {
            console.log('Container não encontrado para:', icon.classList[0]);
        }
    });

    icon.addEventListener('mouseout', () => {
        // Esconde todas as imagens novamente
        document.querySelectorAll('.containerDemoProjetos > div').forEach(container => {
            container.style.display = 'none';
        });
    });
});
