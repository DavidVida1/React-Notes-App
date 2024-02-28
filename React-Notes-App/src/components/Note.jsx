import styled from "styled-components";
import { MdDeleteOutline } from "react-icons/md";

const Note = ({ id, text, date, handleDeleteNote }) => {
  return (
    <NoteContainer className="note">
      <p>{text}</p>
      <div className="noteFooter">
        <small>{date}</small>
        <MdDeleteOutline
          className="deleteIcon"
          onClick={() => handleDeleteNote(id)}
        />
      </div>
    </NoteContainer>
  );
};
export default Note;

const NoteContainer = styled.section`
  border-top: 3px solid var(--border-note);
  font-size: 1.5rem;

  & .noteFooter {
    font-size: 1rem;
    & .deleteIcon {
      font-size: 1.5rem;
      cursor: pointer;
      &:hover {
        border-radius: 100%;
        filter: drop-shadow(0 0 3px var(--color-white));
      }
    }
  }
`;
