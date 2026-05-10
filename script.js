// 1. Configurația Supabase
const SUPABASE_URL = 'https://ilfxaninpddbyewzzwcl.supabase.co';
const SUPABASE_KEY = 'sb_publishable_wnShI15PBMwHUVkFnljTqw_sdK8KNQ0';

// 2. Creăm clientul folosind un nume unic (dbClient) pentru a evita erorile de tip "already declared"
const dbClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

const container = document.getElementById('products');

// 3. Funcția care desenează produsele pe ecran
function displayProducts(items) {
    container.innerHTML = '';
    
    if (items.length === 0) {
        container.innerHTML = '<p>Momentan nu sunt produse disponibile.</p>';
        return;
    }

    items.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <h3>${product.nume_produs}</h3>
            <p><strong>${product.pret_per_kg}</strong> RON/kg</p>
        `;
        container.appendChild(card);
    });
}

// 4. Funcția care aduce datele din tabelul 'produse'
async function init() {
    console.log("Se încarcă produsele...");
    
    const { data, error } = await dbClient
        .from('produse')
        .select('*');

    if (error) {
        console.error("Eroare la comunicarea cu Supabase:", error.message);
        container.innerHTML = `<p>Eroare la încărcare: ${error.message}</p>`;
    } else {
        console.log("Date primite cu succes:", data);
        displayProducts(data);
    }
}

// 5. Pornim aplicația
init();