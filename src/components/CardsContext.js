import React, { useState, useContext } from "react";

export const CardsContext = React.createContext();

const showCard = (card) => {
  // setCards((prev) => {
  // })
};

export const CardsProvider = ({ children }) => {
  const prevCard = (currentCard) => {

  };
  const nextCard = (currentCard) => {
    cards.filter((card, id) => id - 1 === currentCard - 1)
  };

  const [cards, setCards] = useState({
    card1: {
      visible: false,
      completed: false
    },
    card2: {
      visible: false,
      completed: false,
      selection,
      toggleChange
    }
  });

  const [selection, setSelection] = useState({
    "sublime": ["Sublime Text", false],
    "notepad": ["Notepad++", false],
    "vscode": ["VSCode", false],
    "brackets": ["Brackets", false],
    "vim": ["VIM", false],
    "bloknot": ["Блокнот", false],
    "atom": ["Atom", false]
  });

  const toggleChange = (e) => {
    const {name} = e.target
    setSelection(prev => {
      const [title, value] = prev[name]
      return {
        ...prev,
        [name]: [title, !value],
      }
    })
  };

  return (
    <CardsContext.Provider value={{cards, prevCard, nextCard}}>{children}</CardsContext.Provider>
  );
};
