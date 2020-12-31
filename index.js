import express from "express";
import connectoToMongo from "./server/config/mongoose";
import motherRoute from "./server/routes/index";
import bodyParser from "body-parser";
import "@babel/polyfill";
const app = express();
connectoToMongo();


app.use(bodyParser.json());
app.use("/alex", motherRoute);

app.use("*", (req, res) => {
    res.status(404).json({
        success: false,
        msg: "Route not found"
    });
});



app.listen(4000, () => {
    console.log(`The server has started on 4000 port!`);
});

export default app;