import { NextRequest, NextResponse } from "next/server";
import { UsuarioController } from "@/contorllers/UsuarioController";

export async function POST(req: NextRequest) {
  try {
    const { email, senha } = await req.json();
    const usuario = await UsuarioController.autenticar(email, senha);

    if (!usuario) {
      return NextResponse.json({ success: false, error: "Usuário ou senha inválidos" });
    }

    // Transformar em JSON simples
    const usuarioJson = {
      id: usuario._id,
      nome: usuario.nome,
      email: usuario.email,
      funcao: usuario.funcao
    };

    return NextResponse.json({ success: true, usuario: usuarioJson, token: "mock-token" });

  } catch (err: any) {
    // Retorna erro caso algo dê errado
    return NextResponse.json({ success: false, error: err.message });
  }
}
