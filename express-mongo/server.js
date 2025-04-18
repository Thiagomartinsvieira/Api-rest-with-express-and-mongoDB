import http from "http";

const PORT = 3000

const routes = {
    "/": "Express API",
    "/books": "Route Books",
    "/authors": "Route authors"
}

const server = http.createServer((req, res) => {
    res.writeHead(200, { "content-type": "text/plain" })
    res.end(routes[req.url])
})

server.listen(PORT, () => {
    console.log("Server is Listening!")
})

