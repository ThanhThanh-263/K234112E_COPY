const express = require("express")
const app = express()
const port = 3000
const morgan = require("morgan")
const cors = require("cors")
const bodyParser = require("body-parser")
const path = require("path")

// ✅ Middleware trước
app.use(morgan("combined"))
app.use(cors())
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, "public")))

// ✅ Routes sau
app.get("/", (req, res) => {
    res.send("Hello from My Server!")
})

let database = [
    { "BookId": "b1", "BookName": "Kỹ thuật lập trình cơ bản", "Price": 100, "Image": "b1.jpg" },
    { "BookId": "b2", "BookName": "Kỹ thuật lập trình nâng cao", "Price": 150, "Image": "b2.jpg" },
    { "BookId": "b3", "BookName": "Máy học cơ bản", "Price": 200, "Image": "b3.jpg" },
    { "BookId": "b4", "BookName": "Máy học nâng cao", "Price": 300, "Image": "b4.jpg" },
    { "BookId": "b5", "BookName": "Lập trình Robot cơ bản", "Price": 250, "Image": "b5.jpg" },
    { "BookId": "b6", "BookName": "Lập trình Robot nâng cao", "Price": 350, "Image": "b6.jpg" },
    { "BookId": "b7", "BookName": "Học làm bánh ngọt", "Price": 120, "Image": "b7.jpg" },
]

app.get("/books", (req, res) => {
    res.send(database)
})

app.get("/books/:id", cors(), (req, res) => {
    id = req.params["id"]
    let p = database.find(x => x.BookId == id)
    res.send(p)
})
//POST create
app.post("/books", cors(), (req, res) => {
    //console.log(req.body)
    //res.send("Server received your data, Your data:" + req.body) (Test xong thì cmt)
    database.push(req.body)
    res.send(database)
})


//PUT update theo URL /books/:id
app.put("/books", cors(), (req, res) => {
    book = database.find(x => x.BookId == req.body.BookId)
    if (book != null) {
        book.BookName = req.body.BookName
        book.Price = req.body.Price
        book.Image = req.body.Image
    }
    res.send(database)
})
app.delete("/books/:id", cors(), (req, res) => {
    id = req.params["id"]
    database = database.filter(x => x.BookId !== id);
    res.send(database)
})

// ✅ Listen cuối cùng + backtick đúng
app.listen(port, () => {
    console.log(`My Server listening on port ${port}`)
})