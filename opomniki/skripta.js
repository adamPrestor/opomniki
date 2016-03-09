window.addEventListener('load', function() {
	//stran nalozena
	
	var izvediPrijavo = function(event) {
		var uporabnik = document.querySelector("#uporabnisko_ime").value;
		
		//nastavi "Pozdravljen uporabnik"
		var uporabnisko_polje = document.getElementById("uporabnik");
		uporabnisko_polje.innerHTML = uporabnik;
		
		document.querySelector(".pokrivalo").style.display = "none";
	}
	
	document.querySelector("#prijavniGumb").addEventListener('click',izvediPrijavo);
		
	//Posodobi opomnike
	var posodobiOpomnike = function() {
		var opomniki = document.querySelectorAll(".opomnik");
		
		for (i = 0; i < opomniki.length; i++) {
			var opomnik = opomniki[i];
			var casovnik = opomnik.querySelector("span");
			var cas = parseInt(casovnik.innerHTML);
	
			//TODO: 
			// - če je čas enak 0, izpiši opozorilo "Opomnik!\n\nZadolžitev NAZIV_OPOMNIK je potekla!"
			// - sicer zmanjšaj čas za 1 in nastavi novo vrednost v časovniku
		}
	}
	setInterval(posodobiOpomnike, 1000);
	
});