<?php session_start(); ?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <script type="text/javascript" src="js/oXHR.js"></script>
    <script type="text/javascript" src="js/classes/character.js"></script>
    <script type="text/javascript" src="js/classes/tileset.js"></script>
    <script type="text/javascript" src="js/classes/map.js"></script>
    <script type="text/javascript" src="js/classes/messageQueue.js"></script>
    <script type="text/javascript" src="js/rpg.js"></script>
</head>
<body>
<?php include("header.php");?>
<canvas id="chat">
</canvas>
<canvas id="canvas">
    Votre navigateur ne supporte pas canvas, veuillez télécharger un navigateur tel que chrome ou mettre à jour le votre.
</canvas>
</body>
</html>