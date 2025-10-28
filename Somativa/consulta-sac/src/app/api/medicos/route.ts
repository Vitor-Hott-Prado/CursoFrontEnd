// app/api/medicos/route.ts
import { NextRequest, NextResponse } from "next/server";
import { MedicoController } from "@/contorllers/MedicoController";

// POST - Criar médico
export async function POST(req: NextRequest) {
  try {
    const { nome, especialidade } = await req.json();
    const resposta = await MedicoController.criar(nome, especialidade);
    return NextResponse.json(resposta);
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Erro interno" },
      { status: 500 }
    );
  }
}

// GET - Listar médicos
export async function GET() {
  try {
    const resposta = await MedicoController.listar();
    return NextResponse.json(resposta);
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Erro ao buscar médicos" },
      { status: 500 }
    );
  }
}