import styled from "styled-components";
import { useState, useEffect, useRef } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";

const Note = ({ id, text, date, handleDeleteNote, setText }) => {
  const [editEnabledNote, setEditEnabledNote] = useState(false);
  const noteRef = useRef(null);

  const handleChange = (e) => {
    setText(e.target.value, id);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      console.log("Note modified");
      setEditEnabledNote(false);
    }
  };

  /*function noteDone() {
    const element = document.querySelector(`#${id}`);
    element.classList.toggle("completedNote");
    console.log("executed");
  }*/

  /*with the check the className is added only if the box is checked wich avoids probleme
  if the className is active and checkbox is not*/
  const noteDone = () => {
    const noteClassList = document.querySelector(`#myCheck${id}`);

    if (!noteClassList.checked) {
      noteRef.current.classList.remove("completedNote");
    } else {
      noteRef.current.classList.add("completedNote");
    }
    console.log("executed");
  };

  useEffect(() => {
    noteDone();
  }, []);

  return (
    <NoteContainer ref={noteRef} className="note" id={id}>
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
          <input
            type="checkbox"
            id={`myCheck${id}`}
            onClick={() => {
              noteDone();
            }}
            /* checked={true}*/
          />

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

  &.completedNote {
    background-color: var(--color-green) !important;
    color: black;
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

  & .noteFooter {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 5px;
    & small {
      font-size: var(--font-size-small);
    }
    & .noteIcone {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 5px;

      & input {
        align-self: center;
        width: 15px;
        height: 15px;
        &:hover {
          filter: drop-shadow(0 0 3px var(--color-white));
        }
      }

      & .deleteIcon,
      .editIcon {
        font-size: var(--font-size1);
        cursor: pointer;
        &:hover {
          filter: drop-shadow(0 0 3px var(--color-white));
        }
      }
    }
  }
`;
