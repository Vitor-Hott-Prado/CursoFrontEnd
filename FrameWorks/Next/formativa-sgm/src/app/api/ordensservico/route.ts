// rotas de requisição api que não usa ID (GET / POST)

import { createOrdemServico, getAllOrdemServico, getOneOrdemServico } from "@/controllers/OrdemServicoController";
import Usuario from "@/models/Usuario";
import { NextResponse } from "next/server";

import OrdemServico from "@/models/OrdemServico";


//GET - Ordem Servico
export async function GE(){
    try {
        const ordemServico = await getAllOrdemServico();
        return NextResponse.json({success:true, data: Usuario});
    } catch (error) {
        return NextResponse.json({success:false, error:error})
    }
}

// POST - Ordem Servico

export async function POST(req:NextResponse) {
    try {
        const data = await req.json();
        const novaOrdemServico  = await createOrdemServico(data);
        return NextResponse.json({success:true, data:novaOrdemServico})
    } catch (error) {
        return NextResponse.json({success:false, error:error})
        }
}