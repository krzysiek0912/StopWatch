import React from "react";

function Controls(props) {
  return (
    <nav className="controls">
      <button
        className="btn btn-success"
        onClick={props.handlerStart}
        id="start"
      >
        Start
      </button>
      <button
        className="btn btn-danger"
        onClick={props.handlerReset}
        id="reset"
      >
        Reset
      </button>
      <button className="btn btn-warning" onClick={props.handlerStop} id="stop">
        Stop
      </button>
      <br />
      <button
        className="btn btn-primary"
        onClick={props.handlerAddResult}
        id="result"
      >
        Międzyczas
      </button>
      <button
        className="btn btn-danger"
        onClick={props.handlerResetResultList}
        id="resetResultList"
      >
        Reset czasów
      </button>
    </nav>
  );
}

export default Controls;
