import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList";
import GlobalStyles from "./GlobalStyles";
import Header from "./components/Header";
import styled from "styled-components";
import Background from "./components/Background";

const App = () => {
  /***************DarkMode *************************/
  const [darkMode, setDarkMode] = useState(() => {
    const savedDarkMode = localStorage.getItem("dark-mode");
    if (savedDarkMode) {
      return savedDarkMode;
    }
    return false;
  });
  /*************** Toggle DarkMode *************************/
  const toggleDarkMode = () => {
    setDarkMode((darkMode) => !darkMode);
    localStorage.setItem("dark-mode", !darkMode);
  };
  /***************NoteList Array *************************/
  const [notesList, setNotesList] = useState(() => {
    const savedNoteList = JSON.parse(localStorage.getItem("note-list"));
    if (savedNoteList) {
      return savedNoteList;
    }
    return [`note-${nanoid()}`];
  });

  /***************Adds NoteList************************/
  const addNoteList = () => {
    setNotesList([...notesList, `note-${nanoid()}`]);
  };
  /***************Delete NoteList************************/
  const deleteNoteList = (id) => {
    const newNotes = notesList.filter((noteList) => {
      return noteList !== id;
    });
    setNotesList(newNotes);
  };

  /***************Saving NoteList************************/
  useEffect(() => {
    localStorage.setItem(`note-list`, JSON.stringify(notesList));
  }, [notesList]);

  return (
    <>
      <AppContainer className={`${darkMode && "darkMode"}`}>
        <Header
          handleToggleDarkMode={toggleDarkMode}
          handleAddNoteList={addNoteList}
        />
        <GlobalStyles />
        <section className="noteListWrapper">
          {notesList.map((noteList) => (
            <NotesList
              key={noteList}
              noteId={noteList}
              handleDeleteNoteList={deleteNoteList}
            />
          ))}
        </section>
        <Background />
      </AppContainer>
    </>
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
      rgba(2, 0, 36, 0.8) 100%
    );
  }

  & .noteListWrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`;
