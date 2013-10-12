<?php
// Vérification de la validité des informations
$ValideInfo = false;

if(isset($_POST['pseudo'])) {
    if( strlen($_POST['pseudo']) >= 6) {
        $pseudo = $_POST['pseudo'];
        if(isset($_POST['pass']) && isset($_POST['Vpass'])) {
            $pass = $_POST['pass'];
            $Vpass = $_POST['Vpass'];
            if($pass == $Vpass and strlen($pass) >= 8) {
                if(isset($_POST['mail'])) {
                    $email = $_POST['mail'];
                    $ValideInfo = true;
                }
            }
        }
    }
}

if($ValideInfo) {
    // Hachage du mot de passe
    $pass_hache = sha1($_POST['pass']);
    $pass_hache = $pass_hache.'PQU';
    $pass_hache = sha1($pass_hache);

    $mysqli = new mysqli("sql.olympe.in", "6VyepLds", "159875321az", "6VyepLds");

    // Insertion
    $query = "INSERT INTO membres VALUES ('$pseudo', '$pass_hache', '$email', CURDATE())";
    if (!mysqli_query($mysqli,$query))
    {
        die('Error: ' . mysqli_error($mysqli));
    }
    $mysqli->close();
} else {

}


?>