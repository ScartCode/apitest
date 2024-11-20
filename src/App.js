// src/App.js
import React, { useState } from "react";
import './index.css';

import ClienteForm from "./components/ClienteForm";
import ClienteList from "./components/ClienteList";

const App = () => {
  const [clientesActualizados, setClientesActualizados] = useState(false);

  const refreshClientes = () => {
    setClientesActualizados(!clientesActualizados);
  };

  return (
    <div className="w-full text-center flex justify-center items-center flex-col gap-3">
      <h1 class="text-3xl" >Registrar Nuevos Clientes</h1>
      <ClienteList refreshClientes={refreshClientes} />
      <ClienteForm refreshClientes={refreshClientes} />
    </div>
  );
};

export default App;
