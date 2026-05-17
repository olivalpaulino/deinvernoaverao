// Este array facilita a adição e edição de produtos e seus links de afiliado.
// Você pode alterar o título, preço, imagem e link de cada produto facilmente.

const products = [];

// Gerando 22 produtos de exemplo como solicitado
/*
for(let i = 1; i <= 8; i++) {
    products.push({
        id: i,
        title: `Vestido Elegante Feminino ${i} - Coleção Inverno a Verão`,
        price: `R$ ${(79.90 + i).toFixed(2).replace('.', ',')}`, // Apenas para gerar preços diferentes
        image: "produto.png",
        link: "https://seulinkdeafiliado.com.br/produto" + i // Coloque seu link de afiliado aqui
    });
} */

// Você pode adicionar produtos manualmente assim:

products.push({
    id: 1,
    title: "Camiseta Brasil Copa 2026 Esportiva Dryfit 100% Poliéster",
    price: "R$ 63,91",
    image: "src/camisa-brasil-azul.webp",
    link: "https://meli.la/2dDKmH8"
});

products.push({
    id: 2,
    title: "Camiseta T Shirt Estampa Ícones Brasil Tropical Algodão",
    price: "R$ 36,76",
    image: "src/camisa-brasil-amarela.webp",
    link: "https://meli.la/1nh9RZN"
});

products.push({
    id: 3,
    title: "Vestido Feminino Curto Copa Do Mundo Seleção Brasil Carnaval",
    price: "R$ 86,06",
    image: "src/vestido-brasil-amarelo.webp",
    link: "https://meli.la/2FRSDEt"
});

products.push({
    id: 4,
    title: "Sobretodo Gizetty Tecido Couro Moda Festa Balada Inverno",
    price: "R$ 123,49",
    image: "src/sobretudo-gizetty.webp",
    link: "https://meli.la/2ycc9Q6"
});

products.push({
    id: 5,
    title: "Conjunto Fitness Blackout Top Shorts Meia Coxa Cintura Alta",
    price: "R$ 69,90",
    image: "src/conjunt-fitness-blackout.webp",
    link: "https://meli.la/2VPsuGE"
});

products.push({
    id: 6,
    title: "Conjunto Fitness Virginia Top Shorts Meia Coxa Cintura Alta",
    price: "R$ 69,00",
    image: "src/conjunto-fitness-virginia.webp",
    link: "https://meli.la/1XnhWyw"
});

products.push({
    id: 7,
    title: "Blusa Regatinha Feminina Gola 2 Em 1 Drapeada Casual Premium",
    price: "R$ 40,01",
    image: "src/blusa-regatinha.webp",
    link: "https://meli.la/2ak688J"
});

products.push({
    id: 8,
    title: "Regata Feminina Original Pit Bull Casual Conforto Qualidade",
    price: "R$ 59,90",
    image: "src/blusa-regatinha-rosa.webp",
    link: "https://meli.la/26gXJof"
});

products.push({
    id: 9,
    title: "Regata Cropped Feminina Em Ribana Hering",
    price: "R$ 79,90",
    image: "src/regata-cropped.webp",
    link: "https://meli.la/17RWBEk"
});

products.push({
    id: 10,
    title: "Blusa Cropped Rhero Jeans Lançamento",
    price: "R$ 74,62",
    image: "src/cropped-rheno.webp",
    link: "https://meli.la/22oqnvJ"
});

products.push({
    id: 11,
    title: "Camiseta Blusa Dry Fit Lisa Feminina Academia Proteção Uv 50",
    price: "R$ 31,74",
    image: "src/blusa-dry-fit.webp",
    link: "https://meli.la/2YkpBmv"
});

products.push({
    id: 12,
    title: "Camisa Cropped Duna Blusa Transpassada Manga Longa Dia A Dia",
    price: "R$ 31,74",
    image: "src/cropped-duna.webp",
    link: "https://meli.la/27jYXgQ"
});

products.push({
    id: 13,
    title: "Blusa Feminina Bata Manga Longa Bufante Crepe Elegante",
    price: "R$ 39,77",
    image: "src/blusa-feminina-roxa.webp",
    link: "https://meli.la/1FZwvxb"
});

products.push({
    id: 14,
    title: "Blazer Feminino Social Princesa Manga Bufante Moderno Clean",
    price: "R$ 69,70",
    image: "src/blazzer-vermelho.webp",
    link: "https://meli.la/1Mt8e7K"
});

products.push({
    id: 15,
    title: "Blusa Feminina Gola Polo De Trico Listrada Manga Longa",
    price: "R$ 69,90",
    image: "src/blusa-manga-gola-polo.webp",
    link: "https://meli.la/2fFdBg7"
});

products.push({
    id: 16,
    title: "Casaco Feminino Inverno Jaqueta Suede Camurça Moda",
    price: "R$ 106,88",
    image: "src/jaqueta-suede.webp",
    link: "https://meli.la/1rXzNw2"
});

products.push({
    id: 17,
    title: "Sobretudo Feminino Manga Longa Botões Tendência",
    price: "R$ 142,40",
    image: "src/sobretudo-vermelho.webp",
    link: "https://meli.la/2jN9K3M"
});

products.push({
    id: 18,
    title: "Conjunto Free Top E Short Feminino Omne Fitwear",
    price: "R$ 108,63",
    image: "src/top-short-rosa.webp",
    link: "https://meli.la/14GRoJ9"
});

products.push({
    id: 19,
    title: "Conjunto Fitness Feminino Elegance Preto P/ Academia Look",
    price: "R$ 71,90",
    image: "src/conjunto-fitness-top-e-short.webp",
    link: "https://meli.la/2GpQNrf"
});

products.push({
    id: 20,
    title: "Conjunto Fitness Feminino + Camiseta Brinde Roupa Academia",
    price: "R$ 59,17",
    image: "src/conjunto-top-fitness-black.webp",
    link: "https://meli.la/2Bs2hwn"
});

products.push({
    id: 21,
    title: "Blazer Feminino Alfaiataria Terninho Social Com Botões",
    price: "R$ 58,19",
    image: "src/blazer-rosa.webp",
    link: "https://meli.la/1JNKgHT"
});

products.push({
    id: 22,
    title: "Pijama De Frio Inverno Ultra Soft Peluciado Com Estampas",
    price: "R$ 69,99",
    image: "src/pjama-frio-azul.webp",
    link: "https://meli.la/2CQH97d"
});

products.push({
    id: 23,
    title: "Kit Conjunto Roupa Academia Treino Premium Calça Leg E Top",
    price: "R$ 113,89",
    image: "src/top-leg-vinho.webp",
    link: "https://meli.la/1NQiobe"
});

products.push({
    id: 24,
    title: "Pijama Macacão Kigurumi Stitch Feminino Adulto Plush Zíper",
    price: "R$ 91,91",
    image: "src/macacao-stich.webp",
    link: "https://meli.la/2pZ48aN"
});

products.push({
    id: 25,
    title: "Casaco Teddy Feminino Blusa Frio Curto Branco Preto Marrom",
    price: "R$ 54,99",
    image: "src/casaco-teddy.webp",
    link: "https://meli.la/1dYDhQu"
});

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
