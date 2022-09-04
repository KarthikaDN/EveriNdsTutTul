var SdbCncVap = require("mysql")
var SdbCncVaj = SdbCncVap.createConnection({
    host: "localhost",
    user: "SdbUsr",
    password: "everinds123",
    database: "namsdb"
})

SdbCncVaj.connect((ErrSdbVar) => {
    if (ErrSdbVar) throw ErrSdbVar
    console.log("Sdb Connected!");
})