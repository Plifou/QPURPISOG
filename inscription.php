<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <link rel="stylesheet" type="text/css" href="css/style.css">
</head>
<body>
<?php include("header.php");?>
<form method="POST" action="loginTreatment.php">
    <fieldset>
        <legend>Compte</legend>
        <label for="pseudo">Pseudo : </label><input type="text" name="pseudo" id="pseudo" required /><br />
        <label for="pass">Mot de passe : </label><input type="password" name="pass" id="pass" required /><br />
        <label for="Vpass">Validation Mot de passe : </label><input type="password" name="Vpass" id="Vpass" required /><br />
        <label for="mail">Adresse mail : </label><input type="email" name="mail" id="mail" required /><br />
        <input type="submit" value="Envoyer" />
    </fieldset>
</form>
</body>
</html>