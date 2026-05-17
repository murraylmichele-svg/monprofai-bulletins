// ════════════════════════════════════════════════════════════════
// data.js — MonProf.ai Bulletin Generator
// Curriculum data: MATIERES list + ATTENTES by subject/grade
// ════════════════════════════════════════════════════════════════

const MATIERES = [
  'Mathématiques','Français','Anglais','Études sociales','Sciences et technologie',
  'Arts (arts visuels)','Arts (musique)','Arts (danse)','Arts (art dramatique)',
  'Éducation physique et santé','Enseignement religieux'
];

const ATTENTES = {

  // ──────────────────────────────────────────────────────────────
  // MATHÉMATIQUES
  // ──────────────────────────────────────────────────────────────
  'Mathématiques': {
    '1': {
      'A1 — Habiletés socioémotionnelles': [
        "A1 — mettre en application diverses habiletés socioémotionnelles"
      ],
      'B1 — Sens du nombre': [
        "B1.1 — lire et représenter les nombres naturels de 0 jusqu'à 50",
        "B1.2 — composer et décomposer les nombres naturels de 0 jusqu'à 50, à l'aide d'une variété d'outils et de stratégies",
        "B1.3 — comparer et ordonner les nombres naturels jusqu'à 50, dans divers contextes",
        "B1.4 — estimer le nombre d'objets dans des ensembles qui comprennent jusqu'à 50 objets",
        "B1.5 — compter jusqu'à 50 par intervalles de 1, 2, 5 et 10, à l'aide d'une variété d'outils et de stratégies",
        "B1.6 — utiliser des schémas pour représenter et résoudre des problèmes de partage équitable d'une quantité entre 2",
        "B1.7 — reconnaître l'équivalence entre un demi et deux quarts d'un même tout",
        "B1.8 — utiliser des schémas pour comparer"
      ],
      'B2 — Sens des opérations': [
        "B2.1 — utiliser les propriétés de l'addition et de la soustraction ainsi que la relation entre l'addition",
        "B2.2 — se rappeler les faits d'addition de nombres jusqu'à 10 et les faits de soustraction associés",
        "B2.3 — utiliser des stratégies de calcul mental, y compris l'estimation",
        "B2.4 — utiliser des objets, des schémas et des équations pour représenter",
        "B2.5 — représenter et résoudre des problèmes de groupes égaux dont le nombre d'éléments est égal ou inférieur à 10"
      ],
      'C1 — Suites et relations': [
        "C1.1 — reconnaître et décrire les règles dans une variété de suites",
        "C1.2 — créer des suites à l'aide de mouvements, de sons, d'objets, de formes géométriques, de lettres et de nombres",
        "C1.3 — déterminer et utiliser les règles pour prolonger des suites, faire et justifier des prédictions",
        "C1.4 — créer et décrire des suites numériques comprenant des nombres naturels jusqu'à 50"
      ],
      'C2 — Équations et inégalités': [
        "C2.1 — déterminer les quantités qui peuvent changer et celles qui restent toujours les mêmes",
        "C2.2 — déterminer si des paires d'expressions numériques comportant des additions et des soustractions sont équivalentes ou non",
        "C2.3 — déterminer et utiliser des relations d'équivalence comprenant des nombres naturels jusqu'à 50, dans divers contextes"
      ],
      'C3 — Codage': [
        "C3.1 — résoudre des problèmes",
        "C3.2 — lire et modifier des codes donnés, y compris des codes comprenant des événements séquentiels"
      ],
      'D1 — Littératie statistique': [
        "D1.1 — trier et classer des ensembles de données portant sur des personnes ou des objets en fonction d'un attribut",
        "D1.2 — collecter des données au moyen d'observations, d'expériences",
        "D1.3 — représenter des ensembles de données en utilisant la correspondance un à un et d'autres méthodes",
        "D1.4 — ordonner, en fonction de leur fréquence, de la plus élevée à la plus faible",
        "D1.5 — analyser divers ensembles de données présentées de différentes façons, y compris dans des tableaux de dénombrement"
      ],
      'D2 — Probabilité': [
        "D2.1 — utiliser le vocabulaire mathématique, y compris des termes comme « impossible »",
        "D2.2 — formuler et communiquer des idées à l'aide de représentations mathématiques"
      ],
      'E1 — Raisonnement géométrique et spatial': [
        "E1.1 — classer des solides et des figures planes selon un attribut à la fois et déterminer le critère de classement utilisé",
        "E1.2 — construire des solides et décrire les figures planes qui les composent",
        "E1.3 — construire et décrire des figures planes et des solides qui sont symétriques",
        "E1.4 — décrire l'emplacement relatif d'objets ou de personnes, en utilisant le vocabulaire associé à la position",
        "E1.5 — donner et suivre des directives pour se déplacer d'un endroit à un autre"
      ],
      'E2 — Sens de la mesure': [
        "E2.1 — reconnaître les attributs mesurables de figures planes et de solides",
        "E2.2 — comparer plusieurs objets du quotidien et les mettre en ordre selon leur longueur, leur aire, leur masse et leur capacité",
        "E2.3 — lire la date à partir d'un calendrier et savoir y reconnaître les jours, les semaines, les mois, les fêtes et les saisons"
      ],
      'F1 — Argent et finances': [
        "F1.1 — nommer les pièces de monnaie canadienne jusqu'à 50 ¢ et des pièces de monnaie et des billets jusqu'à 50 $"
      ]
    },
    '2': {
      'A1 — Habiletés socioémotionnelles': [
        "A1 — mettre en application diverses habiletés socioémotionnelles"
      ],
      'B1 — Sens du nombre': [
        "B1.1 — lire, représenter, composer et décomposer les nombres naturels de 0 jusqu'à 200",
        "B1.2 — comparer et ordonner les nombres naturels jusqu'à 200, dans divers contextes",
        "B1.3 — estimer le nombre d'objets dans des ensembles comprenant jusqu'à 200 objets",
        "B1.4 — compter jusqu'à 200, y compris par intervalles de 20, 25 et 50, à l'aide d'une variété d'outils et de stratégies",
        "B1.5 — décrire les caractéristiques des nombres pairs et impairs",
        "B1.6 — utiliser des schémas pour représenter",
        "B1.7 — reconnaître l'équivalence entre un tiers et deux sixièmes d'un même tout"
      ],
      'B2 — Sens des opérations': [
        "B2.1 — utiliser les propriétés de l'addition et de la soustraction",
        "B2.2 — se rappeler les faits d'addition et de soustraction de nombres jusqu'à 20 et les faits de la soustraction associés",
        "B2.3 — utiliser des stratégies de calcul mental, y compris l'estimation",
        "B2.4 — utiliser des objets, des schémas et des équations pour représenter",
        "B2.5 — représenter et résoudre des problèmes relatifs à la multiplication en tant qu'addition répétée de groupes égaux",
        "B2.6 — représenter des fractions et des nombres décimaux de diverses façons"
      ],
      'C1 — Suites et relations': [
        "C1.1 — reconnaître et décrire une variété de suites non numériques",
        "C1.2 — créer des suites à l'aide d'une variété de représentations, y compris des nombres et des formes géométriques",
        "C1.3 — déterminer et utiliser les règles pour prolonger des suites, faire et justifier des prédictions",
        "C1.4 — créer et décrire des suites comprenant des nombres naturels jusqu'à 100, et représenter des relations entre ces nombres"
      ],
      'C2 — Équations et inégalités': [
        "C2.1 — décrire des façons et des situations où des symboles sont utilisés comme variables",
        "C2.2 — déterminer ce qui doit être ajouté ou soustrait pour que des expressions comportant des additions",
        "C2.3 — déterminer et utiliser des relations d'équivalence comprenant des nombres naturels jusqu'à 100, dans divers contextes"
      ],
      'C3 — Codage': [
        "C3.1 — résoudre des problèmes",
        "C3.2 — lire et modifier des codes donnés, y compris des codes comprenant des événements séquentiels"
      ],
      'D1 — Littératie statistique': [
        "D1.1 — trier et classer des ensembles de données portant sur des personnes ou des objets en fonction de deux attributs",
        "D1.2 — collecter des données au moyen d'observations, d'expériences",
        "D1.3 — représenter des ensembles de données, en utilisant la correspondance un à un, à l'aide de diagrammes concrets",
        "D1.4 — déterminer le ou les modes de divers ensembles de données présentées dans des diagrammes concrets",
        "D1.5 — analyser divers ensembles de données présentées de différentes façons, y compris dans des logigrammes"
      ],
      'D2 — Probabilité': [
        "D2.1 — utiliser le vocabulaire mathématique, y compris des termes comme « impossible »",
        "D2.2 — formuler et communiquer des idées à l'aide de représentations mathématiques"
      ],
      'E1 — Raisonnement géométrique et spatial': [
        "E1.1 — classer et identifier des figures planes en comparant le nombre de côtés, la longueur des côtés",
        "E1.2 — composer et décomposer des figures planes, et montrer que l'aire d'une figure reste constante",
        "E1.3 — identifier des longueurs et des angles congrus dans des figures planes en les superposant mentalement",
        "E1.4 — créer et interpréter des cartes simples représentant des lieux familiers",
        "E1.5 — décrire la position relative d'objets divers et les déplacements nécessaires pour passer d'un objet à l'autre"
      ],
      'E2 — Sens de la mesure': [
        "E2.1 — utiliser des unités de mesure non conventionnelles de façon appropriée pour mesurer des longueurs",
        "E2.2 — expliquer la relation entre les centimètres et les mètres comme unités de mesure de longueur",
        "E2.3 — mesurer et tracer des longueurs en centimètres et en mètres en utilisant un instrument de mesure",
        "E2.4 — utiliser des unités de mesure de temps, y compris des secondes, des minutes"
      ],
      'F1 — Argent et finances': [
        "F1.1 — déterminer différentes façons d'arriver au même montant d'argent en monnaie canadienne jusqu'à 200 ¢"
      ]
    },
    '3': {
      'A1 — Habiletés socioémotionnelles': [
        "A1 — mettre en application diverses habiletés socioémotionnelles"
      ],
      'B1 — Sens du nombre': [
        "B1.1 — lire, représenter, composer et décomposer les nombres naturels de 0 jusqu'à 1 000",
        "B1.2 — comparer et ordonner les nombres naturels jusqu'à 1 000, dans divers contextes",
        "B1.3 — arrondir les nombres naturels à la dizaine et à la centaine près, dans divers contextes",
        "B1.4 — compter jusqu'à 1 000, y compris par intervalles de 50, 100 et 200, à l'aide d'une variété d'outils et de stratégies",
        "B1.5 — utiliser la valeur de position pour décrire et représenter des nombres de différentes façons",
        "B1.6 — utiliser des schémas pour représenter",
        "B1.7 — représenter et résoudre des problèmes de partage équitable ciblant la recherche"
      ],
      'B2 — Sens des opérations': [
        "B2.1 — utiliser les propriétés des opérations, et démontrer les relations entre la multiplication",
        "B2.2 — se rappeler les faits de multiplication de 2, 5 et 10, et les faits de division associés",
        "B2.3 — utiliser des stratégies de calcul mental, y compris l'estimation",
        "B2.4 — démontrer sa compréhension des algorithmes de l'addition",
        "B2.5 — représenter et comparer des nombres entiers et des fractions",
        "B2.6 — représenter la multiplication de nombres jusqu'à 10 × 10 et la division de nombres jusqu'à 100 ÷ 10",
        "B2.7 — représenter et résoudre des problèmes relatifs à la multiplication et à la division",
        "B2.8 — démontrer la relation entre le numérateur d'une fraction",
        "B2.9 — utiliser les rapports de 1 à 2, de 1 à 5 et de 1 à 10 pour résoudre des problèmes"
      ],
      'C1 — Suites et relations': [
        "C1.1 — reconnaître et décrire les éléments et les opérations qui se répètent dans diverses suites (numériques et non numériques)",
        "C1.2 — créer des suites qui comprennent des éléments, des mouvements ou des opérations qui se répètent",
        "C1.3 — déterminer et utiliser les règles pour prolonger des suites, faire et justifier des prédictions",
        "C1.4 — créer et décrire des suites numériques comprenant des nombres naturels jusqu'à 1 000"
      ],
      'C2 — Équations et inégalités': [
        "C2.1 — décrire de quelles façons les variables sont utilisées et les utiliser de manière appropriée dans une variété de contextes",
        "C2.2 — déterminer si des ensembles d'expressions qui comportent des additions, des soustractions",
        "C2.3 — déterminer et utiliser les relations d'équivalence comprenant des nombres naturels jusqu'à 1 000, dans divers contextes"
      ],
      'C3 — Codage': [
        "C3.1 — résoudre des problèmes",
        "C3.2 — lire et modifier des codes donnés, y compris des codes comprenant des événements séquentiels"
      ],
      'D1 — Littératie statistique': [
        "D1.1 — trier et classer des données selon divers attributs",
        "D1.2 — collecter des données au moyen d'observations, d'expériences",
        "D1.3 — représenter des ensembles de données, en utilisant la correspondance un à plusieurs",
        "D1.4 — déterminer la moyenne et le ou les modes de divers ensembles de données représentées à l'aide de nombres naturels",
        "D1.5 — analyser divers ensembles de données présentées de différentes façons"
      ],
      'D2 — Probabilité': [
        "D2.1 — utiliser le vocabulaire mathématique, y compris des termes comme « impossible », « peu probable », « équiprobable »",
        "D2.2 — formuler et vérifier des prédictions sur la probabilité que la moyenne"
      ],
      'E1 — Raisonnement géométrique et spatial': [
        "E1.1 — classer, construire et identifier des cubes, des prismes, des pyramides",
        "E1.2 — composer et décomposer des structures variées, et reconnaître les figures planes et les solides qu'elles contiennent",
        "E1.3 — reconnaître des longueurs et des angles congrus ainsi que des faces congruentes dans des solides en les superposant",
        "E1.4 — donner et suivre des directives à étapes multiples, incluant des distances ainsi que des demi-tours"
      ],
      'E2 — Sens de la mesure': [
        "E2.1 — utiliser des unités de mesure de longueur appropriées pour estimer",
        "E2.2 — expliquer la relation entre les millimètres, les centimètres",
        "E2.3 — utiliser correctement des unités de mesure non conventionnelles pour estimer, mesurer et comparer des capacités",
        "E2.4 — comparer, estimer et mesurer la masse de divers objets",
        "E2.5 — utiliser des unités de mesure de tailles différentes pour mesurer le même attribut d'un objet donné",
        "E2.6 — utiliser des horloges et des minuteries analogiques et numériques pour dire l'heure, en heures, en minutes et en secondes",
        "E2.7 — comparer les aires de figures planes en les faisant correspondre",
        "E2.8 — utiliser des unités de mesure non conventionnelles appropriées pour mesurer l'aire",
        "E2.9 — utiliser des centimètres carrés (cm²) et des mètres carrés (m²) pour estimer"
      ],
      'F1 — Argent et finances': [
        "F1.1 — estimer et calculer la monnaie à rendre pour diverses transactions monétaires simples en argent comptant"
      ]
    },
    '4': {
      'A1 — Habiletés socioémotionnelles': [
        "A1 — mettre en application diverses habiletés socioémotionnelles"
      ],
      'B1 — Sens du nombre': [
        "B1.1 — lire, représenter, composer et décomposer les nombres naturels de 0 jusqu'à 10 000",
        "B1.2 — comparer et ordonner les nombres naturels jusqu'à 10 000, dans divers contextes",
        "B1.3 — arrondir les nombres naturels à la dizaine, à la centaine ou au millier près, dans divers contextes",
        "B1.4 — représenter des fractions à partir des demis jusqu'aux dixièmes à l'aide de schémas",
        "B1.5 — utiliser des schémas et des modèles pour représenter, comparer",
        "B1.6 — compter jusqu'à 10 par intervalle de un demi, de un tiers, de un quart, de un cinquième, de un sixième",
        "B1.7 — lire, représenter, comparer et ordonner des nombres décimaux jusqu'aux dixièmes, dans divers contextes",
        "B1.8 — arrondir des nombres décimaux au nombre naturel le plus près, dans divers contextes",
        "B1.9 — décrire les relations et représenter les équivalences entre des fractions et des nombres décimaux jusqu'aux dixièmes"
      ],
      'B2 — Sens des opérations': [
        "B2.1 — utiliser les propriétés des opérations et les relations entre l'addition, la soustraction",
        "B2.2 — se rappeler les faits de multiplication de 1 × 1 à 10 × 10 et les faits de division associés",
        "B2.3 — utiliser des stratégies de calcul mental pour multiplier un nombre naturel par 10",
        "B2.4 — représenter des nombres à l'aide de matériel concret et de symboles",
        "B2.5 — représenter et comparer des nombres entiers et des fractions",
        "B2.6 — représenter des fractions et des nombres décimaux de diverses façons",
        "B2.7 — démontrer la relation entre l'addition répétée d'une fraction unitaire",
        "B2.8 — représenter des relations multiplicatives simples comprenant des taux avec des nombres naturels"
      ],
      'C1 — Suites et relations': [
        "C1.1 — reconnaître et décrire des suites à motif répété et des suites croissantes",
        "C1.2 — créer des suites à motif répété et des suites croissantes, à l'aide d'une variété de représentations",
        "C1.3 — déterminer et utiliser les règles pour prolonger des suites, faire et justifier des prédictions",
        "C1.4 — créer et décrire des suites numériques comprenant des nombres naturels et des nombres décimaux jusqu'aux dixièmes"
      ],
      'C2 — Équations et inégalités': [
        "C2.1 — déterminer et utiliser des symboles comme variables dans des expressions et des équations",
        "C2.2 — résoudre des équations qui comprennent des nombres naturels jusqu'à 50, dans divers contextes, et vérifier les solutions",
        "C2.3 — résoudre des inégalités qui comprennent des additions et des soustractions de nombres naturels jusqu'à 20"
      ],
      'C3 — Codage': [
        "C3.1 — résoudre des problèmes",
        "C3.2 — lire et modifier des codes donnés, y compris des codes comprenant des événements séquentiels, simultanés"
      ],
      'D1 — Littératie statistique': [
        "D1.1 — décrire la différence entre les données qualitatives et les données quantitatives",
        "D1.2 — collecter des données provenant de sources primaires",
        "D1.3 — choisir le diagramme le plus approprié pour représenter un ensemble de données",
        "D1.4 — créer une infographie pour représenter un ensemble de données de façon appropriée",
        "D1.5 — déterminer la moyenne, la médiane",
        "D1.6 — examiner divers ensembles de données présentées de différentes façons"
      ],
      'D2 — Probabilité': [
        "D2.1 — utiliser le vocabulaire mathématique, y compris des termes comme « impossible », « peu probable », « équiprobable »",
        "D2.2 — formuler et vérifier des prédictions sur la probabilité que la moyenne"
      ],
      'E1 — Raisonnement géométrique et spatial': [
        "E1.1 — identifier les propriétés géométriques des rectangles, y compris le nombre d'angles droits",
        "E1.2 — situer et lire des coordonnées dans le premier quadrant d'un plan cartésien",
        "E1.3 — décrire et effectuer des translations et des réflexions dans une grille, et prédire les résultats de ces transformations"
      ],
      'E2 — Sens de la mesure': [
        "E2.1 — expliquer les relations entre des grammes",
        "E2.2 — utiliser des préfixes métriques pour décrire la taille relative de différentes unités de mesure métriques",
        "E2.3 — résoudre des problèmes associés à la durée en se servant des relations entre différentes unités de mesure de temps",
        "E2.4 — reconnaître des angles et les classer en tant qu'angle droit, plat, aigu ou obtus",
        "E2.5 — utiliser la structure en rangées et en colonnes d'une disposition rectangulaire pour mesurer l'aire d'un rectangle",
        "E2.6 — se servir de la formule de calcul de l'aire d'un rectangle pour trouver la mesure inconnue"
      ],
      'F1 — Argent et finances': [
        "F1.1 — déterminer divers modes de paiement qui peuvent être utilisés pour acheter des biens et des services",
        "F1.2 — estimer et calculer le coût de transactions comprenant plusieurs articles dont les valeurs sont en dollars",
        "F1.3 — expliquer les concepts de dépense, d'épargne, de revenu, d'investissement et de don",
        "F1.4 — expliquer la relation entre les dépenses et l'épargne, et décrire comment les comportements en matière de dépenses",
        "F1.5 — décrire des façons de déterminer si le prix d'une chose est raisonnable et par conséquent constitue un bon achat"
      ]
    },
    '5': {
      'A1 — Habiletés socioémotionnelles': [
        "A1 — mettre en application diverses habiletés socioémotionnelles"
      ],
      'B1 — Sens du nombre': [
        "B1.1 — lire, représenter, composer et décomposer les nombres naturels de 0 jusqu'à 100 000",
        "B1.2 — comparer et ordonner les nombres naturels jusqu'à 100 000, dans divers contextes",
        "B1.3 — représenter des fractions équivalentes à partir des demis jusqu'aux douzièmes",
        "B1.4 — comparer et ordonner des fractions à partir des demis jusqu'aux douzièmes",
        "B1.5 — lire, représenter, comparer et ordonner des nombres décimaux jusqu'aux centièmes, dans divers contextes",
        "B1.6 — arrondir les nombres décimaux au dixième près, dans divers contextes",
        "B1.7 — décrire les relations et représenter les équivalences entre des fractions"
      ],
      'B2 — Sens des opérations': [
        "B2.1 — utiliser les propriétés des opérations",
        "B2.2 — se rappeler les faits de multiplication de 0 × 0 à 12 × 12 et les faits de division associés",
        "B2.3 — utiliser des stratégies de calcul mental pour multiplier des nombres naturels par 0,1 et 0,01",
        "B2.4 — représenter des nombres à l'aide de matériel concret et de symboles",
        "B2.5 — additionner et soustraire des fractions ayant des dénominateurs communs, dans divers contextes",
        "B2.6 — représenter des fractions et des nombres décimaux de diverses façons",
        "B2.7 — représenter des expressions algébriques de diverses façons",
        "B2.8 — multiplier et diviser un nombre naturel à un chiffre par une fraction unitaire, à l'aide d'outils et de schémas",
        "B2.9 — représenter et créer des rapports et des taux équivalents, à l'aide d'une variété d'outils et de modèles"
      ],
      'C1 — Suites et relations': [
        "C1.1 — reconnaître et décrire des suites à motif répété ainsi que des suites croissantes et des suites décroissantes",
        "C1.2 — créer des suites croissantes et des suites décroissantes, à l'aide d'une variété de représentations",
        "C1.3 — déterminer et utiliser des règles pour prolonger des suites, faire et justifier des prédictions",
        "C1.4 — créer et décrire des suites numériques comprenant des nombres naturels"
      ],
      'C2 — Équations et inégalités': [
        "C2.1 — décrire des relations d'équivalence à l'aide de mots, d'expressions algébriques et de représentations visuelles",
        "C2.2 — évaluer des expressions algébriques comprenant des nombres naturels",
        "C2.3 — résoudre des équations qui comprennent des nombres naturels jusqu'à 100, dans divers contextes, et vérifier les solutions",
        "C2.4 — résoudre des inégalités qui comprennent une opération et des nombres naturels jusqu'à 50"
      ],
      'C3 — Codage': [
        "C3.1 — résoudre des problèmes",
        "C3.2 — lire et modifier des codes donnés, y compris des codes comprenant des instructions conditionnelles"
      ],
      'D1 — Littératie statistique': [
        "D1.1 — expliquer l'importance de diverses techniques d'échantillonnage pour collecter des données à partir d'un échantillon représentatif",
        "D1.2 — collecter des données, en utilisant des techniques d'échantillonnage appropriées",
        "D1.3 — choisir le diagramme le plus approprié pour représenter divers ensembles de données",
        "D1.4 — créer une infographie pour représenter un ensemble de données de façon appropriée",
        "D1.5 — déterminer la moyenne, la médiane",
        "D1.6 — examiner divers ensembles de données présentées de différentes façons"
      ],
      'D2 — Probabilité': [
        "D2.1 — utiliser des fractions pour exprimer la probabilité que des événements se produisent",
        "D2.2 — déterminer et comparer les probabilités théoriques et expérimentales qu'un événement se produise"
      ],
      'E1 — Raisonnement géométrique et spatial': [
        "E1.1 — reconnaître les propriétés géométriques des triangles",
        "E1.2 — reconnaître et construire des triangles, des rectangles et des parallélogrammes congruents",
        "E1.3 — tracer les vues de côté, de face et de dessus de divers objets et faire correspondre le dessin à l'objet",
        "E1.4 — situer et lire des coordonnées dans le premier quadrant d'un plan cartésien en utilisant diverses échelles",
        "E1.5 — décrire et effectuer des translations, des réflexions et des rotations jusqu'à 180° dans une grille"
      ],
      'E2 — Sens de la mesure': [
        "E2.1 — utiliser des unités de mesure métriques appropriées pour estimer et mesurer la longueur, l'aire, la masse et la capacité",
        "E2.2 — résoudre des problèmes associés à la conversion de grandes unités de mesure métriques en des unités plus petites",
        "E2.3 — comparer des angles et déterminer leurs tailles respectives en les superposant",
        "E2.4 — expliquer le fonctionnement d'un rapporteur d'angles et l'utiliser pour mesurer",
        "E2.5 — utiliser les relations entre l'aire des rectangles, des parallélogrammes et des triangles",
        "E2.6 — démontrer que des figures planes ayant la même aire peuvent avoir des périmètres différents"
      ],
      'F1 — Argent et finances': [
        "F1.1 — décrire différentes façons de transférer de l'argent entre des personnes, des organismes ou des entreprises",
        "F1.2 — estimer et calculer le coût de transactions comprenant plusieurs articles dont le prix est exprimé en dollars",
        "F1.3 — établir des exemples de budgets simples afin de gérer des finances dans diverses situations de revenu et de dépenses",
        "F1.4 — expliquer les concepts de crédit et de dette, et décrire l'impact potentiel du crédit",
        "F1.5 — calculer des prix unitaires pour divers biens et services, et déterminer quels prix représentent l'achat le plus avantageux",
        "F1.6 — décrire les types de taxes qui sont perçues par les divers ordres de gouvernement au Canada"
      ]
    },
    '6': {
      'A1 — Habiletés socioémotionnelles': [
        "A1 — mettre en application diverses habiletés socioémotionnelles"
      ],
      'B1 — Sens du nombre': [
        "B1.1 — lire et représenter les nombres naturels de 0 jusqu'à un million, à l'aide d'outils et de stratégies appropriés",
        "B1.2 — lire et représenter des nombres entiers, à l'aide d'outils et de stratégies",
        "B1.3 — comparer et ordonner des nombres entiers, des nombres décimaux et des fractions, séparément et en les combinant",
        "B1.4 — lire, représenter, comparer et ordonner les nombres décimaux jusqu'aux millièmes, dans divers contextes",
        "B1.5 — arrondir des nombres à virgule, dont la partie décimale est finie ou périodique, au dixième et au centième près",
        "B1.6 — décrire les relations et représenter l'équivalence entre des fractions et des nombres décimaux jusqu'aux millièmes"
      ],
      'B2 — Sens des opérations': [
        "B2.1 — utiliser les propriétés des opérations",
        "B2.2 — comprendre les critères de divisibilité et les utiliser pour vérifier si les nombres sont divisibles par 2, 3, 4, 5",
        "B2.3 — utiliser des stratégies de calcul mental pour calculer des pourcentages de 1 %, 5 %, 10 %, 15 %",
        "B2.4 — représenter et résoudre des problèmes relatifs à l'addition et à la soustraction de nombres naturels",
        "B2.5 — additionner et soustraire des fractions avec et sans dénominateurs communs",
        "B2.6 — représenter des nombres composés sous la forme d'une multiplication de ses facteurs premiers",
        "B2.7 — représenter des expressions algébriques de diverses façons",
        "B2.8 — représenter des données dans des diagrammes et des tableaux",
        "B2.9 — multiplier des nombres naturels par des fractions propres, à l'aide d'outils et de stratégies appropriés",
        "B2.10 — diviser des nombres naturels par des fractions propres, à l'aide d'une variété d'outils et de stratégies",
        "B2.11 — représenter des relations mathématiques à l'aide de tableaux et de graphiques",
        "B2.12 — résoudre des problèmes comprenant des rapports"
      ],
      'C1 — Suites et relations': [
        "C1.1 — reconnaître et décrire des suites à motif répété ainsi que des suites croissantes et des suites décroissantes",
        "C1.2 — créer des suites à motif répété, des suites croissantes",
        "C1.3 — déterminer et utiliser les règles pour prolonger des suites, faire et justifier des prédictions",
        "C1.4 — créer et décrire des suites numériques comprenant des nombres naturels et des nombres décimaux"
      ],
      'C2 — Équations et inégalités': [
        "C2.1 — additionner des monômes du premier degré comprenant des nombres naturels, à l'aide d'outils",
        "C2.2 — évaluer des expressions algébriques comprenant des nombres naturels et des nombres décimaux jusqu'aux dixièmes",
        "C2.3 — résoudre des équations qui comprennent des termes multiples et des nombres naturels, dans divers contextes",
        "C2.4 — résoudre des inégalités qui comprennent deux opérations et des nombres naturels jusqu'à 100"
      ],
      'C3 — Codage': [
        "C3.1 — résoudre des problèmes",
        "C3.2 — lire et modifier des codes donnés, y compris des codes comprenant des instructions conditionnelles"
      ],
      'D1 — Littératie statistique': [
        "D1.1 — décrire la différence entre les données discrètes et les données continues, et en fournir des exemples",
        "D1.2 — collecter des données qualitatives et des données quantitatives discrètes",
        "D1.3 — choisir le diagramme le plus approprié pour représenter divers ensembles de données",
        "D1.4 — créer une infographie pour représenter un ensemble de données de façon appropriée, y compris à l'aide de tableaux",
        "D1.5 — déterminer l'étendue comme mesure de dispersion et les mesures de tendances centrales de divers ensembles de données",
        "D1.6 — examiner divers ensembles de données présentées de différentes façons, y compris à l'aide d'histogrammes"
      ],
      'D2 — Probabilité': [
        "D2.1 — utiliser des fractions, des nombres décimaux",
        "D2.2 — déterminer et comparer les probabilités théoriques et expérimentales que deux événements indépendants se produisent"
      ],
      'E1 — Raisonnement géométrique et spatial': [
        "E1.1 — créer des listes des propriétés géométriques de divers types de quadrilatères",
        "E1.2 — construire des objets à trois dimensions à partir de vues de face, de côté et de dessus",
        "E1.3 — situer et lire des coordonnées dans les quatre quadrants d'un plan cartésien",
        "E1.4 — décrire et effectuer des combinaisons de translations, de réflexions et de rotations jusqu'à 360° dans une grille"
      ],
      'E2 — Sens de la mesure': [
        "E2.1 — mesurer la longueur, l'aire, la masse et la capacité à l'aide d'unités métriques appropriées",
        "E2.2 — utiliser un rapporteur pour mesurer et construire des angles jusqu'à 360°",
        "E2.3 — utiliser les propriétés des angles supplémentaires, complémentaires",
        "E2.4 — déterminer l'aire de trapèzes, de losanges, de cerfs-volants ainsi que de polygones complexes en les décomposant",
        "E2.5 — créer et utiliser les développements de solides pour déterminer les relations entre les faces de prismes",
        "E2.6 — déterminer l'aire totale de prismes et de pyramides en calculant les aires de chaque face à deux dimensions"
      ],
      'F1 — Argent et finances': [
        "F1.1 — décrire les avantages",
        "F1.2 — déterminer divers types d'objectifs financiers, y compris des objectifs d'épargne et de revenu",
        "F1.3 — déterminer et décrire divers facteurs qui peuvent aider ou entraver l'atteinte d'objectifs financiers",
        "F1.4 — expliquer le concept des taux d'intérêt et déterminer les types de taux d'intérêt",
        "F1.5 — décrire le commerce, le prêt, l'emprunt et le don comme différents moyens de répartir des ressources financières"
      ]
    }
  },

  // ──────────────────────────────────────────────────────────────
  // FRANÇAIS — grades 1-6 (abbreviated; key attentes per domaine)
  // ──────────────────────────────────────────────────────────────
  'Français': {
    '1': {
      'A1 — Compétences transférables': [
        "A1.1 — utiliser des compétences transférables pour appuyer sa communication dans divers contextes culturels et langagiers",
        "A1.2 — démontrer sa compréhension des façons dont les compétences transférables l'aident à développer sa voix"
      ],
      'A2 — Littératie numérique': [
        "A2.1 — démontrer sa compréhension de ses droits et responsabilités lors de ses interactions en ligne",
        "A2.2 — démontrer sa compréhension de la navigation sécuritaire dans des environnements en ligne",
        "A2.3 — recueillir, évaluer et utiliser de l'information",
        "A2.4 — démontrer sa compréhension des formes de discours, des conventions",
        "A2.5 — démontrer sa compréhension de l'interrelation entre la forme de discours, le contenu, le contexte",
        "A2.6 — utiliser des outils numériques et médiatiques pour soutenir un processus de design créatif",
        "A2.7 — communiquer et collaborer au sein de diverses communautés de façon sécuritaire, respectueuse"
      ],
      'A3 — Identité, communauté et PNMI': [
        "A3.1 — mettre en application ses connaissances pour soutenir son identité et son appartenance à la francophonie",
        "A3.2 — démontrer sa compréhension des contributions et perspectives de personnes et communautés diverses",
        "A3.3 — déterminer des thèmes explorés dans les cultures des Premières Nations"
      ],
      'B1 — Communication orale': [
        "B1.1 — utiliser diverses habiletés d'écoute efficace, notamment écouter attentivement",
        "B1.2 — repérer et utiliser des stratégies avant, pendant",
        "B1.3 — déterminer l'intention et l'auditoire pour la communication orale dans des contextes formels et informels",
        "B1.4 — déterminer et utiliser des stratégies de communication orale et non verbale, y compris l'expression",
        "B1.5 — choisir et utiliser des mots appropriés, y compris des mots appris récemment"
      ],
      "B2 — Notions fondamentales de la lecture et de l'écriture": [
        "B2.1 — mettre en application sa compréhension de la structure sonore des mots pour isoler",
        "B2.2 — nommer et former les lettres majuscules et minuscules peu importe l'ordre",
        "B2.3 — reconnaître, lire et orthographier les correspondances graphèmes-phonèmes relatives aux consonnes",
        "B2.4 — mettre en application ses connaissances des correspondances graphèmes-phonèmes",
        "B2.5 — mettre en application ses connaissances orthographiques, y compris celles relatives à la loi de position",
        "B2.6 — développer et mettre en application ses connaissances du sens des mots et des composantes des mots",
        "B2.7 — démontrer sa compréhension du sens des mots courants",
        "B2.8 — lire avec fluidité des mots simples, des phrases courtes et des paragraphes"
      ],
      'B3 — Apprentissages linguistiques': [
        "B3.1 — reconnaître et construire divers types et formes de phrases simples",
        "B3.2 — démontrer sa compréhension de la phrase de base et ses constituants, des groupes syntaxiques et des classes de mots",
        "B3.3 — mettre en application sa compréhension de la signification et de la fonction de la ponctuation"
      ],
      'C1 — Connaissances des textes': [
        "C1.1 — lire et démontrer sa compréhension des textes courts et simples",
        "C1.2 — reconnaître des formes simples de discours narratif, descriptif, incitatif et poétique/ludique",
        "C1.3 — reconnaître quelques organisateurs textuels associés à diverses formes de discours"
      ],
      'C2 — Processus de lecture': [
        "C2.1 — utiliser des stratégies de lecture avant, pendant et après la lecture",
        "C2.2 — démontrer sa compréhension de textes variés en répondant à des questions littérales et inférentielles",
        "C2.3 — repérer et utiliser des indices contextuels pour construire le sens d'un texte"
      ],
      'D1 — Connaissances des textes en écriture': [
        "D1.1 — produire divers types de textes courts et simples",
        "D1.2 — organiser ses idées selon la forme de discours choisie",
        "D1.3 — utiliser des éléments visuels pour appuyer ses textes écrits"
      ],
      'D2 — Processus d\'écriture': [
        "D2.1 — suivre les étapes du processus d'écriture : planification, rédaction, révision, correction et publication",
        "D2.2 — utiliser des stratégies d'écriture pour transmettre ses idées clairement",
        "D2.3 — vérifier l'orthographe des mots appris et utiliser des ressources pour corriger son texte"
      ]
    },
    '2': {
      'A1 — Compétences transférables': [
        "A1.1 — utiliser des compétences transférables pour appuyer sa communication dans divers contextes culturels et langagiers",
        "A1.2 — démontrer sa compréhension des façons dont les compétences transférables l'aident à développer sa voix"
      ],
      'A2 — Littératie numérique': [
        "A2.1 — démontrer sa compréhension de ses droits et responsabilités lors de ses interactions en ligne",
        "A2.3 — recueillir, évaluer et utiliser de l'information provenant de sources numériques",
        "A2.6 — utiliser des outils numériques et médiatiques pour soutenir un processus de design créatif",
        "A2.7 — communiquer et collaborer au sein de diverses communautés de façon sécuritaire, respectueuse"
      ],
      'A3 — Identité, communauté et PNMI': [
        "A3.1 — mettre en application ses connaissances pour soutenir son identité et son appartenance à la francophonie",
        "A3.2 — démontrer sa compréhension des contributions et perspectives de personnes et communautés diverses",
        "A3.3 — déterminer des thèmes explorés dans les cultures des Premières Nations, des Métis et des Inuit"
      ],
      'B1 — Communication orale': [
        "B1.1 — utiliser diverses habiletés d'écoute efficace pour mieux comprendre les communications orales",
        "B1.2 — repérer et utiliser des stratégies avant, pendant et après une communication orale",
        "B1.3 — déterminer l'intention et l'auditoire pour des communications orales dans divers contextes",
        "B1.4 — utiliser des stratégies de communication orale et non verbale adaptées au contexte",
        "B1.5 — enrichir son vocabulaire en utilisant des mots nouveaux dans ses communications orales"
      ],
      "B2 — Notions fondamentales de la lecture et de l'écriture": [
        "B2.1 — mettre en application ses connaissances des correspondances graphèmes-phonèmes pour lire et écrire des mots",
        "B2.2 — reconnaître et orthographier des mots fréquents de la 2e année",
        "B2.3 — utiliser ses connaissances orthographiques pour lire et écrire des mots plus complexes",
        "B2.4 — développer son vocabulaire en utilisant diverses stratégies d'identification des mots",
        "B2.5 — lire avec fluidité des textes appropriés à son niveau"
      ],
      'B3 — Apprentissages linguistiques': [
        "B3.1 — reconnaître et construire divers types de phrases, y compris des phrases complexes",
        "B3.2 — démontrer sa compréhension de la phrase de base, des groupes syntaxiques et des classes de mots",
        "B3.3 — appliquer les règles de ponctuation et d'orthographe dans ses productions écrites"
      ],
      'C1 — Connaissances des textes': [
        "C1.1 — lire et démontrer sa compréhension de textes variés",
        "C1.2 — identifier les caractéristiques de diverses formes de discours",
        "C1.3 — utiliser des organisateurs textuels pour mieux comprendre les textes lus"
      ],
      'C2 — Processus de lecture': [
        "C2.1 — utiliser des stratégies de lecture efficaces avant, pendant et après la lecture",
        "C2.2 — répondre à des questions littérales et inférentielles sur des textes variés",
        "C2.3 — faire des inférences et des prédictions à partir d'indices dans le texte"
      ],
      'D1 — Connaissances des textes en écriture': [
        "D1.1 — produire divers types de textes adaptés à l'intention et à l'auditoire",
        "D1.2 — organiser ses idées de façon logique selon la forme de discours",
        "D1.3 — intégrer des éléments visuels et graphiques dans ses textes écrits"
      ],
      'D2 — Processus d\'écriture': [
        "D2.1 — suivre les étapes du processus d'écriture pour produire des textes de qualité",
        "D2.2 — utiliser des stratégies de révision et de correction pour améliorer ses textes",
        "D2.3 — appliquer les règles d'orthographe et de grammaire apprises dans ses productions écrites"
      ]
    },
    '3': {
      'A1 — Compétences transférables': [
        "A1.1 — utiliser des compétences transférables dans divers contextes de communication",
        "A1.2 — démontrer sa compréhension des façons dont les compétences transférables appuient son apprentissage"
      ],
      'A2 — Littératie numérique': [
        "A2.1 — démontrer sa compréhension de ses droits et responsabilités numériques",
        "A2.3 — recueillir et évaluer de l'information provenant de sources numériques variées",
        "A2.6 — utiliser des outils numériques pour créer et communiquer",
        "A2.7 — communiquer de façon sécuritaire et responsable en ligne"
      ],
      'A3 — Identité, communauté et PNMI': [
        "A3.1 — consolider son identité francophone et son appartenance à la communauté",
        "A3.2 — explorer les contributions et perspectives de communautés diverses",
        "A3.3 — reconnaître des thèmes culturels propres aux Premières Nations, aux Métis et aux Inuit"
      ],
      'B1 — Communication orale': [
        "B1.1 — écouter activement et de façon critique pour comprendre des communications orales",
        "B1.2 — utiliser des stratégies efficaces avant, pendant et après une communication orale",
        "B1.3 — adapter sa communication orale à l'intention et à l'auditoire",
        "B1.4 — utiliser un vocabulaire précis et varié dans ses communications orales",
        "B1.5 — présenter ses idées oralement avec clarté et confiance"
      ],
      "B2 — Notions fondamentales de la lecture et de l'écriture": [
        "B2.1 — consolider ses connaissances des correspondances graphèmes-phonèmes",
        "B2.2 — lire et orthographier des mots fréquents et des mots nouveaux",
        "B2.3 — utiliser des stratégies de décodage et de compréhension pour lire des textes variés",
        "B2.4 — enrichir son vocabulaire à l'aide de diverses stratégies",
        "B2.5 — lire avec fluidité et expression des textes appropriés à la 3e année"
      ],
      'B3 — Apprentissages linguistiques': [
        "B3.1 — reconnaître et utiliser correctement divers types de phrases dans ses productions",
        "B3.2 — appliquer ses connaissances grammaticales : accord du verbe, du nom et de l'adjectif",
        "B3.3 — utiliser correctement la ponctuation et les majuscules dans ses textes"
      ],
      'C1 — Connaissances des textes': [
        "C1.1 — lire et comprendre des textes de plus en plus complexes",
        "C1.2 — reconnaître et décrire les caractéristiques de diverses formes de discours",
        "C1.3 — utiliser les organisateurs textuels pour mieux comprendre la structure des textes"
      ],
      'C2 — Processus de lecture': [
        "C2.1 — appliquer des stratégies de lecture efficaces pour comprendre divers types de textes",
        "C2.2 — faire des inférences, des prédictions et des connexions à partir de textes lus",
        "C2.3 — dégager les idées principales et les idées secondaires d'un texte"
      ],
      'D1 — Connaissances des textes en écriture': [
        "D1.1 — produire des textes variés adaptés à l'intention et à l'auditoire",
        "D1.2 — organiser ses idées de façon logique et cohérente",
        "D1.3 — intégrer des éléments visuels appropriés pour appuyer ses textes"
      ],
      'D2 — Processus d\'écriture': [
        "D2.1 — utiliser le processus d'écriture de façon autonome pour produire des textes de qualité",
        "D2.2 — réviser et corriger ses textes en utilisant diverses ressources",
        "D2.3 — appliquer les règles de grammaire et d'orthographe pour améliorer ses productions"
      ]
    },
    '4': {
      'A1 — Compétences transférables': [
        "A1.1 — utiliser des compétences transférables dans divers contextes de communication en français",
        "A1.2 — identifier comment les compétences transférables appuient son développement langagier et identitaire"
      ],
      'A2 — Littératie numérique': [
        "A2.1 — démontrer sa compréhension de la citoyenneté numérique responsable",
        "A2.3 — recueillir, évaluer et organiser de l'information provenant de sources numériques",
        "A2.6 — créer des productions numériques pour communiquer ses idées",
        "A2.7 — collaborer de façon éthique et sécuritaire dans des environnements numériques"
      ],
      'A3 — Identité, communauté et PNMI': [
        "A3.1 — approfondir son identité francophone et sa connaissance de la francophonie ontarienne et canadienne",
        "A3.2 — explorer les apports de diverses communautés culturelles à la société canadienne",
        "A3.3 — analyser des thèmes propres aux cultures des Premières Nations, des Métis et des Inuit"
      ],
      'B1 — Communication orale': [
        "B1.1 — écouter de façon active et critique dans des contextes formels et informels",
        "B1.2 — utiliser des stratégies d'écoute avant, pendant et après pour comprendre et analyser",
        "B1.3 — adapter sa communication orale en tenant compte de l'intention, de l'auditoire et du contexte",
        "B1.4 — utiliser des stratégies pour présenter ses idées oralement avec précision et efficacité",
        "B1.5 — enrichir son vocabulaire et l'utiliser de façon appropriée dans ses communications"
      ],
      "B2 — Notions fondamentales de la lecture et de l'écriture": [
        "B2.1 — mettre en application ses connaissances des correspondances graphèmes-phonèmes pour lire et écrire des mots avec précision et automaticité",
        "B2.2 — lire avec fluidité, précision et intonation des textes variés appropriés à son niveau",
        "B2.3 — mettre en application ses connaissances morphologiques (préfixes, suffixes, bases) pour lire et orthographier des mots",
        "B2.4 — développer et utiliser un vocabulaire académique riche dans ses productions orales et écrites"
      ],
      'B3 — Apprentissages linguistiques': [
        "B3.1 — reconnaître et utiliser diverses structures de phrases dans ses productions orales et écrites",
        "B3.2 — appliquer ses connaissances des classes de mots et des groupes syntaxiques",
        "B3.3 — utiliser correctement la ponctuation et la majuscule dans des textes variés"
      ],
      'C1 — Connaissances des textes': [
        "C1.1 — lire et analyser des textes variés en utilisant ses connaissances des formes de discours",
        "C1.2 — comparer des textes appartenant à diverses formes de discours",
        "C1.3 — expliquer comment les organisateurs textuels contribuent à la cohérence d'un texte"
      ],
      'C2 — Processus de lecture': [
        "C2.1 — utiliser des stratégies de lecture efficaces et variées pour comprendre des textes complexes",
        "C2.2 — analyser et interpréter des textes en faisant des inférences et des connexions",
        "C2.3 — synthétiser l'information de plusieurs textes pour construire sa compréhension"
      ],
      'D1 — Connaissances des textes en écriture': [
        "D1.1 — produire des textes variés et de plus en plus élaborés selon l'intention et l'auditoire",
        "D1.2 — structurer ses textes de façon logique et cohérente en utilisant des organisateurs textuels",
        "D1.3 — intégrer des éléments visuels et des données pour appuyer ses textes"
      ],
      'D2 — Processus d\'écriture': [
        "D2.1 — utiliser le processus d'écriture de manière autonome et efficace",
        "D2.2 — réviser et améliorer ses textes en appliquant des stratégies de correction variées",
        "D2.3 — appliquer les règles de grammaire, d'orthographe et de syntaxe dans ses productions"
      ]
    },
    '5': {
      'A1 — Compétences transférables': [
        "A1.1 — mobiliser ses compétences transférables dans divers contextes de communication",
        "A1.2 — expliquer comment les compétences transférables contribuent à son développement en tant que locuteur francophone"
      ],
      'A2 — Littératie numérique': [
        "A2.1 — analyser et appliquer les principes de la citoyenneté numérique",
        "A2.3 — évaluer de façon critique l'information provenant de sources numériques",
        "A2.6 — utiliser des outils numériques pour créer des productions médiatiques et collaboratives",
        "A2.7 — communiquer de façon responsable et inclusive dans des contextes numériques"
      ],
      'A3 — Identité, communauté et PNMI': [
        "A3.1 — approfondir son sentiment d'appartenance à la francophonie dans des contextes variés",
        "A3.2 — analyser les contributions et les perspectives de communautés diversifiées au Canada",
        "A3.3 — examiner les visions du monde des Premières Nations, des Métis et des Inuit"
      ],
      'B1 — Communication orale': [
        "B1.1 — écouter de façon analytique et critique dans des contextes variés",
        "B1.2 — utiliser des stratégies métacognitives avant, pendant et après une communication orale",
        "B1.3 — adapter sa communication orale de façon stratégique selon l'intention, l'auditoire et le contexte",
        "B1.4 — présenter ses idées oralement avec persuasion et nuance",
        "B1.5 — utiliser un vocabulaire riche et précis pour communiquer ses idées"
      ],
      "B2 — Notions fondamentales de la lecture et de l'écriture": [
        "B2.1 — lire avec précision et automaticité des textes variés en utilisant ses connaissances des correspondances graphèmes-phonèmes",
        "B2.2 — lire avec fluidité et intonation en ajustant son rythme selon l'intention du texte",
        "B2.3 — mettre en application ses connaissances morphologiques avancées pour lire et orthographier des mots complexes",
        "B2.4 — enrichir et réinvestir son vocabulaire académique dans divers contextes de communication"
      ],
      'B3 — Apprentissages linguistiques': [
        "B3.1 — analyser et utiliser des structures de phrases variées et complexes",
        "B3.2 — appliquer ses connaissances approfondies de la grammaire et de la syntaxe",
        "B3.3 — utiliser la ponctuation de façon précise pour enrichir l'expression écrite"
      ],
      'C1 — Connaissances des textes': [
        "C1.1 — analyser des textes variés en expliquant comment la forme et le contenu servent l'intention",
        "C1.2 — comparer et évaluer des textes appartenant à diverses formes de discours",
        "C1.3 — analyser comment les organisateurs textuels contribuent à la cohérence et à l'efficacité d'un texte"
      ],
      'C2 — Processus de lecture': [
        "C2.1 — appliquer des stratégies de lecture avancées pour analyser des textes complexes",
        "C2.2 — évaluer de façon critique des textes en portant un jugement éclairé",
        "C2.3 — synthétiser et intégrer des informations provenant de sources multiples"
      ],
      'D1 — Connaissances des textes en écriture': [
        "D1.1 — produire des textes complexes et nuancés adaptés à des intentions et des auditoires variés",
        "D1.2 — organiser ses textes avec une structure claire et des transitions efficaces",
        "D1.3 — intégrer des données, des citations et des éléments visuels pour appuyer ses arguments"
      ],
      'D2 — Processus d\'écriture': [
        "D2.1 — gérer de façon autonome le processus d'écriture dans des contextes variés",
        "D2.2 — réviser ses textes en tenant compte du style, de la clarté et de l'efficacité communicative",
        "D2.3 — maîtriser les conventions linguistiques pour produire des textes de qualité"
      ]
    },
    '6': {
      'A1 — Compétences transférables': [
        "A1.1 — transférer ses compétences langagières dans des contextes de communication diversifiés et exigeants",
        "A1.2 — analyser comment les compétences transférables enrichissent son développement identitaire et langagier"
      ],
      'A2 — Littératie numérique': [
        "A2.1 — évaluer de façon critique les enjeux liés à la citoyenneté numérique",
        "A2.3 — recueillir, analyser et synthétiser de l'information provenant de sources numériques",
        "A2.6 — concevoir des productions numériques multimodales pour communiquer ses idées",
        "A2.7 — exercer un leadership éthique et inclusif dans des environnements numériques"
      ],
      'A3 — Identité, communauté et PNMI': [
        "A3.1 — défendre son identité francophone et valoriser la diversité au sein de la francophonie",
        "A3.2 — évaluer les contributions et perspectives de communautés variées dans un contexte mondial",
        "A3.3 — analyser et respecter les visions du monde et les droits des Premières Nations, des Métis et des Inuit"
      ],
      'B1 — Communication orale': [
        "B1.1 — écouter de façon critique et analytique des communications orales complexes",
        "B1.2 — utiliser des stratégies avancées avant, pendant et après une communication orale",
        "B1.3 — communiquer oralement de façon persuasive et nuancée dans des contextes formels et informels",
        "B1.4 — adapter son registre de langue et son ton selon l'intention et l'auditoire",
        "B1.5 — utiliser un vocabulaire sophistiqué et des figures de style pour enrichir ses communications"
      ],
      "B2 — Notions fondamentales de la lecture et de l'écriture": [
        "B2.1 — lire avec précision, automaticité et compréhension des textes complexes et variés",
        "B2.2 — lire avec fluidité et expression en adaptant son intonation et son rythme au sens du texte",
        "B2.3 — analyser la structure morphologique des mots pour lire, comprendre et orthographier des termes complexes",
        "B2.4 — utiliser de façon autonome un vocabulaire académique varié et précis dans ses productions"
      ],
      'B3 — Apprentissages linguistiques': [
        "B3.1 — maîtriser des structures syntaxiques complexes dans ses productions orales et écrites",
        "B3.2 — analyser et appliquer des connaissances grammaticales avancées dans des contextes variés",
        "B3.3 — utiliser la ponctuation et les conventions typographiques pour préciser et nuancer ses textes"
      ],
      'C1 — Connaissances des textes': [
        "C1.1 — analyser de façon critique des textes complexes en tenant compte du contexte de production",
        "C1.2 — évaluer l'efficacité de diverses formes de discours pour atteindre l'intention communicative",
        "C1.3 — analyser comment les choix stylistiques et textuels influencent le lecteur"
      ],
      'C2 — Processus de lecture': [
        "C2.1 — appliquer des stratégies de lecture métacognitives pour analyser des textes complexes",
        "C2.2 — évaluer de façon critique la crédibilité, le biais et l'intention d'un texte",
        "C2.3 — intégrer des connaissances provenant de textes variés pour développer une position éclairée"
      ],
      'D1 — Connaissances des textes en écriture': [
        "D1.1 — produire des textes sophistiqués et bien articulés pour des auditoires et intentions variés",
        "D1.2 — structurer ses textes de façon à maximiser la clarté et l'impact sur le lecteur",
        "D1.3 — intégrer des données, des preuves et des éléments multimodaux dans ses productions écrites"
      ],
      'D2 — Processus d\'écriture': [
        "D2.1 — gérer de façon autonome et réflexive le processus d'écriture",
        "D2.2 — réviser ses textes en appliquant des critères d'efficacité stylistique et communicative",
        "D2.3 — démontrer une maîtrise des conventions linguistiques dans des productions écrites variées et complexes"
      ]
    }
  },

  // ──────────────────────────────────────────────────────────────
  // ÉTUDES SOCIALES — grades 1-6
  // Domaine A : Patrimoine et identité
  // Domaine B : Communauté et environnement
  // ──────────────────────────────────────────────────────────────
  'Études sociales': {
    '1': {
      'A — Patrimoine et identité : les rôles et les responsabilités': [
        "A1 — utiliser le processus d'enquête pour explorer les rôles et les responsabilités des personnes dans diverses communautés",
        "A2 — reconnaître les droits et les responsabilités des membres de diverses communautés, y compris les communautés autochtones",
        "A3 — décrire les rôles et les responsabilités des membres de la famille, de l'école et de la communauté locale"
      ],
      'B — Communauté et environnement : la communauté': [
        "B1 — utiliser le processus d'enquête pour explorer les caractéristiques des communautés locales",
        "B2 — reconnaître les caractéristiques naturelles et les caractéristiques humaines de sa communauté",
        "B3 — décrire des façons dont les personnes utilisent et protègent les ressources naturelles dans leur communauté"
      ]
    },
    '2': {
      'A — Patrimoine et identité : les traditions familiales et communautaires': [
        "A1 — utiliser le processus d'enquête pour explorer des traditions familiales et communautaires diverses",
        "A2 — reconnaître l'importance des traditions familiales et culturelles dans la construction de l'identité",
        "A3 — décrire des traditions et des célébrations de diverses communautés culturelles, y compris les traditions autochtones"
      ],
      'B — Communauté et environnement : les communautés du monde': [
        "B1 — utiliser le processus d'enquête pour explorer des communautés rurales, urbaines et éloignées dans le monde",
        "B2 — comparer des caractéristiques de diverses communautés dans le monde, notamment leurs ressources et leur environnement",
        "B3 — reconnaître des façons dont les personnes de diverses communautés répondent à leurs besoins et interagissent avec leur environnement"
      ]
    },
    '3': {
      'A — Patrimoine et identité : les communautés du Canada, 1780–1850': [
        "A1 — utiliser le processus d'enquête pour explorer la vie dans diverses communautés canadiennes entre 1780 et 1850",
        "A2 — analyser les caractéristiques de communautés autochtones et non autochtones au Canada entre 1780 et 1850",
        "A3 — décrire des aspects de la vie quotidienne, des modes de subsistance et de l'organisation sociale de communautés canadiennes de cette période"
      ],
      'B — Communauté et environnement : vivre et travailler en Ontario': [
        "B1 — utiliser le processus d'enquête pour explorer des régions naturelles et des industries de l'Ontario",
        "B2 — reconnaître des caractéristiques géographiques, des ressources naturelles et des activités économiques de l'Ontario",
        "B3 — décrire l'interdépendance entre les personnes et l'environnement naturel en Ontario"
      ]
    },
    '4': {
      'A — Patrimoine et identité : les sociétés anciennes': [
        "A1 — utiliser le processus d'enquête pour explorer des sociétés anciennes",
        "A2 — analyser des aspects de la vie quotidienne, de la gouvernance et des réalisations de sociétés anciennes",
        "A3 — comparer des sociétés anciennes et établir des liens avec la société contemporaine"
      ],
      'B — Communauté et environnement : les régions politiques et physiques du Canada': [
        "B1 — utiliser le processus d'enquête pour explorer les régions politiques et physiques du Canada",
        "B2 — analyser les caractéristiques physiques et humaines des régions du Canada",
        "B3 — expliquer des enjeux liés à l'utilisation des ressources naturelles et à la gestion de l'environnement au Canada"
      ]
    },
    '5': {
      'A — Patrimoine et identité : les interactions entre les communautés autochtones et les Européens (avant 1713)': [
        "A1 — utiliser le processus d'enquête pour explorer les relations entre les communautés autochtones et les Européens",
        "A2 — analyser les causes et les conséquences des interactions entre les communautés autochtones et les colonisateurs européens",
        "A3 — décrire des aspects de la vie économique et sociale des communautés autochtones et de la Nouvelle-France"
      ],
      'B — Communauté et environnement : l\'action gouvernementale et citoyenne': [
        "B1 — utiliser le processus d'enquête pour explorer des enjeux sociaux ou environnementaux au Canada",
        "B2 — analyser des interventions gouvernementales et citoyennes pour faire face à des enjeux sociaux ou environnementaux",
        "B3 — décrire des formes de participation citoyenne et de prise de décision démocratique au Canada"
      ]
    },
    '6': {
      'A — Patrimoine et identité : l\'expérience canadienne hier et aujourd\'hui': [
        "A1 — utiliser le processus d'enquête pour explorer l'expérience canadienne dans une perspective historique et contemporaine",
        "A2 — analyser des enjeux liés à l'identité canadienne, à la diversité et aux droits des personnes",
        "A3 — évaluer des contributions de diverses communautés au développement du Canada"
      ],
      'B — Communauté et environnement : le Canada dans la communauté mondiale': [
        "B1 — utiliser le processus d'enquête pour explorer la place du Canada dans la communauté mondiale",
        "B2 — analyser des enjeux mondiaux et le rôle du Canada dans la résolution de ces enjeux",
        "B3 — évaluer les responsabilités du Canada envers d'autres pays et l'environnement mondial"
      ]
    }
  },

  // ──────────────────────────────────────────────────────────────
  // SCIENCES ET TECHNOLOGIE — grades 1-6
  // ──────────────────────────────────────────────────────────────
  'Sciences et technologie': {
    '1': {
      'A — Habiletés liées aux STIM et connexions': [
        "A1 — utiliser des processus d'investigation scientifique et technologique pour explorer des questions",
        "A2 — reconnaître des applications pratiques des sciences et de la technologie dans la vie quotidienne"
      ],
      'B — Êtres vivants : caractéristiques et besoins': [
        "B1 — identifier des caractéristiques observables et des besoins fondamentaux des êtres vivants",
        "B2 — décrire des façons dont les êtres vivants répondent à leurs besoins dans leur environnement",
        "B3 — reconnaître des ressemblances et des différences entre divers êtres vivants"
      ],
      'C — Énergie dans nos vies': [
        "C1 — identifier des sources d'énergie et décrire leurs usages dans la vie quotidienne",
        "C2 — reconnaître des façons de conserver l'énergie et de réduire sa consommation"
      ],
      'D — Matériaux, objets et structures': [
        "D1 — explorer les propriétés de divers matériaux et leur utilisation dans la fabrication d'objets",
        "D2 — construire des structures simples en choisissant des matériaux appropriés"
      ],
      'E — Cycle des jours et des saisons': [
        "E1 — décrire les changements observables liés aux saisons et leur effet sur les êtres vivants",
        "E2 — reconnaître les caractéristiques du soleil, de la lune et des étoiles telles qu'on peut les observer"
      ]
    },
    '2': {
      'A — Habiletés liées aux STIM et connexions': [
        "A1 — utiliser des processus d'investigation scientifique et technologique pour répondre à des questions",
        "A2 — établir des liens entre les sciences, la technologie et la vie quotidienne"
      ],
      'B — Animaux et croissance': [
        "B1 — décrire les caractéristiques et les besoins de divers animaux à différentes étapes de leur développement",
        "B2 — comparer des façons dont les animaux grandissent et changent au cours de leur vie",
        "B3 — reconnaître l'importance de la protection des animaux et de leurs habitats"
      ],
      'C — Liquides et solides': [
        "C1 — explorer les propriétés des liquides et des solides",
        "C2 — décrire les changements d'état de la matière et leurs causes"
      ],
      'D — Machines simples et mouvement': [
        "D1 — identifier des machines simples et expliquer comment elles facilitent le travail",
        "D2 — construire des dispositifs utilisant des machines simples pour accomplir une tâche"
      ],
      'E — Air et eau dans l\'environnement': [
        "E1 — reconnaître les propriétés de l'air et de l'eau et leur rôle dans l'environnement",
        "E2 — décrire des façons dont les humains utilisent l'air et l'eau et l'importance de les protéger"
      ]
    },
    '3': {
      'A — Habiletés liées aux STIM et connexions': [
        "A1 — utiliser le processus d'investigation pour réaliser des enquêtes scientifiques",
        "A2 — identifier des applications des sciences et de la technologie dans des contextes réels"
      ],
      'B — Plantes et croissance': [
        "B1 — décrire les caractéristiques, les besoins et les cycles de vie des plantes",
        "B2 — reconnaître des façons dont les plantes répondent à leur environnement et l'importance de les protéger",
        "B3 — expliquer le rôle des plantes dans les écosystèmes et pour les êtres humains"
      ],
      'C — Forces et mouvement': [
        "C1 — identifier et décrire diverses forces et leurs effets sur les objets",
        "C2 — concevoir et construire des dispositifs en appliquant des principes liés aux forces et au mouvement"
      ],
      'D — Structures solides et stables': [
        "D1 — reconnaître les propriétés de structures solides et stables",
        "D2 — concevoir et construire des structures en appliquant des principes d'ingénierie de base"
      ],
      'E — Sol dans l\'environnement': [
        "E1 — décrire les composantes et les propriétés du sol et son rôle dans l'environnement",
        "E2 — reconnaître des façons dont le sol est affecté par les activités humaines et l'importance de le protéger"
      ]
    },
    '4': {
      'A — Habiletés liées aux STIM et connexions': [
        "A1 — utiliser le processus d'investigation pour concevoir et réaliser des expériences",
        "A2 — évaluer les applications pratiques des sciences et de la technologie dans la société"
      ],
      'B — Habitats et communautés': [
        "B1 — analyser les caractéristiques d'habitats et les relations entre les êtres vivants qui y habitent",
        "B2 — expliquer les besoins des êtres vivants et la façon dont les habitats y répondent",
        "B3 — évaluer l'impact des activités humaines sur les habitats et les communautés biologiques"
      ],
      'C — Lumière et son': [
        "C1 — explorer et décrire les propriétés de la lumière et du son",
        "C2 — expliquer des applications pratiques de la lumière et du son dans la vie quotidienne"
      ],
      'D — Machines et mécanismes': [
        "D1 — identifier des types de mouvement et des mécanismes utilisés dans des machines",
        "D2 — concevoir et construire des dispositifs mécaniques pour accomplir une tâche précise"
      ],
      'E — Roches, minéraux et processus géologiques': [
        "E1 — identifier et classer des roches et des minéraux selon leurs propriétés",
        "E2 — décrire des processus géologiques et leur effet sur la surface terrestre"
      ]
    },
    '5': {
      'A — Habiletés liées aux STIM et connexions': [
        "A1 — utiliser le processus d'investigation pour concevoir des expériences scientifiques rigoureuses",
        "A2 — analyser des enjeux liés aux sciences, à la technologie et à leur impact sur la société et l'environnement"
      ],
      'B — Santé humaine et systèmes du corps': [
        "B1 — décrire les systèmes du corps humain et leurs fonctions",
        "B2 — expliquer l'interaction entre les différents systèmes du corps humain",
        "B3 — analyser des facteurs qui influencent la santé et le bien-être des personnes"
      ],
      'C — Propriétés et changements de la matière': [
        "C1 — distinguer les propriétés physiques et les propriétés chimiques de la matière",
        "C2 — analyser des changements physiques et chimiques de la matière dans des contextes variés"
      ],
      'D — Forces agissant sur les structures': [
        "D1 — analyser des forces internes et externes agissant sur des structures",
        "D2 — concevoir et construire des structures répondant à des critères et à des contraintes données"
      ],
      'E — Conservation de l\'énergie et des ressources': [
        "E1 — analyser des sources d'énergie renouvelables et non renouvelables",
        "E2 — proposer des stratégies de conservation de l'énergie et des ressources naturelles"
      ]
    },
    '6': {
      'A — Habiletés liées aux STIM et connexions': [
        "A1 — utiliser le processus d'investigation pour réaliser des enquêtes scientifiques complexes",
        "A2 — évaluer de façon critique les incidences des sciences et de la technologie sur la société et l'environnement"
      ],
      'B — Biodiversité': [
        "B1 — analyser la diversité des espèces et son importance pour la stabilité des écosystèmes",
        "B2 — évaluer l'impact des activités humaines sur la biodiversité et proposer des solutions",
        "B3 — décrire des stratégies utilisées pour protéger la biodiversité aux niveaux local, national et mondial"
      ],
      'C — Phénomènes d\'énergie et dispositifs électriques': [
        "C1 — analyser des circuits électriques simples et les phénomènes électriques associés",
        "C2 — concevoir et construire des circuits électriques pour accomplir une tâche"
      ],
      'D — Le vol': [
        "D1 — expliquer les principes scientifiques qui permettent le vol",
        "D2 — concevoir et construire un dispositif capable de voler en appliquant des principes aérodynamiques"
      ],
      'E — L\'espace': [
        "E1 — décrire les caractéristiques du système solaire et de l'univers",
        "E2 — expliquer des phénomènes spatiaux et les technologies développées pour l'exploration spatiale"
      ]
    }
  },

  // ──────────────────────────────────────────────────────────────
  // ARTS — Arts visuels, Musique, Danse, Art dramatique
  // Structure: 3 attentes par domaine (création/production, analyse/appréciation, connaissance culturelle)
  // ──────────────────────────────────────────────────────────────
  'Arts (arts visuels)': {
    '1': {
      'B1 — Production et expression': [
        "B1 — produire diverses œuvres en deux ou trois dimensions en appliquant les fondements à l'étude et en suivant le processus de création artistique"
      ],
      'B2 — Analyse et appréciation': [
        "B2 — communiquer son analyse et son appréciation de diverses œuvres d'art en utilisant les termes justes et le processus d'analyse critique"
      ],
      'B3 — Connaissance et compréhension': [
        "B3 — reconnaître la dimension sociale et culturelle des arts visuels ainsi que les fondements à l'étude dans diverses œuvres d'art d'hier et d'aujourd'hui, provenant d'ici et d'ailleurs"
      ]
    },
    '2': {
      'B1 — Production et expression': [
        "B1 — produire diverses œuvres en deux ou trois dimensions en appliquant les fondements à l'étude et en suivant le processus de création artistique"
      ],
      'B2 — Analyse et appréciation': [
        "B2 — communiquer son analyse et son appréciation de diverses œuvres d'art en utilisant les termes justes et le processus d'analyse critique"
      ],
      'B3 — Connaissance et compréhension': [
        "B3 — reconnaître la dimension sociale et culturelle des arts visuels ainsi que les fondements à l'étude dans diverses œuvres d'art d'hier et d'aujourd'hui, provenant d'ici et d'ailleurs"
      ]
    },
    '3': {
      'B1 — Production et expression': [
        "B1 — produire diverses œuvres en deux ou trois dimensions en appliquant les fondements à l'étude et en suivant le processus de création artistique"
      ],
      'B2 — Analyse et appréciation': [
        "B2 — communiquer son analyse et son appréciation de diverses œuvres d'art en utilisant les termes justes et le processus d'analyse critique"
      ],
      'B3 — Connaissance et compréhension': [
        "B3 — reconnaître la dimension sociale et culturelle des arts visuels ainsi que les fondements à l'étude dans diverses œuvres d'art d'hier et d'aujourd'hui, provenant d'ici et d'ailleurs"
      ]
    },
    '4': {
      'B1 — Production et expression': [
        "B1 — produire diverses œuvres en deux ou trois dimensions en appliquant les fondements à l'étude et en suivant le processus de création artistique"
      ],
      'B2 — Analyse et appréciation': [
        "B2 — communiquer son analyse et son appréciation de diverses œuvres d'art en utilisant les termes justes et le processus d'analyse critique"
      ],
      'B3 — Connaissance et compréhension': [
        "B3 — reconnaître la dimension sociale et culturelle des arts visuels ainsi que les fondements à l'étude dans diverses œuvres d'art d'hier et d'aujourd'hui, provenant d'ici et d'ailleurs"
      ]
    },
    '5': {
      'B1 — Production et expression': [
        "B1 — produire diverses œuvres en deux ou trois dimensions en appliquant les fondements à l'étude et en suivant le processus de création artistique"
      ],
      'B2 — Analyse et appréciation': [
        "B2 — communiquer son analyse et son appréciation de diverses œuvres d'art en utilisant les termes justes et le processus d'analyse critique"
      ],
      'B3 — Connaissance et compréhension': [
        "B3 — reconnaître la dimension sociale et culturelle des arts visuels ainsi que les fondements à l'étude dans diverses œuvres d'art d'hier et d'aujourd'hui, provenant d'ici et d'ailleurs"
      ]
    },
    '6': {
      'B1 — Production et expression': [
        "B1 — produire diverses œuvres en deux ou trois dimensions en appliquant les fondements à l'étude et en suivant le processus de création artistique"
      ],
      'B2 — Analyse et appréciation': [
        "B2 — communiquer son analyse et son appréciation de diverses œuvres d'art en utilisant les termes justes et le processus d'analyse critique"
      ],
      'B3 — Connaissance et compréhension': [
        "B3 — reconnaître la dimension sociale et culturelle des arts visuels ainsi que les fondements à l'étude dans diverses œuvres d'art d'hier et d'aujourd'hui, provenant d'ici et d'ailleurs"
      ]
    }
  },

  'Arts (musique)': {
    '1': {
      'D1 — Production et expression': [
        "D1 — produire et interpréter diverses œuvres musicales en appliquant les fondements à l'étude et en suivant le processus de création artistique"
      ],
      'D2 — Analyse et appréciation': [
        "D2 — communiquer son analyse et son appréciation de diverses œuvres musicales en utilisant les termes justes et le processus d'analyse critique"
      ],
      'D3 — Connaissance et compréhension': [
        "D3 — reconnaître la dimension sociale et culturelle de la musique ainsi que les fondements à l'étude dans diverses œuvres musicales d'hier et d'aujourd'hui, provenant d'ici et d'ailleurs"
      ]
    },
    '2': {
      'D1 — Production et expression': [
        "D1 — produire et interpréter diverses œuvres musicales en appliquant les fondements à l'étude et en suivant le processus de création artistique"
      ],
      'D2 — Analyse et appréciation': [
        "D2 — communiquer son analyse et son appréciation de diverses œuvres musicales en utilisant les termes justes et le processus d'analyse critique"
      ],
      'D3 — Connaissance et compréhension': [
        "D3 — reconnaître la dimension sociale et culturelle de la musique ainsi que les fondements à l'étude dans diverses œuvres musicales d'hier et d'aujourd'hui, provenant d'ici et d'ailleurs"
      ]
    },
    '3': {
      'D1 — Production et expression': [
        "D1 — produire et interpréter diverses œuvres musicales en appliquant les fondements à l'étude et en suivant le processus de création artistique"
      ],
      'D2 — Analyse et appréciation': [
        "D2 — communiquer son analyse et son appréciation de diverses œuvres musicales en utilisant les termes justes et le processus d'analyse critique"
      ],
      'D3 — Connaissance et compréhension': [
        "D3 — reconnaître la dimension sociale et culturelle de la musique ainsi que les fondements à l'étude dans diverses œuvres musicales d'hier et d'aujourd'hui, provenant d'ici et d'ailleurs"
      ]
    },
    '4': {
      'D1 — Production et expression': [
        "D1 — produire et interpréter diverses œuvres musicales en appliquant les fondements à l'étude et en suivant le processus de création artistique"
      ],
      'D2 — Analyse et appréciation': [
        "D2 — communiquer son analyse et son appréciation de diverses œuvres musicales en utilisant les termes justes et le processus d'analyse critique"
      ],
      'D3 — Connaissance et compréhension': [
        "D3 — reconnaître la dimension sociale et culturelle de la musique ainsi que les fondements à l'étude dans diverses œuvres musicales d'hier et d'aujourd'hui, provenant d'ici et d'ailleurs"
      ]
    },
    '5': {
      'D1 — Production et expression': [
        "D1 — produire et interpréter diverses œuvres musicales en appliquant les fondements à l'étude et en suivant le processus de création artistique"
      ],
      'D2 — Analyse et appréciation': [
        "D2 — communiquer son analyse et son appréciation de diverses œuvres musicales en utilisant les termes justes et le processus d'analyse critique"
      ],
      'D3 — Connaissance et compréhension': [
        "D3 — reconnaître la dimension sociale et culturelle de la musique ainsi que les fondements à l'étude dans diverses œuvres musicales d'hier et d'aujourd'hui, provenant d'ici et d'ailleurs"
      ]
    },
    '6': {
      'D1 — Production et expression': [
        "D1 — produire et interpréter diverses œuvres musicales en appliquant les fondements à l'étude et en suivant le processus de création artistique"
      ],
      'D2 — Analyse et appréciation': [
        "D2 — communiquer son analyse et son appréciation de diverses œuvres musicales en utilisant les termes justes et le processus d'analyse critique"
      ],
      'D3 — Connaissance et compréhension': [
        "D3 — reconnaître la dimension sociale et culturelle de la musique ainsi que les fondements à l'étude dans diverses œuvres musicales d'hier et d'aujourd'hui, provenant d'ici et d'ailleurs"
      ]
    }
  },

  'Arts (danse)': {
    '1': {
      'C1 — Production et expression': [
        "C1 — composer et interpréter des danses en appliquant les fondements à l'étude et en suivant le processus de création artistique"
      ],
      'C2 — Analyse et appréciation': [
        "C2 — communiquer son analyse et son appréciation de diverses danses en utilisant les termes justes et le processus d'analyse critique"
      ],
      'C3 — Connaissance et compréhension': [
        "C3 — reconnaître la dimension sociale et culturelle de la danse ainsi que les fondements à l'étude dans diverses danses d'hier et d'aujourd'hui, provenant d'ici et d'ailleurs"
      ]
    },
    '2': {
      'C1 — Production et expression': [
        "C1 — composer et interpréter des danses en appliquant les fondements à l'étude et en suivant le processus de création artistique"
      ],
      'C2 — Analyse et appréciation': [
        "C2 — communiquer son analyse et son appréciation de diverses danses en utilisant les termes justes et le processus d'analyse critique"
      ],
      'C3 — Connaissance et compréhension': [
        "C3 — reconnaître la dimension sociale et culturelle de la danse ainsi que les fondements à l'étude dans diverses danses d'hier et d'aujourd'hui, provenant d'ici et d'ailleurs"
      ]
    },
    '3': {
      'C1 — Production et expression': [
        "C1 — composer et interpréter des danses en appliquant les fondements à l'étude et en suivant le processus de création artistique"
      ],
      'C2 — Analyse et appréciation': [
        "C2 — communiquer son analyse et son appréciation de diverses danses en utilisant les termes justes et le processus d'analyse critique"
      ],
      'C3 — Connaissance et compréhension': [
        "C3 — reconnaître la dimension sociale et culturelle de la danse ainsi que les fondements à l'étude dans diverses danses d'hier et d'aujourd'hui, provenant d'ici et d'ailleurs"
      ]
    },
    '4': {
      'C1 — Production et expression': [
        "C1 — composer et interpréter des danses en appliquant les fondements à l'étude et en suivant le processus de création artistique"
      ],
      'C2 — Analyse et appréciation': [
        "C2 — communiquer son analyse et son appréciation de diverses danses en utilisant les termes justes et le processus d'analyse critique"
      ],
      'C3 — Connaissance et compréhension': [
        "C3 — reconnaître la dimension sociale et culturelle de la danse ainsi que les fondements à l'étude dans diverses danses d'hier et d'aujourd'hui, provenant d'ici et d'ailleurs"
      ]
    },
    '5': {
      'C1 — Production et expression': [
        "C1 — composer et interpréter des danses en appliquant les fondements à l'étude et en suivant le processus de création artistique"
      ],
      'C2 — Analyse et appréciation': [
        "C2 — communiquer son analyse et son appréciation de diverses danses en utilisant les termes justes et le processus d'analyse critique"
      ],
      'C3 — Connaissance et compréhension': [
        "C3 — reconnaître la dimension sociale et culturelle de la danse ainsi que les fondements à l'étude dans diverses danses d'hier et d'aujourd'hui, provenant d'ici et d'ailleurs"
      ]
    },
    '6': {
      'C1 — Production et expression': [
        "C1 — composer et interpréter des danses en appliquant les fondements à l'étude et en suivant le processus de création artistique"
      ],
      'C2 — Analyse et appréciation': [
        "C2 — communiquer son analyse et son appréciation de diverses danses en utilisant les termes justes et le processus d'analyse critique"
      ],
      'C3 — Connaissance et compréhension': [
        "C3 — reconnaître la dimension sociale et culturelle de la danse ainsi que les fondements à l'étude dans diverses danses d'hier et d'aujourd'hui, provenant d'ici et d'ailleurs"
      ]
    }
  },

  'Arts (art dramatique)': {
    '1': {
      'A1 — Production et expression': [
        "A1 — réaliser diverses productions dramatiques en appliquant les fondements à l'étude et en suivant le processus de création artistique"
      ],
      'A2 — Analyse et appréciation': [
        "A2 — communiquer son analyse et son appréciation de diverses productions dramatiques en utilisant les termes justes et le processus d'analyse critique"
      ],
      'A3 — Connaissance et compréhension': [
        "A3 — reconnaître la dimension sociale et culturelle de l'art dramatique ainsi que les fondements à l'étude dans diverses productions dramatiques d'hier et d'aujourd'hui, provenant d'ici et d'ailleurs"
      ]
    },
    '2': {
      'A1 — Production et expression': [
        "A1 — réaliser diverses productions dramatiques en appliquant les fondements à l'étude et en suivant le processus de création artistique"
      ],
      'A2 — Analyse et appréciation': [
        "A2 — communiquer son analyse et son appréciation de diverses productions dramatiques en utilisant les termes justes et le processus d'analyse critique"
      ],
      'A3 — Connaissance et compréhension': [
        "A3 — reconnaître la dimension sociale et culturelle de l'art dramatique ainsi que les fondements à l'étude dans diverses productions dramatiques d'hier et d'aujourd'hui, provenant d'ici et d'ailleurs"
      ]
    },
    '3': {
      'A1 — Production et expression': [
        "A1 — réaliser diverses productions dramatiques en appliquant les fondements à l'étude et en suivant le processus de création artistique"
      ],
      'A2 — Analyse et appréciation': [
        "A2 — communiquer son analyse et son appréciation de diverses productions dramatiques en utilisant les termes justes et le processus d'analyse critique"
      ],
      'A3 — Connaissance et compréhension': [
        "A3 — reconnaître la dimension sociale et culturelle de l'art dramatique ainsi que les fondements à l'étude dans diverses productions dramatiques d'hier et d'aujourd'hui, provenant d'ici et d'ailleurs"
      ]
    },
    '4': {
      'A1 — Production et expression': [
        "A1 — réaliser diverses productions dramatiques en appliquant les fondements à l'étude et en suivant le processus de création artistique"
      ],
      'A2 — Analyse et appréciation': [
        "A2 — communiquer son analyse et son appréciation de diverses productions dramatiques en utilisant les termes justes et le processus d'analyse critique"
      ],
      'A3 — Connaissance et compréhension': [
        "A3 — reconnaître la dimension sociale et culturelle de l'art dramatique ainsi que les fondements à l'étude dans diverses productions dramatiques d'hier et d'aujourd'hui, provenant d'ici et d'ailleurs"
      ]
    },
    '5': {
      'A1 — Production et expression': [
        "A1 — réaliser diverses productions dramatiques en appliquant les fondements à l'étude et en suivant le processus de création artistique"
      ],
      'A2 — Analyse et appréciation': [
        "A2 — communiquer son analyse et son appréciation de diverses productions dramatiques en utilisant les termes justes et le processus d'analyse critique"
      ],
      'A3 — Connaissance et compréhension': [
        "A3 — reconnaître la dimension sociale et culturelle de l'art dramatique ainsi que les fondements à l'étude dans diverses productions dramatiques d'hier et d'aujourd'hui, provenant d'ici et d'ailleurs"
      ]
    },
    '6': {
      'A1 — Production et expression': [
        "A1 — réaliser diverses productions dramatiques en appliquant les fondements à l'étude et en suivant le processus de création artistique"
      ],
      'A2 — Analyse et appréciation': [
        "A2 — communiquer son analyse et son appréciation de diverses productions dramatiques en utilisant les termes justes et le processus d'analyse critique"
      ],
      'A3 — Connaissance et compréhension': [
        "A3 — reconnaître la dimension sociale et culturelle de l'art dramatique ainsi que les fondements à l'étude dans diverses productions dramatiques d'hier et d'aujourd'hui, provenant d'ici et d'ailleurs"
      ]
    }
  },

  // ──────────────────────────────────────────────────────────────
  // ÉDUCATION PHYSIQUE ET SANTÉ — grades 1-6
  // Domaine A : Apprentissage socioémotionnel
  // Domaine B : Vie active
  // Domaine C : Compétence motrice
  // Domaine D : Vie saine
  // ──────────────────────────────────────────────────────────────
  'Éducation physique et santé': {
    '1': {
      'A — Apprentissage socioémotionnel': [
        "A1 — mettre en pratique, au mieux de ses capacités, diverses habiletés socioémotionnelles dans l'acquisition de connaissances et d'habiletés liées aux attentes et aux contenus d'apprentissage en ÉPS"
      ],
      'B — Vie active': [
        "B1 — participer activement et régulièrement à une large gamme d'activités physiques, en cherchant des façons d'inclure ces activités dans son quotidien",
        "B2 — utiliser des concepts de la condition physique et des pratiques qui font valoir l'importance de l'activité physique pour une vie active et saine",
        "B3 — faire preuve d'un comportement responsable afin d'assurer sa sécurité et la sécurité des autres lors d'activités physiques"
      ],
      'C — Compétence motrice': [
        "C1 — mettre en pratique des habiletés motrices ainsi que des concepts du mouvement pour répondre aux exigences de base d'une variété d'activités physiques",
        "C2 — mettre en pratique des habiletés tactiques dans le but d'améliorer sa participation et sa performance dans une variété d'activités physiques"
      ],
      'D — Vie saine': [
        "D1 — expliquer les facteurs qui favorisent le développement sain de la personne",
        "D2 — utiliser ses connaissances en matière de santé et ses habiletés socioémotionnelles afin de prendre des décisions éclairées",
        "D3 — établir des rapprochements entre la santé et le bien-être pour expliquer l'incidence des choix faits sur sa santé"
      ]
    },
    '2': {
      'A — Apprentissage socioémotionnel': [
        "A1 — mettre en pratique, au mieux de ses capacités, diverses habiletés socioémotionnelles dans l'acquisition de connaissances et d'habiletés liées aux attentes et aux contenus d'apprentissage en ÉPS"
      ],
      'B — Vie active': [
        "B1 — participer activement et régulièrement à une large gamme d'activités physiques, en cherchant des façons d'inclure ces activités dans son quotidien",
        "B2 — utiliser des concepts de la condition physique et des pratiques qui font valoir l'importance de l'activité physique pour une vie active et saine",
        "B3 — faire preuve d'un comportement responsable afin d'assurer sa sécurité et la sécurité des autres lors d'activités physiques"
      ],
      'C — Compétence motrice': [
        "C1 — mettre en pratique des habiletés motrices ainsi que des concepts du mouvement pour répondre aux exigences de base d'une variété d'activités physiques",
        "C2 — mettre en pratique des habiletés tactiques dans le but d'améliorer sa participation et sa performance dans une variété d'activités physiques"
      ],
      'D — Vie saine': [
        "D1 — expliquer les facteurs qui favorisent le développement sain de la personne",
        "D2 — utiliser ses connaissances en matière de santé et ses habiletés socioémotionnelles afin de prendre des décisions éclairées",
        "D3 — établir des rapprochements entre la santé et le bien-être pour expliquer l'incidence des choix faits, des comportements adoptés et des facteurs environnementaux sur sa santé"
      ]
    },
    '3': {
      'A — Apprentissage socioémotionnel': [
        "A1 — mettre en pratique, au mieux de ses capacités, diverses habiletés socioémotionnelles dans l'acquisition de connaissances et d'habiletés liées aux attentes et aux contenus d'apprentissage en ÉPS"
      ],
      'B — Vie active': [
        "B1 — participer activement et régulièrement à une large gamme d'activités physiques, en cherchant des façons d'inclure ces activités dans son quotidien",
        "B2 — utiliser des concepts de la condition physique et des pratiques qui font valoir l'importance de l'activité physique pour une vie active et saine",
        "B3 — faire preuve d'un comportement responsable afin d'assurer sa sécurité et la sécurité des autres lors d'activités physiques"
      ],
      'C — Compétence motrice': [
        "C1 — mettre en pratique des habiletés motrices ainsi que des concepts du mouvement pour répondre aux exigences de base d'une variété d'activités physiques",
        "C2 — mettre en pratique des habiletés tactiques dans le but d'améliorer sa participation et sa performance dans une variété d'activités physiques"
      ],
      'D — Vie saine': [
        "D1 — expliquer les facteurs qui favorisent le développement sain de la personne",
        "D2 — utiliser ses connaissances en matière de santé et ses habiletés socioémotionnelles afin de prendre des décisions éclairées",
        "D3 — établir des rapprochements entre la santé et le bien-être pour expliquer l'incidence des choix faits, des comportements adoptés et des facteurs environnementaux sur sa santé"
      ]
    },
    '4': {
      'A — Apprentissage socioémotionnel': [
        "A1 — mettre en pratique, au mieux de ses capacités, diverses habiletés socioémotionnelles dans l'acquisition de connaissances et d'habiletés liées aux attentes et aux contenus d'apprentissage en ÉPS"
      ],
      'B — Vie active': [
        "B1 — participer activement et régulièrement à une large gamme d'activités physiques en faisant des choix qui favorisent un mode de vie actif et sain",
        "B2 — utiliser des concepts de la condition physique et des pratiques qui font valoir l'importance de l'activité physique",
        "B3 — faire preuve d'un comportement responsable afin d'assurer sa sécurité et la sécurité des autres lors d'activités physiques"
      ],
      'C — Compétence motrice': [
        "C1 — mettre en pratique des habiletés motrices ainsi que des concepts du mouvement pour participer efficacement à une variété d'activités physiques",
        "C2 — appliquer des principes tactiques pour améliorer sa performance dans diverses activités physiques"
      ],
      'D — Vie saine': [
        "D1 — analyser des facteurs qui influencent la santé et le bien-être des personnes",
        "D2 — utiliser ses connaissances en matière de santé et ses habiletés socioémotionnelles pour faire des choix éclairés",
        "D3 — établir des liens entre ses choix de vie et leur incidence sur sa santé globale et son bien-être"
      ]
    },
    '5': {
      'A — Apprentissage socioémotionnel': [
        "A1 — mettre en pratique, au mieux de ses capacités, diverses habiletés socioémotionnelles dans l'acquisition de connaissances et d'habiletés liées aux attentes et aux contenus d'apprentissage en ÉPS"
      ],
      'B — Vie active': [
        "B1 — participer activement et régulièrement à une large gamme d'activités physiques en faisant des choix qui favorisent un mode de vie actif et sain",
        "B2 — utiliser des concepts de la condition physique et des pratiques qui font valoir l'importance de l'activité physique",
        "B3 — faire preuve d'un comportement responsable afin d'assurer sa sécurité et la sécurité des autres lors d'activités physiques"
      ],
      'C — Compétence motrice': [
        "C1 — mettre en pratique des habiletés motrices ainsi que des concepts du mouvement pour participer efficacement à une variété d'activités physiques",
        "C2 — appliquer des stratégies tactiques pour améliorer sa performance dans diverses activités physiques"
      ],
      'D — Vie saine': [
        "D1 — analyser des facteurs qui influencent la santé et le bien-être des personnes dans un contexte plus large",
        "D2 — utiliser ses connaissances en matière de santé et ses habiletés socioémotionnelles pour faire des choix éclairés",
        "D3 — analyser des liens entre les choix de vie, les comportements et les facteurs environnementaux sur la santé globale"
      ]
    },
    '6': {
      'A — Apprentissage socioémotionnel': [
        "A1 — mettre en pratique, au mieux de ses capacités, diverses habiletés socioémotionnelles dans l'acquisition de connaissances et d'habiletés liées aux attentes et aux contenus d'apprentissage en ÉPS"
      ],
      'B — Vie active': [
        "B1 — participer activement et régulièrement à une large gamme d'activités physiques en faisant des choix qui favorisent un mode de vie actif et sain tout au long de la vie",
        "B2 — utiliser des concepts de la condition physique et des pratiques qui font valoir l'importance de l'activité physique",
        "B3 — faire preuve d'un comportement responsable afin d'assurer sa sécurité et la sécurité des autres lors d'activités physiques"
      ],
      'C — Compétence motrice': [
        "C1 — mettre en pratique des habiletés motrices ainsi que des concepts du mouvement pour participer efficacement à une variété d'activités physiques",
        "C2 — appliquer des stratégies offensives et défensives pour améliorer sa performance dans diverses activités physiques"
      ],
      'D — Vie saine': [
        "D1 — analyser des facteurs qui influencent la santé et le bien-être des personnes de façon critique",
        "D2 — utiliser ses connaissances en matière de santé et ses habiletés socioémotionnelles pour faire des choix éclairés et responsables",
        "D3 — évaluer l'incidence des choix de vie, des comportements et des facteurs environnementaux sur la santé globale et le bien-être"
      ]
    }
  },

  // ──────────────────────────────────────────────────────────────
  // ENSEIGNEMENT RELIGIEUX — grades 1-6
  // Curriculum catholique de l'Ontario
  // 4 rubriques : 1-Révélation, 2-Foi vécue, 3-Vie spirituelle et sacramentelle, 4-Agir et engagement
  // ──────────────────────────────────────────────────────────────
  'Anglais': {
  '4': {
    'Communication orale': [
      'Utiliser des strategies d ecoute active pour comprendre des communications orales simples',
      'Contribuer des idées et opinions aux discussions en classe avec courtoisie et respect',
      'Utiliser un vocabulaire de base et des conventions de langage parlé appropriés',
      'Préparer et présenter de courtes présentations orales simples'
    ],
    'Lecture et interprétation': [
      'Utiliser des stratégies de compréhension simples pour comprendre des textes variés',
      'Identifier les idées importantes dans des textes littéraires et informatifs',
      'Identifier la forme, la structure et les éléments de différents types de textes',
      'Démontrer des habiletés de littératie critique de base'
    ],
    'Écriture et représentation': [
      'Générer et organiser des idées pour écrire selon un but et un public cibles',
      'Écrire des textes simples dans diverses formes (poèmes, paragraphes narratifs, textes descriptifs)',
      'Réviser et corriger ses textes en appliquant les conventions linguistiques de base',
      'Produire un travail final propre en utilisant des techniques de mise en page simples'
    ]
  },
  '5': {
    'Communication orale': [
      'Utiliser des strategies d ecoute active et des habiletes de pensee variees pour comprendre des communications orales',
      'Contribuer des idées et opinions aux discussions en défendant ses opinions avec des preuves',
      'Utiliser un vocabulaire nouveau et familier et les conventions du langage parlé correctement',
      'Préparer et présenter des présentations orales variées de façon indépendante ou collaborative'
    ],
    'Lecture et interprétation': [
      'Utiliser des stratégies de compréhension pour comprendre des textes littéraires et informatifs variés',
      'Identifier et expliquer les causes des événements et conflits dans des textes narratifs',
      'Identifier la forme, la structure et les éléments de textes variés (romans, poèmes, scripts, textes explicatifs)',
      'Démontrer des habiletés de littératie critique en identifiant les messages et perspectives dans les textes'
    ],
    'Écriture et représentation': [
      'Générer et organiser des idées pour écrire selon un but et un public cibles',
      'Écrire des textes dans diverses formes (poèmes avec rime, scripts, paragraphes explicatifs, textes procéduraux)',
      'Réviser et corriger ses textes en appliquant les conventions linguistiques appropriées',
      'Produire un travail final en utilisant diverses techniques de mise en page et de présentation'
    ]
  },
  '6': {
    'Communication orale': [
      'Utiliser des strategies d ecoute active pour comprendre des communications orales variees et identifier les points de vue',
      'Contribuer des idées aux discussions en comparant ses propres points de vue à ceux des autres',
      'Incorporer un vocabulaire nouveau et spécialisé dans les discussions et présentations',
      'Préparer et présenter des présentations orales variées en appliquant les techniques appropriées'
    ],
    'Lecture et interprétation': [
      'Identifier et résumer les idées importantes dans des textes littéraires et informatifs en fournissant des interprétations',
      'Distinguer faits et opinions dans des textes informatifs provenant de divers médias',
      'Identifier les éléments de différentes formes de textes (roman fantastique, poèmes, paragraphes persuasifs, biographies)',
      'Démontrer des habiletés de littératie critique en analysant les messages, perspectives et techniques dans les textes'
    ],
    'Écriture et représentation': [
      'Générer et organiser des idées pour écrire selon un but et un public cibles',
      'Ecrire des textes varies (fiction, narration personnelle, poemes, paragraphes persuasifs, resumes d evenements, biographies)',
      'Réviser et corriger ses textes en appliquant les conventions linguistiques appropriées à la 6e année',
      'Produire un travail final soigné en utilisant diverses techniques et ressources de mise en page'
    ]
  },
  },

  'Enseignement religieux': {
    '1': {
      'Thème : Un Dieu présent': [
        "1. reconnaître des signes de la présence amoureuse de Dieu, Père, Fils et Esprit Saint, dans des récits bibliques, dans la création, chez les personnes et au cœur du monde",
        "2. établir des liens entre des récits bibliques et la vie quotidienne",
        "3. expliquer des convictions de la foi des catholiques au sujet de la présence de Dieu",
        "4. reconnaître les principales fêtes chrétiennes et leurs symboles",
        "5. démontrer des habiletés nécessaires au développement de la vie spirituelle et à la prière",
        "6. démontrer que le langage symbolique des sacrements permet d’entrer en relation avec Dieu",
        "7. analyser l’agir et l’engagement des chrétiennes et des chrétiens",
        "8. démontrer les habiletés nécessaires à la démarche de discernement moral"
      ]
    },
    '2': {
      'Thème : Un Dieu en relation avec les humains': [
        "1. reconnaître des traits de la relation de Dieu avec les humains et des humains entre eux dans des récits bibliques et au cœur du monde",
        "2. établir des liens entre des récits bibliques et la vie quotidienne",
        "3. expliquer des convictions de la foi des catholiques au sujet de la relation de Dieu avec les humains et des humains entre eux",
        "4. reconnaître les principales fêtes chrétiennes et leurs symboles",
        "5. démontrer des habiletés nécessaires au développement de la vie spirituelle et à la prière",
        "6. démontrer que le langage symbolique des sacrements permet d’entrer en relation avec Dieu",
        "7. analyser l’agir et l’engagement des chrétiennes et des chrétiens",
        "8. démontrer les habiletés nécessaires à la démarche de discernement moral"
      ]
    },
    '3': {
      'Thème : Le Royaume de Dieu': [
        "1. reconnaître les caractéristiques du Royaume de Dieu dans des récits bibliques et au cœur du monde",
        "2. établir des liens entre des récits bibliques et la vie quotidienne",
        "3. expliquer des convictions de la foi des catholiques au sujet de l’avènement du Royaume de Dieu",
        "4. reconnaître les principales fêtes chrétiennes et leurs symboles",
        "5. démontrer des habiletés nécessaires au développement de la vie spirituelle et à la prière",
        "6. démontrer que le langage symbolique des sacrements permet d’entrer en relation avec Dieu",
        "7. analyser l’agir et l’engagement des chrétiennes et des chrétiens",
        "8. démontrer les habiletés nécessaires à la démarche de discernement moral"
      ]
    },
    '4': {
      'Thème : Jésus, Bonne Nouvelle': [
        "1. reconnaître, à l’aide de récits bibliques et au cœur du monde, que Jésus est la Bonne Nouvelle envoyée par le Père",
        "2. établir des liens entre des récits bibliques et la vie quotidienne",
        "3. démontrer sa compréhension de divers aspects de la Bible",
        "4. expliquer des convictions de la foi des catholiques au sujet de Jésus, Bonne Nouvelle",
        "5. reconnaître les principales fêtes chrétiennes et leurs symboles",
        "6. démontrer des habiletés nécessaires au développement de la vie spirituelle et à la prière",
        "7. démontrer que les sacrements sont pour la communauté chrétienne des signes de l’amour de Dieu",
        "8. analyser l’agir et l’engagement des chrétiennes et des chrétiens",
        "9. démontrer les habiletés nécessaires à la démarche de discernement moral"
      ]
    },
    '5': {
      "Thème : L'Esprit Saint, Dieu à l'œuvre dans le monde": [
        "1. reconnaître l’action de l’Esprit Saint dans des récits bibliques, dans l’histoire de l’Église et au cœur du monde",
        "2. établir des liens entre des récits bibliques et la vie quotidienne",
        "3. démontrer sa compréhension de divers aspects de la Bible",
        "4. expliquer des convictions de la foi des catholiques au sujet de l’Esprit Saint",
        "5. reconnaître les principales fêtes chrétiennes et leurs symboles",
        "6. démontrer des habiletés nécessaires au développement de la vie spirituelle et à la prière",
        "7. démontrer que les sacrements sont pour la communauté chrétienne des signes de l’amour de Dieu",
        "8. analyser l’agir et l’engagement des chrétiennes et des chrétiens",
        "9. démontrer les habiletés nécessaires à la démarche de discernement moral"
      ]
    },
    '6': {
      'Thème : Jésus, chemin de Vie': [
        "1. reconnaître, dans des textes bibliques et au cœur du monde, que Jésus est chemin de Vie",
        "2. établir des liens entre des récits bibliques et la vie quotidienne",
        "3. démontrer sa compréhension de divers aspects de la Bible",
        "4. expliquer des convictions de la foi des catholiques au sujet de Jésus, chemin de Vie",
        "5. reconnaître les temps forts du calendrier liturgique, les principales fêtes chrétiennes et leurs symboles",
        "6. démontrer des habiletés nécessaires au développement de la vie spirituelle et à la prière",
        "7. démontrer que les sacrements sont pour la communauté chrétienne des signes de l’amour de Dieu",
        "8. analyser l’agir et l’engagement des chrétiennes et des chrétiens",
        "9. démontrer les habiletés nécessaires à la démarche de discernement moral"
      ]
    }
  }
}; // end ATTENTES

