const products = [
    { name: "Mere Ionatan", price: "5 RON/kg" },
    { name: "Lapte de Vacă", price: "7 RON/L" },
    { name: "Ouă de casă", price: "1.5 RON/buc" }
];

const container = document.getElementById('products');

function displayProducts(items) {
    container.innerHTML = '';
    items.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `<h3>${product.name}</h3><p>${product.price}</p>`;
        container.appendChild(card);
    });
}

displayProducts(products);

document.getElementById('search-btn').addEventListener('click', () => {
    const query = document.getElementById('search-bar').value.toLowerCase();
    const filtered = products.filter(p => p.name.toLowerCase().includes(query));
    displayProducts(filtered);
});