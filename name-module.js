// export default {
//     "name": 'kart',
//     "age": 21
// }
export default () => {
    console.log("hello i am default func");
}  //No function name for default
//One file can have only one default export!
export var NamVar = "Shadab"
export var MobVar = 1111222233
export var EmailVar = "karthika.dn@everi.com"

export var AddVar = {
    "Area": "Haleyangadi",
    "City": "Mangalore",
    "Pin": 574146
}

export var NamFnc = () => {
    console.log("I am a ES6 function!");
}

export class NamCls {
    NamFnc() {
        console.log("I am a function inside the class");
    }
}


