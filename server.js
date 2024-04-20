import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));


const app = express();
const port = 4000;

app.use(bodyParser.urlencoded({ extended:true}));
app.use(express.static("public"));

app.get("/",(req,res) =>{
    res.render(__dirname + '/public/create-account.ejs');
})

app.post("/submit",(req,res) => {
    const {name, email, password, remember } = req.body;
    res.redirect("/login");
})

app.get("/login", (req,res) => {
    res.render(__dirname + "/public/login.ejs");
});

app.listen(port, () => {
    console.log(`Server is running at ${port}`);
})