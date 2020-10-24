import React, { useState } from "react";

function Card3() {
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
    <div className="quiz d-flex justify-content-center align-items-center">
      <div className="card main-card border border-secondary">
        <div className="card-header">
          <h5 className="card-title">
            Каким редактором пользуются программисты?
          </h5>
        </div>
        <div className="card-body d-flex flex-wrap justify-content-center">
          {items}
        </div>
        <div className="card-footer d-flex align-items-center">
          <div className="flex-grow-1">
            <div className="progress">
              <div
                className="progress-bar progress-bar-striped progress-bar-animated"
                role="progressbar"
                aria-valuenow={75}
                aria-valuemin={0}
                aria-valuemax={100}
                style={{ width: "50%" }}
              />
            </div>
          </div>
          <div className="btn-group">
            <button className="btn btn-danger float-right">Назад</button>
            <button className="btn btn-success float-right">Далее</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card3;
