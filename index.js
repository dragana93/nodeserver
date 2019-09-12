const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

let ngteam = [
  {
    id: 1,
    name: "Dragana",
    surname: "Savanovic",
    username: "gaga",
    password: "gaga",
    registrated: true
  },
  {
    id: 2,
    name: "Nikola",
    surname: "Bosnjak",
    username: "dzoni",
    password: "dzoni",
    registrated: false
  },
  {
    id: 3,
    name: "Robert",
    surname: "Jelic",
    username: "robi",
    password: "robi",
    registrated: true
  }
];

app.get("/ngteam/get-ngteam", (req, res) => {
  res.json(ngteam);
});

app.listen(5000, () => console.log(`server running on http://localhost:5000`));
