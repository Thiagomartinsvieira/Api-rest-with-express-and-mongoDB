import http from "http";

const PORT = 3000

const server = http.createServer((req, res) => {
    res.writeHead(200, { "content-type": "text/plain" })
    res.end("Node.Js is running")
})

server.listen(PORT, () => {
    console.log("Server is Listening!")
})

