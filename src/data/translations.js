const translations = {
  fr: {
    nav: {
      home: 'Accueil',
      services: 'Services',
      contact: 'Contact',
      cta: 'MON ESPACE',
      lang: 'Langue',
    },
    hero: {
      eyebrow: 'Fabricant de cartes électroniques',
      title: 'Votre VIA entre la conception et le PCBA',
      lead:
        'EVIACORE® prend en charge l’approvisionnement de vos PCB et composants, puis assure l’assemblage industriel de vos cartes électroniques avec un suivi technique personnalisé.',
      primaryCta: 'ACCEDER A MON ESPACE',
      secondaryCta: 'Voir nos services',

      panel: {
        title: 'Commande guidée',
        heading: 'Une app claire pour lancer votre carte en quelques étapes.',
        bullets: ['Spécifications techniques', 'Validation rapide', 'Production et contrôle'],
      },
    },
    home: {
      overview: {
        eyebrow: 'Plateforme',
        title: "Uploadez. Validez. Produisez.",
        lead:
          "Déposez votre BOM, ajustez vos quantités et délais, et pilotez votre fabrication depuis un espace centralisé conçu pour fluidifier chaque étape.",
        cards: [
                {
            title: 'Déposez votre BOM',
            text: "L'App EVIACORE vérifie les disponibilités de vos composants chez nos fournisseurs en temps réel.",
          },
          {
            title: 'Prix instantané',
            text: 'Ajustez vos quantités et vos délais pour voir le prix se mettre à jour instantanément.',
          },
    
          {
            title: 'Suivi live',
            text: "Visualisez l’avancement de votre projet à chaque étape.",
          },
        ],
      },
      steps: {
        eyebrow: 'Process',
        title: 'Votre usine connectée en 4 étapes.',
        items: [
          {
            title: 'Déposez vos fichiers',
            text: 'Gerbers, BOM, contraintes et détails critiques en un seul flux.',
          },
          {
            title: 'Paramétrez votre lot',
            text: 'Choisissez quantité, délai, tests et options de qualité.',
          },
          {
            title: 'Validez et commandez',
            text: 'Partagez avec votre équipe, validez et lancez la fabrication.',
          },
          {
            title: 'Suivi temps réel',
            text: 'Production, contrôle et logistique visibles en continu.',
          },
        ],
      },
      support: {
        eyebrow: 'Accompagnement',
        title: 'Un suivi technique concret à chaque étape.',
        lead:
          'Des décisions plus rapides, des risques réduits, et une production qui tient ses promesses.',
        cards: [
          {
            title: 'Analyse avant production',
            text: "Avant production, EVIACORE analyse les dossiers et apporte des retours concrets sur la fabricabilité, le choix des composants et leur aptitude à la brasure. Des conseils sont proposés pour optimiser la carte en vue de la production et de la conformité.",
          },
          {
            title: 'Assemblage CMS automatisé',
            text: "L'assemblage est réalisé sur des lignes CMS entièrement automatisées. Nous utilisons un procédé de dépôt de crème à braser par jetting, ne nécessitant pas l'achat de pochoir ni de frais supplémentaires. Qualité industrielle constante conforme à la norme IPC-A-610.",
          },
          {
            title: 'Délais flexibles',
            text: "Les délais sont courts et maîtrisés, sans contrainte de quantité minimale. Choisissez des fenêtres de production flexibles, adaptez les volumes en fonction de vos besoins, et gardez une visibilité claire sur chaque étape.",
          },
        ],
      },
      platform: {
        eyebrow: 'Plateforme',
        title: 'Uploadez. Validez. Produisez.',
        lead:
          "Avec l'App EVIACORE Déposez votre BOM, ajustez volumes et délais, et pilotez votre fabrication depuis un espace centralisé conçu pour fluidifier chaque étape.",
      },
      faq: {
        eyebrow: 'FAQ',
        title: 'Questions fréquentes avant de lancer votre carte.',
        lead:
          "Des réponses claires sur la préparation des fichiers, les délais et la qualité d'assemblage.",
        items: [
          {
            question: 'Quels fichiers devez-vous fournir ?',
            answer:
              'Gerbers ou ODB++, nomenclature (BOM), fichier de placement et contraintes critiques. Nous vérifions la complétude et vous alertons si des éléments manquent.',
          },
          {
            question: 'Pouvons-nous fournir nos composants ?',
            answer:
              'Oui. Vous pouvez fournir vos composants et/ou vos PCB, partiellement ou en totalité. Nous pouvons aussi prendre en charge l\'approvisionnement (PCB et composants) auprès de nos fournisseurs aux meilleurs prix.',
          },
          {
            question: 'Quel est le délai moyen pour un assemblage ?',
            answer:
              'Nous pouvons faire votre projet dans un délai très court, vous pouvez choisir le délai souhaité au moment du passage de la commande.',
          },
          {
            question: 'Comment assurez-vous la qualité d\'assemblage ?',
            answer:
              'Nous respectons les normes IPC, et effectuons un contrôle sous RX systématiquement pour votre projet.',
          },
          {
            question: 'Pouvez-vous gérer des petites séries ?',
            answer:
              'Oui. Pas de quantité minimale imposée.',
          },
          
        ],
      },
    },
    services: {
      eyebrow: 'Services',
      title: 'Une chaîne complète pour vos cartes électroniques.',
      steps: {
        eyebrow: 'Process court',
        title: 'Pilotez la fabrication en 4 étapes.',
        items: [
          {
            title: 'Préparez votre projet ',
            text: "Depuis l'app EVIACORE®. Configurez et chiffrez votre projet en ligne.",
          },
          {
            title: 'Analyse votre BOM',
            text: "Notre app analyse automatiquement votre BOM et calcule le coût d’assemblage de votre projet.",
          },
          {
            title: 'Lancez votre production et suivez chaque étape.',
            text: 'Passez commande en ligne. Simple, rapide, avec l’appui de notre équipe.',
          },
          {
            title: 'Livraison express J+1 avant 18h.',
            text: "Grâce au tracking sur l'app, suivez votre colis en temps réel.",
          },
        ],
      },
      items: [
        {
          title: 'Design & optimisation',
          text: 'Conception de circuits robustes avec simulation et vérification.',
        },
        {
          title: 'Industrialisation',
          text: 'Passage en production avec dossiers techniques et process qualité.',
        },
        {
          title: 'Assemblage & test',
          text: 'Assemblage, tests fonctionnels et traçabilité par lot.',
        },
      ],
      timelineOnline: {
        title: 'Création du projet en ligne, de la config à la validation',
        items: [
          {
            title: 'Spécification PCB',
            text: 'Définissez votre PCB standard ou complexe : dimensions, 1 à 16 couches, stackup, impédances et options critiques.',
          },
          {
            title: 'Importation de la nomenclature (BOM)',
            text: "Importez votre BOM, l'app EVIACORE s'assure que les composants soient disponibles.",
          },
          {
            title: 'Fichiers de fabrication et placement',
            text: "Chargez Gerbers/ODB++, plan d'implantation et fichier de placement pour un dossier complet et exploitable.",
          },
          {
            title: 'Obtenez le chiffrage de votre projet',
            text: "EVIACORE calcule le coût selon délai et quantité, en s'appuyant sur les meilleures offres fournisseurs.",
          },
          {
            title: 'Validation, devis et commande en ligne',
            text: 'Validez et payez en ligne, par carte ou virement bancaire.',
          },
          {
            title: 'Suivi fabrication & livraison en temps réel',
            text: "Suivez l'avancement depuis votre compte web, avec notifications sur les étapes clés.",
          },
        ],
      },
      timelineFabrication: {
        title: 'Fabrication et contrôles, étape par étape',
        items: [
          {
            title: "Contrôle d'entrée et préparation des composants",
            text: 'Les composants sont comptés, vérifiés, reconditionnés et préparés pour le placement CMS.',
          },
          {
            title: 'Dépôt de pâte à braser par jetting',
            text: 'Dépôt par jetting, sans pochoir, pour un process flexible et précis.',
          },
          {
            title: 'Placement CMS sur ligne automatisée',
            text: 'Placement automatique des composants avec contrôle de précision et de cadence.',
          },
          {
            title: 'Refusion en four à phase vapeur',
            text: 'Profil JEDEC maîtrisé, vérifié quotidiennement par un profileur.',
          },

          {
            title: 'Inspection par rayons X',
            text: "Radiographies réalisées par nos soins, avec un prestataire partenaire en attendant notre RX.",
          },
          {
            title: 'Insertion traversante et finition',
            text: 'Broches traversantes préformées, sectionnées et préparées pour l’assemblage.',
          },
          {
            title: 'Inspection visuelle selon IPC',
            text: 'Contrôle visuel selon les critères des normes IPC.',
          },
          {
            title: 'Emballage antistatique et expédition express',
            text: 'Protection antistatique, conditionnement soigné et expédition express.',
          },
        ],
      },
      assemblyCapabilities: {
        title: "Capacités techniques",
        lead:
          '',
        sections: [
          {
            title: 'Technologies PCB supportées',
            description:
              'Assemblage de circuits imprimés standards et techniques pour prototypes et petites séries industrielles.',
            items: [
              "Formats PCB : 5 x 5 mm à 430 x 508 mm",
              'Jusqu’à 16 couches', 
              'Matériaux : FR4 · CEM · Rogers',
         
              'Cartes Rigid · Flex · Rigid‑Flex',
                   'Stackup et impédances controlées possibles',
            ],
          },
 
          {
            title: 'Assemblage CMS',
            description:
              'Assemblage automatisé de cartes électroniques avec technologies CMS modernes.',
            items: [
              'CMS, Traversant, Press‑Fit',
              'Package : BGA · LGA · QFN ...',
              "Composants miniatures jusqu'au 01005",
              "Jetting de pâte à braser par éjecteur - dépot précis jusqu'à 240µm",
              
            ],
          },
          {
            title: 'Inspection & qualité',
            description:
              "Contrôles réalisés selon les bonnes pratiques de l'industrie électronique et les critères IPC.",
            items: [
              
              'Inspection Rayons X',
              'Contrôle visuel',
              'Validation assemblages critiques',
              'Traçabilité projet',
            ],
          },
        ],
        stats: [
          { value: '01005', label: 'Composants minimum' },
          { value: '240µm', label: 'Fine pitch' },
          { value: 'RX', label: 'Inspection' },
        ],
      },
      assemblyFeatures: {
        title: "Caractéristiques de l'assemblage PCB",
        groups: [
          {
            title: 'PCB',
            items: [
              '5x5mm à 508x440mm',
              'Impédances contrôlées',
              'FR4, CEM, Roger',
              'Stackup spécifique',
              'Rigid, SMI, Rigid-Flex',
              'ENIG (NiAu), HAL, Sn, Ag',
              'Vernis vert, blanc, noir, rouge...',
              '1 à 16 couches',
              'Via filled, µVia laser, via borgnes/enterrés',
            ],
          },
          {
            title: 'Assemblage',
            items: [
              'CMS, Traversant, PressFit',
              '2 Machines de placement Mycronic',
              '21 000 composants/heure par machine',
              'BGA, LGA, QFN, 01005...',
              'Fine Pitch 0,3mm',
            ],
          },
          {
            title: 'Contrôle',
            items: ['Selon les normes IPC', "Inspection à Rayons X chez un prestataire"],
          },
        ],
      },
    },
    servicesHero: {
      eyebrow: 'Assemblage électronique',
      title: 'Lancez vos cartes en production avec un pilotage clair.',
      lead:
        "Chiffrez, assemblez et suivez chaque étape de vos cartes électroniques depuis une interface, avec une production locale et des délais maîtrisés. Assemblage PCBA et approvisionnement composants pilotés par nos équipes.",
      tags: ['Délai court', 'Traçabilité totale', 'Support expert'],
      primaryCta: 'Démarrer un projet',
      secondaryCta: 'Voir les services',
      imageAlt: 'Vue du process de fabrication',
      imageCaption: 'Assemblage de cartes électroniques',
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Parlons de votre carte électronique.',
      lead:
        "Notre équipe est à votre écoute du lundi au vendredi de 8h30 à 18h00 par e-mail, téléphone ou par live chat. Vous pouvez également nous envoyer un message grâce au formulaire.",
      emailLabel: 'Email',
      phoneLabel: 'Téléphone',
      form: {
        name: 'Nom complet',
        namePlaceholder: 'Votre nom',
        email: 'Email professionnel',
        emailPlaceholder: 'nom@entreprise.com',
        message: 'Message',
        messagePlaceholder: 'Décrivez votre projet',
        recaptchaLabel: 'Verification anti-spam',
        recaptchaError: 'Merci de valider le recaptcha pour envoyer le formulaire.',
        recaptchaMissing: 'Recaptcha non configure. Ajoutez la cle site.',
        successMessage: 'Votre message a été envoyé, merci.',
        submitError: "Une erreur est survenue. Merci de reessayer.",
        sending: 'Envoi en cours...',
        submit: 'Envoyer la demande',
      },
    },
    footer: {
      tagline: '',
      address: '',
      cgv: 'Conditions Générales de vente',
      legal: 'Mentions légales',
      privacy: 'Règles de Confidentialité',
      ctaText: 'Vous avez un besoin de PCBA ? Connectez-vous ici.',
      rights:
        '© 2026 EVIACORE® — Marque enregistrée — Tous droits réservés\n8 Allée Isaac Newton – 33650 Martillac\nSAS au capital de 30 000 € – RCS Bordeaux 994 666 436',
    },
    cgvPage: {
      eyebrow: 'CGV',
      title: 'CONDITIONS GÉNÉRALES DE VENTE\nEVIACORE®',
      lead: '',
      sections: [
        {
          title: 'Article 1 – Objet',
          lines: [
            'Les présentes Conditions Générales de Vente ont pour objet de définir les modalités selon lesquelles la société EVIACORE réalise, auprès d’une clientèle exclusivement professionnelle, des prestations industrielles comprenant notamment :',
            '· l’assemblage de cartes électroniques (PCBA)',
            '· les opérations de rework électronique',
            '· l’approvisionnement de composants',
            '· les services industriels associés.',
            'Les prestations sont réalisées exclusivement sur la base des éléments techniques fournis par le Client dans le cadre de son activité professionnelle.',
            'Le Client agit en qualité de professionnel averti, au sens de l’article liminaire du Code de la consommation, et reconnaît disposer des compétences nécessaires à la conception, à la validation et à l’exploitation industrielle de son produit.',
          ],
        },
        {
          title: 'Article 2 – Acceptation des conditions',
          lines: [
            'Toute commande, signature de devis, validation électronique sur la plateforme ou paiement d’acompte emporte acceptation pleine et entière des présentes CGV.',
            'Les présentes CGV prévalent sur tout document émanant du Client, notamment ses conditions générales d’achat, sauf accord écrit exprès d’EVIACORE.',
            'La validation d’une commande via la plateforme en ligne constitue une acceptation électronique ayant la même valeur qu’une signature manuscrite.',
          ],
        },
        {
          title: 'Article 3 – Formation de la commande',
          lines: [
            'La commande devient ferme et définitive dès validation écrite par le Client ou validation électronique sur la plateforme.',
            'Le Client s’engage à fournir l’ensemble des informations nécessaires à la production, notamment :',
            '· nomenclature complète (BOM)',
            '· fichiers Gerber',
            '· fichiers Pick & Place',
            '· plans et spécifications techniques.',
            'Le Client demeure seul responsable :',
            '· de la conception électronique',
            '· de la cohérence technique des fichiers transmis',
            '· de la validité industrielle du produit.',
            'EVIACORE n’est tenue à aucune obligation de vérification de conception ou d’ingénierie produit.',
            'Toute modification postérieure à la validation de la commande pourra entraîner une révision des prix et des délais.',
          ],
        },
        {
          title: 'Article 4 – Statut de sous-traitant industriel',
          lines: [
            'EVIACORE intervient exclusivement en qualité de sous‑traitant industriel chargé de l’assemblage électronique.',
            'Le Client conserve la qualité de fabricant légal du produit et assume l’entière responsabilité :',
            '· de la conception électronique',
            '· du schéma et du routage PCB',
            '· du dimensionnement',
            '· de la conformité réglementaire',
            '· de la sécurité du produit',
            '· de son utilisation finale.',
            'Les prestations d’EVIACORE ne constituent en aucun cas une validation globale du produit.',
          ],
        },
        {
          title: 'Article 5 – Tests et validation',
          lines: [
            'Sauf stipulation contraire expressément mentionnée dans le devis ou la commande, les prestations d’EVIACORE n’incluent aucune validation fonctionnelle complète du produit.',
            'Les éventuels tests réalisés par EVIACORE ont uniquement pour objet de vérifier la conformité du processus d’assemblage.',
            'La validation finale du produit relève exclusivement de la responsabilité du Client.',
          ],
        },
        {
          title: 'Article 6 – Composants électroniques',
          lines: [
            'Lorsque les composants sont fournis par le Client, celui‑ci demeure seul responsable :',
            '· de leur authenticité',
            '· de leur qualité',
            '· de leur compatibilité',
            '· de leur conditionnement',
            '· de leur conformité technique.',
            'EVIACORE ne saurait être tenue responsable des défaillances résultant de ces éléments.',
            'Lorsque les composants sont approvisionnés par EVIACORE, ceux‑ci sont achetés sur la base stricte des références communiquées par le Client.',
            'EVIACORE agit comme intermédiaire d’approvisionnement et ne saurait être tenue responsable :',
            '· d’un défaut de fabrication',
            '· d’une erreur fournisseur',
            '· d’un vice non détectable lors des contrôles standards.',
          ],
        },
        {
          title: 'Article 7 – Délais',
          lines: [
            'Les délais indiqués sont donnés à titre indicatif, sauf engagement écrit contraire.',
            'Les retards liés notamment à :',
            '· ruptures de composants',
            '· tensions du marché électronique',
            '· retards fournisseurs',
            '· retards logistiques',
            '· transport',
            'ne pourront donner lieu à aucune pénalité ni indemnité.',
          ],
        },
        {
          title: 'Article 8 – Absence de droit de rétractation',
          lines: [
            'Les prestations étant réalisées sur mesure pour une clientèle professionnelle, aucun droit de rétractation ne s’applique conformément aux articles L221‑3 et L221‑28 du Code de la consommation.',
            'Toute commande devient irrévocable dès le lancement des approvisionnements ou de la production.',
          ],
        },
        {
          title: 'Article 9 – Réserve de propriété',
          lines: [
            'Les produits livrés demeurent la propriété pleine et entière d’EVIACORE jusqu’au paiement intégral des sommes dues.',
          ],
        },
        {
          title: 'Article 10 – Livraison et transport',
          lines: [
            'Le transfert des risques intervient lors de la remise des marchandises au transporteur ou lors de leur mise à disposition dans les locaux d’EVIACORE pour enlèvement par le Client ou son transporteur.',
            'Le Client est tenu de vérifier l’état des colis lors de la livraison en présence du transporteur.',
            'En cas d’avarie apparente, le Client devra :',
            '· refuser la livraison',
            '· formuler des réserves précises et détaillées sur le bon de livraison.',
            'Ces réserves devront être confirmées au transporteur dans un délai de trois (3) jours conformément à l’article L133‑3 du Code de commerce.',
            'À défaut de réserves, les marchandises seront réputées livrées conformes et en bon état.',
          ],
        },
        {
          title: 'Article 11 – Assurance transport',
          lines: [
            'EVIACORE bénéficie d’une assurance transport couvrant les marchandises expédiées, dans les limites et plafonds prévus par le contrat d’assurance.',
            'L’indemnisation éventuelle ne pourra excéder les montants prévus par ladite assurance.',
          ],
        },
        {
          title: 'Article 12 – Contrôle avant mise sous tension',
          lines: [
            'Avant toute mise sous tension ou intégration dans un système final, le Client doit procéder à :',
            '· un contrôle visuel',
            '· des vérifications électriques',
            '· une validation fonctionnelle.',
            'Toute utilisation sans ces vérifications engage exclusivement la responsabilité du Client.',
          ],
        },
        {
          title: 'Article 13 – Réclamations',
          lines: [
            'Toute réclamation doit être formulée par écrit dans un délai de cinq (5) jours ouvrés suivant la réception.',
            'Aucune réclamation ne sera recevable après modification, utilisation ou intégration du produit.',
          ],
        },
        {
          title: 'Article 14 – Garantie',
          lines: [
            'La garantie est strictement limitée aux défauts d’assemblage démontrés.',
            'Elle se limite, au choix d’EVIACORE, à :',
            '· la réparation',
            '· le remplacement',
            '· l’émission d’un avoir.',
          ],
        },
        {
          title: 'Article 15 – Limitation de responsabilité',
          lines: [
            'La responsabilité totale d’EVIACORE est strictement limitée au montant hors taxes de la prestation concernée.',
            'Sont exclus tous dommages indirects ou immatériels, notamment :',
            '· pertes d’exploitation',
            '· pertes de production',
            '· pertes de chiffre d’affaires',
            '· rappel produit',
            '· pénalités contractuelles.',
          ],
        },
        {
          title: 'Article 16 – Confidentialité',
          lines: [
            'EVIACORE s’engage à préserver la confidentialité des documents techniques, fichiers, informations industrielles et données transmis par le Client dans le cadre de l’exécution des prestations.',
            'Ces informations sont utilisées exclusivement pour les besoins de la production et ne sont pas divulguées à des tiers.',
            'Dans ce cadre, EVIACORE pourra être amenée à faire intervenir des partenaires industriels ou techniques nécessaires à la réalisation des prestations. Ces partenaires sont soumis aux mêmes obligations de confidentialité.',
            'Un accord de confidentialité (NDA – Non‑Disclosure Agreement) peut être signé entre les parties sur simple demande du Client.',
          ],
        },
        {
          title: 'Article 17 – Propriété intellectuelle',
          lines: [
            'Les fichiers, plans et documents techniques fournis par le Client demeurent sa propriété.',
            'Le Client garantit disposer de l’ensemble des droits nécessaires et garantit EVIACORE contre tout recours de tiers relatif à la propriété intellectuelle.',
          ],
        },
        {
          title: 'Article 18 – Tolérances de production',
          lines: [
            'Compte tenu des contraintes industrielles d’assemblage électronique, une consommation partielle de composants peut survenir lors :',
            '· des réglages machines',
            '· des tests de production',
            '· des cartes de validation.',
            'Ces pertes sont considérées comme normales dans un processus industriel.',
          ],
        },
        {
          title: 'Article 19 – Tolérance de quantité',
          lines: [
            'Une tolérance de ±5 % sur les quantités produites peut être appliquée.',
            'La facturation sera basée sur les quantités réellement produites.',
          ],
        },
        {
          title: 'Article 20 – Préparation des composants',
          lines: [
            'Lorsque les composants fournis par le Client nécessitent des opérations de préparation (reconditionnement, rebobinage, tri ou manipulation spécifique), EVIACORE se réserve le droit de facturer le temps de préparation correspondant.',
          ],
        },
        {
          title: 'Article 21 – Force majeure',
          lines: [
            'EVIACORE ne pourra être tenue responsable de l’inexécution de ses obligations en cas d’événement de force majeure au sens de l’article 1218 du Code civil.',
          ],
        },
        {
          title: 'Article 22 – Nullité partielle',
          lines: [
            'Si une disposition des présentes CGV est déclarée nulle ou inapplicable, les autres dispositions demeurent pleinement applicables.',
          ],
        },
        {
          title: 'Article 23 – Juridiction',
          lines: [
            'Les présentes CGV sont régies par le droit français.',
            'Tout litige relève de la compétence exclusive du Tribunal de Commerce de Bordeaux.',
          ],
        },
      ],
    },
    privacyPage: {
      eyebrow: 'Données personnelles',
      title: 'POLITIQUE DE CONFIDENTIALITÉ – PROTECTION DES DONNÉES PERSONNELLES (RGPD)',
      lead: 'Version en vigueur à la date 28/02/2026',
      badge: 'Conformité RGPD',
      sections: [
        {
          title: '1 — Responsable du traitement',
          lines: [
            'Le responsable du traitement des données personnelles collectées via le site internet et la plateforme EVIACORE® est :',
            'EVIACORE SAS',
            'Capital social : 30 000 €',
            'RCS Bordeaux : 994 666 436',
            'Siège social : 8 Allée Isaac Newton – 33650 Martillac',
            'Email : contact@eviacore.com',
            'EVIACORE détermine les finalités et les moyens des traitements conformément :',
            'au Règlement (UE) 2016/679 du 27 avril 2016 (RGPD) ;',
            'à la Loi Informatique et Libertés n°78‑17 modifiée.',
          ],
        },
        {
          title: '2 — Champ d’application',
          lines: [
            'La présente politique s’applique à l’ensemble des traitements réalisés dans le cadre :',
            '· de la navigation sur le site vitrine EVIACORE ;',
            '· de la création de comptes clients ;',
            '· des demandes de devis ;',
            '· de l’utilisation de la plateforme app.eviacore.com ;',
            '· de l’exécution des commandes d’assemblage électronique ;',
            '· des échanges commerciaux et techniques.',
            'Les services EVIACORE étant destinés exclusivement à des professionnels, les traitements interviennent dans un cadre B2B.',
          ],
        },
        {
          title: '3 — Données personnelles collectées',
          lines: [
            'EVIACORE peut collecter les catégories de données suivantes :',
            'Données d’identification professionnelle',
            '· nom et prénom ;',
            '· société ;',
            '· fonction ;',
            '· numéro de téléphone professionnel ;',
            '· adresse email professionnelle.',
            'Données commerciales et contractuelles',
            '· historique des devis et commandes ;',
            '· informations de facturation ;',
            '· échanges commerciaux.',
            'Données techniques',
            '· fichiers industriels transmis (BOM, Gerber, Pick & Place, plans, instructions techniques) ;',
            '· documents liés aux projets électroniques.',
            'Données techniques de connexion',
            '· adresses IP ;',
            '· logs de connexion ;',
            '· informations de navigation.',
            'Les données collectées sont limitées à ce qui est strictement nécessaire à la fourniture des services.',
          ],
        },
        {
          title: '4 — Finalités des traitements',
          lines: [
            'Les données personnelles sont utilisées pour :',
            '· la création et la gestion des comptes clients ;',
            '· l’établissement des devis ;',
            '· l’exécution des prestations d’assemblage électronique (PCBA) ;',
            '· la gestion administrative et comptable ;',
            '· la communication avec les clients ;',
            '· la sécurisation et l’administration de la plateforme ;',
            '· l’amélioration des services et analyses statistiques.',
          ],
        },
        {
          title: '5 — Bases légales du traitement',
          lines: [
            'Les traitements reposent sur :',
            '· l’exécution du contrat entre EVIACORE et le Client ;',
            '· le respect des obligations légales et comptables ;',
            '· l’intérêt légitime d’EVIACORE (sécurité et amélioration du service) ;',
            '· le consentement lorsque requis (cookies non essentiels).',
          ],
        },
        {
          title: '6 — Cookies',
          lines: [
            'Le site EVIACORE utilise des cookies et technologies similaires afin de :',
            '· assurer le fonctionnement technique du site ;',
            '· mesurer l’audience ;',
            '· analyser l’utilisation du service ;',
            '· produire des statistiques anonymisées.',
            'L’utilisateur peut gérer ou désactiver les cookies via les paramètres de son navigateur.',
          ],
        },
        {
          title: '7 — Hébergement et destinataires des données',
          lines: [
            'Les données personnelles sont accessibles uniquement aux personnes habilitées au sein d’EVIACORE et aux prestataires techniques nécessaires au fonctionnement des services.',
            'Hébergement :',
            '· O2Switch : hébergement du site vitrine (pages de présentation uniquement, sans données clients opérationnelles) ;',
            '· OVHcloud – France : hébergement sécurisé de la plateforme app.eviacore.com, des comptes clients, bases de données, commandes et documents techniques.',
            'Ces prestataires agissent en qualité de sous‑traitants au sens de l’article 28 du RGPD.',
            'Les données sont hébergées exclusivement au sein de l’Union européenne.',
            'Aucune donnée personnelle n’est vendue, louée ou cédée à des tiers.',
          ],
        },
        {
          title: '8 — Durée de conservation',
          lines: [
            'Les données sont conservées uniquement pour la durée nécessaire aux finalités poursuivies :',
            '· documents techniques : 1 an après la fin de la relation commerciale ;',
            '· données commerciales : durée de la relation contractuelle ;',
            '· documents comptables : 10 ans (obligation légale) ;',
            '· logs techniques : durée nécessaire à la sécurité des systèmes.',
            'À l’issue de ces délais, les données sont supprimées ou anonymisées.',
          ],
        },
        {
          title: '9 — Sécurité des données',
          lines: [
            'EVIACORE met en œuvre des mesures techniques et organisationnelles appropriées afin d’assurer :',
            '· la confidentialité ;',
            '· l’intégrité ;',
            '· la disponibilité des données personnelles.',
            'Ces mesures visent à prévenir tout accès non autorisé, perte, altération ou divulgation des données.',
          ],
        },
        {
          title: '10 — Droits des personnes concernées',
          lines: [
            'Conformément au RGPD, toute personne dispose des droits suivants :',
            '· droit d’accès ;',
            '· droit de rectification ;',
            '· droit d’effacement ;',
            '· droit d’opposition ;',
            '· droit à la limitation du traitement.',
            'Les demandes peuvent être adressées à :',
            'contact@eviacore.com',
            'EVIACORE s’engage à répondre dans les délais légaux applicables.',
          ],
        },
        {
          title: '11 — Réclamation auprès de l’autorité de contrôle',
          lines: [
            'EVIACORE privilégie une résolution amiable préalable de toute demande relative aux données personnelles.',
            'Conformément au RGPD, toute personne concernée peut introduire une réclamation auprès de l’autorité de contrôle compétente :',
            'Commission Nationale de l’Informatique et des Libertés (CNIL)',
            'https://www.cnil.fr',
          ],
        },
        {
          title: '12 — Acceptation de la politique',
          lines: [
            'Lors de la création d’un compte ou de la validation d’une commande, l’utilisateur reconnaît avoir pris connaissance de la présente Politique de confidentialité et accepter le traitement de ses données personnelles conformément aux présentes dispositions.',
          ],
        },
      ],
    },
    legalPage: {
      eyebrow: 'Mentions légales',
      title: 'MENTIONS LÉGALES',
      lead: '',
      sections: [
        {
          title: '1 — Éditeur du site',
          lines: [
            'Le présent site internet est édité par :',
            'EVIACORE®',
            'Société par Actions Simplifiée (SAS) au capital social de 30 000 euros',
            'Immatriculée au Registre du Commerce et des Sociétés de Bordeaux sous le numéro 994 666 436',
            'Siège social :',
            '8 Allée Isaac Newton',
            '33650 Martillac — France',
            'Email : contact@eviacore.com',
            'Directeur de la publication :',
            'Monsieur Maxime Merour, Président de la société EVIACORE.',
          ],
        },
        {
          title: '2 — Marque et signes distinctifs',
          lines: [
            'La marque EVIACORE est une marque enregistrée auprès de l’Institut National de la Propriété Industrielle (INPI) sous le numéro 25 5196343, déposée le 5 novembre 2025 et publiée au Bulletin Officiel de la Propriété Industrielle (BOPI) le 20 février 2026.',
            'La marque est enregistrée au nom de Monsieur Maxime Merour.',
            'La société EVIACORE bénéficie d’un droit d’exploitation de ladite marque.',
            'Toute reproduction, imitation, utilisation ou exploitation, totale ou partielle, sans autorisation écrite préalable est strictement interdite et constitue une contrefaçon au sens des articles L.713‑2 et suivants du Code de la propriété intellectuelle.',
          ],
        },
        {
          title: '3 — Hébergement',
          lines: [
            'Site internet vitrine',
            'Le site de présentation est hébergé par :',
            'O2Switch',
            'Chemin des Pardiaux',
            '63000 Clermont‑Ferrand — France',
            'https://www.o2switch.fr',
            'Ce service héberge uniquement les pages de présentation du site.',
            'Plateforme client et application',
            'L’espace client et la plateforme accessible via app.eviacore.com sont hébergés par :',
            'OVH SAS',
            '2 rue Kellermann',
            '59100 Roubaix — France',
            'https://www.ovhcloud.com',
            'Les données clients, comptes utilisateurs et documents techniques sont hébergés sur des infrastructures situées au sein de l’Union européenne.',
          ],
        },
        {
          title: '4 — Propriété intellectuelle',
          lines: [
            'L’ensemble du site internet, incluant notamment les textes, images, graphismes, logos, icônes, documents, architecture, logiciels et codes sources, est protégé par les dispositions du Code de la propriété intellectuelle.',
            'Toute reproduction, représentation, modification, publication ou adaptation, totale ou partielle, quel que soit le procédé utilisé, est interdite sans autorisation écrite préalable d’EVIACORE.',
          ],
        },
        {
          title: '5 — Responsabilité',
          lines: [
            'EVIACORE s’efforce d’assurer l’exactitude et la mise à jour des informations diffusées sur le site. Toutefois, la société ne peut garantir l’exactitude, la complétude ou l’actualité permanente des contenus.',
            'EVIACORE ne saurait être tenue responsable notamment :',
            'des interruptions temporaires du site ;',
            'des dysfonctionnements techniques ;',
            'des dommages directs ou indirects résultant de l’utilisation du site ;',
            'd’une incompatibilité technique avec l’équipement de l’utilisateur ;',
            'du contenu des sites tiers accessibles via des liens hypertextes.',
            'L’utilisateur demeure seul responsable de l’utilisation des informations disponibles sur le site.',
          ],
        },
        {
          title: '6 — Données personnelles',
          lines: [
            'Les traitements de données personnelles réalisés via le site et la plateforme sont régis par la Politique de confidentialité (RGPD) accessible à tout moment depuis le site.',
          ],
        },
        {
          title: '7 — Cookies',
          lines: [
            'Le site peut utiliser des cookies et technologies similaires nécessaires à son fonctionnement, à la mesure d’audience et à l’amélioration des services, conformément à la Politique de confidentialité.',
            'L’utilisateur peut gérer ses préférences via les paramètres de son navigateur.',
          ],
        },
        {
          title: '8 — Droit applicable',
          lines: [
            'Le présent site est soumis au droit français.',
            'Tout litige relatif à son utilisation relève de la compétence des juridictions françaises territorialement compétentes, sauf disposition légale impérative contraire.',
          ],
        },
      ],
    },
  },
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      contact: 'Contact',
      cta: 'MY ACCOUNT',
      lang: 'Language',
    },
    hero: {
      eyebrow: 'Electronic board manufacturer',
      title: 'Your VIA between design and PCBA',
      lead:
        'EVIACORE® handles the sourcing of your PCBs and components, then ensures the industrial assembly of your electronic boards with dedicated technical support throughout the project.',
      primaryCta: 'ACCESS MY ACCOUNT',
      secondaryCta: 'View our services',
      stats: [
        { value: '48h', label: 'Initial quote' },
        { value: 'ISO', label: 'Quality process' },
        { value: '100%', label: 'Project traceability' },
      ],
      panel: {
        title: 'Guided order',
        heading: 'A clear app to launch your board in a few steps.',
        bullets: ['Technical specifications', 'Fast validation', 'Production and control'],
      },
    },
    home: {
      overview: {
        eyebrow: 'Platform',
        title: 'With the EVIACORE App\nUpload. Validate. Produce.',
        lead:
          'Upload your BOM, fine-tune volumes and lead times, and drive your manufacturing from a centralized space built to streamline every step.',
        cards: [
          {
            title: 'Instant pricing',
            text: 'Adjust volume and lead time to see pricing update in real time.',
          },
          {
            title: 'One project space',
            text: 'All your versions, approvals, and technical documents in one place.',
          },
          {
            title: 'Live tracking',
            text: 'Track every step of your project in real time.',
          },
        ],
      },
      steps: {
        eyebrow: 'Process',
        title: 'Your connected factory in 4 steps.',
        items: [
          {
            title: 'Upload your files',
            text: 'Gerbers, BOM, constraints, and critical details in one flow.',
          },
          {
            title: 'Configure the batch',
            text: 'Choose quantity, lead time, testing, and quality options.',
          },
          {
            title: 'Validate and order',
            text: 'Share with your team, validate, and launch production.',
          },
          {
            title: 'Real-time tracking',
            text: 'Production, control, and logistics visible continuously.',
          },
        ],
      },
      support: {
        eyebrow: 'Support',
        title: 'Hands-on technical follow-up at every stage.',
        lead: 'Faster decisions, lower risk, and production that delivers as promised.',
        cards: [
          {
            title: 'Pre-production analysis',
            text: 'Before production, EVIACORE reviews the files and provides concrete feedback on manufacturability, component selection, and solderability, with recommendations to optimize the board for production and compliance.',
          },
          {
            title: 'Automated SMT assembly',
            text: 'Assembly runs on fully automated SMT lines. We use jetting solder paste deposition with no stencil purchase or extra fees, delivering consistent IPC-A-610 compliant quality.',
          },
          {
            title: 'Flexible lead times',
            text: 'Short, controlled lead times with no minimum quantities. Choose flexible production windows, adjust volumes to your needs, and keep clear visibility on every step.',
          },
        ],
      },
      platform: {
        eyebrow: 'Platform',
        title: 'Upload. Validate. Produce.',
        lead:
          'With the EVIACORE App upload your BOM, fine-tune volumes and lead times, and drive your manufacturing from a centralized space built to streamline every step.',
      },
      faq: {
        eyebrow: 'FAQ',
        title: 'Common questions before launching your board.',
        lead:
          'Clear answers on file preparation, lead times, and assembly quality.',
        items: [
          {
            question: 'Which files do you need?',
            answer:
              'Gerbers or ODB++, BOM, pick-and-place file, and critical constraints. We check completeness and flag anything missing.',
          },
          {
            question: 'Can we supply our own components?',
            answer:
              'Yes. You can supply your components and/or PCBs, either partially or in full. We can also handle sourcing (PCBs and components) through our suppliers at the best prices.',
          },
          {
            question: 'What is the typical lead time for assembly?',
            answer:
              'We can build your project in a very short timeframe. You choose the lead time you want when placing the order.',
          },
          {
            question: 'How do you ensure assembly quality?',
            answer:
              'We follow IPC standards and perform systematic X-ray inspection for your project.',
          },
          {
            question: 'Can you handle small batches?',
            answer:
              'Yes. No minimum quantity required.',
          },
        ],
      },
    },
    services: {
      eyebrow: 'Services',
      title: 'A complete chain for your electronic boards.',
      steps: {
        eyebrow: 'Short process',
        title: 'Drive production in 4 steps.',
        items: [
          {
            title: 'Configure your project online',
            text: 'EVIACORE® web platform with online quoting.',
          },
          {
            title: 'Validate quantities and lead times',
            text: 'Connected to leading suppliers. Best pricing in minutes.',
          },
          {
            title: 'Launch and track manufacturing',
            text: 'Order online in one click. Simple, fast, and backed by our team.',
          },
          {
            title: 'Receive your order in Express',
            text: 'Track delivery worldwide with shipment tracking.',
          },
        ],
      },
      items: [
        {
          title: 'Design & optimization',
          text: 'Robust circuit design with simulation and verification.',
        },
        {
          title: 'Industrialization',
          text: 'Production-ready files with quality processes and checks.',
        },
        {
          title: 'Assembly & testing',
          text: 'Assembly, functional testing, and batch traceability.',
        },
      ],
      timelineOnline: {
        title: 'Create your project online, from configuration to validation',
        items: [
          {
            title: 'PCB specification',
            text: 'Define your standard or complex PCB: dimensions, 1 to 16 layers, stackup, impedance, and critical options.',
          },
          {
            title: 'Bill of materials (BOM) import',
            text: 'Import your BOM, the EVIACORE app makes sure the components available.',
          },
          {
            title: 'Manufacturing and placement files',
            text: 'Upload Gerbers/ODB++, placement plan, and pick-and-place file for a complete, usable package.',
          },
          {
            title: 'Price Optimizer to drive cost',
            text: 'EVIACORE calculates unit cost based on lead time and quantity, using the best supplier offers.',
          },
          {
            title: 'Validation, quote, and online order',
            text: 'Validate and pay online, generate a PDF quote, and share your cart internally if needed.',
          },
          {
            title: 'Real-time manufacturing & delivery tracking',
            text: 'Track progress from your web account, with notifications at key milestones.',
          },
        ],
      },
      timelineFabrication: {
        title: 'Manufacturing and controls, step by step',
        items: [
          {
            title: 'Incoming inspection and component prep',
            text: 'Components are counted, verified, repackaged, and prepared for SMT placement.',
          },
          {
            title: 'Jetting solder paste deposition',
            text: 'Jetting deposition without stencils for a flexible, precise process.',
          },
          {
            title: 'SMT placement on automated lines',
            text: 'Automated placement with controlled accuracy and throughput.',
          },
          {
            title: 'Vapor phase reflow',
            text: 'JEDEC temperature profile, verified daily with a profiler.',
          },
          {
            title: 'X-ray inspection',
            text: 'X-ray inspection performed by our team, with a partner while we await in-house RX.',
          },
          {
            title: 'Through-hole insertion',
            text: 'Through-hole leads are preformed, cut, and prepared for assembly.',
          },
          {
            title: 'IPC visual inspection',
            text: 'Visual inspection according to IPC standards.',
          },
          {
            title: 'Anti-static packaging and express shipping',
            text: 'Anti-static protection, careful packing, and express shipment.',
          },
        ],
      },
      assemblyCapabilities: {
        title: 'Assembly capabilities',
        lead:
          '',
        sections: [
          {
            title: 'Compatible PCBs',
            description:
              'Assembly of standard and advanced PCBs for prototypes and small industrial batches.',
            items: [
              'Dimensions: 10 mm → 400 mm',
              'Up to 16 layers',
              'Custom stackup',
              'FR4 · CEM · Rogers',
              'Rigid · Flex · Rigid-Flex',
            ],
          },
          {
            title: 'Electronic assembly',
            description:
              'Automated SMT assembly with modern equipment and traceable processes.',
            items: [
              'SMT / Through-hole / Press-Fit',
              'BGA · LGA · QFN ...',
              '01005 components',
              'Fine pitch 240µm',
              'Prototypes and small batches',
            ],
          },
          {
            title: 'Inspection & quality',
            description:
              'Quality checks aligned with IPC standards and electronics industry best practices.',
            items: [
              'AOI optical inspection',
              'X-ray inspection',
              'Visual inspection',
              'Critical assembly validation',
              'Project traceability',
            ],
          },
        ],
        stats: [
          { value: '01005', label: 'Minimum component size' },
          { value: '240µm', label: 'Fine pitch' },
          { value: 'RX', label: 'Inspection' },
        ],
      },
      assemblyFeatures: {
        title: 'Assembly capabilities',
        groups: [
          {
            title: 'PCB',
            items: [
              '5x5mm to 508x440mm',
              'Controlled impedance',
              'FR4, CEM, Roger',
              'Custom stackup',
              'Rigid, SMI, Rigid-Flex',
              'ENIG (NiAu), HAL, Sn, Ag',
              'Solder mask green, white, black, red...',
              '1 to 16 layers',
              'Via filled, laser microvia, blind/buried vias',
            ],
          },
          {
            title: 'Assembly',
            items: [
              'SMT, Through-hole, PressFit',
              '2 Mycronic placement machines',
              '21,000 components/hour per machine',
              'BGA, LGA, QFN, 01005...',
              'Fine pitch 240µm',
            ],
          },
          {
            title: 'Inspection',
            items: ['According to IPC standards', 'X-ray inspection by a partner'],
          },
        ],
      },
    },
    servicesHero: {
      eyebrow: 'Electronic assembly',
      title: 'Launch your boards into production with clear guidance.',
      lead:
        'Quote, assemble, and track every step of your electronic boards from one interface, with local production and controlled lead times. PCBA assembly and component sourcing handled by our team.',
      tags: ['Short lead time', 'Full traceability', 'Expert support'],
      primaryCta: 'Access my account',
      secondaryCta: 'View our services',
      imageAlt: 'Manufacturing process overview',
      imageCaption: 'Electronic board assembly',
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Let us discuss your electronic board.',
      lead: 'Share the main requirements and we will get back quickly with a plan.',
      emailLabel: 'Email',
      phoneLabel: 'Phone',
      form: {
        name: 'Full name',
        namePlaceholder: 'Your name',
        email: 'Work email',
        emailPlaceholder: 'name@company.com',
        message: 'Message',
        messagePlaceholder: 'Describe your project',
        recaptchaLabel: 'Anti-spam verification',
        recaptchaError: 'Please complete the recaptcha to submit the form.',
        recaptchaMissing: 'Recaptcha not configured. Add your site key.',
        successMessage: 'Your message has been sent, thank you.',
        submitError: 'Something went wrong. Please try again.',
        sending: 'Sending...',
        submit: 'Send request',
      },
    },
    footer: {
      tagline: '',
      address: '',
      cgv: 'Terms of Sale',
      legal: 'Legal Notice',
      privacy: 'Privacy policy',
      ctaText: 'Need PCBA? Log in here.',
      rights:
        '© 2026 EVIACORE® — Registered trademark — All rights reserved\n8 Allée Isaac Newton – 33650 Martillac\nSAS with share capital of €30,000 – RCS Bordeaux 994 666 436 ',
    },
    cgvPage: {
      eyebrow: 'Terms of Sale',
      title: 'GENERAL TERMS AND CONDITIONS OF SALE\nEVIACORE®',
      lead: '',
      sections: [
        {
          title: 'Article 1 – Purpose',
          lines: [
            'These General Terms and Conditions of Sale define the terms under which EVIACORE provides, to an exclusively professional clientele, industrial services including in particular:',
            '· electronic board assembly (PCBA)',
            '· electronic rework operations',
            '· component sourcing',
            '· related industrial services.',
            'The services are performed exclusively on the basis of the technical elements provided by the Client in the course of its professional activity.',
            'The Client acts as an informed professional, within the meaning of the introductory article of the Consumer Code, and acknowledges having the skills required to design, validate, and industrially operate its product.',
          ],
        },
        {
          title: 'Article 2 – Acceptance of the conditions',
          lines: [
            'Any order, signature of a quote, electronic validation on the platform, or deposit payment constitutes full and unconditional acceptance of these GTC.',
            'These GTC prevail over any document issued by the Client, in particular its purchase terms and conditions, unless expressly agreed in writing by EVIACORE.',
            'Validation of an order via the online platform constitutes electronic acceptance with the same value as a handwritten signature.',
          ],
        },
        {
          title: 'Article 3 – Formation of the order',
          lines: [
            'The order becomes firm and final upon written validation by the Client or electronic validation on the platform.',
            'The Client undertakes to provide all information necessary for production, including:',
            '· complete bill of materials (BOM)',
            '· Gerber files',
            '· Pick & Place files',
            '· drawings and technical specifications.',
            'The Client remains solely responsible for:',
            '· the electronic design',
            '· the technical consistency of the transmitted files',
            '· the industrial validity of the product.',
            'EVIACORE has no obligation to verify design or product engineering.',
            'Any modification after order validation may result in a revision of prices and lead times.',
          ],
        },
        {
          title: 'Article 4 – Industrial subcontractor status',
          lines: [
            'EVIACORE acts exclusively as an industrial subcontractor in charge of electronic assembly.',
            'The Client retains the status of legal manufacturer of the product and assumes full responsibility for:',
            '· electronic design',
            '· schematic and PCB routing',
            '· dimensioning',
            '· regulatory compliance',
            '· product safety',
            '· its final use.',
            'EVIACORE’s services do not constitute overall validation of the product.',
          ],
        },
        {
          title: 'Article 5 – Testing and validation',
          lines: [
            'Unless expressly stated otherwise in the quote or order, EVIACORE’s services do not include full functional validation of the product.',
            'Any tests performed by EVIACORE are solely intended to verify the conformity of the assembly process.',
            'Final validation of the product is solely the responsibility of the Client.',
          ],
        },
        {
          title: 'Article 6 – Electronic components',
          lines: [
            'When components are supplied by the Client, it remains solely responsible for:',
            '· their authenticity',
            '· their quality',
            '· their compatibility',
            '· their packaging',
            '· their technical compliance.',
            'EVIACORE shall not be held liable for failures resulting from these elements.',
            'When components are sourced by EVIACORE, they are purchased strictly on the basis of the references provided by the Client.',
            'EVIACORE acts as a sourcing intermediary and shall not be liable for:',
            '· a manufacturing defect',
            '· a supplier error',
            '· a defect not detectable during standard inspections.',
          ],
        },
        {
          title: 'Article 7 – Lead times',
          lines: [
            'Lead times are provided for information purposes only, unless otherwise committed in writing.',
            'Delays due in particular to:',
            '· component shortages',
            '· electronic market tensions',
            '· supplier delays',
            '· logistics delays',
            '· transport',
            'shall not give rise to any penalty or compensation.',
          ],
        },
        {
          title: 'Article 8 – No right of withdrawal',
          lines: [
            'As the services are custom-made for a professional clientele, no right of withdrawal applies in accordance with Articles L221-3 and L221-28 of the Consumer Code.',
            'Any order becomes irrevocable as soon as sourcing or production is launched.',
          ],
        },
        {
          title: 'Article 9 – Retention of title',
          lines: [
            'Delivered products remain the full and complete property of EVIACORE until full payment of sums due.',
          ],
        },
        {
          title: 'Article 10 – Delivery and transport',
          lines: [
            'The transfer of risks occurs upon handover of the goods to the carrier or when made available at EVIACORE’s premises for pickup by the Client or its carrier.',
            'The Client must check the condition of parcels upon delivery in the presence of the carrier.',
            'In the event of apparent damage, the Client must:',
            '· refuse delivery',
            '· or make precise and detailed reservations on the delivery note.',
            'These reservations must be confirmed to the carrier within three (3) days in accordance with Article L133-3 of the Commercial Code.',
            'Failing reservations, the goods will be deemed delivered in conformity and in good condition.',
          ],
        },
        {
          title: 'Article 11 – Transport insurance',
          lines: [
            'EVIACORE benefits from transport insurance covering shipped goods within the limits and caps provided by the insurance contract.',
            'Any compensation shall not exceed the amounts provided by said insurance.',
          ],
        },
        {
          title: 'Article 12 – Pre‑power inspection',
          lines: [
            'Before any power-on or integration into a final system, the Client must carry out:',
            '· a visual inspection',
            '· electrical checks',
            '· functional validation.',
            'Any use without these verifications is exclusively the responsibility of the Client.',
          ],
        },
        {
          title: 'Article 13 – Claims',
          lines: [
            'Any claim must be made in writing within five (5) business days following receipt.',
            'No claim shall be accepted after modification, use, or integration of the product.',
          ],
        },
        {
          title: 'Article 14 – Warranty',
          lines: [
            'The warranty is strictly limited to proven assembly defects.',
            'It is limited, at EVIACORE’s option, to:',
            '· repair',
            '· replacement',
            '· issuance of a credit note.',
          ],
        },
        {
          title: 'Article 15 – Limitation of liability',
          lines: [
            'EVIACORE’s total liability is strictly limited to the amount excluding taxes of the relevant service.',
            'All indirect or immaterial damages are excluded, in particular:',
            '· operating losses',
            '· production losses',
            '· loss of turnover',
            '· product recall',
            '· contractual penalties.',
          ],
        },
        {
          title: 'Article 16 – Confidentiality',
          lines: [
            'EVIACORE undertakes to preserve the confidentiality of technical documents, files, industrial information, and data transmitted by the Client for the performance of the services.',
            'This information is used exclusively for production needs and is not disclosed to third parties.',
            'Within this framework, EVIACORE may involve industrial or technical partners necessary for the performance of the services. These partners are subject to the same confidentiality obligations.',
            'A confidentiality agreement (NDA – Non‑Disclosure Agreement) may be signed between the parties upon simple request by the Client.',
          ],
        },
        {
          title: 'Article 17 – Intellectual property',
          lines: [
            'Files, drawings, and technical documents provided by the Client remain its property.',
            'The Client warrants that it holds all necessary rights and indemnifies EVIACORE against any third‑party claim relating to intellectual property.',
          ],
        },
        {
          title: 'Article 18 – Production tolerances',
          lines: [
            'Given the industrial constraints of electronic assembly, partial component consumption may occur during:',
            '· machine setup',
            '· production tests',
            '· validation boards.',
            'These losses are considered normal in an industrial process.',
          ],
        },
        {
          title: 'Article 19 – Quantity tolerance',
          lines: [
            'A tolerance of ±5% on produced quantities may be applied.',
            'Invoicing will be based on quantities actually produced.',
          ],
        },
        {
          title: 'Article 20 – Component preparation',
          lines: [
            'When components supplied by the Client require preparation operations (repackaging, re‑reeling, sorting, or specific handling), EVIACORE reserves the right to charge the corresponding preparation time.',
          ],
        },
        {
          title: 'Article 21 – Force majeure',
          lines: [
            'EVIACORE shall not be liable for the non‑performance of its obligations in the event of a force majeure event within the meaning of Article 1218 of the Civil Code.',
          ],
        },
        {
          title: 'Article 22 – Partial invalidity',
          lines: [
            'If any provision of these GTC is declared null or unenforceable, the other provisions shall remain fully applicable.',
          ],
        },
        {
          title: 'Article 23 – Jurisdiction',
          lines: [
            'These GTC are governed by French law.',
            'Any dispute falls within the exclusive jurisdiction of the Commercial Court of Bordeaux.',
          ],
        },
      ],
    },
    privacyPage: {
      eyebrow: 'Privacy',
      title: 'PRIVACY POLICY – PERSONAL DATA PROTECTION (GDPR)',
      lead: 'Version in force on the date of 28/02/2026',
      badge: 'GDPR compliance',
      sections: [
        {
          title: '1 — Data controller',
          lines: [
            'The data controller for personal data collected via the website and the EVIACORE® platform is:',
            'EVIACORE SAS',
            'Share capital: €30,000',
            'RCS Bordeaux: 994 666 436',
            'Registered office: 8 Allée Isaac Newton – 33650 Martillac',
            'Email: contact@eviacore.com',
            'EVIACORE determines the purposes and means of processing in accordance with:',
            'Regulation (EU) 2016/679 of 27 April 2016 (GDPR);',
            'the amended French Data Protection Act No. 78-17.',
          ],
        },
        {
          title: '2 — Scope',
          lines: [
            'This policy applies to all processing carried out in the context of:',
            'browsing the EVIACORE marketing website;',
            'creating client accounts;',
            'quote requests;',
            'use of the app.eviacore.com platform;',
            'execution of electronic assembly orders;',
            'commercial and technical exchanges.',
            'As EVIACORE services are intended exclusively for professionals, processing takes place in a B2B context.',
          ],
        },
        {
          title: '3 — Personal data collected',
          lines: [
            'EVIACORE may collect the following categories of data:',
            'Professional identification data',
            'first and last name;',
            'company;',
            'job title;',
            'professional phone number;',
            'professional email address.',
            'Business and contractual data',
            'quote and order history;',
            'billing information;',
            'commercial exchanges.',
            'Technical data',
            'industrial files transmitted (BOM, Gerber, Pick & Place, drawings, technical instructions);',
            'documents linked to electronic projects.',
            'Technical connection data',
            'IP addresses;',
            'connection logs;',
            'browsing information.',
            'Collected data is limited to what is strictly necessary to provide the services.',
          ],
        },
        {
          title: '4 — Purposes of processing',
          lines: [
            'Personal data is used for:',
            'creating and managing client accounts;',
            'issuing quotes;',
            'performing electronic assembly services (PCBA);',
            'administrative and accounting management;',
            'communication with clients;',
            'securing and administering the platform;',
            'service improvement and statistical analysis.',
          ],
        },
        {
          title: '5 — Legal bases for processing',
          lines: [
            'Processing is based on:',
            'performance of the contract between EVIACORE and the Client;',
            'compliance with legal and accounting obligations;',
            'EVIACORE’s legitimate interest (security and service improvement);',
            'consent where required (non-essential cookies).',
          ],
        },
        {
          title: '6 — Cookies',
          lines: [
            'The EVIACORE website uses cookies and similar technologies in order to:',
            'ensure the technical operation of the website;',
            'measure audience;',
            'analyze service usage;',
            'produce anonymized statistics.',
            'Users can manage or disable cookies via their browser settings.',
          ],
        },
        {
          title: '7 — Hosting and data recipients',
          lines: [
            'Personal data is accessible only to authorized persons within EVIACORE and to the technical providers necessary for service operation.',
            'Hosting:',
            'O2Switch: hosting of the marketing site (presentation pages only, without operational client data);',
            'OVHcloud – France: secure hosting of the app.eviacore.com platform, client accounts, databases, orders, and technical documents.',
            'These providers act as processors within the meaning of Article 28 of the GDPR.',
            'Data is hosted exclusively within the European Union.',
            'No personal data is sold, rented, or transferred to third parties.',
          ],
        },
        {
          title: '8 — Retention periods',
          lines: [
            'Data is retained only for the period necessary for the purposes pursued:',
            'technical documents: 1 year after the end of the commercial relationship;',
            'business data: for the duration of the contractual relationship;',
            'accounting documents: 10 years (legal obligation);',
            'technical logs: for the period necessary for system security.',
            'At the end of these periods, data is deleted or anonymized.',
          ],
        },
        {
          title: '9 — Data security',
          lines: [
            'EVIACORE implements appropriate technical and organizational measures to ensure:',
            'confidentiality;',
            'integrity;',
            'availability of personal data.',
            'These measures are intended to prevent unauthorized access, loss, alteration, or disclosure of data.',
          ],
        },
        {
          title: '10 — Data subject rights',
          lines: [
            'In accordance with the GDPR, any person has the following rights:',
            'right of access;',
            'right to rectification;',
            'right to erasure;',
            'right to object;',
            'right to restriction of processing.',
            'Requests may be sent to:',
            'contact@eviacore.com',
            'EVIACORE undertakes to respond within the applicable legal timeframes.',
          ],
        },
        {
          title: '11 — Complaint to the supervisory authority',
          lines: [
            'EVIACORE favors an amicable resolution of any request relating to personal data.',
            'In accordance with the GDPR, any data subject may lodge a complaint with the competent supervisory authority:',
            'Commission Nationale de l’Informatique et des Libertés (CNIL)',
            'https://www.cnil.fr',
          ],
        },
        {
          title: '12 — Acceptance of the policy',
          lines: [
            'When creating an account or validating an order, the user acknowledges having read this Privacy Policy and accepts the processing of their personal data in accordance with these provisions.',
          ],
        },
      ],
    },
    legalPage: {
      eyebrow: 'Legal Notice',
      title: 'LEGAL NOTICE',
      lead: '',
      sections: [
        {
          title: '1 — Site publisher',
          lines: [
            'This website is published by:',
            'EVIACORE®',
            'Société par Actions Simplifiée (SAS) with share capital of €30,000',
            'Registered with the Bordeaux Trade and Companies Register under number 994 666 436',
            'Registered office:',
            '8 Allée Isaac Newton',
            '33650 Martillac — France',
            'Email: contact@eviacore.com',
            'Publishing director:',
            'Mr Maxime Merour, President of EVIACORE.',
          ],
        },
        {
          title: '2 — Trademark and distinctive signs',
          lines: [
            'The EVIACORE trademark is registered with the Institut National de la Propriete Industrielle (INPI) under number 25 5196343, filed on 5 November 2025 and published in the Bulletin Officiel de la Propriete Industrielle (BOPI) on 20 February 2026.',
            'The trademark is registered in the name of Mr Maxime Merour.',
            'EVIACORE benefits from a right to use said trademark.',
            'Any reproduction, imitation, use, or exploitation, in whole or in part, without prior written authorization is strictly prohibited and constitutes infringement within the meaning of Articles L.713-2 et seq. of the Intellectual Property Code.',
          ],
        },
        {
          title: '3 — Hosting',
          lines: [
            'Marketing website',
            'The presentation site is hosted by:',
            'O2Switch',
            'Chemin des Pardiaux',
            '63000 Clermont-Ferrand — France',
            'https://www.o2switch.fr',
            'This service hosts only the presentation pages of the site.',
            'Client platform and application',
            'The client area and platform accessible via app.eviacore.com are hosted by:',
            'OVH SAS',
            '2 rue Kellermann',
            '59100 Roubaix — France',
            'https://www.ovhcloud.com',
            'Client data, user accounts, and technical documents are hosted on infrastructure located within the European Union.',
          ],
        },
        {
          title: '4 — Intellectual property',
          lines: [
            'The entire website, including texts, images, graphics, logos, icons, documents, architecture, software, and source code, is protected by the Intellectual Property Code.',
            'Any reproduction, representation, modification, publication, or adaptation, in whole or in part, by any means whatsoever, is prohibited without prior written authorization from EVIACORE.',
          ],
        },
        {
          title: '5 — Liability',
          lines: [
            'EVIACORE endeavors to ensure the accuracy and updating of the information published on the site. However, the company cannot guarantee the accuracy, completeness, or permanent currency of the content.',
            'EVIACORE cannot be held liable in particular for:',
            'temporary interruptions of the site;',
            'technical malfunctions;',
            'direct or indirect damages resulting from the use of the site;',
            'technical incompatibility with the user’s equipment;',
            'content of third-party sites accessible via hyperlinks.',
            'The user remains solely responsible for the use of the information available on the site.',
          ],
        },
        {
          title: '6 — Personal data',
          lines: [
            'Personal data processing carried out via the site and platform is governed by the Privacy Policy (GDPR), accessible at any time from the site.',
          ],
        },
        {
          title: '7 — Cookies',
          lines: [
            'The site may use cookies and similar technologies necessary for its operation, audience measurement, and service improvement, in accordance with the Privacy Policy.',
            'Users can manage their preferences via their browser settings.',
          ],
        },
        {
          title: '8 — Applicable law',
          lines: [
            'This website is governed by French law.',
            'Any dispute relating to its use falls within the jurisdiction of the competent French courts, unless mandatory legal provisions state otherwise.',
          ],
        },
      ],
    },
  },
}

export default translations
