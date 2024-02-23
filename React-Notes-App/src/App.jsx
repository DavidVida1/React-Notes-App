import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList";
import GlobalStyles from "./GlobalStyles";
import Header from "./Header";
import "./style.css";

import styled from "styled-components";
import Notes from "./components/NotesClass";
import watermark from "./assets/Notepad_icon.svg.png";

const App = () => {
  const [searchText, setSearchText] = useState("");
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is my first note!",
      date: "04/03/2024",
    },
    {
      id: nanoid(),
      text: "This is my second note!",
      date: "05/03/2024",
    },
    {
      id: nanoid(),
      text: "This is my third note!",
      date: "06/03/2024",
    },
    {
      id: nanoid(),
      text: "This is my fourth note!",
      date: "07/03/2024",
    },
  ]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text.trim(),
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);

    console.log(newNote.text);
  };

  const deleteNote = (id) => {
    /*filter returns an array*/

    const newNotes = notes.filter((note) => {
      return note.id !== id;
    });
    setNotes(newNotes);
  };

  return (
    <AppContainer>
      <Header />
      <GlobalStyles />
      <NotesList
        className="wrapper"
        notes={notes}
        handleSearchNote={setSearchText}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
      />
    </AppContainer>
  );
};

export default App;

const AppContainer = styled.section`
  height: 100vh;
  width: 100%;

  background-image: url(${watermark});
  background-repeat: no-repeat;
  background-size: 200px 200px;
  background-position: bottom right;
`;
