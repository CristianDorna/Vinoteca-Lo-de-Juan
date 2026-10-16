const imageFiles = [
    "FedericoDeAlvear-extra-dulce.jpeg",
    "baronB-brut-rose.jpeg",
    "cerveza-amstel-473-pack.jpeg",
    "cerveza-brahama-473-pack.jpeg",
    "cerveza-brahama-710-pack.jpeg",
    "cerveza-corona-710.jpeg",
    "cerveza-miller-473-pack.jpeg",
    "fernet-branca.jpeg",
    "fernet-trip-ConCola.jpeg",
    "gancia.jpeg",
    "gin-bombay-dry.jpeg",
    "gin-heredero-boysenberry.jpeg",
    "gin-heredero-grapefruit.jpeg",
    "gin-heredero-tangerine.jpeg",
    "ginTonic-trip.jpeg",
    "mojito-trip.jpeg",
    "monster-pack.jpeg",
    "salentein-extra-brut.jpeg",
    "shhhhhh-pack.jpeg",
    "skyy-raspeberry.jpeg",
    "smirnoff-ice-greenapple.jpeg",
    "speed.jpeg",
    "vino-1816-malbec.jpeg",
    "vino-aime-malbec.jpeg",
    "vino-AlmaMora-mlambec.jpeg",
    "vino-canciller-blendDulce.jpeg",
    "vino-cayado-malbec.jpeg",
    "vino-chacabuco-CheninDulce.jpeg",
    "vino-chocovino-malbec.jpeg",
    "vino-colon-argentina.jpeg",
    "vino-colon-DulceFresco.jpeg",
    "vino-colon-durazno.jpeg",
    "vino-colon-frutos-rojos.jpeg",
    "vino-colon-naranja.jpeg",
    "vino-conejo-verde-blanco.jpeg",
    "vino-CosechaTardia-BlancoDulce.jpeg",
    "vino-CriaDeCosechas-patero.jpeg",
    "vino-dante-malbec.jpeg",
    "vino-DonValentin-redBlend.jpeg",
    "vino-encepado-dulce.jpeg",
    "vino-encepado-DulceTinto.jpeg",
    "vino-eon-gibbi-dulce.jpeg",
    "vino-EstanciaMendoza-dulce.jpeg",
    "vino-EstanciaMendoza-malbec.jpeg",
    "vino-etnia-malbec-granRoble.jpeg",
    "vino-etnia-malbec.jpeg",
    "vino-fincaLC-roble.jpeg",
    "vino-LaCelia-malbec.jpeg",
    "vino-lopez-malbec.jpeg",
    "vino-malazia-malbec.jpeg",
    "vino-malizia-malbec.jpeg",
    "vino-maltratado-MalbecMaduro.jpeg",
    "vino-versus-cheninDulce.jpeg",
    "vinoo-dada-391-artMalbec.jpeg"
];

const categories = [
    { id: "todos", label: "Todo" },
    { id: "vinos", label: "Vinos" },
    { id: "cervezas", label: "Cervezas" },
    { id: "aperitivos", label: "Aperitivos" },
    { id: "gin", label: "Gin" },
    { id: "destilados", label: "Destilados" },
    { id: "tragos", label: "Listos para tomar" },
    { id: "sin-alcohol", label: "Sin alcohol" }
];

const categoryInfo = {
    vinos: { label: "Vino", description: "Una etiqueta para acompañar comidas, sobremesas y buenos encuentros." },
    cervezas: { label: "Cerveza", description: "Una opción para disfrutar bien fría y compartir en cualquier encuentro." },
    aperitivos: { label: "Aperitivo", description: "Un clásico para preparar tus tragos favoritos y compartir." },
    gin: { label: "Gin", description: "Una alternativa para preparar un gin tonic a tu manera." },
    destilados: { label: "Destilado", description: "Un destilado para preparar tus tragos y combinaciones favoritas." },
    tragos: { label: "Listo para tomar", description: "Un trago listo para disfrutar bien frío, sin complicaciones." },
    "sin-alcohol": { label: "Sin alcohol", description: "Una bebida refrescante para disfrutar en cualquier momento." }
};

const categoryOverrides = {
    "FedericoDeAlvear-extra-dulce.jpeg": "vinos",
    "baronB-brut-rose.jpeg": "vinos",
    "salentein-extra-brut.jpeg": "vinos",
    "fernet-branca.jpeg": "aperitivos",
    "fernet-trip-ConCola.jpeg": "tragos",
    "gancia.jpeg": "aperitivos",
    "ginTonic-trip.jpeg": "tragos",
    "mojito-trip.jpeg": "tragos",
    "monster-pack.jpeg": "sin-alcohol",
    "shhhhhh-pack.jpeg": "sin-alcohol",
    "skyy-raspeberry.jpeg": "destilados",
    "smirnoff-ice-greenapple.jpeg": "tragos",
    "speed.jpeg": "sin-alcohol"
};

