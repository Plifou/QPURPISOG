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
                $ValideInfo = true;
            }
        }
    }
}

if($ValideInfo) {
    // Hachage du mot de passe
    $pass_hache = sha1($_POST['pass']);
    $pass_hache = $pass_hache +"PQU";
    $pass_hache = sha1($pass_hache);

    echo $pass_hache;
} else {

}

/*// Insertion
$req = $bdd->prepare('INSERT INTO membres(pseudo, pass, email, date_inscription) VALUES(:pseudo, :pass, :email, CURDATE())');
$req->execute(array(
    'pseudo' => $pseudo,
    'pass' => $pass_hache,
    'email' => $email));*/

?>