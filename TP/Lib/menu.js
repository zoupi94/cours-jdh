/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var pagesDisponibles = new Array(
        ["Accueil", "index.htm", "Bienvenue sur " + tabprojet["nom"]],
        ["Recherche", "recherche.htm", "Votre recherche de BD"],
        ["Commande", "commande.htm", "Votre panier"]
        );

function affichePageMenu(selectionne)
	{
		var menuHtml = new String();
		var i = new Number();
		menuHtml += "<div id=\"menu\"><ul>";
		for (i = 0; i < pagesDisponibles.length; i++)
		{
			if(pagesDisponibles[i][1] == selectionne)
					cssSelect = " class=\"select\"";
			else	cssSelect = "";
			menuHtml += "<li"+cssSelect+"><a href=\""+pagesDisponibles[i][1]+"\" title=\""+pagesDisponibles[i][0]+"\">"+pagesDisponibles[i][0]+"</a></li>";
		}
		menuHtml += "</ul></div>";
		document.write(menuHtml);
	}		
