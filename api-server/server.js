const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const users = {
  "sasah@joesrobotshop.com": {
    firstName: "Sasa",
    lastName: "Haro",
    email: "sasah@joesrobotshop.com",
    password: "mike123!",
  },
  "jhonl@joesrobotshop.com": {
    firstName: "Jhon",
    lastName: "Luiz",
    email: "jhonl@joesrobotshop.com",
    password: "ben123!",
  },
};

app.post("/api/sign-in", (req, res) => {
  const { email, password } = req.body;

  const user = users[email?.toLowerCase().trim()];

  if (user && user.password === password) {
    return res.status(200).json({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    });
  }

  return res.status(401).json({ message: "Credenciais inválidas" });
});

