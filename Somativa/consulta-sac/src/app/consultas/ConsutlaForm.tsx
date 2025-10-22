"use client";

import { useState } from "react";

interface ConsultaFormProps {
  onSuccess?: () => void;
}

export default function ConsultaForm({ onSuccess }: ConsultaFormProps) {
  const [pacienteId, setPacienteId] = useState("");
  const [medicoId, setMedicoId] = useState("");
  const [data, setData] = useState("");
  const [hora, setHora] = useState("");
  const [erro, setErro] = useState("");
  const [sucesso, setSucesso] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErro("");
    setSucesso("");

    try {
      const resposta = await fetch("/api/consultas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pacienteId, medicoId, data, hora }),
      });

      const dataResp = await resposta.json();

      if (dataResp.success) {
        setSucesso("Consulta agendada com sucesso!");
        if (onSuccess) onSuccess();
      } else {
        setErro(dataResp.error || "Erro ao agendar consulta");
      }
    } catch (error: any) {
      console.error(error);
      setErro("Erro de servidor: " + error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {erro && <p style={{ color: "red" }}>{erro}</p>}
      {sucesso && <p style={{ color: "green" }}>{sucesso}</p>}

      <div>
        <label>Paciente ID:</label>
        <input
          type="text"
          value={pacienteId}
          onChange={(e) => setPacienteId(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Médico ID:</label>
        <input
          type="text"
          value={medicoId}
          onChange={(e) => setMedicoId(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Data:</label>
        <input
          type="date"
          value={data}
          onChange={(e) => setData(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Hora:</label>
        <input
          type="time"
          value={hora}
          onChange={(e) => setHora(e.target.value)}
          required
        />
      </div>

      <button type="submit">Agendar Consulta</button>
    </form>
  );
}
