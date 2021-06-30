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

  const [cards, setCards] = useState([
    {
      id: 1,
      value: {
        visible: true,
        completed: false
      }
    },
    {
      id: 2,
      value: {
        visible: false,
        completed: false,
        variant: []
      }
    },
    {
      id: 3,
      value: {
        visible: false,
        completed: false,
        variant: []
      }
    },
    {
      id: 4,
      value: {
        visible: false,
        completed: false,
        variant: []
      }
    }
  ]);

  // const changeCard = (cardId, variant=[]) => (cards) => {
  //   setCards(prev => {
  //     return [
  //       ...prev,
  //       prev[cardId]: {
  //           visible: false,
  //           completed: false,
  //           variant
  //     }
  //
  //   ]
  //   })
  // }

  return (
    <CardsContext.Provider value={{cards, prevCard, nextCard}}>{children}</CardsContext.Provider>
  );
};
