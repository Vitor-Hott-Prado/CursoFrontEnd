import { NextRequest, NextResponse } from "next/server";
import { ConsultaController } from "@/contorllers/ConsultaController";

export async function POST(req: NextRequest) {
  const { pacienteId, medicoId, data, hora } = await req.json();

  const resposta = await ConsultaController.agendar(pacienteId, medicoId, data, hora);

  return NextResponse.json(resposta);
}

export async function GET() {
  const resposta = await ConsultaController.listarTodas();
  return NextResponse.json(resposta);
}
