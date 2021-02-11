import Express from "express";

const server = new Express();
server.get("/", function(req, resp) {
    resp.send("Successful").status(200);
})
server.listen(3001, () =>
    console.log(`Example app listening on port`),
);