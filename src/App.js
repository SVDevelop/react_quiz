import React from "react";
import "./App.css";
import { CardsProvider } from "./components/CardsContext";

import Card1 from "./components/Card1";
import Card2 from "./components/Card2";
import Card3 from "./components/Card3";
import Card4 from "./components/Card4";
import Card5 from "./components/Card5";
import Card6 from "./components/Card6";

function App() {
  return (
    <CardsProvider>
      <Card1 />
      <Card2 />
      <Card3 />
      <Card4 />
      <Card5 />
      <Card6 />
    </CardsProvider>
  );
}

export default App;
