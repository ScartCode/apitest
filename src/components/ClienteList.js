// src/components/ClienteList.js
import React, { useEffect, useState } from "react";
import axiosInstance from "../axiosInstance";

const ClienteList = ({ refreshClientes }) => {
  const [clientes, setClientes] = useState([]);

  const fetchClientes = async () => {
    try {
      const response = await axiosInstance.get("/");
      setClientes(response.data);
    } catch (error) {
      console.error("Error al obtener los clientes", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axiosInstance.delete(`/${id}`);
      refreshClientes(); // Refresca la lista después de eliminar
    } catch (error) {
      console.error("Error al eliminar cliente", error);
    }
  };

  useEffect(() => {
    fetchClientes();
  }, []);

  return (
    <div>
      <h3>Lista de Clientes</h3>
      <ul>
        {clientes.map((cliente) => (
          <li key={cliente.dni}>
            {cliente.nombres} {cliente.apellidos} - {cliente.dni}
            <button onClick={() => handleDelete(cliente.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClienteList;
