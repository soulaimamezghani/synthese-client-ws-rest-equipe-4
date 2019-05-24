function chargerProduits() {// recupere mes info issu de serveur et remplir mon
							// tab
	$.getJSON("http://localhost:8080/synthese-serveur-ejb-ws-equipe-4-1/produits/allProduits", function(data) {
		
		$("#tableBody").html("");
		for (i in data) {
			$tr = $("<tr>");
			$td = $("<td>").append(data[i]['idProduit']);
			$tr.append($td)
			$td = $("<td>").append(data[i]['nomProduit']);
			$tr.append($td);						
			$td = $("<td>").append(data[i]['stock']);$tr.append($td);				
			$td = $("<td>").append(data[i]['prix']);$tr.append($td);					
			
			 $("#tableBody").append($tr);// td va recupere les valeur de data td
										// transmet la valeur a tr et tr
										// transmet ca a tableBody

		}

	});
}

function chargerMagasins() {// recupere mes info issu de serveur et remplir mon
	// tab
	$.getJSON("http://localhost:8080/synthese-serveur-ejb-ws-equipe-4-1/magasins/allMagasins", function(data) {
		
		$("#tableBody").html("");
		for (i in data) {
			$tr = $("<tr>");
			$td = $("<td>").append(data[i]['idMagasin']);
			$tr.append($td)
			$td = $("<td>").append(data[i]['nomMagasin']);
			$tr.append($td);						
			$td = $("<td>").append(data[i]['codeMagasin']);$tr.append($td);				
			$td = $("<td>").append(data[i]['prixDuLocal']);$tr.append($td);					
			
			$("#tableBody").append($tr);// td va recupere les valeur de data td
			// transmet la valeur a tr et tr
			// transmet ca a tableBody
			
		}
		
	});
}