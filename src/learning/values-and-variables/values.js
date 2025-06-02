// string (text - řetězec)
"Text";
"text";
`Text`;

// number (číslo)
1;
0.5;
("0.5"); // je toto číslo?

console.log(0.5 + "0.5"); // ? Přetypuje číslo na string a sloučí je, výsledek: "0.50.5" (+ operátor je sčítačí i slučovací, ale slučovací má vždy přednost)
console.log("0.5" - "0.3"); // ? Přetypuje string na number a odečte

// boolean (logická hodnota ): true/false
true;
false;

// null, undefined, 0
null;
undefined;
0;
