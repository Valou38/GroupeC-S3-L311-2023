<!DOCTYPE html>
<html lang="fr">
    <head>
        <!-- Définition de l'encodage de caractères utilisés -->
        <meta charset="utf-8">
        <!-- Titre de la page -->
        <title>Time</title>
        <!-- Importation de la police Aldrich depuis Google Fonts -->
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Aldrich">
        <!-- Importation du fichier CSS pour le style -->
        <link rel="stylesheet" href="assets/css/style.css">
        <!-- Importation du fichier Javascript pour le fonctionnement de la page -->
        <script src="assets/js/script.js"></script>
    </head>
    <body>
        <!-- Conteneur principal de la page -->

        <div class="wrapper">
            <!-- Conteneur interne -->
            <div class="inside wrapper">
                <!-- Affichage de l'heure actuelle -->
                <div class="timer">
                    <!-- Affichage du nombre d'heures -->
                    <span id="hours">00</span>
                    <!-- Affichage du nombre de minutes -->
                    <span id="minutes">00</span>
                    <!-- Affichage du nombre de secondes -->
                    <span id="seconds">00</span>
                </div>
                <!-- Conteneur des contrôles -->
                <div class="controls">
                    <!-- Bouton de play/pause -->
                    <button class="button pause"></button>
                </div>
            </div>
        </div>
    </body>
</html>