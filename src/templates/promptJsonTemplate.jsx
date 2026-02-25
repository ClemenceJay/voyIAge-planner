const promptJsonTemplate = `{
  "demandeUser" : {
    "destination": "Destination la plus concise choisie par l'utilisateur",
    "duree": "Durée choisie par l'utilisateur",
    "budget": "Budget indiqué par l'utilisateur",
    "type": "Type de voyage choisi par l'utilisateur",
    "niveauActivite": "niveau d'activité choisi l'utilisateur",
    "profil": {
      "nbVoyageur": "Nombre de voyageur défini par l'utilisateur",
      "tranchesAge": "Tranches d'âge des voyageurs définies par l'utilisateur",
      "vehicule": "si l'utilisateur est véhiculé ou non"
    },
  },
  "resume": "Résumé du voyage en une seule phrase courte",
  "voyage": [
    {
      "jour": "numéro du jour",
      "lieu": "ville(s) de la journée",
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