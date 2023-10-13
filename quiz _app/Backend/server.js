const express = require("express");
const app = express();
const port = 8000;
app.listen(port, () => {
  console.log("Backend is connected");
});



app.use(express())
app.use(express.json())

const cors = require("cors");
app.use(cors());


// ---------------------- DB connection-----------------------------

const mysql = require("mysql");
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Ks@9494270722",
  database: "quiz_app",
});

app.get("/", (req, res) => {
  console.log("hello");
  console.log("DB connected");
  const sql = "SELECT * FROM quiz_table";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});



