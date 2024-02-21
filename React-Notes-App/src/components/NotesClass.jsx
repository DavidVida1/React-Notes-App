import { nanoid } from "nanoid";

export default class Notes {
  notes = [];

  setNotes(newNotes) {
    this.notes = newNotes;
    console.log("this", this.notes);
  }

  constructor() {}

  addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text.trim(),
      date: date.toLocaleDateString(),
    };

    const newNotes = [...this.notes, newNote];
    this.setNotes(newNotes);
  };

  deleteNote = (id) => {
    /*filter returns an array*/

    const newNotes = this.notes.filter((note) => {
      return note.id !== id;
    });
    this.setNotes(newNotes);
  };
}
