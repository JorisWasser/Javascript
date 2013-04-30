var choixUtilisateur = prompt("Papier, Caillou ou Ciseaux ?");
var choixOrdinateur = Math.random();

if (choixOrdinateur < 0.34) {
	choixOrdinateur = "caillou";
}
else if (choixOrdinateur <= 0.67) {
	choixOrdinateur = "papier";
}
else {
	choixOrdinateur = "ciseaux";
}

var compare = function(choix1, choix2) {
	if (choix1 === choix2) {
		return "Match nul !";
	}

	if (choix1 === "caillou") {
		if (choix2 === "ciseaux") {
			return "Le caillou gagne !";
		}
		else {
			return "La papier gagne !";
		}
	}

	if (choix1 === "papier") {
		if (choix2 === "ciseaux") {
			return "Les ciseaux gagnent !";
		}
		else {
			return "Le papier gagne !";
		}
	}

	if (choix1 === "ciseaux") {
		if (choix2 === "caillou") {
			return "Le caillou gagne !";
		}
		else {
			return "Les ciseaux gagnent !";
		}
	}
};

compare(choixUtilisateur, choixOrdinateur);