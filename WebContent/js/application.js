function chargerPersonnes() {// recupere mes info issu de serveur et remplir mon
							// tab
	$.getJSON("http://localhost:8080/ProjetEjbws/personnes/allPersonnes", function(data) {
		// $:fait appel a java query //java script et jquery sont les mem ils
		// recuperent les donnes
		// data est le resultat de data est la boucle de A B C et D
		// data recupere les donnes json et les mets dans la function data qui
		$("#tableBody").html("");
		for (i in data) {
			$tr = $("<tr>");
			$td = $("<td>").append(data[i]['id']);
			$tr.append($td)// append comme concetination
			$td = $("<td>").append(data[i]['nom']);
			$tr.append($td);							// =append cest ajoute balise td
			$td = $("<td>").append(data[i]['prenom']);$tr.append($td);					// filldans tr
			$td = $("<td>").append(data[i]['age']);$tr.append($td);					// filldans tr
			
			$("#tableBody").append($tr);// td va recupere les valeur de data td
										// transmet la valeur a tr et tr
										// transmet ca a tableBody

		}

	});
}