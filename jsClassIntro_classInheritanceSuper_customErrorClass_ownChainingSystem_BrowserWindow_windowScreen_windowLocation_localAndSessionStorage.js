// javascript class 
// Classes are a template for creating objects. 

// Class k amra jokon new kore instantiate korbo, orthat newMobile phone ai ta k function ref korte hobe. ai je function , ar modde jodi kiso parameter thake pare and nw thakte pare. And jodi parameter thake sei parameter k pass korbo . pass korar por ja hobe , ai class ta new kore instantiate hoye jabe.Orthat ai class ta k onno jaiga instantiate korte cai or class ta k use korte cai . tahole amader ai ta k instantiate korte hoy and ai class ta k amader kase oi khane(je jaiga use korbo) niye object akar e jeye prodan kore se tai holo constructor bole.

// The constructor method is a special method for creating and initializing an object created with a class . There can only be one special method with the name "constructor" in a class. A SyntaxError will be thrown if the class contains more than one occurrence of a constructor method.

// class make korte caile first a class use korte hoy.

// class ar modde constructor function use korte hoy. ai function ar name e holo constructor.

// class ta onno kothay o use korte caile constructor ar modde parameter use kora hoy. And amra jani kono object ar function er modde this use korle oi full object k represent kore thake.

class MobilePhone{
    constructor(brand, model) {
        this.brand = brand; // this use kore brand ar value jeita dewya hobe seita brand akar ei thakbe. sei ta nirdes kore.
        this.model = model;
    }

    getModel(){
        return this.model;
    }

    getBrand(){
        return this.brand;
    }

    constructorInTextString(){
        return `using ${this.model} of ${this.brand}`
    }
}


// Class Inheritance & Super

// Akta class jodi onno ar akta class er property use korte cay tahole je system ase seita holo extending.

// jodi kono akta class declear kore puraton kono class k parents korte cai and sei class k access korte cai tobe new class k bole dite hobe aita kon class k extends kore.

// class ar modde constructor make kore parents parameter gula and new parameter add korte hobe. new je parameter add hobe seitaw ki value nibe seita bole dite hobe. And super ar modde parent theke jei parameter asce sei gula use korte hobe.

// super -- amra je class k extend kore ar akta class banasci oitar constructor jodi kono kiso pass korte hoy , tokon amra je class ta k extend banasci sei class ar vitor , supur ar vitor seta k pass kore dibo. tahole ai supur method jeta ase aita te data ase , sei data parent a cole jabe. ar fole amra sob data peye jabo. 

class Smartphone extends MobilePhone {
    constructor(brand, model, videoCallFeature) {
        super(brand, model); // parent class theke asce.
        this.videoCallFeature = videoCallFeature;
    }
}

let newMobilePhone = new Smartphone("Nokia", "3000", false);
// let newMobilePhone = new MobilePhone("Vivo", "v33s", true);
console.log(newMobilePhone.constructorInTextString());
console.log(newMobilePhone.getModel());
console.log(newMobilePhone.getBrand());



// ------- Custom Error Class --- custom error class make kore use kora.
class NotFoundError extends Error{
    constructor(name, ...rest){
        super(...rest)
        this.name = name;
        if(Error.captureStrackTrace){
            Error.captureStrackTrace(this, NotFoundError);
        }
    }

    toJSON () {
        let name = this.name;
        let message = this.message;
        let stack = this.stack;
        return {name, message}
    }
}

try {
    throw new NotFoundError("NotFoundError", "This uer is not found.");
}
catch(error){
    if(error instanceof NotFoundError){
        console.log({
            "error" : 404,
            "details" : error.toJSON()
        });
    }
    else {
        console.log("Oh No");
    }
}



//----- Make your own Method Chaining System ---
// ai bhabe chain system a calculator make kora jay.
function Calculator(){
    this.result = 0;

    this.add = function (newNumber){
        this.result = this.result + newNumber;
        return this;
    }

    this.substruct = function (newNumber) {
        this.result = this.result - newNumber;
        return this;
    }

    this.getResult = function(){
        return this.result;
    }
}

let newCalculator = new Calculator();
console.log(
    newCalculator.add(3).add(7).substruct(13).substruct(5).add(10).substruct(6).getResult()
);





// Browser Window (BOM - Browser object model), bom is a object.

// how to get window innerHeight and innerWidth
console.log(window.innerHeight);
console.log(window.innerWidth);

// window use kore open and close -- index html e function call kora holo
/* function windowManagement(){
    window.open("https://google.com", "_blank", "width=800, height=700")
} */

