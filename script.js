// Selecionando os elementos
var button = document.getElementById('meu-botao');
var imageContainer = document.getElementById("imageContainer");
var audio = document.getElementById('audio');
var textElement = document.getElementById("animatedText");
var gifLeft = document.getElementById("gifLeft");
var gifRight = document.getElementById("gifRight");

// Função para exibir texto palavra por palavra
function showText(text, delay = 500) {
    let words = text.split(" "); // Divide o texto em palavras
    let currentIndex = 0;

    function addNextWord() {
        if (currentIndex < words.length) {
            textElement.textContent += (currentIndex > 0 ? " " : "") + words[currentIndex];
            currentIndex++;
            setTimeout(addNextWord, delay); // Adiciona a próxima palavra após o delay
        }
    }

    textElement.textContent = ""; // Limpa qualquer texto existente
    textElement.classList.remove("hidden"); // Exibe o elemento
    addNextWord(); // Inicia o processo de adicionar palavras
}

// Evento do botão
button.addEventListener("click", () => {
    audio.play(); // Toca o áudio
    button.style.zIndex = 0;

    // Esconde o botão e o texto inicial
    button.style.display = "none"; // Esconde o botão
    var initialText = document.querySelector('h1'); // Encontrando o texto inicial
    initialText.style.display = "none"; // Esconde o texto inicial (h1)

    // Mostra a imagem central com efeito
    setTimeout(() => {
        imageContainer.classList.remove("hidden");
        imageContainer.style.opacity = 1;
        // Aplica o efeito de aumento na imagem
        imageContainer.querySelector('img').classList.add("enlarge");
    }, 100);

    // Mostra os GIFs laterais
    setTimeout(() => {
        gifLeft.classList.remove("hidden");
        gifLeft.style.opacity = 1;
        gifRight.classList.remove("hidden");
        gifRight.style.opacity = 1;
    }, 500);

    // Mostra o texto palavra por palavra
    setTimeout(() => {
        showText("Ninguém entende como tudo aconteceu tão rápido, nem mesmo a gente, mas você foi o meu inesperado mais esperado! Eu te amo! Feliz Natal minha Jujubinha!!!", 350);
    }, 1000);
});
