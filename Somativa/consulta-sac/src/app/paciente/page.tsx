"use client";

import { useEffect, useState } from "react";
import PacienteForm from "./PacienteForm";

interface Paciente {
  _id: string;
  nome: string;
  telefone: string;
}

export default function PacientesPage() {
  const [pacientes, setPacientes] = useState<Paciente[]>([]);

  const fetchPacientes = async () => {
    try {
      const resposta = await fetch("/api/pacientes");
      const data = await resposta.json();
      if (data.success) {
        setPacientes(data.data);
      }
    } catch (error) {
      console.error("Erro ao buscar pacientes:", error);
    }
  };

  useEffect(() => {
    fetchPacientes();
  }, []);

  return (
    <div className="center">
      <h1>Pacientes</h1>

      <PacienteForm onSuccess={fetchPacientes} />

      <h2>Lista de Pacientes</h2>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Telefone</th>
          </tr>
        </thead>
        <tbody>
          {pacientes.map((p) => (
            <tr key={p._id}>
              <td>{p.nome}</td>
              <td>{p.telefone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
