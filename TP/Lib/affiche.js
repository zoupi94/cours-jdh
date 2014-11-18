

var tabprojet = new Array();
tabprojet["nom"] = new String("Destiny");
tabprojet["auteur"] = new String("Fx");
tabprojet["copy"] = new String("&copy; 2014 GSY");



function affichebandeauhaut() {
    htmlData = "<div id=\"bandeau\">&nbsp;</div>";
    document.write(htmlData);
}

function affichePageTitre(selectionne)
{
    var i = new Number();
    for (i = 0; i < pagesDisponibles.length; i++)
        if (pagesDisponibles[i][1] == selectionne)
            document.write("<div id=\"titre\"><h1>" + pagesDisponibles[i][2] + "</h1></div>");
}

function affichePagePied()
{
    var piedHtml = new String();
    piedHtml += "<div id=\"pied\">";
    piedHtml += "<span>" + tabprojet["copy"] + " - ";
    piedHtml += "Réalisé par " + tabprojet["auteur"] + "</span></div>";
    document.write(piedHtml);
}
	