"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErro("");

    try {
      const resposta = await fetch("/api/usuarios/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, senha }),
      });

      const data = await resposta.json();

      if (data.success) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("funcao", data.usuario.funcao);
        localStorage.setItem("nome", data.usuario.nome);
        router.push("/dashboard");
      } else {
        setErro(data.error || "Falha no login");
      }
    } catch (error: any) {
      setErro("Erro de servidor: " + error.message);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900 text-gray-100">
      <form className="flex flex-col gap-6 bg-gray-800 p-10 rounded-xl shadow-lg w-96" onSubmit={handleLogin}>
        <h2 className="text-3xl font-bold text-center">Login</h2>

        {erro && <p className="text-red-500 text-center">{erro}</p>}

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
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition-colors"
        >
          Entrar
        </button>

        <p className="text-center text-gray-300">
          Não tem uma conta?{" "}
          <span
            onClick={() => router.push("/register")}
            className="text-blue-500 hover:underline cursor-pointer"
          >
            Registre-se
          </span>
        </p>
      </form>
    </div>
  );
}
