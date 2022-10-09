// object
// object kw 2 bhabe use kora jay. literal and new object
// literal object ar jonno {} - 2nd bracket / carly bracket use kora hoy.
// object key diya value gula access kora jaite pare. 
// object ar modde string , number , funcation , object and array rakha hay.
// object key name multiple hoile camel case(moneyNeed) or string diya("money-need/money_need") declare kora jay.
// object ar value gula 2 bhabe access kora jabe. 1. dot notation , 2, array notation (string akar e data key name thakle array notation use korte hobe.)
const smartPhone = {
    brand : "Samsung",
    model : "Note 10 pro",
    year : 2022,
    makeCall : function(phoneNumber){
        console.log(`Now making a call to ${phoneNumber}`);
    },
    "make-year" : "2020",
    users : ["rahim", "litu", "karim"],
    lastBuy: {
        shop: "Phone Pagla",
        date: "2022-05-19"
    }
};

console.log(smartPhone);
console.log(smartPhone.brand);

// object function access
let makeACall = smartPhone.makeCall("0011122221") // number hisebe multiple 0 use korle akta 0 output asbe. and string akar e dile sob kiso access korte parbe
console.log(makeACall); // aita undefined asar karon holo , function kono kisu return kore nai.

console.log(smartPhone.users[2]);
console.log(smartPhone.lastBuy.shop);

// dot notation
console.log(smartPhone.model);

// array [] notation
console.log(smartPhone["make-year"])


//----- Show Object in DOM ---


// document.getElementById("objectShowing").innerHTML = smartPhone; 
// ai bhabe send korle output objectobject asbe. dom ar modde data string akar e pathaite hoy.

// object dom innerHTML use kore dekte caile text akar e dekhano sombob.
// document.getElementById("objectShowing").innerHTML = smartPhone.brand; 

// dom innerHTML a object akar e pathite caile loop use kora pathaite hobe.

// object dom ar modde dekhaite hobe.sei jonno variable text nisci.
let objectDom = "<ul>";

// for in loop use kore
for ( const item in smartPhone) {
 /*    console.log(item);
     // item console log korle just item ar key gula dekhabe.
    console.log(smartPhone.item); 
    // ai bhabe use korle output undefined asbe. because item name e kono key name nai.
    console.log(smartPhone[item]); 
    // object k loop kore key ar value gula dekte caile object ar por array notation use kore, array ar modde item/loop name use korle output sob item ak sathe pawya jabe. */

    if(item == "lastBuy"){
        objectDom = objectDom + `<li>${item}<ul>`;
        for(const lastBuyItem in smartPhone[item]){
            objectDom = objectDom + `<li>${lastBuyItem} : ${smartPhone[item][lastBuyItem]}</li>`
        }
        objectDom = objectDom + "</li></ul>"
    }
    else{
        objectDom = objectDom + `<li>${item} : ${smartPhone[item]}`;
    }
}
objectDom = objectDom + "</ul>";
// document.getElementById("objectShowing").innerHTML = objectDom;


//-- loop use na kore onno opay e amra object k dom e pathaite pari. seita holo - Object.values() . aita korle object k array to rupantor kore fele.

let objectDomObjectDotValues = Object.values(smartPhone); // array ar values gula dom e pawya jabe . key gula jabe na.
// document.getElementById("objectShowing").innerHTML = objectDomObjectDotValues;

// - JSON.stringify() -- use korle key and value sob gula string hoye jabe. and JSON.stringify() use korle object ar modde function thakle ta innerHTML ar modde jabe nah. oita skip korbe.
const smartPhone1 = {
    brand : "Samsung",
    model : "Note 10 pro",
    year : 2022,
    makeCall : function(phoneNumber){
        console.log(`Now making a call to ${phoneNumber}`);
    },
    "make-year" : "2020",
    users : ["rahim", "litu", "karim"],
    lastBuy: {
        shop: "Phone Pagla",
        date: "2022-05-19"
    }
};
// document.getElementById("objectShowing").innerHTML = JSON.stringify(smartPhone1);


// --- this-----

// method -- jodi kono object ar modde funcation thake seita k method bole.
let simpleThis = "simple this";
const thisMethodWithSmartphone = {
    brand : "Samsung",
    model : "Note 10 pro",
    year : 2022,
    makeCall : function(phoneNumber){
        // console.log(`Now making a call to ${phoneNumber} from ${this.simpleThis}`); // undefined asbe. because this method ar modde use kora hoise.
        console.log(`Now making a call to ${phoneNumber} from ${this.model}`); // object ar kono method ar modde this use korle oi object k this nirdes kore.
    },
    "make-year" : "2020",
    users : ["rahim", "litu", "karim"],
    lastBuy: {
        shop: "Phone Pagla",
        date: "2022-05-19"
    }
};
thisMethodWithSmartphone.makeCall("012222");


//
// only this use korle , ai this global scope ba global object k refer kore.
"use-strict" // use kore jodi only this use kora hoy tobew same output dibe. 
console.log(this); // browers window ta k return korbe.

// function ar modde this
function hi() {
    console.log(`Hi from ${this}`);
}
hi();

// event handler ar modde this use kora jay. aita index html ar modde kora holo

document.getElementById("objectShowing").innerHTML = JSON.stringify(thisMethodWithSmartphone);