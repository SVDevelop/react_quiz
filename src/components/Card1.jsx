import React from "react";
import Card from "./Card";

function Card1(props) {
  const buttonStyle = {
    display: "block",
    margin: "0 auto"
  };

  return (
    <Card
      showFooter={false}
      showHeader={false}
      title="Пройди опрос о фронтенд разработке"
      progress={50}
      toNext={props.toNext}
      toPrev={props.toPrev}
      nextAccess={props.nextAccess}
    >
      <div className="h100 card-body d-flex flex-column justify-content-around">
        <h4 className="card-title text-center">
          Пройди опрос о фронтенд разработке
        </h4>
        <h4 className="card-title text-center">
          и получи обучающий материал бесплатно
        </h4>
      </div>
      <img src="assets/js.png" alt="" className="js_logo" />
      <button
        className="btn btn-success btn-lg"
        style={buttonStyle}
        onClick={() => props.toNext()}
      >
        Начать
      </button>
    </Card>
  );
}

export default Card1;
