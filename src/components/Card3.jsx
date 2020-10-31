import React, { useState } from "react";
import Card from "./Card";

function Card3(props) {
  const { data, onSelect } = props;
  const [selection, setSelection] = useState([
    { "Sublime Text": false },
    { "Notepad++": false },
    { VSCode: false },
    { Brackets: false },
    { VIM: false },
    { Блокнот: false },
    { Atom: false }
  ]);

  const variants = [
    ["Sublime Text", "sublime"],
    ["Notepad++", "notepad"],
    ["VSCode", "vscode"],
    ["Brackets", "brackets"],
    ["VIM", "vim"],
    ["Блокнот", "bloknot"],
    ["Atom", "atom"]
  ];

  const toggleChange = (redoctor) => {
    setSelection((prev) => {
      prev.map((x) => {
        if (x === redoctor) {
          return [...prev, (x = !x)];
        }
      });
    });
  };

  const items = variants.map(([redoctor, icon], i) => (
    <div
      key={i}
      className="card-slectable d-flex flex-column justify-content-center"
      onClick={() => {
        toggleChange;
        console.log("fired");
      }}
    >
      <img src={"assets/" + icon + ".png"} alt="" />
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          defaultValue
          id={"defaultCheck" + i}
          onClick={() => {
            toggleChange;
          }}
          // checked={selection.redoctor}
          onChange={() => {}}
        />
        <label
          className="form-check-label text-center"
          htmlFor={"defaultCheck" + i}
          style={{ display: "block" }}
        >
          {redoctor}
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
