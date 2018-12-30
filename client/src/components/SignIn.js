import React from "react";

import "../App.css";

export default function SignIn(props) {
  return (
    <div className="SignIn">
      <h3> Hola como estas? es bueno verte de nuevo! </h3>
      <br />
      <br />
      <input className="Input1" placeholder="Email" />
      <br />
      <br />
      <input className="Input2" placeholder="Contraseña" />
      <br />
      <br />
      <button className="buttonLogIn">Ingresar</button>
    </div>
  );
}
