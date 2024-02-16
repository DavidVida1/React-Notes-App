import styled from "styled-components";
import { MdDeleteOutline } from "react-icons/md";

const Note = () => {
  return (
    <NoteContainer>
      <p>testing note first note</p>
      <div className="noteFooter">
        <small>2/15/2024</small>
        <MdDeleteOutline className="deleteIcon" size="1.1em" />
      </div>
    </NoteContainer>
  );
};
export default Note;

const NoteContainer = styled.section``;
