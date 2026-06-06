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

products.push({
    id: 26,
    title: "Conjunto Suplex Blackout Zero Transparência Legging E Croppe",
    price: "R$ 56,02",
    image: "src/conjunto-suplex.webp",
    link: "https://meli.la/1mSGUqr"
});

products.push({
    id: 27,
    title: "Saia Festa Junina Xadrez Arraiá São João Flanelada Rodada",
    price: "R$ 59,90",
    image: "src/saia-rodada.webp",
    link: "https://meli.la/1HDkjd6"
});

products.push({
    id: 28,
    title: "Camiseta Mulher Maravilha Camisa Estampada Super Herói",
    price: "R$ 58,19",
    image: "src/mulher-maravilha.webp",
    link: "https://meli.la/2ai2NoJ"
});

products.push({
    id: 29,
    title: "Camiseta Meninas Super Poderosas Oversized",
    price: "R$ 36,00",
    image: "src/camisa-menina-poderosa-academia.webp",
    link: "https://meli.la/1UHpd4f"
});

products.push({
    id: 30,
    title: "Kit 3 Camisetas Meninas Super Poderosa Docinho Lindinha Flor",
    price: "R$ 75,93",
    image: "src/kit-meninas-poderosas.webp",
    link: "https://meli.la/2aamQnu"
});

products.push({
    id: 31,
    title: "Camiseta Feminina Personagem Desenho Filme Algodão Premium",
    price: "R$ 32,35",
    image: "src/camisa-stich.webp",
    link: "https://meli.la/1MzXJQS"
});

products.push({
    id: 32,
    title: "Conjunto Feminino Fitness Powerslim Top Alça E Short",
    price: "R$ 109,90",
    image: "src/roupa-fitness-azul.webp",
    link: "https://meli.la/2k2J6TV"
});

products.push({
    id: 33,
    title: "Jaqueta Em Suede Feminino Elegante Casaco Tendencia Inverno",
    price: "R$ 96,37",
    image: "src/jaqueta-suede-preta.png",
    link: "https://meli.la/1yjmgfY"
});

products.push({
    id: 34,
    title: "Vestido Midi Cetim Marrom Amarração",
    price: "R$ 246,90",
    image: "src/vestido-midi-cetim-marrom.png",
    link: "https://meli.la/1BsPFim"
});

products.push({
    id: 35,
    title: "Vestido Midi Cetim Marrom Amarração",
    price: "R$ 151,90",
    image: "src/jaqueta-couro-preta.png",
    link: "https://meli.la/2qYYCor"
});

products.push({
    id: 36,
    title: "Saída De Praia Túnica Bata Indiana Feminina Detalhes Bordado",
    price: "R$ 98,06",
    image: "src/bata-indiana.png",
    link: "https://meli.la/26zVT73"
});

products.push({
    id: 37,
    title: "Saia Festa Junina Xadrez Rodada Caipira Arraiá Xadrez Curta",
    price: "R$ 69,90",
    image: "src/saia-junina-vermelha.webp",
    link: "https://meli.la/2BELGrc"
});

products.push({
    id: 38,
    title: "Vestido Quadrilha Adulto Xadrez Junino Festa Caipira Luxo",
    price: "R$ 153,63",
    image: "src/vestido-junino-vermelho.webp",
    link: "https://meli.la/1DKRk8J"
});

products.push({
    id: 39,
    title: "Vestido Feminino Xadrez Quadrilha Festa Junina São João",
    price: "R$ 63,99",
    image: "src/vestido-junino-vermelho-xadrez.webp",
    link: "https://meli.la/1RgXCsN"
});

products.push({
    id: 40,
    title: "Vestido Quadrilha Festa Junina Arraiá Caipira Xadrez Rodado",
    price: "R$ 132,54",
    image: "src/vestido-junino-branco-preto.webp",
    link: "https://meli.la/2Mj5Ncc"
});

products.push({
    id: 41,
    title: "Vestido Xadrez-roupas Femininas Pronta Entrega Viscolycra",
    price: "R$ 142,40",
    image: "src/vestido-junino-vermelho-xadrez-dark.webp",
    link: "https://meli.la/1pkXrxx"
});

products.push({
    id: 42,
    title: "Vestido Caipira Junina Luxo Adulto (margarete)",
    price: "R$ 149,40",
    image: "src/vestido-junino-amarelo.webp",
    link: "https://meli.la/2zzX9v6"
});

