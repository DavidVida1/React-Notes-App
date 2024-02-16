import React, { useState, useEffect } from "react";
import NotesList from "./components/NotesList";
import GlobalStyles from "./GlobalStyles";
import styled from "styled-components";

const App = () => {
  return (
    <AppContainer>
      <GlobalStyles />
      <NotesList />
    </AppContainer>
  );
};

export default App;

const AppContainer = styled.section``;
