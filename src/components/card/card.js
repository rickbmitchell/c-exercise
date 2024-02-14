import PropTypes from "prop-types";
import React from "react";
import "./card.scss";

import IconCheck from "../../assets/check-light.svg";
import IconCopy from "../../assets/copy-light.svg";
import IconImport from "../../assets/file-import-light.svg";
import IconHex from "../../assets/hexagon.svg";

const Card = ({
  icon,
  headline,
  description,
  button,
  buttonId,
  buttonText,
  onClickOne,
  buttonTwo,
  buttonTwoId,
  buttonTwoText,
  onClickTwo,
  warning,
  warningText,
}) => {
  return (
    <div className={`card ${warning ? "card--warning" : ""}`}>
      {warning && (
        <div className="card__warning-wrapper">
          <div className="card__warning">{warningText}</div>
        </div>
      )}
      <div className="card__icon-container">
        <span className="card__icon-wrapper">
          <div className="card__icon-wrapper--icon">
            <img src={IconHex} is="svg" alt="hexagon icon" />
          </div>
          <div className="card__icon">
            {icon === "check" ? (
              <img src={IconCheck} is="svg" alt="checkmark icon" />
            ) : icon === "copy" ? (
              <img src={IconCopy} is="svg" alt="copy icon" />
            ) : icon === "import" ? (
              <img src={IconImport} is="svg" alt="import icon" />
            ) : (
              ""
            )}
          </div>
        </span>
      </div>
      <div className="card__text-wrapper">
        {headline && <h3 className="card__headline">{headline}</h3>}
        <div className="card__text">{description}</div>
      </div>
      {button && (
        <div className="card__button-wrapper">
            <button
              onClick={onClickOne}
              className="card__button"
              id={buttonId}
              type="button"
            >
              {buttonText}
            </button>
          {buttonTwo && (
            <button
              onClick={onClickTwo}
              className="card__button card__button-two"
              id={buttonTwoId}
              type="button"
            >
              {buttonTwoText}
            </button>
          )}
        </div>
      )}
    </div>
  );
};

Card.propTypes = {
  headline: PropTypes.string,
  description: PropTypes.any,
  icon: PropTypes.oneOf(["check", "copy", "import"]),
  button: PropTypes.bool,
  buttonId: PropTypes.string,
  buttonText: PropTypes.string,
  onClickOne: PropTypes.func,
  buttonTwo: PropTypes.bool,
  buttonTwoId: PropTypes.string,
  buttonTwoText: PropTypes.string,
  onClickTwo: PropTypes.func,
  warning: PropTypes.bool,
  warningText: PropTypes.string,
};

export default Card;
