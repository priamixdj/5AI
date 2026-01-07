let oggi = new Date();
let natale = new Date("2025-12-25");
let diff = natale - oggi;
let giorni = Math.ceil(diff / (1000 * 60 * 60 * 24));
console.log("Mancano", giorni, "giorni a Natale 🎄");
