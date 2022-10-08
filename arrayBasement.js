// array akta variable a values ar collection
// array ar value gula number ,string ,  object , array and array jeguto akta object tai array ar modde function o thakte pare as a property. 

let names = ["saleh", "foysal", "faraz", "arifin"];
const names1 = ["saleh", "foysal", "faraz"];
console.log(names[2]); // array index 0 theke start hoy. so index wise data dekte caile array variable name ar por [] 3rd bracket ar modde index number dile sei onosare data dekhabe.
// ** array last index theke jodi besi number dewya hoy tobe output "undefined" dekhabe.
// jodi kono array ar modde new kono value add korte cawya hoy tobe jei index a add korte cai , array name and index diye oitar modde value declare kore dite hobe.
names[3] = "Raju";

// ** array ar modde kono index ar value poriborton korte caile , array name and index diye new value dite hobe. tobei value update hoye jabe.
names[1] = "junayed";
console.log("names 12", names);

// -- ** array 2 vhabe declare kora jay -- array literal use kora always better
// 1. array literal = [] -- array literal k 3rd bracket diya pocas kora hoy. 
// 2. new array("banana", "mango"); -- object ar jonno aita use jay. but use na kora better.

// *** array ar variable const diya declare korlew aita value change kora jay. aita karon holo const ar value gula k memory te store kortese nah. store kortese array  ar value gula sei jaiga ase tar refaranch. 
names1[3] = "arifin";
names1[1] = "junayed yeafin";
console.log("const names1 22", names1);

// -- array length and last index(array length theke 1 minus korle last index powya jay)
console.log("array length", names1.length)
console.log("always array last index data get", names[names.length - 1])


// array type check
let goodMan = "Saleh";
let taka = 0;
function functionTypeCheck(){
    console.log("Function type check");
}
const objectTypeCheck = {
    hello : true,
    reply : false
}

console.log(typeof names1);
console.log(typeof goodMan);
console.log(typeof taka);
console.log(typeof functionTypeCheck);
console.log(typeof objectTypeCheck);

// array variable type object dekhabe always. tai jodi array ar type check korte cai tobe amader isArray funcationality use korte hobe.
console.log(Array.isArray(names1));

// array ar modde normal loop calanor process
const chada = [100, 300, 1000, 430, 10, 70];
let totalChadaUthese = 0;
for(let index = 0; index < chada.length; index++){
    const element = chada[index];
    totalChadaUthese = totalChadaUthese + element;
   // lop ar modde total chada uthese console korle element wise total dekhabe. sei jonno total dekte loop ar baire console korte hobe.
}
console.log(totalChadaUthese);


// Array Common Method

// *** push *** -- array ar modde value push korle seita array ar last index e joma hoy. aita array ar length return kore.
let newItem = names.push("Kislo");
let newItem2 = names.push("Atib Akbor");
console.log(names);
console.log(newItem2);

// *** unshift *** -- array ar modde value unshift korle seita array ar first index e joma hoy. And baki index gular position change hoy. array unshift korle array ar first e add hoy. aita array ar length return kore. 
let newItem1 = names.unshift("Naju");
let newItem3 = names.unshift("Kutta Mizan");
console.log(names);
console.log(newItem3);

// *** pop *** array ar modde kono value remove korte caile pop use korte hobe. array ar modde  pop use kora hoile and koto index remove kora lagbe seita bole na dile last index ar value remove korbe. and pop array ar modde jei value remove hoise seita return korbe.
let poppedItem = names1.pop();
console.log(names1);
console.log(poppedItem);

// *** shift *** -- array ar modde value shift korle seita array ar first index e remove hoy. And baki index gular position change hoy. array shift korle array ar first e remove hoy. aita array ar length return kore. pop array ar modde jei value remove hoise seita return korbe.
let shiftedItem1 = names1.shift();
console.log(names1);
console.log("shiftedItem1", shiftedItem1);
console.log(names1);


// *** Delete *** -- delete use kora index onosare array ar modde value remove kora jay. tobe oi value ar poriborte empty return kore and array ar length ar kono change hoy na.
let DeletedItem1 = delete names1[1];
// delete names1[0];
// console.log(names1);
console.log("DeletedItem1", DeletedItem1);
console.log(names1);


// *** splice *** splice use kore array theke value index wise remove o kora jay and new value add o kora jay. splice ar 3 ta parameter thakte pare. last parameter mandetory noy. And 1. first parameter kon index theke splice kaj korbe seita nirdes dibe and 2. second parameter koto gula parameter change hobe seita nirdes korbe. And 2 parameter 1st parameter ar opor nirvor kore. 1st parameter e je index dewya thakbe sei index theke value splice kaj korbe. 2nd parameter 1,2,3,.. jei value dewya hobe , oi index theke serial e toto gula index value remove kore dibe. 3. 3rd parametter e onek gula value add kora jay. first index theke serial e 3rd parameter ar value gula oi jaiga te add hobe. Splice jei data remove kore sei data return kore array akare. Slice mul array kokon o change kore nah. but jei index theke remove hobe sei index ar 2nd parameter value porjonto return korbe. splice ar parameter 1ta hole oi index theke last porjonto data k delete kore dibe.

let fruits = ["mango", "apple", "banana", "orange"];
let fruits1 = ["mango", "apple", "banana", "orange", "angur", "khejur"];
// fruits.splice(3, 0 , "kathal", "licu"); 
// splice second index 0 hole kono changes asbe nah. oi index e just 3rd parameter add hobe. and oi index ar por gular index changes hobe.
// fruits.splice(2, 3, "kathal", "licu");  
// splice ar 2nd parameter 0 theke besi hoile oi poriman value remove kore dibe.
let spliceData = fruits.splice(3, 1, "kathal", "licu"); 
let spliceData1 = fruits.splice(3, 1); // 2ta parameter use kore delete ar moto kaj korano jay. tobe aita array theke value remove kore dibe. and length o change hobe.
console.log(spliceData);
console.log(fruits);
console.log(spliceData1);

let spliceFruits = fruits1.splice(3);
console.log("fruits1", fruits1);
console.log("spliceFruits", spliceFruits);


// toString and join
// toString() diya akta array k string e return korano jay. tobe ai khetre value gula akta por por comma(,) dia devided hobe.
// join()/join("-") - join use kore array k string e banano jay and join by default comma nia thake. tobe join ar jonno parameter modde jeita use kora hobe sei onosare array ar value gula devided kora jabe.
console.log(fruits.toString());
console.log(fruits.join());
console.log(fruits.join(""));
console.log(fruits.join("-"));