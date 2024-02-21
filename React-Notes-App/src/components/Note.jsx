import styled from "styled-components";
import { MdDeleteOutline } from "react-icons/md";
import { MdDelete } from "react-icons/md";

import NotesList from "./NotesList";

const Note = ({ id, text, date, handleDeleteNote }) => {
  return (
    <NoteContainer className="note">
      <p>
        ({id} ){text}
      </p>
      <div className="noteFooter">
        <small>{date}</small>
        <MdDeleteOutline className="deleteIconOutline" size="1.1em" />
        <MdDelete
          className="deleteIcon"
          size="1.1em"
          onClick={() => handleDeleteNote(id)}
        />
      </div>
    </NoteContainer>
  );
};
export default Note;

const NoteContainer = styled.section`
  & .noteFooter {
    & .deleteIconOutline:hover {
      display: none;

      & ~ .deleteIcon {
        display: block;
      }
    }

    & .deleteIcon {
      display: none;
    }
  }
`;
