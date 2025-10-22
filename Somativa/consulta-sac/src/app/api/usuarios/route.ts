import { NextRequest, NextResponse } from "next/server";
import connectMongo from "@/services/mongodb";
import Usuario from "@/models/Usuario";

export async function POST(req: NextRequest) {
  try {
    await connectMongo();
    const { nome, email, senha, funcao } = await req.json();

    const existe = await Usuario.findOne({ email });
    if (existe) {
      return NextResponse.json({ success: false, error: "Email já cadastrado" });
    }

    const novoUsuario = new Usuario({ nome, email, senha, funcao });
    await novoUsuario.save();

    return NextResponse.json({ success: true, usuario: novoUsuario });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message });
  }
}
