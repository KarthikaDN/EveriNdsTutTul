const { request } = require("express");
var ServerVap = require("express")
var ServerVaj = ServerVap()
ServerVaj.use(ServerVap.json())

ServerVaj.listen(8000, () => {
    console.log("server started and running!");
})

ServerVaj.get("/", (req, res) => {
    res.send("<h1>Welcome to awesome website!</h1>")
})

ServerVaj.get("/contact", (req, res) => {
    res.send("<h1>You can contact me on 9108681794</h1>")
})

ServerVaj.get("/about", (req, res) => {
    res.send("<h1>I hate Nonveg!</h1>")
})

//get = for getting the information
ServerVaj.get("/user/:username/:bill", (req, res) => {
    var UsrNamVar = req.params.username
    var BillVar = req.params.bill
    res.send(`<h1>Hello ${UsrNamVar}... Nice meeting you! Please pay ${BillVar}</h1>`)


})


//post - for adding or craeting the information
ServerVaj.post("/info", (req, res) => {
    var UserPwdVar = req.body.PwdVak
    if (UserPwdVar.length < 8) {
        res.send(`<h1>password should be atleast 8 characters long`)
    }
    else if (!UserPwdVar.match(/[0-9]/)) {
        res.send(`<h1>atleast one digit required!</h1>`)
    }
    else if (!UserPwdVar.match(/[@|#|$|%|&|^]/)) {
        res.send(`<h1>atleast one special character required!</h1>`)
    }
    else {
        res.send(`<h1>Your password is ${UserPwdVar}</h1>`)

    }
})


//put - for updating entire information
ServerVaj.put("/info/:uid", (req, res) => {
    var UidVar = req.params.uid
    var MobVar = req.body.MobVak

    res.send(`<h1>${MobVar} has been updated for id ${UidVar}</h1>`)
})

//patch - for updating only one information
ServerVaj.patch("/info/:uid", (req, res) => {
    var UidVar = req.params.uid
    var MobVar = req.body.MobVak

    res.send(`<h1>${MobVar} has been updated for id ${UidVar}</h1>`)
})


//delete - deletes the entire info
//for deleting one info we can use patch method
ServerVaj.delete("/info/:uid", (req, res) => {
    var UidVar = req.params.uid
    // var MobVar = req.body.MobVak

    res.send(`<h1>Info related to  id ${UidVar} has been deleted!</h1>`)
})

//FOR ROUTING RESUME.HTML PAGE

ServerVaj.get("/resume", (req, res) => {
    res.sendFile("resume.html", { root: __dirname })
})

//download file--------------
ServerVaj.get("/DownloadImage", (req, res) => {
    let FileVar = `${__dirname}/storage/internships.jpg`
    res.download(FileVar)
})


//------------------------array crud operation-------------------------------//
var WishArrVar = ["phone", "clothes", "Watch", "shoes", "Ear buds"]

ServerVaj.get("/wish/", (req, res) => {
    res.json(WishArrVar)
})

ServerVaj.get("/wish/:idx", (req, res) => {
    var IdxVar = req.params.idx
    res.json(WishArrVar[IdxVar])
})

ServerVaj.post("/wish", (req, res) => {
    var WishVar = req.body.WishVak.trim()
    CheckValidWishFnc(WishVar, -1, req, res)
    // if (WishVar == "" || WishArrVar.includes(WishVar)) {
    //     res.send(`<h1>Element cannot be empty! and elements cannot be repeated!</h1>`)

    // }

    // else {
    //     WishArrVar.push(WishVar)
    //     res.json(WishArrVar)
    // }

})

ServerVaj.put("/wish/:idx", (req, res) => {
    var IdxVar = req.params.idx
    var WishVar = req.body.WishVak.trim()
    CheckValidWishFnc(WishVar, IdxVar, req, res)
    // if (WishVar == "" || WishArrVar.includes(WishVar)) {
    //     res.send(`<h1>Element cannot be empty! and elements cannot be repeated!</h1>`)

    // }

    // else {
    //     WishArrVar[IdxVar] = WishVar
    //     res.json(WishArrVar)
    // }

})


ServerVaj.delete("/wish/:idx", (req, res) => {
    var IdxVar = req.params.idx
    WishArrVar.splice(IdxVar, 1)
    res.json(WishArrVar)
})



var CheckValidWishFnc = (WishVar, idx = -1, req, res) => {
    if (WishVar == "" || WishArrVar.includes(WishVar)) {
        res.send(`<h1>Element cannot be empty! and elements cannot be repeated!</h1>`)

    }

    else {
        if (idx == -1) {
            WishArrVar.push(WishVar)
        }
        else {
            WishArrVar[idx] = WishVar
        }
        res.json(WishArrVar)
    }
}