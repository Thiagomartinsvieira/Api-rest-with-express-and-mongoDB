import express from "express"

const app = express();
app.use(express.json())

const books = [
    {
        id: 1,
        tittle: "The lord of the rings"
    },
    {
        id: 2,
        title: "The Hobbit"
    }
]

app.get("/", (req, res) => {
    res.status(200).send("Node.js with express")
})

app.get("/books",(req, res) => {
    res.status(200).json(books);
});

app.post("/books", (req, res) => {
    books.push(req.body)
    res.status(201).send("Book registered sucessfully")
})

export default app;