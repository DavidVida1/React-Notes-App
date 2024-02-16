import styled from "styled-components";
import Note from "./Note";

const NotesList = () => {
  return (
    <NotesListContainer>
      <Note />
    </NotesListContainer>
  );
};

export default NotesList;

const NotesListContainer = styled.section``;
