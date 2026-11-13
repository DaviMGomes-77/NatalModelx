
const produtos = document.querySelectorAll(".produto");

produtos.forEach((produto, indice) => {

    // Criar um ID exclusivo para cada produto
    const id = indice + 1;

    // Pegar o nome do produto
    const nome = produto.querySelector("h3").textContent
        .replace(/^\d+\.\s*/, "");

    // Pegar o preço do produto
    const textoPreco = produto.querySelector(".preco").textContent;

    const preco = Number(
        textoPreco.replace(/[^\d,]/g, "").replace(",", ".")
    );

    // Criar o botão de adicionar ao carrinho
    const botao = document.createElement("button");

    botao.className = "adicionar-carrinho";
    botao.textContent = "🛒 Adicionar ao carrinho";

    // Informações individuais do produto
    botao.dataset.id = id;
    botao.dataset.nome = nome;
    botao.dataset.preco = preco;

    // Adicionar botão dentro do quadradinho
    produto.appendChild(botao);

    // Função de adicionar ao carrinho
    botao.addEventListener("click", () => {

        let carrinho = JSON.parse(
            localStorage.getItem("natalmodelx_carrinho")
        ) || [];

        const existente = carrinho.find(
            item => item.id === String(id)
        );

        if (existente) {
            existente.quantidade++;
        } else {
            carrinho.push({
                id: String(id),
                nome: nome,
                preco: preco,
                quantidade: 1
            });
        }

        localStorage.setItem(
            "natalmodelx_carrinho",
            JSON.stringify(carrinho)
        );

        const mensagem = document.getElementById("mensagem-carrinho");

if (mensagem) {
    mensagem.textContent = "✓ " + nome + " adicionado ao carrinho!";
    mensagem.classList.add("mostrar");

    setTimeout(() => {
        mensagem.classList.remove("mostrar");
    }, 2500);
}
    });

});





