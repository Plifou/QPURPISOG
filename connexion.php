<?php session_start(); ?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <link rel="stylesheet" type="text/css" href="css/style.css">
</head>
<body>
<?php include("header.php");?>
<form method="POST" action="connectionTreatment.php">
    <fieldset>
        <legend>Connexion</legend>
        <label for="pseudo">Pseudo : </label><input type="text" name="pseudo" id="pseudo" required /><br />
        <label for="pass">Mot de passe : </label><input type="password" name="pass" id="pass" required /><br />
        <input type="submit" value="Connexion" />
    </fieldset>
</form>
</body>
</html>