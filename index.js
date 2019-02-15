'use strict';   // Mode strict du JavaScript

// Déclaration de trois variables.
var dayNames;
var monthNames;
var today;


// Affectation de deux tableaux vides à deux variables.
dayNames   = new Array();
monthNames = new Array();

// Affectation de valeurs à chacun des tableaux.
dayNames[0] = 'Dimanche';
dayNames[1] = 'Lundi';
dayNames[2] = 'Mardi';
dayNames[3] = 'Mercredi';
dayNames[4] = 'Jeudi';
dayNames[5] = 'Vendredi';
dayNames[6] = 'Samedi';

monthNames[0]  = 'Janvier';
monthNames[1]  = 'Février';
monthNames[2]  = 'Mars';
monthNames[3]  = 'Avril';
monthNames[4]  = 'Mai';
monthNames[5]  = 'Juin';
monthNames[6]  = 'Juillet';
monthNames[7]  = 'Août';
monthNames[8]  = 'Septembre';
monthNames[9]  = 'Octobre';
monthNames[10] = 'Novembre';
monthNames[11] = 'Décembre';

// Création d'une instance de la classe Date.
today = new Date();

/*
 * On peut aussi donner à la création de l'instance de la classe Date une chaîne de caractères :
 *
 * var christmas = new Date('2013-12-25');
 *
 * La variable représentera alors la date de noël 2013.
 */


/*
 * Affichage du contenu d'une partie du tableau directement dans la page HTML.
 *
 * La méthode getDay() renvoie un nombre servant d'indice dans le tableau dayNames.
 * La méthode getMonth() renvoie un nombre servant d'indice dans le tableau monthNames.
 */
document.write('Nous sommes le ' + dayNames[today.getDay()] + ' ');
document.write(today.getDate() + ' ');
document.write(monthNames[today.getMonth()] + ' ');
document.write(today.getFullYear() + '.');

/*
 * Un code complexe se lit toujours de l'intérieur vers l'extérieur, exemple :
 *
 * A. Que vaut today.getDay() ?
 * B. Qu'y a t'il dans le tableau dayNames à la case égale à ce que vaut today.getDay() ?
 */



//
// Bonus : afficher également l'heure au format "Il est 11h30 et 18 secondes"
//