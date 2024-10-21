import express from "express";

const app = express();

const PORT = 5000;

app.get("/", (req, res) => {
    res.status(200).json({
        message : "Hello World"
    })
})


app.use("*", (req, res) => {
    res.status(404).json({
        massage : "not found",
    });
});

app.listen(PORT, () => {
    console.log(`Server started, Listening on port ${PORT}`);
});