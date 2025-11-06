let form = document.querySelector("form");
let divOrario = document.getElementById("orario");
let titolo = document.getElementById("titolo");
let orario = document.getElementById("orarioInput");
let elenco = document.getElementById("elenco");

let sveglie = [];

function scriviSveglie() {
    elenco.innerHTML = "";
    sveglie.forEach((s) => {
        const li = document.createElement("li");
        li.textContent = s.titolo + " - " + s.orario;
        elenco.appendChild(li);
    });
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const orarioInput = document.getElementById("orarioInput");
    sveglie.push({
        titolo: titolo.value,
        orario: orarioInput.value
    });

    scriviSveglie();
    console.log(sveglie);
});

function controllaSveglia() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const triggeredIndexes = [];

    sveglie.forEach((s, idx) => {
        const parts = s.orario.split(":");
        const h = parseInt(parts[0], 10) || 0;
        const m = parseInt(parts[1], 10) || 0;
        // seconds part optional
        const sec = parts[2] ? (parseInt(parts[2], 10) || 0) : 0;

        if (h === hours && m === minutes && seconds === 0) {
            triggeredIndexes.push(idx);
            
            if (document.body._moveTimeout) {
                clearTimeout(document.body._moveTimeout);
            }
            document.body.classList.add("move");
            document.body._moveTimeout = setTimeout(() => {
                document.body.classList.remove("move");
                document.body._moveTimeout = null;
            }, 4000);

            alert(s.titolo || "sveglia");
        }
    });

    if (triggeredIndexes.length) {
        // rimuovi le sveglie scattate
        sveglie = sveglie.filter((_, i) => !triggeredIndexes.includes(i));
        scriviSveglie();
    }
}

setInterval(() => {
    const data = new Date();
    let hours_text = data.getHours();
    let minutes_text = data.getMinutes();
    let seconds_text = data.getSeconds();

    if (hours_text < 10) hours_text = "0" + hours_text;
    if (minutes_text < 10) minutes_text = "0" + minutes_text;
    if (seconds_text < 10) seconds_text = "0" + seconds_text;

    divOrario.innerHTML = hours_text + ":" + minutes_text + ":" + seconds_text;

    controllaSveglia();
}, 1000);
