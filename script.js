// Configurare Supabase
const SUPABASE_URL = 'https://ilfxaninpddbyewzzwcl.supabase.co';
const SUPABASE_KEY = 'sb_publishable_wnShI15PBMwHUVkFnljTqw_sdK8KNQ0'; // Cheia ta anonimă
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

const container = document.getElementById('products');

// Funcția de afișare
function displayProducts(items) {
    container.innerHTML = '';
    items.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <h3>${product.nume_produs}</h3>
            <p>${product.pret_per_kg} RON/kg</p>
        `;
        container.appendChild(card);
    });
}

// Funcția care preia datele din tabelul 'produse'
async function init() {
    const { data, error } = await supabase
        .from('produse')
        .select('*');

    if (error) {
        console.error("Eroare la încărcare:", error.message);
    } else {
        displayProducts(data);
    }
}

init();