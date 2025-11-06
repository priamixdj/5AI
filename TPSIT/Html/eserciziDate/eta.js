function calcolaEta(dataNascita) {
  let oggi = new Date();
  let nascita = new Date(dataNascita);
  let eta = oggi.getFullYear() - nascita.getFullYear();
  let mese = oggi.getMonth() - nascita.getMonth();
  
  // Controlla se il compleanno è già passato quest'anno
  if (mese < 0 || (mese === 0 && oggi.getDate() < nascita.getDate())) {
    eta--;
  }

  return eta;
}

console.log("Hai", calcolaEta("2000-05-15"), "anni");
