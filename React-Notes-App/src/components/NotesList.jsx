import styled from "styled-components";
import AddNote from "./AddNote";
import SearchBar from "./SearchBar";
import Note from "./Note";

const NotesList = ({
  notes,
  handleAddNote,
  handleDeleteNote,
  handleSearchNote,
}) => {
  return (
    <NotesListContainer>
      <h1 className="title">[{notes.length}]Notes </h1>
      <SearchBar handleSearchNote={handleSearchNote} />
      {notes.map((note) => (
        <Note
          key={note.id}
          /*id={note.id} text={note.text} date={note.date}*/ {...note}
          handleDeleteNote={handleDeleteNote}
        />
      ))}{" "}
      <AddNote className="addNote" handleAddNote={handleAddNote} />
    </NotesListContainer>
  );
};

export default NotesList;

const NotesListContainer = styled.section`
  display: grid;
  position: relative;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 1rem;
  background: var(--color-white2);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  box-shadow: var(--box-shadow);
  border-radius: var(--b-radius2);
  margin: auto;
  width: 400px;
  border: 3px solid var(--border-noteList);
  padding: 20px;
  z-index: 999;

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
