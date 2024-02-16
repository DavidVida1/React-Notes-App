import styled from "styled-components";
import AddNote from "./AddNote";
import Note from "./Note";

const NotesList = ({ notes }) => {
  return (
    <NotesListContainer>
      {notes.map((note) => (
        <Note id={note.id} text={note.text} date={note.date} />
      ))}
      <AddNote />
    </NotesListContainer>
  );
};

export default NotesList;

const NotesListContainer = styled.section`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

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

    & .noteFooter {
      align-items: center;
    }
  }
`;
