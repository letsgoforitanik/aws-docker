import http from "http";
import os from "os";
import express from "express";

function fibonacci(num: number): number {
    if (num < 2) return num;
    return fibonacci(num - 1) + fibonacci(num - 2);
}


function main() {

    const app = express();

    app.get('/fib/:num', function (req, res) {
        const num = Number(req.params.num);
        const result = fibonacci(num);
        return res.send(`${num}th fibonacci number is ${result} on ${os.hostname()}`);
    });

    const server = http.createServer(app);
    const port = process.env.PORT || 80;
    server.listen(port, () => console.log(`Server is running on port ${port}`));

}

main();
