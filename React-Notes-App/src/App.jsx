import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList";
import GlobalStyles from "./GlobalStyles";
import Header from "./components/Header";
import "./style.css";
import styled from "styled-components";
import { PiStarFourBold } from "react-icons/pi";
import { PiStarFourFill } from "react-icons/pi";
import Background from "./components/Background";

const App = () => {
  const [searchText, setSearchText] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [notes, setNotes] = useState(() => {
    const savedNotes = JSON.parse(localStorage.getItem("react-note-app-data"));
    if (savedNotes) {
      return savedNotes;
    }

    return [
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
    ];
  });

  /***************Adds Note*************/
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

  /***************Deletes Note*************/
  const deleteNote = (id) => {
    /*filter returns an array*/

    const newNotes = notes.filter((note) => {
      return note.id !== id;
    });
    setNotes(newNotes);
  };

  /*************** Saving LocalStorage *************/
  useEffect(() => {
    localStorage.setItem("react-note-app-data", JSON.stringify(notes));
  }, [notes]);

  return (
    <AppContainer className={`${darkMode && "darkMode"}`}>
      <Header handleToggleDarkMode={setDarkMode} />
      <GlobalStyles />
      <NotesList
        className="wrapper"
        notes={notes.filter((note) =>
          note.text.toLowerCase().includes(searchText)
        )}
        handleSearchNote={setSearchText}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
      />
      <Background />
    </AppContainer>
  );
};

export default App;

const AppContainer = styled.section`
  min-height: 100vh;
  width: 100%;
  background: linear-gradient(to bottom, #9c97fa, #e6adff);

  &.darkMode {
    background: linear-gradient(
      180deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(2, 0, 36, 1) 66%,
      rgba(230, 173, 255, 1) 100%
    );
  }
`;
