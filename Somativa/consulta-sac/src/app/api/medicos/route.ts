import { NextRequest, NextResponse } from "next/server";
import { MedicoController } from "@/contorllers/MedicoController";

export async function POST(req: NextRequest) {
  const { nome, especialidade } = await req.json();
  const resposta = MedicoController.criar(nome, especialidade);
  return NextResponse.json(resposta);
}

export async function GET() {
  const resposta = MedicoController.listar();
  return NextResponse.json(resposta);
}
