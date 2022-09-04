var ServerVap = require("express")
var app = ServerVap()
app.use(ServerVap.json())

app.listen(8000, () => {
    console.log(`Server is running...`)
})

var DreamAryVar = [
    {
        "Name": "Shadab",
        "Plan": "Buy Mustang",
        "Cost": 10000000,
        "Year": "20 Jan 2032"
    },
    {
        "Name": "Chethan",
        "Plan": "Macbook Pro",
        "Cost": 579900,
        "Year": "27 Feb 2027"
    },
    {
        "Name": "Thanuja",
        "Plan": "Independent House with Garden",
        "Cost": 20000000,
        "Year": "1 Oct 2032"
    },
    {
        "Name": "karthika",
        "Plan": "Mercedez Benz",
        "Cost": 15000000,
        "Year": "28 Feb 2030"
    },
    {
        "Name": "Akash",
        "Plan": "Shoes Collection",
        "Cost": 200000,
        "Year": "13 Nov 2025"
    }
]

app.get("/", (req, res) => {
    res.send(`<h1>working!!!</h1>`)
})

//READ
app.get("/dreams", (req, res) => {
    res.json(DreamAryVar)
})

//CREATE
app.post("/dreams", (req, res) => {
    let newObjNamVar = req.body.newObjNamVak
    let newObjPlanVar = req.body.newObjPlanVak
    let newObjCostVar = req.body.newObjCostVak
    let newObjYearVar = req.body.newObjYearVak

    let newObj = {
        "Name": newObjNamVar,
        "Plan": newObjPlanVar,
        "Cost": newObjCostVar,
        "Year": newObjYearVar
    }
    let flag = 0

    for (let i = 0; i < DreamAryVar.length; i++) {
        if (DreamAryVar[i].Name == newObjNamVar && DreamAryVar[i].Cost == newObjCostVar && DreamAryVar[i].Plan == newObjPlanVar && DreamAryVar[i].Year == newObjYearVar) {
            flag = 1
            break
        }
    }

    if (newObjNamVar == "" || newObjPlanVar == "" || newObjCostVar < 0 || newObjYearVar == "") {
        res.send(`<h2>Values cannot be empty!</h2>`)
    }
    else {
        if (flag == 1) {
            res.send(`<h2>object already exists!!!</h2>`)

        }
        else {
            DreamAryVar.push(newObj)
            res.json(DreamAryVar)
        }
    }
})

//UPDATE
app.put("/dreams/:id", (req, res) => {
    let indexVar = req.params.id

    let newObjNamVar = req.body.newObjNamVak
    let newObjPlanVar = req.body.newObjPlanVak
    let newObjCostVar = req.body.newObjCostVak
    let newObjYearVar = req.body.newObjYearVak

    let newObj = {
        "Name": newObjNamVar,
        "Plan": newObjPlanVar,
        "Cost": newObjCostVar,
        "Year": newObjYearVar
    }
    let flag = 0

    for (let i = 0; i < DreamAryVar.length; i++) {
        if (DreamAryVar[i].Name == newObjNamVar && DreamAryVar[i].Cost == newObjCostVar && DreamAryVar[i].Plan == newObjPlanVar && DreamAryVar[i].Year == newObjYearVar) {
            flag = 1
            break
        }
    }

    if (newObjNamVar == "" || newObjPlanVar == "" || newObjCostVar < 0 || newObjYearVar == "") {
        res.send(`<h2>Values cannot be empty!</h2>`)
    }
    else {
        if (flag == 1) {
            res.send(`<h2>object already exists!!!</h2>`)

        }
        else {
            DreamAryVar[indexVar] = newObj
            res.json(DreamAryVar)
        }
    }

})

//delete
app.delete("/dreams/:id", (req, res) => {
    let indexVar = req.params.id
    DreamAryVar.splice(indexVar, 1)
    res.json(DreamAryVar)
})

