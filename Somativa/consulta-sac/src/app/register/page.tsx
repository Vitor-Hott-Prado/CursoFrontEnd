"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RegisterPage() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [telefone, setTelefone] = useState(""); // ⚡ novo campo
  const [erro, setErro] = useState("");
  const [sucesso, setSucesso] = useState("");
  const router = useRouter();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setErro("");
    setSucesso("");

    try {
      const resposta = await fetch("/api/pacientes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, email, senha, telefone }), // ⚡ enviar telefone
      });

      const data = await resposta.json();

      if (data.success) {
        setSucesso("Cadastro realizado com sucesso! Redirecionando para login...");
        setTimeout(() => router.push("/login"), 2000);
      } else {
        setErro(data.error || "Falha no cadastro");
      }
    } catch (error: any) {
      setErro("Erro de servidor: " + error.message);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900 text-gray-100">
      <form
        className="flex flex-col gap-6 bg-gray-800 p-10 rounded-xl shadow-lg w-96"
        onSubmit={handleRegister}
      >
        <h2 className="text-3xl font-bold text-center">Registro Paciente</h2>

        {erro && <p className="text-red-500 text-center">{erro}</p>}
        {sucesso && <p className="text-green-500 text-center">{sucesso}</p>}

        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
          className="px-3 py-2 rounded bg-gray-700 border border-gray-600"
        />

        <input
          type="text"
          placeholder="Telefone"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
          required
          className="px-3 py-2 rounded bg-gray-700 border border-gray-600"
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="px-3 py-2 rounded bg-gray-700 border border-gray-600"
        />

        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
          className="px-3 py-2 rounded bg-gray-700 border border-gray-600"
        />

        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded transition-colors"
        >
          Registrar
        </button>

        <p className="text-center text-gray-300">
          Já tem uma conta?{" "}
          <span
            onClick={() => router.push("/login")}
            className="text-blue-500 hover:underline cursor-pointer"
          >
            Faça login
          </span>
        </p>
      </form>
    </div>
  );
}
