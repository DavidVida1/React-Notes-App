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
    background-color: var(--color-purple2);
  }

  & textarea {
    border: none;
    resize: none;
    color: var(--color-white);
    background-color: transparent;
    font-size: 1.5rem;

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: var(--color-white);
    }
  }

  & .saveBtn {
    background-color: var(--color-white);
    border: none;
    border-radius: var(--b-radius1);
    padding: 5px 10px;

    &:hover {
      background-color: var(--color-white);
      cursor: pointer;
    }
  }
`;
