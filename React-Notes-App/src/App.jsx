import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList";
import GlobalStyles from "./GlobalStyles";
import Header from "./Header";
import "./style.css";

import styled from "styled-components";

const App = () => {
  const [searchText, setSearchText] = useState("");
  const [darkMode, setDarkMode] = useState(false);
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
      <aside className="diamonds">
        <div id="diamond1"></div>
        <div id="diamond1"></div>
        <div id="diamond1"></div>
        <div id="diamond2"></div>
        <div id="diamond2"></div>
        <div id="diamond2"></div>
        <div id="diamond3"></div>
        <div id="diamond3"></div>
        <div id="diamond3"></div>
      </aside>
    </AppContainer>
  );
};

export default App;

const AppContainer = styled.section`
  height: 100vh;
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

  .diamonds {
    position: absolute;
    display: flex;
    flex-direction: column;
    gap: 10px;
    bottom: 0px;
    right: 40px;
    animation: float 10s ease-in-out infinite;
    z-index: -0;

    #diamond1 {
      width: 25px;
      height: 25px;
      border: 10px solid var(--color-white);
      background-color: transparent;
      border-radius: 5px;
      rotate: 45deg;
      position: relative;
      bottom: -20px;
      right: 100px;
      animation: float 5s ease-in-out infinite;
    }

    #diamond2 {
      width: 25px;
      height: 25px;
      border: 10px solid var(--color-white);
      background-color: transparent;
      border-radius: 5px;
      rotate: 45deg;
      position: relative;
      bottom: -35px;
      right: 60px;
      animation: float 4s ease-in-out infinite;
    }
    #diamond3 {
      width: 25px;
      height: 25px;
      border: 10px solid var(--color-white);
      background-color: transparent;
      border-radius: 5px;
      rotate: 45deg;
      position: relative;
      bottom: 100px;
      right: 140px;
      animation: float 6s ease-in-out infinite;
    }
    @keyframes float {
      0% {
        transform: translatey(0px);
      }

      50% {
        transform: translatey(-20px);
      }

      100% {
        transform: translatey(0px);
      }
    }
  }
`;
