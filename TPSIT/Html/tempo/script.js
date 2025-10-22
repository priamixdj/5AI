orarioTextComponent = document.getElementById("orario");
lista = document.querySelector(".sveglie-lista");
sveglie = [];

document.getElementById("sveglia-form").addEventListener("submit", function (e) {
    e.preventDefault(); // previene il refresh della pagina

    // prende il valore e la salva nell array
    sveglia_input = document.getElementById("time-input").value;
    svegliaDesc = document.getElementById("titolo").value;

    let [ore, minuti, secondi = 0] = sveglia_input.split(":").map(Number);

    sveglia = new Date(0, 0, 0, ore, minuti, secondi);


    console.log(sveglia);
    sveglie.push(sveglia_input);
});

function visualizzaOrarioAttuale() {
    orario_attuale = new Date();
    let ora_attuale = orario_attuale.getHours();
    let minuti_attuale = orario_attuale.getMinutes();
    let secondi_attuale = orario_attuale.getSeconds();

    if(ora_attuale < 10 ) {
        ora_attuale = "0" + ora_attuale;
    }
    if(minuti_attuale < 10 ) {
        minuti_attuale = "0" + minuti_attuale;
    }
    if(secondi_attuale < 10 ) {
        secondi_attuale = "0" + secondi_attuale;
    }

    orarioTextComponent.innerHTML = ": " + ora_attuale + ":" + minuti_attuale + ":" + secondi_attuale;
}
function visualizzaScadenzaSveglia() {
    sveglie.forEach((sveglia) => {
        if(orario_attuale.getHours() == sveglia.split(":")[0] && orario_attuale.getMinutes() == sveglia.split(":")[1] && orario_attuale.getSeconds() == 0 ) {
            alert(svegliaDesc ? svegliaDesc : "Sveglia delle " + sveglia)
        }
    })
}


setInterval(() => {
    visualizzaOrarioAttuale();
    visualizzaScadenzaSveglia();
}, 1000);





