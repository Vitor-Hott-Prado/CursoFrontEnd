"use client";

import { useState } from "react";

interface MedicoFormProps {
  onSuccess?: () => void;
}

export default function MedicoForm({ onSuccess }: MedicoFormProps) {
  const [nome, setNome] = useState("");
  const [especialidade, setEspecialidade] = useState("");
  const [erro, setErro] = useState("");
  const [sucesso, setSucesso] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErro("");
    setSucesso("");

    try {
      const resposta = await fetch("/api/medicos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, especialidade }),
      });

      const data = await resposta.json();

      if (data.success) {
        setSucesso("Médico cadastrado com sucesso!");
        setNome("");
        setEspecialidade("");
        if (onSuccess) onSuccess();
      } else {
        setErro(data.error || "Erro ao cadastrar médico");
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
        <label>Nome:</label>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Especialidade:</label>
        <input
          type="text"
          value={especialidade}
          onChange={(e) => setEspecialidade(e.target.value)}
          required
        />
      </div>

      <button type="submit">Cadastrar Médico</button>
    </form>
  );
}
