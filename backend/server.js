const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const app = express();
const PORT = 5000;

const db = new sqlite3.Database(":memory:"); // In-memory DB

db.serialize(() => {
    db.run("CREATE TABLE items (id INT, name TEXT)");
    db.run("INSERT INTO items VALUES (1, 'Apple'), (2, 'Banana'), (3, 'Cherry')");
});

app.get("/api/data", (req, res) => {
    db.all("SELECT * FROM items", [], (err, rows) => {
        if (err) throw err;
        res.json(rows);
    });
});

app.listen(PORT, () => {
    console.log(`Backend running at http://localhost:${PORT}`);
});
