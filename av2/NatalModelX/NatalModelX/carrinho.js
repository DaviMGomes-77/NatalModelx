const lista = document.getElementById("itens-carrinho");
const totalElemento = document.getElementById("total-carrinho");

function carregarCarrinho() {

    let carrinho = JSON.parse(
        localStorage.getItem("natalmodelx_carrinho")
    ) || [];

    lista.innerHTML = "";

    if (carrinho.length === 0) {
        lista.innerHTML = "<p>Seu carrinho está vazio 😟</p>";
        totalElemento.textContent = "Total: R$ 0,00";
        return;
    }

    let total = 0;

    carrinho.forEach((produto, indice) => {

        const subtotal = produto.preco * produto.quantidade;
        total += subtotal;

        const item = document.createElement("div");
        item.className = "item-carrinho";

        const nome = document.createElement("h3");
        nome.textContent = produto.nome;

        const preco = document.createElement("p");
        preco.textContent =
            "Preço: " + produto.preco.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL"
            });

        const quantidade = document.createElement("p");
        quantidade.textContent = "Quantidade: " + produto.quantidade;

        const subtotalTexto = document.createElement("p");
        subtotalTexto.textContent =
            "Subtotal: " + subtotal.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL"
            });

        const remover = document.createElement("button");
        remover.textContent = "🗑️ Remover produto";

        remover.addEventListener("click", () => {
            carrinho.splice(indice, 1);

            localStorage.setItem(
                "natalmodelx_carrinho",
                JSON.stringify(carrinho)
            );

            carregarCarrinho();
        });

        item.append(nome, preco, quantidade, subtotalTexto, remover);
        lista.appendChild(item);
    });

    totalElemento.textContent =
        "Total: " + total.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        });
}

carregarCarrinho();


