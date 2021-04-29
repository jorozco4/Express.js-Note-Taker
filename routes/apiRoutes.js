const path = require("path");
const fs = require("fs");
const data = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));

module.exports = (app) => {
  fs.writeFileSync("./db/db.json", JSON.stringify(data), function (err) {
    if (err) throw err;
  });

  app.get("/api/notes", (req, res) => {
    res.json(notes);
  });

  app.get("/api/notes/:id", (req, res) => {
    res.json(notes[req.params.id]);
  });

  app.post("/api/notes", (req, res) => {
    let newNote = req.body;
    let uniqueId = data.length.tostring();
    console.log(uniqueId);
    newNote.id = uniqueId;
    data.push(newNote);
    return console.log("Added new note: " + newNote.title);
  });
};

res.json(data);

app.delete("/api/notes/:id", (req, res) => {
  let noteId = req.params.id;
  let newId = 0;
  console.log(`Deleting note with id ${noteId}`);
  data = data.filter((currentNote) => {
    return currentNote.id != noteId;
  });
  for (currentNote of data) {
    currentNote.id = newId.toString();
    newId++;
  }
  fs.writeFileSync("./db/db.json", JSON.stringify(data));
  res.json(data);
});
