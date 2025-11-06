// var data = new Date();
// var natale = new Date(data.getFullYear(), 11, 25);
// var minuti = natale.getMinutes();
// var H = data.getHours();


// const giorni = ['domenica', 'lunedì', 'martedì', 'mercoledì', 'giovedì', 'venerdì', 'sabato'];

// document.write("Sono i minuti: " + minuti + "<br>");
// document.write("Sono le ore: " + H + "<br>");
// document.write("Minuti di Natale: " + natale.getMinutes() + "<br>");
// document.write("Ore di Natale: " + natale.getHours() + "<br>");
// document.write("Oggi è il giorno del mese: " + data.getDate() + "<br>");
// document.write("Sono il giorno di Natale: " + natale.getDate() + "<br>");
// document.write("È il giorno della settimana: " + data.getDay() + "<br>");
// document.write("Oggi è: " + giorni[data.getDay()] + " (" + data.getDay() + ")<br>");
// document.write("Natale cade di: " + giorni[natale.getDay()] + " (" + natale.getDay() + ")<br>");


(function() {
    function updateCountdown() {
        const oggi = new Date();
        // mese 11 = dicembre (i mesi sono 0-based)
        let natale = new Date(oggi.getFullYear(), 11, 25);

        if (oggi > natale) {
            natale.setFullYear(natale.getFullYear() + 1);
        }

        const diffMs = natale - oggi; // differenza in millisecondi
        const totalSeconds = Math.floor(diffMs / 1000);

        const secondi = totalSeconds % 60;
        const totalMinutes = Math.floor(totalSeconds / 60);
        const minuti = totalMinutes % 60;
        const totalHours = Math.floor(totalMinutes / 60);
        const ore = totalHours % 24;
        const giorni = Math.floor(totalHours / 24);

        const testo = `${giorni} giorni, ${ore} ore, ${minuti} minuti, ${secondi} secondi`;

        let el = document.getElementById('countdown');
        if (!el) {
            el = document.createElement('div');
            el.id = 'countdown';
            document.body.appendChild(el);
        }
        el.textContent = testo;
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
})();