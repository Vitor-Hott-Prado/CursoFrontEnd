"use client";

import { useEffect, useState } from "react";
import ConsultaForm from "./ConsutlaForm";

interface Consulta {
  _id: string;
  paciente: any;
  medico: any;
  data: string;
  hora: string;
  status: string;
}

export default function ConsultasPage() {
  const [consultas, setConsultas] = useState<Consulta[]>([]);

  const fetchConsultas = async () => {
    try {
      const resposta = await fetch("/api/consultas");
      const data = await resposta.json();
      if (data.success) {
        setConsultas(data.data);
      }
    } catch (error) {
      console.error("Erro ao buscar consultas:", error);
    }
  };

  useEffect(() => {
    fetchConsultas();
  }, []);

  return (
    <div className="center">
      <h1>Consultas</h1>

      <ConsultaForm onSuccess={fetchConsultas} />

      <h2>Lista de Consultas</h2>
      <table>
        <thead>
          <tr>
            <th>Paciente</th>
            <th>Médico</th>
            <th>Data</th>
            <th>Hora</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {consultas.map((c) => (
            <tr key={c._id}>
              <td>{c.paciente?.nome || c.paciente}</td>
              <td>{c.medico?.nome || c.medico}</td>
              <td>{new Date(c.data).toLocaleDateString()}</td>
              <td>{c.hora}</td>
              <td>{c.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
