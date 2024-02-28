import styled from "styled-components";
import { MdDeleteOutline } from "react-icons/md";
import { MdDelete } from "react-icons/md";

import NotesList from "./NotesList";

const Note = ({ id, text, date, handleDeleteNote }) => {
  return (
    <NoteContainer className="note">
      <p>{text}</p>
      <div className="noteFooter">
        <small>{date}</small>
        <MdDeleteOutline className="deleteIconOutline" size="1.1em" />
        <MdDelete
          className="deleteIcon"
          size="1.3em"
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
    & .deleteIconOutline:hover {
      display: none;

      & ~ .deleteIcon {
        display: block;
      }
    }

    & .deleteIcon {
      display: none;
      cursor: pointer;
    }
  }
`;
