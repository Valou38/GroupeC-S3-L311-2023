*****************************************

Ce fichier README a été généré le 17 octobre 2023 par UE311 - Groupe C \
Dernière mise-à-jour le : 19 octobre 2023.

***************************************
# INFORMATIONS GENERALES
***************************************

## Titre du dossier

GroupeC-S3-L311-2023

## Objectifs de l'application

Afficher l'heure en temps réel et proposer un boutton permettant de la figer à tout instant.

 
## Auteurs et contact

4 étudiants de l'Univesrité de Limoges \
[@Maxime Canac](https://github.com/MaximeCanac) - maxime.canac@etu.unilim.fr \
[@Mya Dumas](https://github.com/MyaDL) - mya.dumas@etu.unilim.fr \
[@Siham Charef](https://github.com/SihamWeb) - siham.charef@etu.unilim.fr \
[@Valentine Maillard](https://github.com/Valou38) - valentine.maillard@etu.unilim.fr


## Hébergement

L'ensemble du code est hébergé de façon publique sur la plateforme GitHub \
https://github.com/Valou38/GroupeC-S3-L311-2023

 

*******************************************
# LE PROJET
*******************************************

## Cadre du projet

Projet créé dans le cadre de la formation Licence professionnelle métiers de l'informatique - Applications web de l'Université de Limoges. \
Travail de groupe constitué de 4 étudiants en 3ème année \
Promotion 2023 - 2024

## Méthodologie du projet

Jeu de fichiers créés et fournis par l'Université. 
L'ensemble des modifications de programmation a été réalisé en équipe et de façon synchrone par l'intermédiaire de logiciels annexes (JetBrains, Teams)

La partie asynchrone est constituée des commentaires de code, du fichier README et tout autre information textuelle permettant une meilleure compréhension des fichiers. 

## Objectifs du projet

Réaliser un débogage de l'application web \
Editer l'ensemble des fichiers pour permettre une meilleure compréhension 


**********************************************
# INFORMATIONS TECHNIQUES de l'APPLICATION
***********************************************

## Fonctionnement

Pour faire fonctionner l'application, lancer le fichier index.php dans un navigateur \
Une fois l'application lancée, l'heure exacte apparait et se met à jour chaque seconde. \
Si l'utilisateur presse le boutton "pause", l'heure se fige. Pour revenir à l'affichage de l'heure conrante, rappuyer sur le boutton.

## Languages d'écriture

Le dossier est constitué de fichiers contenant les extension PHP, JavaScript, CSS et Markdown.
Les fichiers .PHP sont principalement programmés en langage HTML, compatible avec ce genre d'extension. 

## Arborescence


```
GroupeC-S3-L311-2023

├── Master
    ├── assets
        ├── CSS
            └── style.css
        ├── JavaScript
            └── script.js
    ├── README.md
    └── index.php
├── CommentairesCSS
├── CommentairesJS
├── CommentairesPHP
└── synchrone1

```

## Convention de nommage des fichiers :

Afin d'éviter toute confusion, la branche Master est la branche principale dans laquelle sont logés les fichiers suivant l'appellation de base (index, style, script).

Les autres branches servent uniquement au développement et sont nommées en fonction de leur utilité pour les développeur.
Par exemple, la branche "commentairePHP" n'est utilisée que pour la création des commentaires du fichier PHP.

## Fonctions principales

* init()  \
Paramètres : \
&nbsp; &nbsp; Ne prend aucun paramètre d'entrée \
Fonctions : \
&nbsp; &nbsp; Modifie l'état de l'affichage (défilant si figé, figé si défilant) \
&nbsp; &nbsp; Switch également le boutton

* setInterval() \
Paramètres : \
&nbsp; &nbsp; Ordre à executer \
&nbsp; &nbsp; Valeur de l'intervalle en millisecondes \
Fonctions : \
&nbsp; &nbsp; Calcul et actualise l'heure chaque seconde \
&nbsp; &nbsp; Modifie la couleur d'arrière plan 

* adjustTimer(timer) \
Paramètres : \
&nbsp; &nbsp; timer (heure courante) \
Fonctions : \
&nbsp; &nbsp; Ecriture au format horloge 
