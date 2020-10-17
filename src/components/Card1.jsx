import React from "react";

function Card1() {
  const buttonStyle = {
    display: "block",
    margin: "0 auto"
  };
  return (
    <div className="quiz d-flex justify-content-center align-items-center">
      <div className="card main-card border border-secondary">
        <div className="card-body d-flex flex-column justify-content-around">
          <div>
            <h4 className="card-title text-center">
              Пройди опрос о фронтенд разработке
            </h4>
            <h4 className="card-title text-center">
              и получи обучающий материал бесплатно
            </h4>
          </div>
          <img src="assets/js.png" className="js_logo" />
          <button className="btn btn-success btn-lg" style={buttonStyle}>
            Начать
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card1;
