import express from "express";
import routes from "./routes/index.js";

const app = express();
app.listen(80, () => {
    console.log("Server is running on port 80");
});
const router = express.Router();
routes.forEach((routerFn, index) => {
    routerFn(router);
});

app.set("view engine", "ejs");
app.use("/api", router);