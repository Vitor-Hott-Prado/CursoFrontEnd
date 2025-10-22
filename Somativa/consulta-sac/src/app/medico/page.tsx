"use client";

import { useEffect, useState } from "react";
import MedicoForm from "./MedicoForm";

interface Medico {
  _id: string;
  nome: string;
  especialidade: string;
}

export default function MedicosPage() {
  const [medicos, setMedicos] = useState<Medico[]>([]);

  const fetchMedicos = async () => {
    try {
      const resposta = await fetch("/api/medicos");
      const data = await resposta.json();
      if (data.success) {
        setMedicos(data.data);
      }
    } catch (error) {
      console.error("Erro ao buscar médicos:", error);
    }
  };

  useEffect(() => {
    fetchMedicos();
  }, []);

  return (
    <div className="center">
      <h1>Médicos</h1>

      <MedicoForm onSuccess={fetchMedicos} />

      <h2>Lista de Médicos</h2>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Especialidade</th>
          </tr>
        </thead>
        <tbody>
          {medicos.map((m) => (
            <tr key={m._id}>
              <td>{m.nome}</td>
              <td>{m.especialidade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
