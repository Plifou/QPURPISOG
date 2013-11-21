<?php
session_start();
// Hachage du mot de passe
$pass_hache = sha1($_POST['pass']);
$pass_hache = $pass_hache.'PQU';
$pass_hache = sha1($pass_hache);
$pseudo = $_POST['pseudo'];

$mysqli = new mysqli("sql.olympe.in", "6VyepLds", "159875321az", "6VyepLds");

// Vérification des identifiants
$query = "SELECT id FROM membres where pseudo = '$pseudo' AND pass = '$pass_hache'";
if (!$result = mysqli_query($mysqli,$query))
{
    die('Error: ' . mysqli_error($mysqli));
}
$resultat = $result->fetch_array(MYSQLI_ASSOC);
$result->free();
$mysqli->close();

if (!$resultat) {
    header('Location: connexion.php');
} else {
    $_SESSION['id'] = $resultat['id'];
    $_SESSION['pseudo'] = $pseudo;
    setcookie('pseudoISOGAME', $pseudo , time() + 365*24*3600);
    header('Location: index.php');
}
?>