products.push({
    id: 43,
    title: "Vestido Festa Junina Adulto Quadrilha Caipira Chique Luxo",
    price: "R$ 269,96",
    image: "src/vestido-junino-azul.webp",
    link: "https://meli.la/11pShH7"
});

products.push({
    id: 44,
    title: "Vestido Caipira Festa Junina Xadrez Adulto Luxo São João Top",
    price: "R$ 189,99",
    image: "src/vestido-junino-roxo.webp",
    link: "https://meli.la/25nmt9i"
});

products.push({
    id: 45,
    title: "Vestido Caipira Feminino Festa Junina Partylight",
    price: "R$ 139,91",
    image: "src/vestido-junino-roxo-preto.webp",
    link: "https://meli.la/2DEVbtd"
});

products.push({
    id: 46,
    title: "Vestido De Festa Junina Caipira Adulto + Luva",
    price: "R$ 125,61",
    image: "src/vestido-junino-vermelho-preto.webp",
    link: "https://meli.la/2k5u9PV"
});

products.push({
    id: 47,
    title: "Vestido Cangaceira Maria Bonita Adulto - Festa Junina",
    price: "R$ 151,90",
    image: "src/vestido-junino-cangaceira.webp",
    link: "https://meli.la/2fd7Boo"
});

products.push({
    id: 48,
    title: "Vestido Quadrilha Xadrez Festa Junina Caipira Arraiá Luxo",
    price: "R$ 187,90",
    image: "src/vestido-junino-marrom.webp",
    link: "https://meli.la/1Jwjn6W"
});

products.push({
    id: 49,
    title: "Vestido Festa Junina Adulto Feminino Caipira Angelina",
    price: "R$ 163,66",
    image: "src/vestido-junino-angelina.webp",
    link: "https://meli.la/1HV8EfU"
});

products.push({
    id: 50,
    title: "Vestido Festa Junina Adulto Xadrez Quadrilha Luxo Premium",
    price: "R$ 174,74",
    image: "src/vestido-junino-florido.webp",
    link: "https://meli.la/25pSqE1"
});

products.push({
    id: 51,
    title: "Vestido Junino Saia Armada 4 Babados Manga Longa Adulto Luxo",
    price: "R$ 189,88",
    image: "src/vestido-junino-marrom-preto.webp",
    link: "https://meli.la/2uUFtT8"
});

products.push({
    id: 52,
    title: "Vestido De Festa Junina Caipira Lindo Adulto E Luva",
    price: "R$ 129,90",
    image: "src/vestido-junino-azul-escuro.webp",
    link: "https://meli.la/1d4gQkc"
});

products.push({
    id: 53,
    title: "Vestido Quadrilha Xadrez Festa Junina Caipira Arraiá Luxo",
    price: "R$ 119,07",
    image: "src/vestido-junino-bandeiras.webp",
    link: "https://meli.la/1iGGYy8"
});

products.push({
    id: 54,
    title: "Vestido Caipira Festa Junina São João Quadrilha Adulto Luxo",
    price: "R$ 254,79",
    image: "src/vestido-junino-azul-floral.webp",
    link: "https://meli.la/2h2v4jE"
});

products.push({
    id: 55,
    title: "Vestido Festa Junina Caipira Quadrilha Roupa Xadrez Adulto",
    price: "R$ 189,00",
    image: "src/vestido-junino-vermelho-preto-espartilho.webp",
    link: "https://meli.la/1pjYkJU"
});
products.push({
    id: 56,
    title: "Vestido Festa Junina Adulto Juvenil Barato Coração São João",
    price: "R$ 149,90",
    image: "src/vestido-junino-azul-vermelho.webp",
    link: "https://meli.la/1RXS4tP"
});

products.push({
    id: 57,
    title: "Vestido Caipira Festa Junina Adulto São João Quadrilha Luxo",
    price: "R$ 229,90",
    image: "src/vestido-junino-amarelo-vermelho.webp",
    link: "https://meli.la/2sTNXny"
});

products.push({
    id: 58,
    title: "Blusa Listrada E Xadrez Viscolycra Feminina Manga Japonesa",
    price: "R$ 30,99",
    image: "src/blusa-xadrez.webp",
    link: "https://meli.la/1sifXnJ"
});

products.push({
    id: 59,
    title: "Blusa Blusinha Vichy Feminina Xadrez Cores Romântica Full",
    price: "R$ 69,80",
    image: "src/blusa-xadrez-preta.webp",
    link: "https://meli.la/2LoPcgQ"
});