// ════════════════════════════════════════════════════════════════
// FRANCAIS_NOTIONS — Notions clés pour le sélecteur Français
// Classe entière uniquement — notions atteignant A d'ici la 6e
// ════════════════════════════════════════════════════════════════
const FRANCAIS_NOTIONS = {
  'Fondements de la lecture et de l\'ecriture': [
    'Conscience phonémique (segmentation et fusion de phonèmes)',
    'Correspondances graphèmes-phonèmes simples',
    'Correspondances graphèmes-phonèmes complexes (au/eau, ou, ch, an, on, in, oi...)',
    'Correspondances graphèmes-phonèmes contextuelles (c, g, s entre voyelles...)',
    'Régularités orthographiques',
    'Lecture de mots avec précision et automaticité (fluidité)',
    'Lecture de phrases et de textes avec rythme et intonation',
    'Habiletés morphologiques (préfixes, suffixes, bases de mots)',
    'Vocabulaire académique (mots de niveau 2)'
  ],
  'Domaine A — Communication orale': [
    'Écoute active et prise de parole',
    'Participation aux discussions et aux échanges',
    'Présentation orale (exposé, récit)',
    'Justification d\'un point de vue à l\'oral',
    'Registre de langue à l\'oral (familier, courant, soutenu)'
  ],
  'Domaine B — Lecture': [
    'Stratégies de lecture (prédiction, inférence, survol)',
    'Compréhension de textes variés (narratif, descriptif, explicatif)',
    'Repérage d\'informations explicites et implicites',
    'Réaction personnelle à un texte lu',
    'Analyse de l\'intention de l\'auteure ou de l\'auteur'
  ],
  'Domaine B3 — La phrase': [
    'La phrase graphique (majuscule et ponctuation forte)',
    'La phrase syntaxique (sujet de P + prédicat de P)',
    'Le complément de la phrase (complément de P)',
    'Types de phrases (déclarative, interrogative, exclamative, impérative)',
    'Formes positive et négative',
    'Phrases complexes : coordination'
  ],
  'Domaine B3 — Groupes syntaxiques et classes de mots': [
    'Le groupe nominal (GN) et ses constructions',
    'Le nom (genre, nombre, propre/commun, simple/composé)',
    'Le déterminant et son accord',
    'L\'adjectif et son accord (féminin et pluriel)',
    'Le groupe du verbe (GV)',
    'Le groupe prépositionnel (GPrép)',
    'Le groupe adverbial (GAdv)',
    'Les pronoms personnels de conjugaison',
    'Les pronoms possessifs',
    'Les pronoms démonstratifs',
    'La conjonction (coordination et subordination)',
    'La préposition et les locutions prépositives'
  ],
  'Domaine B3 — Orthographe grammaticale': [
    'Accord du déterminant avec le nom',
    'Accord de l\'adjectif avec le nom',
    'Accord du verbe avec un sujet simple',
    'Accord du verbe avec un sujet composé',
    'Accord du verbe avec un sujet séparé par un écran',
    'Accord du participe passé avec l\'auxiliaire être'
  ],
  'Domaine B3 — Conjugaison': [
    'Infinitif présent et distinction des formes simples et composées',
    'Conjugaison : présent de l\'indicatif (verbes réguliers — aimer)',
    'Conjugaison : verbes en -cer et en -ger',
    'Conjugaison : verbes irréguliers fréquents (avoir, être, aller, faire, prendre, venir...)',
    'Conjugaison : futur proche',
    'Conjugaison : passé composé',
    'Conjugaison : imparfait de l\'indicatif',
    'Conjugaison : futur simple',
    'Recours au verbe modèle pour choisir le radical'
  ],
  'Domaine B3 — Lexique': [
    'Familles de mots (morphologie — base, préfixes, suffixes)',
    'Synonymes, antonymes et homonymes',
    'Champs lexicaux et familles sémantiques'
  ],
  'Domaine B3 — Figures de style': [
    'Comparaison',
    'Métaphore',
    'Expressions figurées'
  ],
  'Domaine B3 — Registre de langue': [
    'Les trois registres de langue (familier, courant, soutenu)'
  ],
  'Domaine B3 — Orthographe lexicale': [
    'Graphèmes audibles et lettres muettes',
    'Règles de position (c, ç, g, gu, s entre voyelles...)',
    'Utilisation des référentiels pour orthographier des mots'
  ],
  'Domaine B3 — Ponctuation et majuscules': [
    'Majuscule (début de phrase, noms propres, pays/peuples, titres)',
    'Point, point d\'interrogation, point d\'exclamation',
    'Virgule (énumération, complément en début de phrase)',
    'Deux-points (explication et énumération)',
    'Tiret, guillemets (discours rapporté)',
    'Points de suspension'
  ],
  'Domaine B3 — Grammaire du texte': [
    'Unité du sujet et pertinence de l\'information',
    'Continuité et progression de l\'information',
    'Reprise de l\'information (pronoms, GN générique, périphrase)',
    'Marqueurs de relation (addition, opposition, but, comparaison...)',
    'Organisateurs textuels (temps, lieu, ordre, transition)',
    'Harmonisation des temps verbaux',
    'Discours rapporté direct',
    'Division en paragraphes cohérents',
    'Structure et caractéristiques des genres de textes'
  ],
  'Domaine C — Ecriture': [
    'Processus d\'écriture (planification, rédaction, révision, correction)',
    'Genres de textes : texte narratif',
    'Genres de textes : texte descriptif',
    'Genres de textes : texte explicatif',
    'Genres de textes : texte d\'opinion / argumentatif',
    'Genres de textes : texte poétique',
    'Structure du texte (introduction, développement, conclusion)',
    'Paragraphes cohérents',
    'Utilisation des référentiels et du dictionnaire',
    'Calligraphie et présentation soignée'
  ],
  'Domaine D — Redaction et gestion de l\'ecriture': [
    'Autocorrection et révision de ses textes',
    'Portfolio / dossier d\'écriture'
  ]
};
