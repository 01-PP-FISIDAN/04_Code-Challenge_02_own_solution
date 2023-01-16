/*********   CODE CHALLENGE 02 **********/

/*
Geben über eine Prompt-Anforderung einen Namen ein
Geben über eine Prompt-Anforderung ein Alter ein

Geben Sie in Abhängigkeit vom angegebenen Alter 
folgende Getränkeauswahl in die Konsole aus :

Alter 0-5 // Milch  --> age > 0 AND age < 6
Alter 6-12 // Saft
Alter 13-17 // Cola
18 + // Wein

-->zB: "Max trinkt Cola."

/* Getränke-Challenge */

let alter;

alter = prompt("Bitte Alter angeben:");

//***********************V1 */
// if (alter >= 18)
// {
//     console.log("Ab diesem Alter darf man Wein trinken!")
// }
// else if (alter <=17 && alter >= 13);
// {
//     console.log("Coke");
// }
// else if (alter <=12 && alter >=6);
// {
//     console.log("Juice!");
// }

// else
// {
//     console.log("Im Alter von bis zu fünf Jahren empfehlen wir Milch.")
// }



// isMilk = (alter <=5);
// isJuice = (alter >5 && alter <=1)
// if 

// age = milkage = (alter <= 5);
// age = wineage = (alter >=18);
// age = cokeage = (alter <=17);
// age = juiceage = (alter <=12);
// // age = milkage = (alter <= 5);

// // // alter = "0+"

switch (true)
{
        case (alter <=5):
            console.log("Milch");
            break;
        case (alter >= 6 && alter <=12):
            console.log("Saft");
            break;
        case (alter >=13 && alter <18):
            console.log("Cola");
            break;
        case (alter >=18):
            console.log("Wein");
            break;
}

// console.log("Beim Alter von " + alter + " empfehlen wir ");