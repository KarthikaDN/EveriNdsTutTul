import CompanyVar, { NamVar, MobVar, EmailVar, AddVar, NamFnc, NamCls } from "./name-module.js"

console.log(NamVar, MobVar, EmailVar);
console.log("Default var: ", CompanyVar);

// Default export variables can be accessed with any name

console.log(AddVar.City);
NamFnc()
CompanyVar()

var ObjVar = new NamCls()
ObjVar.NamFnc()