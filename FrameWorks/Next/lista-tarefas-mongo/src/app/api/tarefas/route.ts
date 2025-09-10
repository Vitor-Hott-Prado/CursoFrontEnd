

// Criar as router que nao precie de ID

import { createTarefa, getAllTarefas } from "@/controllers/tarefaController";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    try {
        const tarefa = await getAllTarefas();
        //trta a respota obtida da conexão com o MongoDB
        return NextResponse.json({sucess:true, data:tarefa});
    } catch (error) {
        return NextResponse.json({
            success:false,
            error: `Falha ao Buscar As Tarefas: ${error}`
        }, {status:500});
    }
}

export async function POST(req: NextRequest) {
    try {
        const data = await req.json(); //verificar se o conteudo esta em Json 
        const newTarefa = await createTarefa
        return NextResponse.json({sucesss:true, data: newTarefa}, {status:201})
    } catch (error) {
        return NextResponse.json({
            sucess:false,
            error: `Falha ao Criar A Tarefas: ${error}`
        },{status:400})
        
    }
}
