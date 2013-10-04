<?php
header ("Content-type: image/png");
// Définition de la couleur à appliquer à l'image
$R='255'; $G='0'; $B='0';

// Cr?ion de l'image
$nom_fichier='images/noir.png';
$image = imagecreatefrompng($nom_fichier);

imagefilter($image, IMG_FILTER_GRAYSCALE);

// Traitement de l'image
imagefilter($image,IMG_FILTER_COLORIZE,$R,$G,$B, 0);

imagepng($image);
?>