function windowManagement(open){
    let googleWindow;
    if(open) {
       googleWindow = window.open("https://google.com", "_blank", "width=800, height=700")
    } else{
        googleWindow.close();
    }
}



//-------Window Screen-------

// how to get screen height and width -- ai static thakbe. because aita screen ar orginal width and height . aita zoom in out ar opor nirbor kore nah.
console.log(screen.width);
console.log(screen.height);

// screen availHeight and availWidth -- screen a taskbar thakle seita remove kore oitar width and height diya thake.
console.log(screen.availHeight);
console.log(screen.availWidth);


// screen.colorDepth diya screen ar color depth jana jabe. ar mane koto gula color aita to show korano sombob.
console.log(screen.colorDepth, "bit means 16.7 million color show korano sombob");

// joto besi bit hobe toto clear video photo dekhe valo lagbe.
console.log(screen.pixelDepth);




// ----- Window Location ----- location use kore browser ar location and details pawya jay.
console.log(location);
console.log(location.href); // url of the current page
console.log(location.hostname); // aita dara root domain ba IP ar under a deployed thake tobei amra use hostname pabo.
console.log(location.protocol); // protocol diya // ar agy jinis check kore. http, https. aita secure ase kina change kora jay.
console.log(location.pathname); // pathname diya domain ar por jeita ase seita dekhabe. like, domain.com/blogs/post - ai gaiga pathname blogs/post
console.log(location.port); // koto number port e ase seita check kore.
// console.log(location.assign("https://google.com")); 
// aita assign kore link ar page e pathai dibe. khun besi use kora lagy nah.



// ----- Window Navigator & History -------------

// navigator
console.log(navigator.cookieEnabled); // cookieEnabled true or false check korar jonno use kora jay.
console.log(navigator.appName); // appName check kora jay
console.log(navigator.appCodeName); // appCodeName check kora jay
console.log(navigator.product); // product name check kora jay
console.log(navigator.appVersion); // app version check korar jonno.
console.log(navigator.userAgent);
console.log(navigator.platform); // kon platform use korci seta janar jonno use kora hoy.
console.log(navigator.onLine); // online e asi kina check korar jonno aita use kora hoy.

// history -- history check korte use kora hoy
console.log(history.back);
console.log(history.forward); 




// --------- Local Storage & Session Storage ----------

// local storage a data set and get kora opay
localStorage.setItem("email", "saleh@gmail.com"); // setItem korte 2 ta value dite hobe. 1st key name and second holo key value

console.log(localStorage.getItem("email"));


let userInfo = {
    name:"foysal",
    email: "sadsdf@gmail.com",
    phone: "01201282"
};

// localStorage.setItem("userInformation", userInfo); 
// ai bhabe direct object pathaite caile data jabe nah. object object jabe. aita string nite pare. 
// ai problem theke mukti paite JSON.stringfy() kore ar modde object pathaite hobe.
localStorage.setItem("userInformation", JSON.stringify(userInfo));
let localStorageData = localStorage.getItem("userInformation"); // object get korle amra string akar e pabo. tai object ar moto use korte parbo nah.

let localStorageDataParse = JSON.parse(localStorageData); // JSON.parse korle amra data object akar e pabo. then object ar moto access korte parbo. array ar jonnow parse kore nite hobe. because localstorage e data always string akar ei save hoy.

console.log(localStorageDataParse);
console.log(localStorageDataParse.phone);
// console.log(localStorage.getItem("userInformation"))


// jwt auth use korar normal way
localStorage.setItem("jwt", "sdflsjdfosjdfowjeorjowiejrowejrlwjeriojroqjlrwjlqjwjljlrjqlwjr");
console.log(localStorage.getItem("jwt"))


// localStorage.removeItem() and clear()
console.log(localStorage.removeItem("userInformation")); // aita use korle local storage theke ai item remove hoye jabe.

localStorage.clear(); // use korle localstorage all clear hoye jabe.



// sessionStorage --- funcation same as like as localStorage. item add ,get , remove korle same process follow korte hobe.

sessionStorage.setItem("jwt", "sdflsjdfosjdfowjeorjowiejrowejrlwjeriojroqjlrwjlqjwjljlrjqlwjr");
console.log(sessionStorage.getItem("jwt"));

// SESSION STORAGE use korle kiso session ses hoye jele oita kaj kore nah. jodi window clear kore dewya hoy. session e thaka data remove hoye jbe. but LOCAL STORAGE a thaka data remove hoye nah. computur off kore back korlew data pawya jabe.aita website and domain wise kaj kore.