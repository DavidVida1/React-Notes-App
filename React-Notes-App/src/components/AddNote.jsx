import styled from "styled-components";

const AddNote = () => {
  return (
    <AddNoteContainer className="note new">
      <textarea
        row="8"
        cols="10"
        placeholder="Type to add a note..."
      ></textarea>
      <footer className="noteFooter">
        <small>200 Remaining</small>
        <button className="save">Save</button>
      </footer>
    </AddNoteContainer>
  );
};
export default AddNote;

const AddNoteContainer = styled.section``;
