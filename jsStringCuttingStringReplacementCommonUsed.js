// ------------------------------ String start ----------------------------------------
/* 
 1. string ar modde jodi 2 tai double court """" thake or 2 ta single court '''' thake , tobe seta program syntax error dibe. ai problem theke somadhan paile courtation ar agy \ use korte hobe. tobe ar syntax error dibe na. like ; "\"\"" or '\'\''
*/
// string holo immuteable 

let myName = "Yeasaleh";
let myCountry = "I live in Bangladesh";
let myCountryWithCort1 = "I live in 'Bangladesh'";
let myCountryWithCort2 = 'I live in "Bangladesh"';
let myCountryWithCort3 = 'I live in \'Bangladesh\'';
let myCountryWithCort4 = "I live in \"Bangladesh\"";

//loop through string
console.log(myCountryWithCort4[6])
for(let index = 0; index < myCountryWithCort4.length; index++) {
    console.log(myCountryWithCort4[index]);
};


// while loop (jodi kono loop ar ending ki hobe amra jani  na. tokon while loop use korle valo hoy )

let length = 0;
let index = 0 ;
while(myCountry[index] !== undefined){
    length = length + 1;
    index++;
}

// console.log("length of string " + length)

// console.log(myName);
// console.log(myCountry);
// console.log(myCountryWithCort1);
// console.log(myCountryWithCort2);
// console.log(myCountryWithCort3);
// console.log(myCountryWithCort4);


// ------------------------------ String end ----------------------------------------



// ------------------------------ Cutting Strings start ----------------------------------------



// if we want to using positive number
let cuttingString = "Toke ami cutting to fitting korbo.";
// string.slice(start , end)
console.log(cuttingString.slice(9, 11)); // slice korle start index theke end index ar ag porjonto cutting hobe. slice ar ending index na dile ak bare ses porjoto dhore nia cutting korbe. 

// string.subString(start , end)
console.log(cuttingString.substring(0, 4)); // substring slice ar moto kaj kore

// string.subStr(start , end)
console.log(cuttingString.substr(2, 10)); // substr cutting ar starting holo first index and ending holo total koto length porjonto cut korbe. ai jonno sub str use kora hoy. subStr ar ending part obbosoi dite hobe.


// if we want to using negative number
let cuttingString1 = "Toke ami cutting to fitting korbo.";
// string.slice(start , end)
console.log(cuttingString1.slice(-27, -11));

// string.subString(start , end)
console.log(cuttingString.substring(-5, -14)); 

// string.subStr(start , end)
console.log(cuttingString.substr(-2, -5));
// ** substring and substr ar khetre jodi parameter hisebe negative value newya hoy seta k obbosoi 0 dhore nibe. --- interview question

// ------------------------------ Cutting Strings end ----------------------------------------




// ------------------------------ Replace Strings start  ----------------------------------------
// Replace use kore string k replace kore onno string a lekha jay.
// syntax -- string.replace(jakeChangeKora hobe, change kore ja hobe.)
// 1. replace case sensetive. mane hoile job kiso same na hoile change hoibo na.

let jomiRegistry1 = "Sona Mia";
let jomiRegistry2 = "Sona Mia. Sona mia";
let revisedJomiRegistry1 = jomiRegistry1.replace("Sona", "Lal");
let revisedJomiRegistry2 = jomiRegistry1.replace(/sona/i, "Lal");
console.log(revisedJomiRegistry1);
console.log(revisedJomiRegistry2);

// jodi case sensetive ar jonno replace na kora jay tobe regular expression use kore amra case Insensetive korte pari. ar jonno syntax -- /jeitaChangeHobe/i- ai syntax follow korte hobe.
// ar jodi ak sathe onek gula change kora dorkar same type string change korte hoy tobe , replace all or /jeitaChangeHObe/g -- ai syntax use korte hobe. aita g dhara golbal kore dibe. and string howya sottew // ar modde kono court use korte hobe na.
let revisedJomiRegistry3 = jomiRegistry2.replaceAll("sona", "Lal");
let revisedJomiRegistry4 = jomiRegistry2.replace(/Sona/g, "sada");
console.log(revisedJomiRegistry3);
console.log(revisedJomiRegistry4);

// ------------------------------ Replace Strings end ----------------------------------------

// ---- trim(content lekhar agy pore kono extra space thakle remove kore dibe trim(). whiteSpace remove korar jonno use kora hoy) , toUpperCase, toLoweCase-----

let stringWithWhiteSpace = "     Hello Bangladesh. How are You?          ";
let trimingString = stringWithWhiteSpace.trim();
console.log(trimingString);
console.log(trimingString.toUpperCase()); // sob string upper case korte caile toUpperCase use korte hobe.
console.log(trimingString.toLowerCase()); // sob string lower case korte caile toLowerCase use korte hobe.


// ------- charAt, charCodeAt , indexOf, lastIndexOf , split ----------------------
let text = "Bangladeshi, India, Kasmir, Turkey";

console.log(text.charAt(13)); // ---charAt use kore oi index a kon letter ase seta ber kora jabe.
console.log(text.charCodeAt(4)); // --- charCodeAt use kore oi index letter ar code number ki seta jana jabe. oita unique code. ja computer bojar jonno use kore thake.
console.log(text.split()); //--- kono string k jodi array te convert kora lage sei somoy split kora lage. split direct call dile only oita array te convert hoibo. and split("aitar modde jei sign dibo oita por por e kete alada alada array element create hobe.")
console.log(text.indexOf("K")); // kono string ar modde jodi first theke kono later ar index janar dorkar hoy tobei indexOf use korte hobe. and ("ar modde onek word thaklew first letter tar index ber korbe and baki letter gula akstha pele jei word page seitar index of ber korbe. nise dewya holo") 
console.log(text.indexOf("dia"));
console.log(text.lastIndexOf("e")); // kono string ar modde jodi last theke kono later ar index janar dorkar hoy tobei indexOf use korte hobe. 


// ---- includes(kono text ar modde includes a declear kora text ase kina check kore), startsWith(kono text word ba letter startswiths a thaka letter ba word dia suru hoise kina check kore, and aitar modde index set kore dewya jay. je koto number index theke check korbe. start with index first theke index dhore. jei index dewya hobe tor porer letter theke check korbe.), endsWith(kono text / word / letter endsWith a thaka letter ba word dia start hoise kina check kore, and aitar modde index set kore dewya jay. je koto number index theke check korbe. ends with index last theke index dhore. jei index dewya hobe tor porer letter theke check korbe.) ---- 3 tai case sensitive -----we can use this for validation ------
 
let text1 = "Bangladeshi, India, Kasmir, Turkey";

console.log(text.includes("i,"));
console.log(text.startsWith("Ba"));
console.log(text.startsWith("India", 13)); // with index number
console.log(text.endsWith("Turkey"));
console.log(text.endsWith("Kasmir", 10)); // with index number



//------Interpolation with Template Literals---- interview question--------------
// 1. jodi jono string ar modde concat kore onek nia variable add kora hoy , tokon dekte wired lagbe and aita vul howyar chance ase. sei jonno amader aitar good version use korte hobe. jeita k interpoliation bole. aita korte "" ar poriborte `` sign use korte hoy. and jei variable ar value bosabo seita k ${variableName} a add kore dile concat hoye jabe.

let orange = 1000;
let mango = 500;

console.log("I have " + orange + " piece orange and " + mango + " piece mango");
console.log(`I have ${orange} piece orange and ${mango} piece mango. Total fruits ${orange + mango}`);