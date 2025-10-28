"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Header from "@/app/componentes/Header";
import Sidebar from "@/app/componentes/Sidebar";

interface Usuario {
  nome: string;
  funcao: string;
}

export default function DashboardPage() {
  const [usuario, setUsuario] = useState<Usuario | null>(null);
  const [paciente, setPaciente] = useState("");
  const [medico, setMedico] = useState("");
  const [dataConsulta, setDataConsulta] = useState("");
  const [mensagem, setMensagem] = useState("");
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const nome = localStorage.getItem("nome");
    const funcao = localStorage.getItem("funcao");

    if (!token || !nome || !funcao) {
      router.push("/login");
    } else {
      setUsuario({ nome, funcao });
    }
  }, [router]);

  const agendarConsulta = async (e: React.FormEvent) => {
    e.preventDefault();
    setMensagem("");

    try {
      const resposta = await fetch("/api/consultas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ paciente, medico, dataConsulta }),
      });

      const data = await resposta.json();
      if (data.success) {
        setMensagem("Consulta agendada com sucesso!");
        setPaciente("");
        setMedico("");
        setDataConsulta("");
      } else {
        setMensagem("Erro: " + (data.error || "Não foi possível agendar"));
      }
    } catch (error: any) {
      setMensagem("Erro de servidor: " + error.message);
    }
  };

  if (!usuario) return <p>Carregando...</p>;

  return (
    <div>
      <Header />
      <div className="flex min-h-[80vh]">
        <Sidebar funcao={usuario.funcao} />
        <main className="flex-1 p-8">
          <h1 className="text-3xl font-bold">Bem-vindo(a), {usuario.nome}!</h1>

          {usuario.funcao === "recepcionista" && (
            <div className="mt-6">
              <h2>Agendar Consulta</h2>
              {mensagem && <p>{mensagem}</p>}
              <form onSubmit={agendarConsulta} className="flex flex-col gap-4 max-w-md">
                <div>
                  <label>Paciente:</label>
                  <input
                    type="text"
                    value={paciente}
                    onChange={(e) => setPaciente(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label>Médico:</label>
                  <input
                    type="text"
                    value={medico}
                    onChange={(e) => setMedico(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label>Data da Consulta:</label>
                  <input
                    type="date"
                    value={dataConsulta}
                    onChange={(e) => setDataConsulta(e.target.value)}
                    required
                  />
                </div>
                <button type="submit">Agendar</button>
              </form>
            </div>
          )}

          {usuario.funcao === "medico" && (
            <div className="mt-6">
              <h2>Menu do Médico</h2>
              <ul>
                <li>Veja sua agenda de consultas pelo menu lateral.</li>
              </ul>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
