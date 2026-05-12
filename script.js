// Este array facilita a adição e edição de produtos e seus links de afiliado.
// Você pode alterar o título, preço, imagem e link de cada produto facilmente.

const products = [];

// Gerando 22 produtos de exemplo como solicitado
for(let i = 1; i <= 22; i++) {
    products.push({
        id: i,
        title: `Vestido Elegante Feminino ${i} - Coleção Inverno a Verão`,
        price: `R$ ${(79.90 + i).toFixed(2).replace('.', ',')}`, // Apenas para gerar preços diferentes
        image: "produto.png",
        link: "https://seulinkdeafiliado.com.br/produto" + i // Coloque seu link de afiliado aqui
    });
}

// Você pode adicionar produtos manualmente assim:
/*
products.push({
    id: 23,
    title: "Blusa de Frio Inverno",
    price: "R$ 120,00",
    image: "produto.png",
    link: "https://seulinkdeafiliado.com.br/blusa"
});
*/

const productsGrid = document.getElementById('products-grid');

// Função para renderizar os produtos na tela
function renderProducts() {
    products.forEach(product => {
        // Criando a estrutura do card
        // Note que o link (tag <a>) envolve a imagem, título e preço, 
        // tornando todo o card clicável e levando para o mesmo link.
        const cardHTML = `
            <article class="product-card">
                <a href="${product.link}" target="_blank" class="product-link">
                    <img src="${product.image}" alt="${product.title}" class="product-image" loading="lazy">
                    <div class="product-info">
                        <h2 class="product-title">${product.title}</h2>
                        <span class="product-price">${product.price}</span>
                    </div>
                </a>
            </article>
        `;
        productsGrid.innerHTML += cardHTML;
    });
}

// Chama a função para exibir os produtos assim que o script carrega
renderProducts();
