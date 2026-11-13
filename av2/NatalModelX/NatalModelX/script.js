const musica = document.getElementById("musicaNatal");
const botao = document.getElementById("botaoMusica");

async function alternarMusica() {
    if (musica.paused) {
        try {
            await musica.play();
            botao.innerHTML = "🎵 Música ON";
        } catch (erro) {
            console.error(erro);
            alert("Não consegui encontrar ou reproduzir a música.");
        }
    } else {
        musica.pause();
        botao.innerHTML = "🎵 Música OFF";
    }
}