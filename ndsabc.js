// console.log("I am nodeJS app");

var ModuleVar = require("./name-module")
// console.log(ModuleVar.NamVak);
// console.log(ModuleVar.MobVak);
// console.log(ModuleVar.EmailVak);

// console.log(ModuleVar.ArrayVak[1]);
// console.log(ModuleVar.ObjVak[1].name);

// ModuleVar.NamVaf()
// console.log(ModuleVar.CubeVaf(3));

// console.log(ModuleVar.NamVak);
// ModuleVar.NamVaf()


//------------------------------------------------------------------------------
// let kartVar = ModuleVar.UserVak
// kartVar.EmpId = 750335
// kartVar.Desg = "Trainee"              // does not return new objects!!!


// let PrakashVar = ModuleVar.UserVak
// PrakashVar.EmpId = 750336         
// PrakashVar.Desg = "Tech Lead"         // does not return new objects!!!

//------------------------------------------------------------------------------

// let kartVar = ModuleVar.UserVaf()
// kartVar.EmpId = 750335
// kartVar.Desg = "Trainee"


// let PrakashVar = ModuleVar.UserVaf()
// PrakashVar.EmpId = 750336
// PrakashVar.Desg = "Tech Lead"



// console.log(kartVar);
// console.log(PrakashVar);

var InfoVar = require("./info.json")

// console.log(InfoVar);

ModuleVar.MultiTaskVaf(1)
ModuleVar.MultiTaskVaf(2)
ModuleVar.MultiTaskVaf(3)
ModuleVar.MultiTaskVaf(4)
ModuleVar.MultiTaskVaf(5)


//---------------------name-module.js

var NamVar = "Karthik"
var MobVar = "1212121212"
var ArrayVar = ["ram", 23, "raj", 34]
var ObjVar = [
    {
        "name": "ram",
        "age": 23
    },
    {
        "name": "raj",
        "age": 34
    },

]
// module.exports.NamVak = NamVar
// module.exports.MobVak = MobVar

let NamFnc = () => {
    console.log("I'm a function!");
}

let CubeFnc = (num) => {
    return num ** 3
}

// module.exports.NamVaf = NamFnc
// module.exports.CubeVaf = CubeFnc

module.exports = {
    "NamVak": "Karthik",
    "NamVaf": () => {
        console.log("I am exportable function");
    },
    "UserVak": {
        "EmpId": "",
        "Desg": ""
    },
    "UserVaf": () => {
        return {
            "EmpId": "",
            "Desg": ""
        }
    }
}

// module.exports = {
//     "NamVak": NamVar,
//     "MobVak": MobVar,
//     "EmailVak": "karthika.dn@everi.com",
//     "ArrayVak": ArrayVar,
//     "ObjVak": ObjVar
// }


module.exports.MultiTaskVaf = (req) => {
    console.log("Customer request number: ", req);

    setTimeout(() => {
        console.log("Order delivered: ", req);
    }, 4000)
}