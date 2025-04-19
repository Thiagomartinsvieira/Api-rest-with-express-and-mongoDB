import express from "express"

const app = express();

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

export default app;