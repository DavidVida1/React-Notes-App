import { nanoid } from "nanoid";
import { useState, useEffect } from "react";
import styled from "styled-components";
import AddNote from "./AddNote";
import SearchBar from "./SearchBar";
import Note from "./Note";
import { FaTimes } from "react-icons/fa";

const NotesList = ({ noteId, handleDeleteNoteList }) => {
  const [searchText, setSearchText] = useState("");
  const [notes, setNotes] = useState(() => {
    const savedNotes = JSON.parse(localStorage.getItem(`note-data-${noteId}`));
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

  /***************Adds Note************************/
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

  /***************Deletes Note*********************/
  const deleteNote = (id) => {
    /*filter returns an array*/

    const newNotes = notes.filter((note) => {
      return note.id !== id;
    });
    setNotes(newNotes);
  };

  /*************** Saving LocalStorage *************/
  useEffect(() => {
    localStorage.setItem(`note-data-${noteId}`, JSON.stringify(notes));
  }, [notes]);

  return (
    <NotesListContainer>
      <FaTimes
        className="deleteBtn"
        onClick={() => {
          handleDeleteNoteList(noteId);
        }}
      />
      <h1 className="title">[{notes.length}]Notes </h1>
      <SearchBar handleSearchNote={setSearchText} />
      {notes
        .filter((note) => note.text.toLowerCase().includes(searchText))
        .map((note) => (
          <Note
            key={note.id}
            /*id={note.id} text={note.text} date={note.date}*/ {...note}
            handleDeleteNote={deleteNote}
          />
        ))}{" "}
      <AddNote className="addNote" handleAddNote={addNote} />
    </NotesListContainer>
  );
};

export default NotesList;

const NotesListContainer = styled.section`
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
  grid-gap: 1rem;
  background: var(--color-white2);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  box-shadow: var(--box-shadow);
  border-radius: var(--b-radius2);
  color: var(--color-white);
  margin: 1%;
  width: 20%;
  height: 100%;
  border: 3px solid var(--border-noteList);
  padding: 20px;
  z-index: 999;

  & .deleteBtn {
    position: absolute;
    margin: 20px;
    font-size: 1.5rem;
    right: 0;
    top: 0;
    cursor: pointer;
    &:hover {
      border-radius: 100%;
      filter: drop-shadow(0 0 3px var(--color-white));
    }
  }

  & .title {
    color: var(--color-white);
    font-size: 3rem;
  }
  & section,
  & section .noteFooter {
    display: flex;
    justify-content: space-between;
  }

  & .note {
    flex-direction: column;
    background-color: var(--color-purple);
    border-radius: var(--b-radius1);
    padding: 1rem;
    color: var(--color-white);
    min-height: 50px;
    white-space: pre-wrap;

    & .noteFooter {
      align-items: center;
    }
  }
`;
