import PropTypes from "prop-types";
import React from "react";

export default function Card(props) {
  const {
    showHeader,
    showFooter,
    title,
    toNext,
    toPrev,
    progress,
    nextAccess,
    children
  } = props;

  let header = null;
  let footer = null;

  if (showHeader) {
    header = (
      <div className="card-header">
        <h5 className="card-title">{title}</h5>
      </div>
    );
  }

  if (showFooter) {
    footer = (
      <div className="card-footer d-flex align-items-center">
        <div className="flex-grow-1">
          <div className="progress">
            <div
              className="progress-bar progress-bar-striped progress-bar-animated"
              role="progressbar"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
        <div className="btn-group">
          <button
            className="btn btn-danger float-right"
            onClick={() => toPrev()}
          >
            Назад
          </button>
          <button
            className="btn btn-success float-right"
            disabled={!nextAccess}
            onClick={() => toNext()}
          >
            Далее
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz d-flex justify-content-center align-items-center">
      <div className="card main-card border border-secondary">
        {header}
        <div className="card-body">{children}
        </div>
        {footer}
      </div>
    </div>
  );
}

Card.propTypes = {
  showFooter: PropTypes.bool,
  showHeader: PropTypes.bool,
  title: PropTypes.string.isRequired,
  toPrev: PropTypes.func,
  toNext: PropTypes.func,
  progress: PropTypes.number,
  nextAccess: PropTypes.bool
};

Card.defaultProps = {
  showFooter: true,
  showHeader: true,
  nextAccess: true,
  progress: 0
};
