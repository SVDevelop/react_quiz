import React, { useState } from "react";
import Card from "./Card";

function Card3(props) {
  const { data, onSelect } = props;
  const [selection, setSelection] = useState([]);

  const variants = [
    ["Sublime Text", "sublime"],
    ["Notepad++", "notepad"],
    ["VSCode", "vscode"],
    ["Brackets", "brackets"],
    ["VIM", "vim"],
    ["Блокнот", "bloknot"],
    ["Atom", "atom"]
  ];

  const toggleChange = (editor) => {
    // selection.map(x => Object.keys(x)[0]===editor && console.log(x[editor]))
    setSelection(prev => [...prev, editor])

  };
  console.log(selection)
  const items = variants.map(([editor, icon], i) => (
    <div
      key={i}
      className="card-slectable d-flex flex-column justify-content-center"
      onClick={() => {
        // console.log(selection[i])
        // toggleChange();
        // console.log(selection)
        // console.log(editor);
      }}
    >
      <img src={"./assets/" + icon + ".png"} alt={""} />
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          defaultValue
          name={editor}
          id={"defaultCheck" + i}
          onClick={(e) => {
            // toggleChange();
          }}
          checked={ selection.includes(editor) }
          onChange={()=>toggleChange(i)}
        />
        <label
          className="form-check-label text-center"
          htmlFor={"defaultCheck" + i}
          style={{ display: "block" }}
        >
          {editor}
        </label>
      </div>
    </div>
  ));

  return (
    <Card
      title="Каким редактором пользуются программисты?"
      progress={60}
      toNext={props.toNext}
      toPrev={props.toPrev}
      nextAccess={props.nextAccess}
    >
      {items}
    </Card>
  );
}

export default Card3;
