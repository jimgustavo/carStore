import React from "react";

import "../App.css";

export default function SignUp(props) {
  return (
    <div className="SignUp">
      <h2> Bienvenido a CarStore, registrate porfavor: </h2>
      <form>
        <label>Name address</label>
        <br />
        <input className="Input3" placeholder="Usuario" />
        <br />
        <br />
        <input className="Input4" placeholder="Email" />
        <br />
        <br />
        <input className="Input5" placeholder="Contraseña" />
        <br />
        <br />
        <button>Registrar</button>
      </form>
    </div>
  );
}
