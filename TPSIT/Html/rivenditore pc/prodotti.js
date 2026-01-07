prodotti = [
    {
        "nome" : "Notebook Lenovo",
        "immagine" : "https://m.media-amazon.com/images/I/7135bVupJoL._AC_SY300_SX300_QL70_ML2_.jpg",
        "prezzo" : "799.99",
        "descrizione" : "Intel i7 13620H 10 Core PS FHD+, SSD 1Tb",
        "offerta" : "true"
    },
    {
        "nome" : "Notebook Lenovo",
        "immagine" : "https://m.media-amazon.com/images/I/7135bVupJoL._AC_SY300_SX300_QL70_ML2_.jpg",
        "prezzo" : "799.99",
        "descrizione" : "Intel i7 13620H 10 Core PS FHD+, SSD 1Tb",
        "offerta" : "true"
    },
    {
        "nome" : "Notebook Lenovo",
        "immagine" : "https://m.media-amazon.com/images/I/7135bVupJoL._AC_SY300_SX300_QL70_ML2_.jpg",
        "prezzo" : "799.99",
        "descrizione" : "Intel i7 13620H 10 Core PS FHD+, SSD 1Tb",
        "offerta" : "true"
    },
]

console.log(prodotti);

// inserire i prodotti tramite l' array
for (let i = 0; i < prodotti.length; i++) {
    document.getElementById("products").innerHTML += 
    '<div class="card">' + 
        '<img src="' + prodotti[i].immagine + '">' + 
        '<h3>' + prodotti[i].nome + '</h3>' +
        '<p>' + prodotti[i].descrizione + '</p>' +
        '<p class="price">' + prodotti[i].prezzo + '</p>' +
    '</div>';
}

