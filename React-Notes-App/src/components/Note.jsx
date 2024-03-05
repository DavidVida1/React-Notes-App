import styled from "styled-components";
import { useState, useEffect, useRef } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";

const Note = ({ id, text, date, handleDeleteNote, setText }) => {
  const [editEnabledNote, setEditEnabledNote] = useState(false);

  const handleChange = (e) => {
    setText(e.target.value, id);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      console.log("Note modified");
      setEditEnabledNote(false);
    }
  };

  return (
    <NoteContainer className="note">
      {editEnabledNote ? (
        <input
          type="text"
          placeholder="Edit Note.."
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          className="noteChanged"
          autoFocus
        />
      ) : (
        <p>{text}</p>
      )}

      <div className="noteFooter">
        <small>{date}</small>
        <div className="noteIcone">
          <FaPencilAlt
            className="editIcon"
            onClick={() => {
              setEditEnabledNote(true);
            }}
          />

          <FaTrashAlt
            className="deleteIcon"
            onClick={() => handleDeleteNote(id)}
          />
        </div>
      </div>
    </NoteContainer>
  );
};
export default Note;

const NoteContainer = styled.section`
  border-top: 3px solid var(--border-note);
  font-size: var(--font-size1);

  & .noteFooter {
    font-size: 1rem;

    & .deleteIcon,
    .editIcon {
      font-size: var(--font-size1);
      cursor: pointer;
      &:hover {
        filter: drop-shadow(0 0 3px var(--color-white));
      }
    }

    & .noteIcone {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 5px;
    }
  }

  & .noteChanged {
    border: none;
    resize: none;
    color: var(--color-white);
    background-color: transparent;

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: var(--color-white);
    }
  }
`;
