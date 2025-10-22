// ...existing code...
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

  if (!usuario) return <p>Carregando...</p>;

  return (
    <div>
      <Header />
      <div className="flex min-h-[80vh]">
        <Sidebar funcao={usuario.funcao} />
        <main className="flex-1 p-8">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p>Bem-vindo(a), {usuario.nome}!</p>

          {usuario.funcao === "recepcionista" && (
            <div>
              <h2>Menu da Recepcionista</h2>
              <ul>
                <li>Acesse Pacientes, Médicos e Consultas pelo menu lateral.</li>
              </ul>
            </div>
          )}

          {usuario.funcao === "medico" && (
            <div>
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
// ...existing code...