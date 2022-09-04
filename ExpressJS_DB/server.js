var ServerVap = require("express")
var app = ServerVap()
app.use(ServerVap.json())



var SdbCncVap = require("mysql")
var SdbCncVaj = SdbCncVap.createConnection({
    host: "localhost",
    user: "SdbUsr",
    password: "UsrPwd4Sdb",
    database: "NamSdb"
})

SdbCncVaj.connect((ErrSdbVar) => {
    if (ErrSdbVar) throw ErrSdbVar
    else console.log("Sdb Connected!");
})

// var JoiVap = require("joi")
// var ValidatorVap = require("express-joi-validation").createValidator({})

// let UsrSchemaVar = JoiVap.object({
//     "NamVak": JoiVap.string().alphanum().min(3).max(30).required(),
//     "MobVak": JoiVap.string().length(10).regex(/^[6-9][0-9]{9}$/).required(),
//     "MylVak": JoiVap.string().email({ minDomainAtoms: 2 }).required(),
//     "PwdVak": JoiVap.string().regex(/^[a-zA-Z0-9]{8,20}$/).required(),
// })



app.listen(8000, () => {
    console.log(`Server is running...`)
})

app.get("/user", (ReqNdsVar, ResNdsVar) => {
    var SqlQueryVar = "SELECT UidCol,NamCol,MblCol,MylCol FROM NamTbl"
    SdbCncVaj.query(SqlQueryVar, (ErrSdbVar, ResSdbVar) => {
        if (ErrSdbVar) throw ErrSdbVar
        ResNdsVar.json(ResSdbVar)
    })
})

app.get("/user/:uid", (ReqNdsVar, ResNdsVar) => {
    var uid = ReqNdsVar.params.uid
    var SqlQueryVar = `SELECT UidCol,NamCol,MblCol,MylCol FROM NamTbl WHERE UidCol=${uid}`

    SdbCncVaj.query(SqlQueryVar, (ErrSdbVar, ResSdbVar) => {
        if (ErrSdbVar) throw ErrSdbVar
        ResNdsVar.json(ResSdbVar[0])
    })
})

app.post("/user", (ReqNdsVar, ResNdsVar) => {

    var UsrVar = ReqNdsVar.body
    var SqlQueryVar = `INSERT INTO NamTbl (NamCol,MblCol,MylCol) VALUES ("${UsrVar.NamVak}","${UsrVar.MblVak}","${UsrVar.MylVak}")`
    SdbCncVaj.query(SqlQueryVar, (ErrSdbVar, ResSdbVar) => {
        if (ErrSdbVar) throw ErrSdbVar
        ResNdsVar.json(ResSdbVar)
    })
    // var flag = 0;
    // if (UsrVar.NamVak == "" || UsrVar.MblVak == "" || UsrVar.MylVar == "") {
    //     ResNdsVar.statusCode = 400
    //     ResNdsVar.send("<h1>should not be empty</h1>")
    // }
    // else if (UsrVar.NamVak.charAt(0) != UsrVar.NamVak.charAt(0).toUpperCase() || UsrVar.NamVak.match(/[0-9]|[!@#$%^&*]/g)) {
    //     ResNdsVar.statusCode = 400

    //     ResNdsVar.send("<h1>Name pattern error</h1>")
    // }

    // else if (UsrVar.MblVak.trim().length != 10 || UsrVar.MblVak.trim().match(/[!@#$%^&*]|[a-zA-Z]|^[0-5]/g)) {
    //     ResNdsVar.statusCode = 400
    //     ResNdsVar.send("<h1>Mobile pattern error</h1>")
    // }
    // else if (!UsrVar.MylVak.match(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/g)) {
    //     ResNdsVar.statusCode = 400
    //     ResNdsVar.send("<h1>Email pattern error</h1>")
    // }
    // else {

    //     UsrVar.NamVak.split(" ").forEach(elem => {
    //         if (elem.charAt(0) != elem.charAt(0).toUpperCase() || elem == "") {
    //             ResNdsVar.send("<h1>Name pattern error - second name shoud starts with capital error and no space between names</h1>")
    //             flag = 1

    //         }
    //     });

    //     if (flag != 1) {
    //         var SqlQueryVar = `INSERT INTO NamTbl (NamCol,MblCol,MylCol) VALUES ("${UsrVar.NamVak}","${UsrVar.MblVak}","${UsrVar.MylVak}")`
    //         SdbCncVaj.query(SqlQueryVar, (ErrSdbVar, ResSdbVar) => {
    //             if (ErrSdbVar) throw ErrSdbVar
    //             ResNdsVar.json(ResSdbVar)
    //         })
    //     }

    // }

})

app.put("/user/:uid", (ReqNdsVar, ResNdsVar) => {
    var uid = ReqNdsVar.params.uid
    var UsrVar = ReqNdsVar.body

    var SqlQueryVar = `UPDATE NamTbl SET NamCol="${UsrVar.NamVak}",MblCol="${UsrVar.MblVak}",MylCol="${UsrVar.MylVak}" WHERE UidCol=${uid} `
    SdbCncVaj.query(SqlQueryVar, (ErrSdbVar, ResSdbVar) => {
        if (ErrSdbVar) throw ErrSdbVar
        ResNdsVar.json(ResSdbVar)
    })
})

//api to update only email id - patch
app.patch("/user/:uid", (ReqNdsVar, ResNdsVar) => {
    var uid = ReqNdsVar.params.uid
    var MylVar = ReqNdsVar.body.MylVak

    var SqlQueryVar = `UPDATE NamTbl SET MylCol="${MylVar}" WHERE UidCol=${uid} `
    SdbCncVaj.query(SqlQueryVar, (ErrSdbVar, ResSdbVar) => {
        if (ErrSdbVar) throw ErrSdbVar
        ResNdsVar.json(ResSdbVar)
    })
})

app.delete("/user/:uid", (ReqNdsVar, ResNdsVar) => {
    var uid = ReqNdsVar.params.uid
    var SqlQueryVar = `DELETE FROM NamTbl WHERE UidCol=${uid}`

    SdbCncVaj.query(SqlQueryVar, (ErrSdbVar, ResSdbVar) => {
        if (ErrSdbVar) throw ErrSdbVar
        ResNdsVar.json(ResSdbVar)
    })
})

app.post('/product', (req, res) => {

    var ProDet = req.body

    var SqlQryVar = `INSERT INTO PrdTbl (TitCol,DetCol,CostCol) VALUES ("${ProDet.TitVak}","${ProDet.DetVak}","${ProDet.CostVak}")`

    SdbCncVaj.query(SqlQryVar, (ErrSdbVar, ResSdbVar) => {

        if (ErrSdbVar) throw ErrSdbVar

        res.json(ResSdbVar)

    })

})

app.post('/order', (req, res) => {

    var OrdDet = req.body

    var SqlQryVar = `INSERT INTO OrdTbl (UsrUidCol,PrdUidCol,QntCol) VALUES (${OrdDet.UsrUidVak},${OrdDet.PrdUidVak},${OrdDet.QntColVak})`

    SdbCncVaj.query(SqlQryVar, (ErrSdbVar, ResSdbVar) => {

        if (ErrSdbVar) throw ErrSdbVar

        res.json(ResSdbVar)

    })

})



