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
      ))}
      <AddNote handleAddNote={handleAddNote} />
    </NotesListContainer>
  );
};

export default NotesList;

const NotesListContainer = styled.section`
  display: grid;
  grid-gap: 1rem;
  background-color: grey;
  padding: 20px;
  border-radius: 10px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin: auto;
  width: 400px;

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
    background-color: var(--color-grey);
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
