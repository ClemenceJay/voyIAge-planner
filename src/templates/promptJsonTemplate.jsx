const promptJsonTemplate = `{
  "demandeUser" : {
    "destination": "Destination la plus concise choisie par l'utilisateur",
    "duree": "Durée choisie par l'utilisateur",
    "budget": "Budget indiqué par l'utilisateur",
    "type": "Type de voyage choisi par l'utilisateur",
    "niveauActivite": "niveau d'activité choisi l'utilisateur",
    "profil": {
      "groupe": "Information très courte sur le groupe de voyage (ex: famille, couple, amis, solo)",
      "vehicule": "si l'utilisateur est véhiculé ou non"
    },
  },
  "resume": "Résumé du voyage en une seule phrase courte",
  "voyage": [
    {
      "jour": "numéro du jour",
      "lieu": "ville(s) de la journée",
      "resume": "Résumé de la journée en une seule phrase courte de quelques mots",
      //Le nombre d'activité dans chaque partie de la journée peut varier en fonction du type de voyage et de l'activité choisi par l'utilisateur, il faut donc prévoir un nombre d'activité de 0, 1 ou plus pour le matin et l'après-midi et une seule activité pour le déjeuner et le soir
      "matin": [
        {
          "activite": "lieu à voir/activité à faire",
          "description": "description en une seule phrase du lieu/activité",
          "gps": "coordonnées gps du lieu",
          "url": "lien du site du lieu si disponible sinon renvoi 'null'"
        }
      ],
      "dejeuner": {
        "suggestion": "Nom d'un lieu où manger",
        "description": "description en une seule phrase du lieu",
        "gps": "coordonnées gps du lieu",
        "url": "lien du site du lieu si disponible sinon renvoi 'null'"
      },
      "apresMidi": [
        {
          "activite": "lieu à voir/activité à faire",
          "description": "description en une seule phrase du lieu/activité",
          "gps": "coordonnées gps du lieu",
          "url": "lien du site du lieu si disponible sinon renvoi 'null'"
        }
      ],
      "soir": {
        "suggestion": "Nom d'un lieu où manger",
        "description": "description en une seule phrase du lieu",
        "gps": "coordonnées gps du lieu",
        "url": "lien du site du lieu si disponible sinon renvoi 'null'"
      }
    }
  ],
  "hebergement": {
    "multipleLogement": "indique si l'utilisateur reste dans un même hébergement ou dans des différents (cas de road trip par exemple) avec 'yes' ou 'no'",
    "listeLogement" : [
      {
        "jour" : "numero du jour si applicable dans le cas de plusieurs logement sinon renvoi 'null'",
        "etablissement": "nom d'un établissement",
        "zone": "zone où se situe l'établissement",
        "gps": "coordonnées gps du lieu",
        "url": "lien du site du lieu si sisponible sinon renvoi 'null'"
      }
    ]
  },
  "conseils": {
    "monnaie": "indique des infos sur les monnaies utilisées si necessaire",
    "transport": "donne en une phrase des infos sur les transports dans le cadre de ce voyage",
    "meilleurePeriode": "indique la meilleure période pour visiter",
  }
}`

export default promptJsonTemplate;