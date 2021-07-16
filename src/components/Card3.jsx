import React, { useState } from "react";
import Card from "./Card";
import Checkbox from "./Checkbox"

function Card3(props) {
  const { data, onSelect } = props;
  const [selection, setSelection] = useState({
    'sublime': ["Sublime Text", false],
    'notepad': ["Notepad++", false],
    'vscode': ["VSCode", false],
    'brackets': ["Brackets", false],
    'vim': ["VIM", false],
    'bloknot': ["Блокнот", false],
    'atom': ["Atom", false] 
    });

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
    setSelection((prev) => ({
      ...prev,
      editor: [prev[editor][0], !prev[editor][1]]
    }));
  };

  const items = variants.map(([editor, icon], id) => (
    <div
      key={id}
      className="card-slectable d-flex flex-column justify-content-center"
      onClick={(e) => {

        // toggleChange(e.target.name)
        console.log(e.target);
      }}
    >
      <img src={"assets/" + icon + ".png"} alt="" />
      <div className="form-check">
        {/* checkbox */}
        <Checkbox id={id} />
        <label
          className="form-check-label text-center"
          htmlFor={id}
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
