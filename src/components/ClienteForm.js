// src/components/ClienteForm.js
import React, { useState } from "react";
import axiosInstance from "../axiosInstance";

const ClienteForm = ({ refreshClientes }) => {
  const [nombres, setNombres] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [dni, setDni] = useState("");
  const [direccion, setDireccion] = useState("");
  const [telefono, setTelefono] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newCliente = {
      nombres,
      apellidos,
      dni,
      direccion,
      telefono,
    };

    try {
      await axiosInstance.post("/", newCliente);
      refreshClientes(); // Para refrescar la lista después de agregar
      setNombres("");
      setApellidos("");
      setDni("");
      setDireccion("");
      setTelefono("");
    } catch (error) {
      console.error("Error al agregar cliente", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full p-8 gap-5">
      <div className="flex flex-col gap-3 mt-3">
        <label className="text-left">Nombres: <span className="text-red-600 font-bold"> * </span> </label>
        <input className = "p-2 border border-gray-900 "
          type="text"
          value={nombres}
          onChange={(e) => setNombres(e.target.value)}
          required
        />
      </div>
      <div className="flex flex-col gap-3 mt-3">
        <label className="text-left">Apellidos: <span className="text-red-600 font-bold"> * </span> </label>
        <input className = "p-2 border border-gray-900 "
          type="text"
          value={apellidos}
          onChange={(e) => setApellidos(e.target.value)}
          
        />
      </div>
      <div className="flex flex-col gap-3 mt-3">
        <label className="text-left">DNI: <span className="text-red-600 font-bold"> * </span> </label>
        <input className = "p-2 border border-gray-900 "
          type="text"
          value={dni}
          onChange={(e) => setDni(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-3 mt-3">
        <label className="text-left">Dirección: <span className="text-red-600 font-bold"> * </span> </label>
        <input className = "p-2 border border-gray-900 "
          type="text"
          value={direccion}
          onChange={(e) => setDireccion(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-3 mt-3">
        <label className="text-left">Teléfono : <span className="text-red-600 font-bold"> * </span> </label>
        <input className = "p-2 border border-gray-900 "
          type="text"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
        />
      </div>
      <button type="submit" className="bg-blue-400 px-6 py-4 rounded-3xl text-white my-4">Agregar Cliente</button>
    </form>
  );
};

export default ClienteForm;
