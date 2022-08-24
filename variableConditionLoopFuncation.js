// console.log("this is variable.");


// ------------------ variable --------------------------------------------------------
// What is variable ?
// => 

// 4 types of variable in javascirpt
/* 
1. var -- let use korle variable ar modde new kore abr data add kora jay.
2. let -- let use korle variable ar modde new kore abr data add kora jay.
3. const -- kono variable ar man jodi change na hoy tobei const variable use korte hobe. kono variable ar man jodi change kora lage and jodi const use kori taile syntax error kaite pari. so variable use korar somoy amra beper ta mathay rakbo.
4. without any datatype name
*/
var sum = "Mango";
let math = 11;
const earth = "earth look like a rectangle" 
see = "this is a laptop";
withoutVariableDatatype = 111;

// console.log(sum);
// console.log(math);
// console.log(earth);
// console.log(see);
// console.log(withoutVariableDatatype);

// 	Assignment operator sign is =
// operator( if we check in google then we can get operator behaviour) and statement

var apple = 112;
var watches = 233;

var totalCosting = apple + watches;
var inMyWalletHaveTotalMoney = 311;

var KotoTakaBakiThaklo = totalCosting - inMyWalletHaveTotalMoney;
dharNilam = 200;

inMyWalletHaveTotalMoney = inMyWalletHaveTotalMoney + dharNilam;
akonAmrKaseThaklo = inMyWalletHaveTotalMoney - totalCosting;

// console.log(totalCosting);
// console.log(KotoTakaBakiThaklo);
// console.log(inMyWalletHaveTotalMoney);
// console.log(akonAmrKaseThaklo);

var amraMotoMonos = 2;
var duiJonVagKoreNilePabo = akonAmrKaseThaklo / amraMotoMonos;
var vagerTakarVognogso = akonAmrKaseThaklo % amraMotoMonos;

const duiJonAksoKoreJomeDilam = 100;
let akonDuiJonJomaDilam = amraMotoMonos * duiJonAksoKoreJomeDilam;

// console.log("duiJonVagKoreNilePabo", duiJonVagKoreNilePabo);
// console.log("vagerTakarVognogso", vagerTakarVognogso);
// console.log("akonDuiJonJomaDilam", akonDuiJonJomaDilam);

// javascript is a interprated Language - ata line by line compile kore output ber kore

// ------------------ variable  end--------------------------------------------------------


// ------------------ Conditional Statement  start ----------------------------------------
// kono issue jodi akta sorto ba condition ar upor base kore kora dorkar hoy tobei amra condition statement use korte pari.
// In JavaScript we have more conditional statements
/* 
1. if -- je kono akta sorto thakle if use korte hobe. if condition use korle () 1st bracket ar modde condition dite hobe.-- if(seletedPaymentMethod = "Rocket"){console.log("hello return")}; - aita if conditon ar rules.

2. else if -- if condition use korar por o aro condition use kora dorkar hoile else if use korte hobe. if condition false hoile else if use kore conditon check korbe and compile hobe. Amra chaile onek gula conditon thakel else if onek gula use korte pari. else if condition use korle () 1st bracket ar modde condition dite hobe.-- if(seletedPaymentMethod == "Rocket"){console.log("hello return");} else if(SelectedPaymentMethod === "rocket" ) {console.log("rocket");};; - aita else if conditon ar rules.

3. else --- jodi kono sortow na mele tobe else condition ar data return korbe. ata if / and else if ovay ar sob ses e use korte hobe.else use korle 1st () braket lagbe na. jodi kono condition kaj na kore tobei else kaj korbe.
if(seletedPaymentMethod == "Rocket"){console.log("hello return");} 
else if(SelectedPaymentMethod === "rocket" ) {console.log("rocket");} -- else use korte caile else if use korlew kora jabe na korle kora jabe. but else sob ses a likte hobe.
else{
    console.log("kono tai kajer na.")
}; - aita else conditon ar rules.

** jodi if or else if ar modde conditon true hoye jay tobe ar else condition check korbe na.

4. switch -- if, else if , else ar poriborte amra switch case use korte pari. Switch hoile swich ar modde amra conditon use korte caile case and break use korte hobe. onek gula condition thale akta case likte hobe and cose ar modde conditon value dite hobe je ta ke check korbe then : use korte hobe. and akta case ses hole break; korte dite hobe. ai bhabe onek gula condition use kora jaite pare. and sob ses a default hisebe kiso use kora jaite pare. and default: use korte hobe. default holo else ar moto kaj korbe. 

--- switch ar syntax
switch(expression) {
  case x:
    // write here something
    // code block
    break;
  case y:
    // write here something
    // code block
    break;
  default:
    // write here something
    // code block
    break;
}

*/