const titleOverrides = {
    "FedericoDeAlvear-extra-dulce.jpeg": "Federico de Alvear Extra Dulce",
    "baronB-brut-rose.jpeg": "Baron B Brut Rosé",
    "cerveza-amstel-473-pack.jpeg": "Amstel 473 ml · Pack",
    "cerveza-brahama-473-pack.jpeg": "Brahma 473 ml · Pack",
    "cerveza-brahama-710-pack.jpeg": "Brahma 710 ml · Pack",
    "cerveza-corona-710.jpeg": "Corona 710 ml",
    "cerveza-miller-473-pack.jpeg": "Miller 473 ml · Pack",
    "fernet-branca.jpeg": "Fernet Branca",
    "fernet-trip-ConCola.jpeg": "Fernet con cola · Trip",
    "gancia.jpeg": "Gancia",
    "gin-bombay-dry.jpeg": "Bombay Dry Gin",
    "gin-heredero-boysenberry.jpeg": "Heredero Boysenberry",
    "gin-heredero-grapefruit.jpeg": "Heredero Grapefruit",
    "gin-heredero-tangerine.jpeg": "Heredero Tangerine",
    "ginTonic-trip.jpeg": "Gin Tonic · Trip",
    "mojito-trip.jpeg": "Mojito · Trip",
    "monster-pack.jpeg": "Monster · Pack",
    "salentein-extra-brut.jpeg": "Salentein Extra Brut",
    "shhhhhh-pack.jpeg": "Shhhhhh · Pack",
    "skyy-raspeberry.jpeg": "Skyy Raspberry",
    "smirnoff-ice-greenapple.jpeg": "Smirnoff Ice Green Apple",
    "speed.jpeg": "Speed",
    "vino-1816-malbec.jpeg": "1816 Malbec",
    "vino-aime-malbec.jpeg": "Aimé Malbec",
    "vino-AlmaMora-mlambec.jpeg": "Alma Mora Malbec",
    "vino-canciller-blendDulce.jpeg": "Canciller Blend Dulce",
    "vino-cayado-malbec.jpeg": "Cayado Malbec",
    "vino-chacabuco-CheninDulce.jpeg": "Chacabuco Chenin Dulce",
    "vino-chocovino-malbec.jpeg": "Chocovino Malbec",
    "vino-colon-argentina.jpeg": "Colón Argentina",
    "vino-colon-DulceFresco.jpeg": "Colón Dulce Fresco",
    "vino-colon-durazno.jpeg": "Colón Durazno",
    "vino-colon-frutos-rojos.jpeg": "Colón Frutos Rojos",
    "vino-colon-naranja.jpeg": "Colón Naranja",
    "vino-conejo-verde-blanco.jpeg": "Conejo Verde Blanco",
    "vino-CosechaTardia-BlancoDulce.jpeg": "Cosecha Tardía Blanco Dulce",
    "vino-CriaDeCosechas-patero.jpeg": "Cría de Cosechas Patero",
    "vino-dante-malbec.jpeg": "Dante Malbec",
    "vino-DonValentin-redBlend.jpeg": "Don Valentín Red Blend",
    "vino-encepado-dulce.jpeg": "Encepado Dulce",
    "vino-encepado-DulceTinto.jpeg": "Encepado Dulce Tinto",
    "vino-eon-gibbi-dulce.jpeg": "Eon Gibbi Dulce",
    "vino-EstanciaMendoza-dulce.jpeg": "Estancia Mendoza Dulce",
    "vino-EstanciaMendoza-malbec.jpeg": "Estancia Mendoza Malbec",
    "vino-etnia-malbec-granRoble.jpeg": "Etnia Malbec Gran Roble",
    "vino-etnia-malbec.jpeg": "Etnia Malbec",
    "vino-fincaLC-roble.jpeg": "Finca La Celia Roble",
    "vino-LaCelia-malbec.jpeg": "La Celia Malbec",
    "vino-lopez-malbec.jpeg": "López Malbec",
    "vino-malazia-malbec.jpeg": "Malazia Malbec",
    "vino-malizia-malbec.jpeg": "Malizia Malbec",
    "vino-maltratado-MalbecMaduro.jpeg": "Maltratado Malbec Maduro",
    "vino-versus-cheninDulce.jpeg": "Versus Chenin Dulce",
    "vinoo-dada-391-artMalbec.jpeg": "Dada 391 Art Malbec"
};

