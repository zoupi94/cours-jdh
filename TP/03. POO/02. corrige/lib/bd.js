	
	/**
	 * Stocke les informations sur une Bandde dessinée
	 * @param	id		identifiant
	 * @param	auteur	auteur
	 * @param	sortie	année de sortie
	 * @param	resume	description
	 * @param	prix	prix de la bd
	 * @param	stock	nombre de bd en stock
	 * @return  see toString()
	*/
	function ficheBd(id, titre, auteur, sortie, resume, prix, stock)
	{
		this.id = id;
		this.titre = titre;
		this.auteur = auteur;
		this.sortie = sortie;
		this.resume = resume;
		this.prix = (prix == undefined) ? 0.00 : prix;
		this.stock =  (stock == undefined) ? 0 : stock;
		this.stocker = stocker;
		this.destocker = function (qte)
		{
			this.stock -= (qte == undefined) ? 1 : qte;
		};
	}
	
	/**
	 * permet d'ajouter une quantité de bd en stock
	 * @param	qte	nombre de bd à ajouter
	*/
	function stocker(qte)
	{
		this.stock += (qte == undefined) ? 1 : qte;
	}
	
	/**
	 * permet d'afficher une synthèse de l'objet ficheBd
	 * @param	une chaine de charactère avec une synthèse de l'objet
	*/
	ficheBd.prototype.toString = function()
	{
		out = "<h3>FICHE BD N°"+this.id+" : "+this.titre+"</h3><br/>";
		out+= "Auteur: "+this.auteur+"<br/>";
		out+= "Prix  : "+this.prix+"<br/>";
		out+= "Stock : "+this.stock+"<br/><hr/>";
		return out;
	}
	
	
	
	
	
	
	
	
	
	

	/**
	 * Stocke les informations sur une Bandde dessinée
	 * @param	id		identifiant
	 * @param	auteur	auteur
	 * @param	sortie	année de sortie
	 * @param	resume	description
	 * @param	prix	prix de la bd
	 * @param	stock	nombre de bd en stock
	 * @return  see toString()
	*/
	function stockBd()
	{
		this.stock = new Array();
		this.stockByKey = new Array();
		
		
		this.ajouter = function (id, titre, auteur, sortie, resume, prix, stock)
		{
			this.referencer(new ficheBd(id, titre, auteur, sortie, resume, prix, stock));
		}
		
		
		this.referencer = function (bd)
		{
			if(typeof bd == 'object')
			{
				this.stockByKey[bd.id]= this.stock.length;
				this.stock[this.stock.length]= bd;
			}
		}
		
		
		this.stocker = function (id,qte)
		{
			this.stock[this.stockByKey[id]].stocker(qte);
		}
		
		
		this.destocker = function (id,qte)
		{
			this.stock[this.stockByKey[id]].stocker(qte);
		}
		
	
		this.toString = function()
		{
			out = "<h3>Tableau des BD</h3><table class=\"search\">";
			out+= "<tr><th>Titre</th><th>Auteur</th><th>Sortie</th><th>Prix</th><th>Stock</th></tr>";
			for ( i = 0; i < this.stock.length; i++) {
				var altern = i % 2;
				out+= "<tr class=\"altern"+altern+"\"><td>"+this.stock[i].titre+"</td>";
				out+= "<td>"+this.stock[i].auteur+"</td>";
				out+= "<td>"+this.stock[i].sortie+"</td>";
				out+= "<td>"+this.stock[i].prix+"</td>";
				out+= "<td>"+this.stock[i].stock+"</td></tr>";
			}
			out+= "</table>";
			return out;
		}
	}
