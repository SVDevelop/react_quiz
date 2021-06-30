import React, {useReducer} from "react";

export const TONEXT = 'toNext'
export const TOPREV = 'toPrev'

function reducer(state, action) {
    switch (action.type) {
        case TONEXT: {
            if (state.cardId < 6) {
                return {cardId: state.cardId + 1}
            }
        }

        case TOPREV: {
            if (state.cardId > 2) {
                return {cardId: state.cardId - 1};
            }
        }

        default:
            return state
    }
}

function init(state) {
    return state
}

export default function Store() {
    const [state, dispatch] = useReducer(reducer, {
        card0: {
            visible: true,
            completed: false
        },
        card1: {
            visible: false,
            completed: false
        },
        card2: {
            visible: false,
            completed: false,
            variants: [
                "Russian language",
                "HTML + CSS",
                "JavaScript and TypeScript",
                "Никакого. На фронтенде пользуются браузером."
            ]
        },
        card3: {
            visible: false,
            completed: false,
            variants: {
                "sublime": ["Sublime Text", false],
                "notepad": ["Notepad++", false],
                "vscode": ["VSCode", false],
                "brackets": ["Brackets", false],
                "vim": ["VIM", false],
                "bloknot": ["Блокнот", false],
                "atom": ["Atom", false]
            }
        }
    }, init);
    return (
        <>
            Count: {state.count}
            <button
                onClick={() => dispatch({type: 'reset', payload: ''})}>
                Reset
            </button>
            <button onClick={() => dispatch({type: 'decrement'})}>-</button>
            <button onClick={() => dispatch({type: 'increment'})}>+</button>
        </>
    );
}
