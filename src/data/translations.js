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
        title: "Avec l'App EVIACORE\nUploadez. Validez. Produisez.",
        lead:
          "Déposez votre BOM, ajustez volumes et délais, et pilotez votre fabrication depuis un espace centralisé conçu pour fluidifier chaque étape.",
        cards: [
          {
            title: 'Prix instantané',
            text: "Ajustez volume et délai pour voir le prix évoluer en temps réel.",
          },
          {
            title: 'Un seul espace projet',
            text: 'Toutes vos versions, validations et documents techniques au même endroit.',
          },
          {
            title: 'Suivi live',
            text: "Suivez chaque étape de votre projet en temps réel.",
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
            title: 'Configurez votre projet en ligne',
            text: 'Plateforme web EVIACORE®. Chiffrage en ligne.',
          },
          {
            title: 'Validez vos quantités et délais',
            text: 'Connectée aux plus grands fournisseurs. Le meilleur prix en quelques minutes.',
          },
          {
            title: 'Lancez et suivez la fabrication',
            text: 'Commandez en ligne en un clic. Simple et rapide. Notre équipe vous accompagne.',
          },
          {
            title: 'Recevez votre commande en Express',
            text: 'Suivez votre livraison grâce au tracking de votre colis partout dans le monde.',
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
            title: 'Spécification PCB et contraintes clés',
            text: 'Définissez votre PCB standard ou complexe : dimensions, 1 à 24 couches, stackup, impédances et options critiques.',
          },
          {
            title: 'Importation de la nomenclature (BOM)',
            text: "Importez votre BOM : l'algorithme EVIACORE sélectionne les composants disponibles, compatibles et au meilleur prix.",
          },
          {
            title: 'Fichiers de fabrication et placement',
            text: "Chargez Gerbers/ODB++, plan d'implantation et fichier de placement pour un dossier complet et exploitable.",
          },
          {
            title: 'Price Optimizer pour piloter le coût',
            text: "EVIACORE calcule le coût selon délai et quantité, en s'appuyant sur les meilleures offres fournisseurs.",
          },
          {
            title: 'Validation, devis et commande en ligne',
            text: 'Validez et payez en ligne, éditez un devis PDF, partagez votre panier en interne si besoin.',
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
            text: 'Contrôle visuel systématique selon les critères des normes IPC.',
          },
          {
            title: 'Emballage antistatique et expédition express',
            text: 'Protection antistatique, conditionnement soigné et expédition express.',
          },
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
              '1 à 24 couches',
              'Via filled, µVia laser, via borgnes/enterrés',
            ],
          },
          {
            title: 'Assemblage',
            items: [
              'CMS, Traversant, PressFit',
              '2 Machines de placement Mycronics',
              '21 000 composants/heure par machine',
              'BGA, µBGA, LGA, QFN, 0201...',
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
      cgv: 'CGV',
      legal: 'Mentions légales',
      privacy: 'Données personnelles',
      ctaText: 'Vous avez un besoin de PCBA ? Connectez-vous ici.',
      rights:
        '© 2026 EVIACORE® — Marque enregistrée — Tous droits réservés\n8 Allée Isaac Newton – 33650 Martillac\nSAS au capital de 30 000 € – RCS Bordeaux 994 666 436',
    },
    cgvPage: {
      eyebrow: 'CGV',
      title: 'CONDITIONS GÉNÉRALES DE VENTE',
      lead: 'Version en vigueur à la date 28/02/2026',
      sections: [
        {
          title: 'Article 1 – Objet',
          lines: [
            'Les présentes Conditions Générales de Vente ont pour objet de définir les modalités selon lesquelles la société EVIACORE® réalise, auprès d’une clientèle exclusivement professionnelle, des prestations d’assemblage électronique (PCBA), d’approvisionnement de composants, d’intégration technique et de services industriels associés.',
            'Les prestations sont exécutées uniquement sur la base des éléments techniques fournis par le Client dans le cadre de son activité professionnelle. En conséquence, le Client agit en qualité de professionnel averti et reconnaît disposer des compétences nécessaires à la définition et à la validation de son produit.',
          ],
        },
        {
          title: 'Article 2 – Acceptation et opposabilité',
          lines: [
            'Toute commande, signature de devis, validation électronique ou paiement d’acompte emporte acceptation pleine et entière des présentes CGV, lesquelles prévalent sur tout document émanant du Client, notamment ses conditions générales d’achat, sauf accord écrit exprès d’EVIACORE.',
            'Aucune tolérance ou pratique commerciale ne saurait être interprétée comme une renonciation aux présentes dispositions.',
          ],
        },
        {
          title: 'Article 3 – Formation de la commande',
          lines: [
            'La commande devient ferme et définitive dès sa validation écrite par le Client.',
            'Le Client s’engage à fournir l’ensemble des données nécessaires à la production, notamment :',
            '· nomenclature complète (BOM),',
            '· fichiers Gerber,',
            '· fichiers Pick & Place,',
            '· plans, instructions et spécifications techniques.',
            'Le Client demeure seul responsable de l’exactitude, de la cohérence et de l’exploitabilité industrielle des informations transmises.',
            'EVIACORE n’est tenue à aucune obligation de vérification de conception ou d’ingénierie produit.',
            'Toute modification postérieure à la validation pourra entraîner une révision des prix et délais.',
          ],
        },
        {
          title: 'Article 4 – Nature de l’intervention et statut industriel',
          lines: [
            'EVIACORE intervient exclusivement en qualité de sous-traitant industriel chargé de l’exécution matérielle de l’assemblage.',
            'Le Client conserve la qualité de fabricant légal du produit et assume l’entière responsabilité :',
            'de la conception électronique,',
            '· du schéma et du routage PCB,',
            '· du dimensionnement,',
            '· de la conformité réglementaire,',
            '· de la sécurité du produit,',
            '· de son utilisation finale.',
            'Les prestations réalisées ne constituent en aucun cas une validation fonctionnelle globale du produit sauf accord écrit spécifique.',
          ],
        },
        {
          title: 'Article 5 – Composants électroniques',
          lines: [
            'Lorsque les composants sont fournis par le Client, celui‑ci demeure seul responsable de leur authenticité, qualité, compatibilité, conditionnement et conformité technique.',
            'EVIACORE ne saurait être tenue responsable des défaillances résultant de ces éléments.',
            'Lorsque les composants sont approvisionnés par EVIACORE, les achats sont réalisés sur la base stricte des références communiquées par le Client.',
            'La société agit comme intermédiaire d’approvisionnement technique et ne peut être tenue responsable d’un défaut fabricant, d’une erreur fournisseur ou d’un vice non raisonnablement détectable lors des contrôles standards.',
          ],
        },
        {
          title: 'Article 6 – Délais de réalisation',
          lines: [
            'Les délais indiqués sont donnés à titre indicatif sauf engagement écrit contraire.',
            'Les retards résultant notamment de ruptures d’approvisionnement, tensions du marché électronique, retards logistiques, transports ou formalités douanières entraînent automatiquement un report équivalent sans pénalité ni indemnité.',
          ],
        },
        {
          title: 'Article 7 – Absence de droit de rétractation',
          lines: [
            'Les prestations étant réalisées sur mesure selon les spécifications propres du Client et dans un cadre exclusivement professionnel, aucun droit de rétractation ne s’applique.',
            'Conformément aux dispositions des articles L.221‑3 et L.221‑28 du Code de la consommation, les contrats conclus entre professionnels ainsi que les prestations réalisées selon des spécifications personnalisées ne bénéficient d’aucun droit de rétractation.',
            'Toute commande devient irrévocable dès le lancement des approvisionnements, de la préparation technique ou de la production. Les frais engagés restent intégralement dus.',
          ],
        },
        {
          title: 'Article 8 – Réserve de propriété',
          lines: [
            'Les produits livrés demeurent la propriété pleine et entière d’EVIACORE jusqu’au paiement intégral des sommes dues, en principal et accessoires.',
          ],
        },
        {
          title: 'Article 9 – Livraison, transfert des risques et assurance transport',
          lines: [
            'Les risques sont transférés au Client lors de la remise des marchandises au transporteur ou lors de leur mise à disposition.',
            'Afin de sécuriser les expéditions, EVIACORE bénéficie d’une assurance transport couvrant les envois de colis contre les pertes ou dommages survenus durant l’acheminement, dans les limites et conditions prévues par le contrat d’assurance.',
            'En cas d’avarie ou de perte, le Client s’engage à émettre toutes réserves nécessaires auprès du transporteur conformément à la réglementation applicable.',
            'L’indemnisation éventuelle ne pourra excéder les plafonds prévus par ladite assurance.',
            'Cette assurance constitue une mesure de sécurisation logistique et ne saurait étendre la responsabilité contractuelle d’EVIACORE.',
          ],
        },
        {
          title: 'Article 10 – Contrôle préalable et mise sous tension',
          lines: [
            'Le Client doit procéder, avant toute mise sous tension ou intégration dans un système final, à un contrôle complet incluant inspection visuelle, vérifications électriques et validation fonctionnelle.',
            'Toute utilisation sans ces vérifications engage exclusivement la responsabilité du Client.',
          ],
        },
        {
          title: 'Article 11 – Réclamations et garantie',
          lines: [
            'Toute réclamation doit être formulée par écrit dans un délai de cinq (5) jours ouvrés suivant la réception et avant toute modification ou utilisation du produit.',
            'La garantie est strictement limitée aux défauts d’assemblage démontrés et se limite, au choix d’EVIACORE, à la réparation, au remplacement ou à l’émission d’un avoir.',
          ],
        },
        {
          title: 'Article 12 – Limitation de responsabilité',
          lines: [
            'La responsabilité totale d’EVIACORE, toutes causes confondues, est strictement limitée au montant hors taxes de la prestation concernée.',
            'Sont expressément exclus tous dommages indirects ou immatériels, notamment :',
            'pertes d’exploitation, pertes de production, pertes de chiffre d’affaires, rappel produit, pénalités contractuelles ou préjudices commerciaux.',
          ],
        },
        {
          title: 'Article 13 – Assurance Responsabilité Civile Professionnelle',
          lines: [
            'EVIACORE déclare être titulaire d’une assurance Responsabilité Civile Professionnelle couvrant les conséquences pécuniaires de sa responsabilité dans le cadre strict de son activité.',
            'Cette assurance ne saurait avoir pour effet d’étendre les obligations contractuelles définies aux présentes CGV.',
            'Une attestation peut être fournie sur demande.',
          ],
        },
        {
          title: 'Article 14 – Confidentialité',
          lines: [
            'EVIACORE s’engage à préserver la confidentialité des documents techniques et informations transmises par le Client.',
            'Un accord de confidentialité spécifique pourra être conclu à première demande.',
          ],
        },
        {
          title: 'Article 15 – Force majeure',
          lines: [
            'EVIACORE ne pourra être tenue responsable de l’inexécution ou du retard résultant d’un événement de force majeure tel que reconnu par le droit français.',
          ],
        },
        {
          title: 'Article 16 – Divisibilité',
          lines: [
            'Si une disposition des présentes CGV était déclarée invalide, les autres stipulations demeureraient pleinement applicables.',
          ],
        },
        {
          title: 'Article 17 – Droit applicable et juridiction compétente',
          lines: [
            'Les présentes CGV sont régies par le droit français.',
            'Tout litige relatif à leur interprétation ou exécution relève de la compétence exclusive du Tribunal de Commerce de Bordeaux, y compris en cas de pluralité de défendeurs ou d’appel en garantie.',
          ],
        },
      ],
    },
    privacyPage: {
      eyebrow: 'Données personnelles',
      title: 'POLITIQUE DE CONFIDENTIALITÉ – PROTECTION DES DONNÉES PERSONNELLES (RGPD)',
      lead: 'Version en vigueur à la date 28/02/2026',
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
            title: 'PCB specification and key constraints',
            text: 'Define your standard or complex PCB: dimensions, 1 to 24 layers, stackup, impedance, and critical options.',
          },
          {
            title: 'Bill of materials (BOM) import',
            text: 'Import your BOM: the EVIACORE algorithm selects available, compatible components at the best price.',
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
            text: 'Systematic visual inspection according to IPC standards.',
          },
          {
            title: 'Anti-static packaging and express shipping',
            text: 'Anti-static protection, careful packing, and express shipment.',
          },
        ],
      },
      assemblyFeatures: {
        title: 'PCB assembly capabilities',
        groups: [
          {
            title: 'PCB',
            items: [
              '10x10mm to 400x400mm',
              'Controlled impedance',
              'FR4, CEM, Roger',
              'Custom stackup',
              'Rigid, SMI, Rigid-Flex',
              'ENIG (NiAu), HAL, Sn, Ag',
              'Solder mask green, white, black, red...',
              '1 to 24 layers',
              'Via filled, laser microvia, blind/buried vias',
            ],
          },
          {
            title: 'Assembly',
            items: [
              'SMT, Through-hole, PressFit',
              'BGA, µBGA, LGA, QFN, 0201...',
              'Fine pitch 0.3mm',
            ],
          },
          {
            title: 'Inspection',
            items: ['AOI', 'X-ray inspection machine'],
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
      title: 'GENERAL TERMS AND CONDITIONS OF SALE',
      lead: 'Version en vigueur à la date 28/02/2026',
      sections: [
        {
          title: 'Article 1 – Purpose',
          lines: [
            'These General Terms and Conditions of Sale define the terms under which EVIACORE® provides, to an exclusively professional clientele, electronic assembly (PCBA), component sourcing, technical integration, and related industrial services.',
            'The services are performed solely on the basis of the technical elements provided by the Client in the course of its professional activity. As a result, the Client acts as an informed professional and acknowledges having the skills required to define and validate its product.',
          ],
        },
        {
          title: 'Article 2 – Acceptance and enforceability',
          lines: [
            'Any order, signed quote, electronic validation, or deposit payment constitutes full and unconditional acceptance of these Terms, which prevail over any document issued by the Client, in particular its purchase terms and conditions, unless expressly agreed in writing by EVIACORE.',
            'No tolerance or commercial practice may be interpreted as a waiver of these provisions.',
          ],
        },
        {
          title: 'Article 3 – Formation of the order',
          lines: [
            'The order becomes firm and final as soon as it is validated in writing by the Client.',
            'The Client undertakes to provide all data necessary for production, notably:',
            'complete bill of materials (BOM),',
            'Gerber files,',
            'Pick & Place files,',
            'drawings, instructions, and technical specifications.',
            'The Client remains solely responsible for the accuracy, consistency, and industrial usability of the information provided.',
            'EVIACORE has no obligation to verify design or product engineering.',
            'Any modification after validation may result in a revision of prices and lead times.',
          ],
        },
        {
          title: 'Article 4 – Nature of the intervention and industrial status',
          lines: [
            'EVIACORE acts exclusively as an industrial subcontractor responsible for the material execution of assembly.',
            'The Client retains the status of legal manufacturer of the product and assumes full responsibility for:',
            'electronic design,',
            'schematic and PCB routing,',
            'dimensioning,',
            'regulatory compliance,',
            'product safety,',
            'its final use.',
            'The services performed do not constitute overall functional validation of the product unless specifically agreed in writing.',
          ],
        },
        {
          title: 'Article 5 – Electronic components',
          lines: [
            'When components are supplied by the Client, it remains solely responsible for their authenticity, quality, compatibility, packaging, and technical compliance.',
            'EVIACORE shall not be liable for failures resulting from such elements.',
            'When components are sourced by EVIACORE, purchases are made strictly on the basis of the references provided by the Client.',
            'The company acts as a technical sourcing intermediary and cannot be held liable for a manufacturing defect, a supplier error, or a defect not reasonably detectable during standard inspections.',
          ],
        },
        {
          title: 'Article 6 – Lead times',
          lines: [
            'Lead times are provided for information purposes only unless otherwise committed in writing.',
            'Delays resulting in particular from supply shortages, electronic market tensions, logistics delays, transport, or customs formalities automatically entail an equivalent extension without penalty or compensation.',
          ],
        },
        {
          title: 'Article 7 – No right of withdrawal',
          lines: [
            'As the services are custom-made according to the Client’s specifications and within an exclusively professional framework, no right of withdrawal applies.',
            'In accordance with the provisions of Articles L.221-3 and L.221-28 of the Consumer Code, contracts concluded between professionals and services performed according to personalized specifications do not benefit from any right of withdrawal.',
            'Any order becomes irrevocable as soon as sourcing, technical preparation, or production is launched. Costs incurred remain fully due.',
          ],
        },
        {
          title: 'Article 8 – Retention of title',
          lines: [
            'Delivered products remain the full and complete property of EVIACORE until full payment of sums due, principal and ancillary.',
          ],
        },
        {
          title: 'Article 9 – Delivery, transfer of risks, and transport insurance',
          lines: [
            'Risks are transferred to the Client upon handover of the goods to the carrier or when made available.',
            'To secure shipments, EVIACORE benefits from transport insurance covering parcel shipments against loss or damage occurring during transit, within the limits and conditions provided by the insurance contract.',
            'In case of damage or loss, the Client agrees to make all necessary reservations with the carrier in accordance with applicable regulations.',
            'Any compensation shall not exceed the caps provided by said insurance.',
            'This insurance is a logistics security measure and shall not extend EVIACORE’s contractual liability.',
          ],
        },
        {
          title: 'Article 10 – Pre-inspection and power-on',
          lines: [
            'Before any power-on or integration into a final system, the Client must carry out a complete inspection including visual inspection, electrical checks, and functional validation.',
            'Any use without these verifications engages the Client’s sole responsibility.',
          ],
        },
        {
          title: 'Article 11 – Claims and warranty',
          lines: [
            'Any claim must be made in writing within five (5) business days following receipt and before any modification or use of the product.',
            'The warranty is strictly limited to proven assembly defects and, at EVIACORE’s option, is limited to repair, replacement, or issuance of a credit note.',
          ],
        },
        {
          title: 'Article 12 – Limitation of liability',
          lines: [
            'EVIACORE’s total liability, for any cause whatsoever, is strictly limited to the amount excluding taxes of the service concerned.',
            'All indirect or immaterial damages are expressly excluded, including:',
            'operating losses, production losses, loss of turnover, product recall, contractual penalties, or commercial damages.',
          ],
        },
        {
          title: 'Article 13 – Professional liability insurance',
          lines: [
            'EVIACORE declares that it holds Professional Civil Liability insurance covering the financial consequences of its liability within the strict scope of its activity.',
            'This insurance shall not have the effect of extending the contractual obligations defined in these Terms.',
            'A certificate may be provided upon request.',
          ],
        },
        {
          title: 'Article 14 – Confidentiality',
          lines: [
            'EVIACORE undertakes to preserve the confidentiality of technical documents and information transmitted by the Client.',
            'A specific confidentiality agreement may be concluded upon first request.',
          ],
        },
        {
          title: 'Article 15 – Force majeure',
          lines: [
            'EVIACORE shall not be liable for non-performance or delay resulting from a force majeure event as recognized by French law.',
          ],
        },
        {
          title: 'Article 16 – Severability',
          lines: [
            'If any provision of these Terms is declared invalid, the other stipulations shall remain fully applicable.',
          ],
        },
        {
          title: 'Article 17 – Governing law and jurisdiction',
          lines: [
            'These Terms are governed by French law.',
            'Any dispute relating to their interpretation or performance falls under the exclusive jurisdiction of the Commercial Court of Bordeaux, including in the case of multiple defendants or third-party claims.',
          ],
        },
      ],
    },
    privacyPage: {
      eyebrow: 'Privacy',
      title: 'PRIVACY POLICY – PERSONAL DATA PROTECTION (GDPR)',
      lead: 'Version in force on the date of 28/02/2026',
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
          title: '1. Publisher',
          lines: [
            'EVIACORE®',
            'Société par Actions Simplifiée (SAS)',
            'Share capital: €30,000',
            'Registered with the Bordeaux Trade and Companies Register under number 994 666 436',
            'Registered office: 8 Allée Isaac Newton – 33650 Martillac – France',
            'Email: contact@eviacore.com',
            'Publishing director:',
            'Mr Maxime Mérour, President',
          ],
        },
        {
          title: '2. Trademark',
          lines: [
            'The EVIACORE trademark is the subject of a registration application with the INPI under number 25 5196343, filed on 05 November 2025 and published in the Official Bulletin of Industrial Property on 28 November 2025.',
            'The trademark is filed in the name of Mr Maxime Mérour.',
            'EVIACORE has the right to use the said trademark.',
            'Any reproduction, imitation, or use without prior written authorization is prohibited.',
          ],
        },
        {
          title: '3. Hosting',
          lines: [
            'Main site hosted by:',
            'O2Switch – Clermont-Ferrand – France',
            'Authentication / customer area hosted by:',
            'OVH SAS – 2 rue Kellermann – 59100 Roubaix – France',
          ],
        },
        {
          title: '4. Intellectual property',
          lines: [
            'All site content (texts, visuals, graphics, logos, documents, structure, code) is protected by the Intellectual Property Code.',
            'Any total or partial reproduction without authorization is prohibited.',
          ],
        },
        {
          title: '5. Liability',
          lines: [
            'EVIACORE cannot be held liable for:',
            'errors or omissions,',
            'temporary interruption of the site,',
            'direct or indirect damages related to the use of the site,',
            'content of third-party sites.',
          ],
        },
        {
          title: '6. Applicable law',
          lines: [
            'The site is subject to French law.',
            'Any dispute falls under the competent French courts.',
          ],
        },
      ],
    },
  },
}

export default translations
