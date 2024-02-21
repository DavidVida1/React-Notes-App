import React, { useState, useEffect } from "react";
import styled from "styled-components";

const AddNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState("");
  const characterLimit = 200;

  const handleChange = (event) => {
    let text = event.target.value;

    if (text.length > 200) {
      text = text.substring(0, 200);
    }

    setNoteText(text);
  };

  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNoteText("");
    }
  };

  return (
    <AddNoteContainer className="note new">
      <textarea
        row="8"
        cols="10"
        placeholder="Type to add a note..."
        value={noteText}
        onChange={handleChange}
      ></textarea>
      <footer className="noteFooter">
        <small>{characterLimit - noteText.length} Remaining</small>
        <button className="saveBtn" onClick={handleSaveClick}>
          Save
        </button>
      </footer>
    </AddNoteContainer>
  );
};
export default AddNote;

const AddNoteContainer = styled.section`
  &.note.new {
    background-color: #67d7cc;
  }

  & textarea {
    border: none;
    resize: none;
    background-color: #67d7cc;

    &:focus {
      outline: none;
    }
  }

  & .saveBtn {
    background-color: var(--color-white);
    border: none;
    border-radius: 5px;
    padding: 5px 10px;

    &:hover {
      background-color: green;
      cursor: pointer;
    }
  }
`;