products.push({
    id: 60,
    title: "Vestido Chemise Xadrez Feminino Flanelado Com Cinto Inverno",
    price: "R$ 78,90",
    image: "src/vestido-xadrez.webp",
    link: "https://meli.la/1oW7MuV"
});

products.push({
    id: 61,
    title: "Camisa Feminina Xadrez Colarinho Italiano Tricoline Estilosa",
    price: "R$ 78,90",
    image: "src/camisa-xadrez.webp",
    link: "https://meli.la/1iQUjKT"
});

products.push({
    id: 62,
    title: "Sawary Jeans Calça Elastano Lycra Cintura Alta Wide Leg",
    price: "R$ 161,12",
    image: "src/calca-jeans-azul.webp",
    link: "https://meli.la/2QjGK5S"
});

products.push({
    id: 63,
    title: "Calça Jeans Feminina Sawary Wide Leg Alta 4 Bolsos",
    price: "R$ 160,94",
    image: "src/calca-jeans-marrom.webp",
    link: "https://meli.la/1dcoz54"
});

products.push({
    id: 64,
    title: "Blusa Feminina Social Manga Morcego Muscle Tee Luxo",
    price: "R$ 24,30",
    image: "src/blusa-manga-morcego.webp",
    link: "https://meli.la/2C7doZb"
});

products.push({
    id: 65,
    title: "Conjunto Feminino Boiadeira Body Aplicações Strass + Saia Br",
    price: "R$ 168,72",
    image: "src/boiadeira.webp",
    link: "https://meli.la/19S4grv"
});

products.push({
    id: 66,
    title: "Biquíni Ripple Frufru Calcinha Sem Amaração Semi Fio",
    price: "R$ 78,99",
    image: "src/biquini-riple.png",
    link: "https://meli.la/1HnUjg3"
});


// --- Definição de Categorias ---
const categories = [
    { id: 'festa-junina', name: 'Festa Junina & Xadrez' },
    { id: 'copa', name: 'Copa do Mundo' },
    { id: 'fitness', name: 'Moda Fitness' },
    { id: 'inverno', name: 'Moda Inverno' },
    { id: 'blusas', name: 'Blusas & Croppeds' },
    { id: 'vestidos', name: 'Vestidos & Festa' },
    { id: 'jeans', name: 'Calças Jeans' },
    { id: 'praia', name: 'Moda Praia' },
    { id: 'personagens', name: 'Personagens' }
];

const categoryMap = {
    'festa-junina': [27, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61],
    'copa': [1, 2, 3],
    'fitness': [5, 6, 11, 18, 19, 20, 23, 26, 32],
    'inverno': [4, 14, 16, 17, 21, 22, 24, 25, 33],
    'blusas': [7, 8, 9, 10, 12, 13, 15, 64],
    'vestidos': [34, 35, 36],
    'jeans': [62, 63],
    'praia': [65],
    'personagens': [28, 29, 30, 31]
};

// Atribuindo categorias aos produtos dinamicamente
products.forEach(product => {
    for (const [catId, ids] of Object.entries(categoryMap)) {
        if (ids.includes(product.id)) {
            product.category = catId;
            break;
        }
    }
    if (!product.category) product.category = 'blusas'; // Fallback
});

const categoryNav = document.getElementById('category-nav');
const mainContent = document.getElementById('main-content');

// Função para renderizar as categorias e os produtos
function renderCategoriesAndProducts() {
    // 1. Renderizar os links de navegação
    categories.forEach(category => {
        const linkHTML = `<a href="#${category.id}" class="category-link">${category.name}</a>`;
        categoryNav.innerHTML += linkHTML;
    });

    // 2. Renderizar as seções de produtos
    categories.forEach(category => {
        // Filtrar produtos desta categoria
        const categoryProducts = products.filter(p => p.category === category.id);
        
        // Só renderiza a seção se tiver produtos nela
        if (categoryProducts.length > 0) {
            let sectionHTML = `
                <section class="category-section" id="${category.id}">
                    <h2 class="section-title">${category.name}</h2>
                    <div class="products-grid">
            `;
            
            categoryProducts.forEach(product => {
                sectionHTML += `
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
            });
            
            sectionHTML += `
                    </div>
                </section>
            `;
            
            mainContent.innerHTML += sectionHTML;
        }
    });
}

// Chama a função para exibir tudo assim que o script carrega
renderCategoriesAndProducts();
