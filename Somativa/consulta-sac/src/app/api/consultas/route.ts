// app/api/consultas/route.ts
import { NextRequest, NextResponse } from "next/server";
import { ConsultaController } from "@/contorllers/ConsultaController"; // ✅ CORRIGI O TYPO

export async function POST(req: NextRequest) {
  try {
    const { pacienteId, medicoId, data, hora } = await req.json();

    // Validação básica
    if (!pacienteId || !medicoId || !data || !hora) {
      return NextResponse.json(
        { success: false, error: "Todos os campos são obrigatórios" },
        { status: 400 }
      );
    }

    const resposta = await ConsultaController.criar(pacienteId, medicoId, data, hora); // ✅ Mudei para 'criar'

    return NextResponse.json(resposta);
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const resposta = await ConsultaController.listar(); // ✅ Mudei para 'listar'
    return NextResponse.json(resposta);
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Erro ao buscar consultas" },
      { status: 500 }
    );
  }
}