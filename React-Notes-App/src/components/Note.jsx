import styled from "styled-components";
import { MdDeleteOutline } from "react-icons/md";
import NotesList from "./NotesList";

const Note = ({ id, text, date }) => {
  return (
    <NoteContainer className="note">
      <p>{text}</p>
      <div className="noteFooter">
        <small>{date}</small>
        <MdDeleteOutline className="deleteIcon" size="1.1em" />
      </div>
    </NoteContainer>
  );
};
export default Note;

const NoteContainer = styled.section``;
