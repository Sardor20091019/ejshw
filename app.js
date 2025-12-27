const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

// TASK 1
app.get("/task1", (req, res) => {
  const courses = ["JavaScript", "Node.js", "Express", "MongoDB"];
  res.render("task1-courses", { courses });
});

// TASK 2
app.get("/task2", (req, res) => {
  const score = 78;
  res.render("task2-score", { score });
});

// TASK 3
app.get("/task3", (req, res) => {
  const users = [
      { id: 1, name: "Sardor", age: 16 },
    { id: 2, name: "Abbos", age: 16 },
    { id: 3, name: "Alisher", age: 16 },
    { id: 4, name: "Otabek", age: 16 }
  ];
  res.render("task3-users", { users });
});

// TASK 4
let students = [];

app.get("/task4", (req, res) => {
  res.render("task4-students", { students, error: null });
});

app.post("/task4", (req, res) => {
  const { name, age } = req.body;

  if (!name || !age) {
    return res.render("task4-students", {
      students,
      error: "Barcha maydonlarni to‘ldiring!"
    });
  }

  students.push({ name, age: Number(age) });
  res.redirect("/task4");
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});

