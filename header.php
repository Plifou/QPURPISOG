<header>
    <h1 id=Title>
        RP-ISO-GAME
    </h1>
</header>

<nav id=Main_Nav>
    <ul id=Ul_Nav>
        <li class=Item_Nav><a href="index.php" class="Lien_Nav">Accueil</a></li>
        <?php
        if (! isset($_SESSION['id']) AND ! isset($_SESSION['pseudo'])) {
            echo '<li class=Item_Nav><a href="inscription.php" class="Lien_Nav">Inscription</a></li>';
        }
        ?>
        <li class=Item_Nav><a href="connexion.php" class="Lien_Nav">Mon compte</a></li>
        <?php
        if (isset($_SESSION['id']) AND isset($_SESSION['pseudo'])) {
            echo '<li class=Item_Nav><a href="game.php" class="Lien_Nav">RP-ISO-GAME</a></li>
    </ul>' .
                'Connecté en tant que : ' . $_SESSION['pseudo'];
        }
        ?>
</nav>