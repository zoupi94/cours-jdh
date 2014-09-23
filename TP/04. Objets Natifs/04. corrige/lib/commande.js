	
	/**
	 * Verifie l'information d'une adresse IP
	*/
	function verifieIp()
{
     expReg = /^((([01]?[0-9]?[0-9])|(2[0-4][0-9])|(25[0 -5]))[.]){3}(([0-1]?[0-9]?[0-9])|(2[0-4][0-9])|(25[0 -5])){1}$/
     leip = document.forms[0].ip.value;
     tab = leip.search(expReg);
     if (tab!=-1)
          result = "Adresse IP valide";
     else result = "Adresse IP fausse";
     document.forms[0].result.value = result;
}