/* var seletedPaymentMethod = "Rocket";

if (seletedPaymentMethod == "rocket") {
    console.log("Jibon judde rocket agaiya");
} 
else if (seletedPaymentMethod === "Rocket") {
    console.log("Jibon judde ROcket agaiya ");
}
else {
    console.log("jibon judde Rocket agaiya ase. ager condition vul");
} */


var seletedPaymentMethod = "Rocket";

if (seletedPaymentMethod == "rocket") {
    console.log("Jibon judde rocket agaiya");
} 
else if (seletedPaymentMethod === "ROcket") {
    console.log("Jibon judde ROcket agaiya ");
}
else {
    console.log("jibon judde Rocket agaiya ase. ager condition vul");
}


switch(seletedPaymentMethod) {
    case "rocket":
      console.log("Jibon judde rocket agaiya");
      // code block
      break;
    case "ROcket":
        console.log("Jibon judde ROcket agaiya ");
      // code block
      break;
    default:
        console.log("jibon judde Rocket agaiya ase. ager condition vul");
      // code block
      break;
}


// ------------------ Conditional Statement  end ----------------------------------------



// ------------------ Loop  start ----------------------------------------
/* 
loop ---- akoi kaj bar bar korar jonno loop use kora hoy. loop ar suru and ses ase. suru theke ses porjonto jete akta way follow korte hobe and condition kore jabe. atai loop. orthat step wise loop kaj korbe.
* there is many type of loop
1. for loop -- loop ar 1st bracket ar modde 1st one holo starting step , 2nd holo ending step, 3rd hobe ki bhabe / kon process a agabe.

2. while loop -- while loop ar first () bracket a just last conditon thakbe. and starting condtion , jeta variable hile ase oita while ar agy use korte hobe. and 3rd part increment / decrement while block ar sob ses a thakbe.

3. do while loop

*/

let stepStarts = 1;
let stepEnds = 32;

// for loop
for(let shiri = stepEnds; shiri >= stepStarts; shiri-=4) { 
  // step == ++ hole , setp ar sathe ar akta step jog hole. orthat 1 ghor kore barate hole ++ use kora jay. komailte hoile -- use korte hobe. And 2 ba totodhik baraite caile stepVariable+=3(joto man barbe to use korte hobe. - korte caile - use korte hobe. Addition assignment ---- shiri+=3, Subtraction Assignment----shiri-=4)
  
  console.log("ami akon " + shiri +" number line a asi."); // + sign use kore string and integer ak sathe kora hoy. javascript concation bole.
}


// while loop
let shiri = stepStarts;
while (shiri <= stepEnds) {
  console.log("ami akon " + shiri +" number line a asi while theke.");
  // while loop a increment / decrement while block ar sob ses a thakbe. karon holo iha akta step nibe first a and increment / decreament pele ai onosare kaj korbe. oita ses kore abr condition a jabe. joto somoy condition ses hobe na loop colte thakbe.

  // increment / decrement ar agy loop ja return korbe seta korte hobe.

  shiri++;
};

// ***** for and while ar modde parthoko(google korte hobe)
// for loop use korle agy loop ar modde ki hobe seta check kore nibe. loop ar condition use value besi hole sei jaiga theke excution end hoye jabe.
// while loop agy conditon check korbe and then increment / decrement ar kaj korbe. 
// ------------------ Loop  end ----------------------------------------



// ------------------ function  start ----------------------------------------
/* 
1. funcation ar name  dite hobe (like: addNumber)
2. () 1st braket ar modde obosoi parameter dite hobe.
3. function sob ses a oboosoi call korte hobe. call na korle output asbe na.
*/

function addNumber(number1 , number2 ){ // () ar modde je gula thake sei gula k parameter bole.
  // console.log(number1 + number2)
  return number1 + number2;
}

// addNumber(2 , 3) // funcation jei jaiga call kora hoy seta k arugment  bole.
let mulBeton = 3000;
// let providentFunt = addNumber(500, 50); 
// argument - ai bhabe alada alada bhabe kora jay and obbosoi finalBeton line a function call korte parbo.
// let finalBeton = mulBeton - providentFunt;
let finalBeton = mulBeton - addNumber(500, 10);
console.log(finalBeton);


// string function o hobe

function betonBankEAsbe(mulBeton , providentFund , tax , name){
   let betonKatbe = (mulBeton * tax)/100;
   console.log("betonKatbe", betonKatbe);
   let totalBetonKatbe = providentFund + betonKatbe;
   let betonPabe = mulBeton - totalBetonKatbe;
   return "saleh total beton pabe " + betonPabe + " taka";
}

// betonBankEAsbe(30000, 5000 , 20 , "saleh");
console.log(betonBankEAsbe(25000, 5000 , 20 , "saleh"));

// ------------------ function  end ----------------------------------------