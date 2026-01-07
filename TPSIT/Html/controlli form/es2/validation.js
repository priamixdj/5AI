function validateForm(event) {
  event.preventDefault();
  const username = document.getElementById('username').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  // 3. Flag per lo stato generale della validazione
  let isValid = true;
  // 4. Rimuovi tutti i messaggi di errore precedenti
  document.getElementById('usernameError').textContent = '';
  document.getElementById('emailError').textContent = '';
  document.getElementById('passwordError').textContent = '';
  document.getElementById('successMessage').style.display = 'none';
  if (username.length < 4) {
	document.getElementById('usernameError').textContent = 'Il Nome Utente deve avere almeno 4 caratteri.';
	isValid = false;
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
	document.getElementById('emailError').textContent = 'Inserisci un indirizzo email valido (es. utente@dominio.it).';
	isValid = false;
  }
  if (password.length < 8) {
	document.getElementById('passwordError').textContent = 'La Password deve avere almeno 8 caratteri.';
	isValid = false;
  } else if (!/\d/.test(password)) {
	document.getElementById('passwordError').textContent = 'La Password deve contenere almeno un numero.';
	isValid = false;
  }
  // RISULTATO FINALE
  if (isValid) {
	// Se tutti i controlli passano, simula l'invio del form
	console.log('Form valido. Dati inviati:', { username, email, password });
	document.getElementById('successMessage').style.display = 'block';
	document.getElementById('registrationForm').reset();
	return true;
  } else {
	return false;
  }
}


