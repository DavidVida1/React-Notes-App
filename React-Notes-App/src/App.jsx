import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList";
import GlobalStyles from "./GlobalStyles";
import "./style.css";
import styled from "styled-components";

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is my first note!",
      date: "04/03/2024",
    },
    {
      id: nanoid(),
      text: "This is my second note!",
      date: "05/03/2024",
    },
    {
      id: nanoid(),
      text: "This is my third note!",
      date: "06/03/2024",
    },
    {
      id: nanoid(),
      text: "This is my fourth note!",
      date: "07/03/2024",
    },
  ]);
  return (
    <AppContainer>
      <GlobalStyles />
      <NotesList notes={notes} />
    </AppContainer>
  );
};

export default App;

const AppContainer = styled.section`
  max-width: 400px;
  margin-right: auto;
  margin-left: auto;
`;