function getCategory(filename) {
    if (categoryOverrides[filename]) return categoryOverrides[filename];
    if (filename.startsWith("vino-") || filename.startsWith("vinoo-")) return "vinos";
    if (filename.startsWith("cerveza-")) return "cervezas";
    if (filename.startsWith("gin-")) return "gin";
    return "tragos";
}

function createProduct(filename) {
    const category = getCategory(filename);
    const details = categoryInfo[category];
    const title = titleOverrides[filename] || filename.replace(/\.jpeg$/i, "").replace(/[-_]/g, " ");
    let description = `${title}: ${details.description}`;

    if (category === "vinos" && /malbec/i.test(title)) {
        description = `${title}: un Malbec para acompañar comidas, sobremesas y buenos encuentros.`;
    } else if (category === "vinos" && /dulce|chenin/i.test(title)) {
        description = `${title}: una etiqueta de perfil dulce, ideal para quienes disfrutan vinos más suaves.`;
    } else if (category === "vinos" && /brut|rosé/i.test(title)) {
        description = `${title}: una opción espumante para brindar y celebrar ocasiones especiales.`;
    } else if (category === "cervezas") {
        description = `${title}: cerveza para disfrutar bien fría y compartir en cualquier encuentro.`;
    } else if (category === "destilados") {
        description = `${title}: vodka saborizado para preparar combinaciones y tragos al gusto.`;
    }

    return {
        filename,
        category,
        title,
        description,
        categoryLabel: details.label
    };
}

const products = imageFiles.map(createProduct);
const grid = document.querySelector("#product-grid");
const filters = document.querySelector("#filters");
const searchInput = document.querySelector("#product-search");
const countLabel = document.querySelector("#results-count");
const emptyState = document.querySelector("#empty-state");
let activeCategory = "todos";

function normalize(value) {
    return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

function renderFilters() {
    filters.replaceChildren();
    categories.forEach((category) => {
        const button = document.createElement("button");
        button.className = `filter-button${category.id === activeCategory ? " active" : ""}`;
        button.type = "button";
        button.textContent = category.label;
        button.setAttribute("aria-pressed", String(category.id === activeCategory));
        button.addEventListener("click", () => {
            activeCategory = category.id;
            renderFilters();
            renderProducts();
        });
        filters.append(button);
    });
}

function createCard(product) {
    const card = document.createElement("article");
    card.className = "product-card";

    const imageWrap = document.createElement("div");
    imageWrap.className = "product-image-wrap";

    const image = document.createElement("img");
    image.src = `img/catalogo/${product.filename.replace(/\.jpeg$/i, ".jpg")}`;
    image.alt = product.title;
    image.loading = "lazy";
    image.decoding = "async";
    imageWrap.append(image);

    const category = document.createElement("span");
    category.className = "product-category";
    category.textContent = product.categoryLabel;
    imageWrap.append(category);

    const content = document.createElement("div");
    content.className = "product-content";
    const title = document.createElement("h3");
    title.className = "product-title";
    title.textContent = product.title;

    const description = document.createElement("p");
    description.className = "product-description";
    description.textContent = product.description;

    const link = document.createElement("a");
    link.className = "product-whatsapp";
    const message = `Hola Vinoteca Lo DeJuan, quiero consultar por ${product.title}. ¿Tenés disponibilidad y cuál es su precio?`;
    link.href = `https://wa.me/5491136121215?text=${encodeURIComponent(message)}`;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.innerHTML = "<span>Consultar por WhatsApp</span><span aria-hidden=\"true\">↗</span>";

    content.append(title, description, link);
    card.append(imageWrap, content);
    return card;
}

function renderProducts() {
    const query = normalize(searchInput.value.trim());
    const visibleProducts = products.filter((product) => {
        const matchesCategory = activeCategory === "todos" || product.category === activeCategory;
        const matchesSearch = !query || normalize(`${product.title} ${product.description} ${product.categoryLabel}`).includes(query);
        return matchesCategory && matchesSearch;
    });

    grid.replaceChildren(...visibleProducts.map(createCard));
    countLabel.textContent = `${visibleProducts.length} ${visibleProducts.length === 1 ? "producto" : "productos"}`;
    emptyState.hidden = visibleProducts.length > 0;
}

searchInput.addEventListener("input", renderProducts);
document.addEventListener("keydown", (event) => {
    if (event.key === "/" && !["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) {
        event.preventDefault();
        searchInput.focus();
    }
    if (event.key === "Escape" && document.activeElement === searchInput) {
        searchInput.value = "";
        renderProducts();
        searchInput.blur();
    }
});

renderFilters();
renderProducts();